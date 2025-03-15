"use client";

import { useState, useEffect } from "react";
import SubscribeForm from "./SubscribeForm";
import Image from "next/image";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  
  // Предотвращаем гидратацию
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="w-full py-12 px-6 md:px-12 font-medium bg-white text-black" style={{ fontWeight: 500 }}>
      <style jsx>{`
        /* Локальные стили, если потребуются */
        .heading-gradient {
          background: linear-gradient(to right, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>

      {/* Основной контент футера */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Левая колонка - Форма подписки */}
        <div className="md:col-span-1">
          <SubscribeForm />
        </div>

        {/* Разделитель */}
        <div className="border-t pt-8 mt-8 border-opacity-100 border-t-2 border-black md:hidden"></div>

        {/* Средняя колонка (пустая для создания пространства) */}
        <div className="hidden md:block"></div>

        {/* Правая колонка с остальным содержимым */}
        <div className="md:ml-auto w-full md:w-auto flex flex-col items-end text-right">
       
          
          <div className="flex flex-col gap-4 mb-8 items-end">
            <a href="/contact" className="font-medium">contact</a>
          </div>
          
          <div className="flex flex-col gap-4 mb-8 items-end">
            <nav className="flex flex-col gap-2 text-2lg items-end">
              <div className="flex items-center gap-3 justify-end">
                <a href="/privacy">privacy policy</a>
                <span className="opacity-90 font-medium">|</span>
                <a href="/cookies">cookie policy</a>
              </div>
            </nav>
            <nav className="flex items-center justify-end gap-2 mt-1">
              <span className="text-sm opacity-90 font-medium">We use</span>
              <a href="https://stripe.com/en-fi" target="_blank" rel="noopener noreferrer" className="no-underline">
                <Image 
                  src="/pictures/Stripe/Stripe wordmark - blurple (large).png" 
                  alt="Stripe" 
                  width={60} 
                  height={25} 
                  className="inline-block" 
                />
              </a>
              <span className="text-sm opacity-90 font-medium">for secure payments</span>
            </nav>
            
            {/* Социальные ссылки */}
            <div className="flex items-center gap-6 mt-8 justify-end">
              <a 
                href="https://www.linkedin.com/in/denisfateev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#e59500] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@fadsmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#e59500] transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/zeisch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#e59500] transition-colors duration-300"
                aria-label="Telegram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@fads.fi" 
                className="text-black hover:text-[#e59500] transition-colors duration-300"
                aria-label="Email"
                data-email="true"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={26} 
                  height={26} 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Логотип и копирайт */}
      <div className="mt-12 flex flex-col items-center justify-center text-center">
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} FADS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}