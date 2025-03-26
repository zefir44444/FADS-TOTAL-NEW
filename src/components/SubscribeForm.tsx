"use client";

import React, { FormEvent, useState, useRef, useEffect } from "react";
import Link from "next/link";

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    consent: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const highlightCheckbox = () => {
    if (!formData.consent) {
      checkboxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setError("You must accept the Privacy Policy to subscribe");
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      setError("Please enter your email");
      return;
    }
    
    if (!formData.consent) {
      setError("Please agree to the privacy policy");
      highlightCheckbox();
      return;
    }
    
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      if (typeof window !== 'undefined') {
        console.log("Sending newsletter subscription...", formData);
        
        try {
          const res = await fetch("/api/newsletter", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
          });

          console.log("Newsletter API response status:", res.status, res.statusText);
          
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
                source: "newsletter"
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
              throw new Error(`Failed to subscribe via direct API: ${directRes.status} ${directRes.statusText}. Details: ${JSON.stringify(data)}`);
            }
          } else if (!res.ok) {
            throw new Error(`Failed to subscribe: ${res.status} ${res.statusText}. Details: ${JSON.stringify(data)}`);
          }

          if (!data.success) {
            throw new Error(data.error || "Failed to subscribe");
          }

          // Отправляем данные в Telegram
          try {
            console.log("Sending newsletter subscription to Telegram...");
            const telegramRes = await fetch("/api/telegram", {
              method: "POST",
              body: JSON.stringify({
                ...formData,
                formType: "Newsletter Subscription",
                source: "newsletter",
                message: `Подписка на новостную рассылку от ${formData.email}`
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

          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            consent: false
          });
          setSuccess(true);
        } catch (fetchError) {
          console.error("Error during fetch operation:", fetchError);
          throw fetchError;
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-xl md:text-2xl font-bold mb-3 gradient-text">Subscribe to our newsletter</h3>
      <p className="text-sm mb-4">
        Get the latest news and updates directly to your inbox
      </p>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form__group w-full">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              className="form__field w-full"
              required
              id="subscribe-firstName"
            />
            <label htmlFor="subscribe-firstName" className="form__label">First Name</label>
          </div>
          
          <div className="form__group w-full">
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              className="form__field w-full"
              required
              id="subscribe-lastName"
            />
            <label htmlFor="subscribe-lastName" className="form__label">Last Name</label>
          </div>
        </div>
        
        <div className="form__group w-full">
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="form__field w-full"
            required
            id="subscribe-email"
          />
          <label htmlFor="subscribe-email" className="form__label">Your Email</label>
        </div>
        
        <div className="flex items-start gap-2">
          <div className="checkbox-wrapper-46">
            <input
              type="checkbox"
              id="privacy-policy"
              ref={checkboxRef}
              checked={formData.consent}
              onChange={handleChange}
              name="consent"
              className="inp-cbx"
              required
            />
            <label htmlFor="privacy-policy" className="cbx flex items-center">
              <span className="flex-shrink-0">
                <svg width="12px" height="10px">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span className="text-xs leading-tight">
                I agree to the processing of my personal data in accordance with the{" "}
                <Link href="/privacy" className="text-[#863800] font-semibold hover:text-[#e59500] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#e59500] to-[#d48700] text-white font-medium py-2 px-4 rounded-md hover:shadow-lg transition-all duration-300 border border-black active:translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
        
        {success && (
          <p className="text-green-600 text-sm">
            Thank you for subscribing! We&apos;ll keep you updated with our latest news.
          </p>
        )}
        
        {error && (
          <p className="text-red-600 text-sm">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default SubscribeForm; 