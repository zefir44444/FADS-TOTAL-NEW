"use client";

import React, { FormEvent, useState, useEffect, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
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
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const [mounted, setMounted] = useState(false);

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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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

    // Обработчик изменения reCAPTCHA
    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    // Сброс reCAPTCHA при ошибке
    const resetRecaptcha = () => {
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!privacyAccepted) {
            highlightCheckbox();
            return;
        }

        if (!recaptchaToken) {
            setError("Please complete the reCAPTCHA verification");
            return;
        }
        
        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            console.log("Sending contact form...", { ...formData, source, recaptchaToken });
            
            try {
                // Отправляем данные через наш API
                const res = await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify({ 
                        ...formData,
                        source,
                        recaptchaToken
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

                // Проверяем результат reCAPTCHA
                if (data.recaptchaFailed) {
                    throw new Error("reCAPTCHA verification failed. Please try again.");
                }

                // Если получаем ошибку конфликта (409), используем прямой API для HubSpot
                if (res.status === 409) {
                    console.log("Received conflict error, trying direct HubSpot API...");
                    
                    // Отправляем данные через прямой API для HubSpot
                    const directRes = await fetch("/api/hubspot-direct", {
                        method: "POST",
                        body: JSON.stringify({ 
                            ...formData,
                            source,
                            recaptchaToken
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
                resetRecaptcha();
            } catch (fetchError) {
                console.error("Error during fetch operation:", fetchError);
                resetRecaptcha();
                throw fetchError;
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setError(err instanceof Error ? err.message : "Something went wrong");
            resetRecaptcha();
        }

        setLoading(false);
    };

    // Если компонент не смонтирован, возвращаем null
    if (!mounted) {
        return null;
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4 transition-all duration-300 ease-out bg-white p-6 rounded-lg" autoComplete="on">
            <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 text-black">
                    Get in touch with us
                </h3>
                <p className="text-sm opacity-80 text-black">Fill out the form and we&apos;ll get back to you soon</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="given-name"
                    required
                />
                <input
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    required
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    required
                />
                <input
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (optional)"
                    autoComplete="tel"
                />
            </div>
            
            <input
                className="p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                name="subject"
                placeholder="Subject"
                required
            />
            
            <textarea
                className="p-3 border rounded-md focus:outline-none focus:ring-2 h-32 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                name="message"
                autoComplete="off"
                required
            />
            
            {/* Скрытое поле для источника обращения */}
            <input type="hidden" name="source" value={source} />
            
            <div className={`flex items-start gap-2 mt-1 ${isCheckboxBlinking ? 'animate-pulse' : ''}`}>
                <input
                    ref={checkboxRef}
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={() => {
                        setPrivacyAccepted(!privacyAccepted);
                        setError("");
                    }}
                    className={`mt-1 h-4 w-4 cursor-pointer transition-all duration-300 ease-out accent-black ${isCheckboxBlinking ? 'checkbox-blink' : ''}`}
                />
                <label htmlFor="privacy" className={`text-xs cursor-pointer text-black ${isCheckboxBlinking ? 'text-red-500 font-semibold' : ''}`}>
                    I agree to the processing of my personal data in accordance with the{" "}
                    <Link 
                        href="/privacy" 
                        className="font-semibold relative text-[#840032] hover:text-[#e59500] transition-colors duration-300 no-underline"
                        target="_blank"
                    >
                        Privacy Policy
                    </Link>
                </label>
            </div>

            {/* Google reCAPTCHA */}
            <div className="mt-4">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={handleRecaptchaChange}
                    size="normal"
                />
            </div>
            
            {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                    {error}
                </div>
            )}
            
            <button
                type="submit"
                disabled={loading || !recaptchaToken}
                className={`mt-2 py-3 px-6 rounded-md font-medium transition-all duration-300 ease-out bg-[#e59500] text-white hover:bg-[#d48700] ${(loading || !recaptchaToken) ? "opacity-70 cursor-not-allowed" : ""}`}
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