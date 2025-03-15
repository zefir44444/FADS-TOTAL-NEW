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
  const [isCheckboxBlinking, setIsCheckboxBlinking] = useState(false);
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
      setIsCheckboxBlinking(true);
      setTimeout(() => setIsCheckboxBlinking(false), 2000);
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
        
        let res = await fetch("/api/newsletter", {
          method: "POST",
          body: JSON.stringify(formData),
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
              source: "newsletter"
            }),
            headers: { "Content-Type": "application/json" },
          });
        }

        // Проверяем статус ответа перед попыткой разобрать JSON
        if (!res.ok) {
          const errorText = await res.text();
          console.error("Server error response:", errorText);
          throw new Error(`Failed to subscribe: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Server response:", data);

        if (!data.success) {
          throw new Error(data.error || "Failed to subscribe");
        }

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          consent: false
        });
        setSuccess(true);
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
    <form 
      onSubmit={onSubmit} 
      className="w-full flex flex-col gap-4 transition-all duration-300 ease-out"
      autoComplete="on"
    >
      <div className="mb-2">
        <h3 className="text-xl font-bold mb-2 gradient-text">
          Subscribe to our newsletter
        </h3>
        <p className="text-sm opacity-80">Get the latest news and updates directly to your inbox</p>
      </div>
      
      <style jsx>{`
        .gradient-text {
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 5s ease-in-out infinite;
          background-image: linear-gradient(to right, #ff8a00, #e52e71, #ff8a00);
          text-shadow: 0 0 2px rgba(0,0,0,0.1);
        }

        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
      
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            autoComplete="given-name"
          />
          <input
            className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            autoComplete="family-name"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="flex-grow p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 ease-out bg-white text-black border-gray-400 focus:ring-black"
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            required
          />
          <button
            type="submit"
            className={`p-3 rounded-md transition-all duration-300 ease-out font-semibold border-2 border-black bg-size-200 text-black hover:bg-pos-100 hover:shadow-md hover:-translate-y-1 active:translate-y-0 active:shadow-sm relative top-0 hover:top-[-4px] active:top-0 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </div>
        
        <div className="flex items-start gap-2 mt-1">
          <input
            type="checkbox"
            id="privacy-policy-subscribe"
            ref={checkboxRef}
            checked={formData.consent}
            onChange={handleChange}
            name="consent"
            className={`mt-1 accent-black ${isCheckboxBlinking ? 'checkbox-blink' : ''}`}
            required
          />
          <label 
            htmlFor="privacy-policy-subscribe" 
            className={`text-xs ${isCheckboxBlinking ? 'text-red-500 font-semibold' : ''}`}
          >
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
      </div>
      
      {success && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm">
          Thank you for subscribing! We&apos;ll keep you updated with our latest news.
        </div>
      )}
      
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
    </form>
  );
};

export default SubscribeForm; 