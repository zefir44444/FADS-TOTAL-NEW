"use client";

import React, { FormEvent, useState, useEffect, useRef } from "react";
import Link from "next/link";

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

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!privacyAccepted) {
            highlightCheckbox();
            return;
        }
        
        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            console.log("Sending form...", { ...formData, source });
            
            // Отправляем данные через наш API
            let res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({ 
                    ...formData,
                    source
                }),
                headers: { "Content-Type": "application/json" },
            });

            // Если получаем ошибку конфликта (409), используем прямой API для HubSpot
            if (res.status === 409) {
                console.log("Received conflict error, trying direct HubSpot API...");
                
                // Отправляем данные через прямой API для HubSpot
                res = await fetch("/api/hubspot-direct", {
                    method: "POST",
                    body: JSON.stringify({ 
                        ...formData,
                        source
                    }),
                    headers: { "Content-Type": "application/json" },
                });
            }

            // Проверяем статус ответа перед попыткой разобрать JSON
            if (!res.ok) {
                const errorText = await res.text();
                console.error("Server error response:", errorText);
                throw new Error(`Failed to send message: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            console.log("Server response:", data);

            if (!data.success) {
                throw new Error(data.error || data.message || "Failed to send message");
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
        } catch (err) {
            console.error("Form submission error:", err);
            setError(err instanceof Error ? err.message : "Something went wrong");
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