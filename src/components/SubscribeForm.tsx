"use client";

import React, { FormEvent, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useReCaptcha } from "./ReCaptchaProvider";

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
  const [isCheckboxBlinking, setIsCheckboxBlinking] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  const { executeReCaptcha, loaded } = useReCaptcha();

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
      setIsCheckboxBlinking(true);
      setTimeout(() => setIsCheckboxBlinking(false), 2000);
      checkboxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setError("You must accept the Privacy Policy to subscribe");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.consent) {
      highlightCheckbox();
      return;
    }
    
    setLoading(true);
    setSuccess(false);
    setError("");
    
    try {
      // Проверяем загружена ли reCAPTCHA
      if (!loaded) {
        console.warn("reCAPTCHA is not loaded yet, waiting for loading...");
        // Ждем 2 секунды для возможной загрузки reCAPTCHA
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Если всё ещё не загружена, выбрасываем ошибку
        if (!loaded) {
          throw new Error("reCAPTCHA failed to load. Please refresh the page and try again.");
        }
      }
      
      // Получаем токен reCAPTCHA
      console.log("Verifying with reCAPTCHA...");
      const token = await executeReCaptcha("subscribe_form");
      
      if (!token) {
        throw new Error("Failed to get reCAPTCHA token. Please refresh the page and try again.");
      }
      
      // Проверяем токен через наш API
      const recaptchaRes = await fetch("/api/recaptcha", {
        method: "POST",
        body: JSON.stringify({
          token,
          action: "subscribe_form"
        }),
        headers: { "Content-Type": "application/json" },
      });
      
      const recaptchaData = await recaptchaRes.json();
      
      if (!recaptchaRes.ok || !recaptchaData.success) {
        console.error("reCAPTCHA validation failed:", recaptchaData);
        throw new Error(recaptchaData.error || "reCAPTCHA verification failed. You may have been identified as a bot.");
      }
      
      console.log("reCAPTCHA validation successful:", recaptchaData);
      
      // Продолжаем отправку формы
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: formData.email, 
          source: "newsletter", 
          recaptchaScore: recaptchaData.score 
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error subscribing to the newsletter");
      }

      if (data.success) {
        console.log("Newsletter subscription successful");
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          consent: false
        });
        
        // Отправляем данные в Telegram
        try {
          console.log("Sending subscription data to Telegram...");
          await fetch("/api/telegram", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              email: formData.email, 
              source: "newsletter", 
              formType: "Newsletter Subscription",
              recaptchaScore: recaptchaData.score
            }),
          });
          console.log("Telegram notification sent");
        } catch (telegramError) {
          console.error("Error sending to Telegram:", telegramError);
          // Не прерываем выполнение, если отправка в Telegram не удалась
        }
      } else {
        throw new Error(data.error || "Не удалось подписаться на рассылку");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setError(err instanceof Error ? err.message : "An error occurred during subscription");
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
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500]/50"
            required
          />
          
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500]/50"
            required
          />
        </div>
        
        <input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e59500]/50"
          required
        />
        
        <div className="flex items-start mt-2">
          <input
            type="checkbox"
            id="privacy-policy"
            ref={checkboxRef}
            checked={formData.consent}
            onChange={handleChange}
            name="consent"
            className={`mt-1 mr-2 ${isCheckboxBlinking ? 'checkbox-blink' : ''}`}
            required
          />
          <label htmlFor="privacy-policy" className="text-xs">
            I agree to the processing of my personal data in accordance with the{" "}
            <Link href="/privacy" className="text-[#863800] font-semibold hover:underline">
              Privacy Policy
            </Link>
          </label>
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