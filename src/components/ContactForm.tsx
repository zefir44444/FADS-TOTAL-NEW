"use client";

import React, { FormEvent, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

interface ContactFormProps {
    onSuccess?: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [source, setSource] = useState("website");
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [isCheckboxBlinking, setIsCheckboxBlinking] = useState(false);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const [mounted, setMounted] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    // Предотвращаем гидратацию
    useEffect(() => {
        setMounted(true);
    }, []);

    // Получаем параметр source из URL, если он есть
    useEffect(() => {
        if (!mounted) return;
        
        const urlParams = new URLSearchParams(window.location.search);
        const sourceParam = urlParams.get('source');
        if (sourceParam) {
            setSource(sourceParam);
        }
    }, [mounted]);

    // Обработчик изменения полей формы
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            // Очищаем предыдущую ошибку при изменении
            setPhoneError("");
            
            // Пропускаем пустое значение, так как телефон опционален
            if (!value) {
                setFormData(prev => ({ ...prev, phone: "" }));
                return;
            }

            try {
                // Пытаемся распарсить номер телефона
                // Если код страны не указан, предполагаем Финляндию
                const phoneNumber = parsePhoneNumber(value, 'FI');
                
                if (phoneNumber) {
                    // Проверяем валидность номера
                    if (isValidPhoneNumber(phoneNumber.number)) {
                        // Сохраняем в международном формате
                        setFormData(prev => ({
                            ...prev,
                            phone: phoneNumber.format('INTERNATIONAL')
                        }));
                    } else {
                        setPhoneError("Please enter a valid phone number");
                    }
                }
            } catch (_error) {
                // Сохраняем введенное значение, но показываем ошибку
                setFormData(prev => ({ ...prev, phone: value }));
                setPhoneError("Please enter a valid phone number");
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Функция для подсветки чекбокса
    const highlightCheckbox = () => {
        if (!privacyAccepted) {
            setIsCheckboxBlinking(true);
            setTimeout(() => setIsCheckboxBlinking(false), 2000);
            checkboxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setError("You must accept the Privacy Policy to submit the form");
        }
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!privacyAccepted) {
            highlightCheckbox();
            return;
        }

        // Дополнительная проверка телефона перед отправкой
        if (formData.phone) {
            try {
                const phoneNumber = parsePhoneNumber(formData.phone, 'FI');
                if (!phoneNumber || !isValidPhoneNumber(phoneNumber.number)) {
                    setPhoneError("Please enter a valid phone number");
                    return;
                }
            } catch (_error) {
                setPhoneError("Please enter a valid phone number");
                return;
            }
        }
        
        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            console.log("Sending contact form...", { ...formData, source });
            
            try {
                // Отправляем данные через наш API
                const res = await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify({ 
                        ...formData,
                        source
                    }),
                    headers: { "Content-Type": "application/json" },
                });
                
                console.log("Contact API response status:", res.status, res.statusText);
                
                // Получаем текст ответа для лучшей диагностики
                const responseText = await res.text();
                console.log("Response text:", responseText);
                
                // Пытаемся преобразовать текст в JSON
                let data;
                try {
                    data = JSON.parse(responseText);
                    console.log("Parsed response data:", data);
                } catch (jsonError) {
                    console.error("Error parsing JSON response:", jsonError);
                    throw new Error(`Неверный формат ответа от сервера: ${responseText}`);
                }

                // Если получаем ошибку конфликта (409), используем прямой API для HubSpot
                if (res.status === 409) {
                    console.log("Received conflict error, trying direct HubSpot API...");
                    
                    // Отправляем данные через прямой API для HubSpot
                    const directRes = await fetch("/api/hubspot-direct", {
                        method: "POST",
                        body: JSON.stringify({ 
                            ...formData,
                            source
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                    
                    console.log("Direct HubSpot API response status:", directRes.status, directRes.statusText);
                    
                    // Получаем текст ответа
                    const directText = await directRes.text();
                    console.log("Direct API response text:", directText);
                    
                    // Пытаемся преобразовать текст в JSON
                    try {
                        data = JSON.parse(directText);
                        console.log("Parsed direct response data:", data);
                    } catch (jsonError) {
                        console.error("Error parsing direct JSON response:", jsonError);
                        throw new Error(`Неверный формат ответа от прямого API: ${directText}`);
                    }
                    
                    // Проверяем статус
                    if (!directRes.ok) {
                        throw new Error(`Failed to send contact form via direct API: ${directRes.status} ${directRes.statusText}. Details: ${JSON.stringify(data)}`);
                    }
                } else if (!res.ok) {
                    throw new Error(`Failed to send contact form: ${res.status} ${res.statusText}. Details: ${JSON.stringify(data)}`);
                }

                if (!data.success) {
                    throw new Error(data.error || data.message || "Failed to send message");
                }

                // Отправляем данные в Telegram
                try {
                    console.log("Sending data to Telegram...");
                    const telegramRes = await fetch("/api/telegram", {
                        method: "POST",
                        body: JSON.stringify({
                            ...formData,
                            source,
                            formType: "Contact Form"
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                    
                    const telegramData = await telegramRes.json();
                    console.log("Telegram API response:", telegramData);
                    
                    if (!telegramRes.ok) {
                        console.error("Error sending to Telegram:", telegramData.error);
                        // Не прерываем выполнение, если отправка в Telegram не удалась
                    }
                } catch (telegramError) {
                    console.error("Error sending to Telegram:", telegramError);
                    // Не прерываем выполнение, если отправка в Telegram не удалась
                }

                setSuccess(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
                onSuccess?.();
            } catch (fetchError) {
                console.error("Error during fetch operation:", fetchError);
                throw fetchError;
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setError(err instanceof Error ? err.message : "Something went wrong");
        }

        setLoading(false);
    };

    // Если компонент не смонтирован, возвращаем пустой скелет формы
    if (!mounted) {
        return (
            <div className="w-full flex flex-col gap-4 transition-all duration-300 ease-out bg-white p-6 rounded-lg min-h-[600px]">
                <div className="mb-4">
                    <div className="h-7 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-12 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="h-12 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
                <div className="h-12 bg-gray-200 rounded w-1/3 mt-2"></div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4 transition-all duration-300 ease-out bg-white p-6 rounded-lg min-h-[600px]" autoComplete="on">
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                    Get in touch with us
                </h3>
                <p className="text-sm opacity-80 text-black">Fill out the form and we&apos;ll get back to you soon</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form__group">
                    <input
                        className="form__field"
                        value={formData.firstName}
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        autoComplete="given-name"
                        required
                        id="firstName"
                    />
                    <label htmlFor="firstName" className="form__label">First Name</label>
                </div>
                <div className="form__group">
                    <input
                        className="form__field"
                        value={formData.lastName}
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        required
                        id="lastName"
                    />
                    <label htmlFor="lastName" className="form__label">Last Name</label>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form__group">
                    <input
                        className="form__field"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        autoComplete="email"
                        required
                        id="email"
                    />
                    <label htmlFor="email" className="form__label">Your Email</label>
                </div>
                <div className="form__group">
                    <input
                        className={`form__field ${phoneError ? 'border-red-500' : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        name="phone"
                        placeholder="Your Phone (optional)"
                        autoComplete="tel"
                        id="phone"
                    />
                    <label htmlFor="phone" className="form__label">Your Phone (optional)</label>
                    {phoneError && (
                        <div className="absolute -bottom-6 left-0 text-red-500 text-sm">
                            {phoneError}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="form__group">
                <input
                    className="form__field"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    id="subject"
                />
                <label htmlFor="subject" className="form__label">Subject</label>
            </div>
            
            <div className="form__group">
                <textarea
                    className="form__field h-32 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    name="message"
                    autoComplete="off"
                    required
                    id="message"
                />
                <label htmlFor="message" className="form__label">Your Message</label>
            </div>
            
            {/* Скрытое поле для источника обращения */}
            <input type="hidden" name="source" value={source} />
            
            <div className={`flex items-start gap-2 mt-1 ${isCheckboxBlinking ? 'animate-pulse' : ''}`}>
                <div className="checkbox-wrapper-46">
                    <input
                        ref={checkboxRef}
                        type="checkbox"
                        id="privacy"
                        checked={privacyAccepted}
                        onChange={() => {
                            setPrivacyAccepted(!privacyAccepted);
                            setError("");
                        }}
                        className="inp-cbx"
                    />
                    <label htmlFor="privacy" className="cbx">
                        <span>
                            <svg width="12px" height="10px">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                        </span>
                        <span className={`text-xs ${isCheckboxBlinking ? 'text-red-500 font-semibold' : 'text-black'}`}>
                            I agree to the processing of my personal data in accordance with the{" "}
                            <Link 
                                href="/privacy" 
                                className="font-semibold relative text-[#840032] hover:text-[#e59500] transition-colors duration-300 no-underline"
                                target="_blank"
                            >
                                Privacy Policy
                            </Link>
                        </span>
                    </label>
                </div>
            </div>
            
            {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}
            
            <button
                type="submit"
                disabled={loading}
                className={`mt-2 py-3 px-6 rounded-md font-medium transition-all duration-300 ease-out bg-[#e59500] text-white hover:bg-[#d48700] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
            
            {success && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
            )}
        </form>
    );
};

export default ContactForm; 