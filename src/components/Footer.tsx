"use client";

import { useState, useEffect } from "react";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  
  // Предотвращаем гидратацию
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="w-full py-16 px-6 md:px-12 font-medium relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute bottom-0 left-0 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-[#e59500]/10 blur-2xl"></div>
        
        {/* Плавающие геометрические фигуры */}
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-[#e59500] rounded-lg opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-[#840032] rounded-full opacity-30 animate-float-medium"></div>
      </div>

      {/* Основной контент футера */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Левая колонка - Форма подписки */}
        <div className="md:col-span-1 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300 hover:shadow-xl overflow-hidden"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
        >
          <SubscribeForm />
        </div>

        {/* Разделитель для мобильных устройств */}
        <div className="border-t pt-8 mt-8 border-opacity-100 border-t-2 border-black/20 md:hidden"></div>

        {/* Средняя колонка (пустая для создания пространства) */}
        <div className="hidden md:block"></div>

        {/* Правая колонка с остальным содержимым */}
        <div className="md:ml-auto w-full md:w-auto flex flex-col items-end text-right bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/20 transition-all duration-300 hover:shadow-xl"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
        >
          <div className="flex flex-col gap-4 mb-4 items-end">
            <Link href="/contact" className="font-medium text-lg hover:text-[#e59500] transition-all duration-300 transform hover:translate-x-[-5px]">
              contact
            </Link>
            
            {/* Бизнес-часы */}
            <div className="text-right mt-2">
              <h3 className="font-medium mb-2">Business Hours</h3>
              <p className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm">Sat-Sun: Closed</p>
              <p className="text-sm mt-2"><strong>VAT ID:</strong> <span className="select-text cursor-text">FI33641998</span></p>
            </div>
            
            {/* Социальные ссылки */}
            <div className="flex items-center gap-6 mt-2 justify-end">
              <a 
                href="https://www.linkedin.com/company/fadsfi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
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
                className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
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
                className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
                aria-label="Telegram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@fads.fi" 
                className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
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
          
          <div className="flex flex-col gap-4 mb-4 items-end">
            <nav className="flex flex-col gap-2 text-2lg items-end">
              <div className="flex items-center gap-3 justify-end">
                <Link href="/privacy" className="hover:text-[#e59500] transition-colors duration-300">
                  privacy policy
                </Link>
                <span className="opacity-90 font-medium">|</span>
                <Link href="/cookies" className="hover:text-[#e59500] transition-colors duration-300">
                  cookie policy
                </Link>
              </div>
            </nav>
          </div>
          
          <div className="flex flex-col items-end mt-4 mb-4">
            <span className="text-sm opacity-90 font-medium mb-2">We use for secure payments:</span>
            <div className="flex items-center gap-4 mt-1">
              <a 
                href="https://stripe.com/en-fi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="no-underline transform transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/pictures/partners/Stripe/Stripe wordmark - blurple (large).png" 
                  alt="Stripe" 
                  width={60} 
                  height={25} 
                  className="inline-block" 
                />
              </a>
              <a 
                href="https://www.revolut.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="no-underline transform transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/pictures/partners/Revolut/Revolut-01-retail-wordmark-FINAL-01.svg" 
                  alt="Revolut" 
                  width={60} 
                  height={25} 
                  className="inline-block" 
                />
              </a>
              <a 
                href="https://www.ukko.fi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="no-underline transform transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/pictures/partners/Ukko/UKKO.fi_logo_blue.png" 
                  alt="UKKO.fi" 
                  width={60} 
                  height={25} 
                  className="inline-block" 
                />
              </a>
            </div>
            
            {/* Платежные системы */}
            <div className="flex flex-wrap items-center justify-end gap-3 mt-4">
              <Image 
                src="/pictures/payment-logos/cards/visa.svg" 
                alt="Visa" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
              <Image 
                src="/pictures/payment-logos/cards/mastercard.svg" 
                alt="Mastercard" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
              <Image 
                src="/pictures/payment-logos/cards/american-express.svg" 
                alt="American Express" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
              <Image 
                src="/pictures/payment-logos/cards/maestro.svg" 
                alt="Maestro" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
              <Image 
                src="/pictures/payment-logos/cards/diners.svg" 
                alt="Diners Club" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
              <Image 
                src="/pictures/payment-logos/cards/discover.svg" 
                alt="Discover" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
              <Image 
                src="/pictures/payment-logos/cards/unionpay.svg" 
                alt="UnionPay" 
                width={40} 
                height={25} 
                className="inline-block" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Логотип и копирайт */}
      <div className="mt-12 flex flex-col items-center justify-center text-center relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-full px-8 py-3 shadow-md border border-white/20 transition-all duration-300 hover:shadow-lg"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} FADS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}