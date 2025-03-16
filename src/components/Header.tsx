"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Предотвращаем гидратацию
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-4">
        <div 
          className={`
            flex items-center justify-between 
            bg-white/70
            rounded-full shadow-lg 
            py-2 px-4 md:px-6 
            transition-all duration-300 
            backdrop-blur-xl
            border border-white/20
            ${scrolled ? "mx-4 md:mx-8 lg:mx-16" : "mx-0"}
          `}
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}
        >
          {/* Логотип */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-24">
              <Image 
                src="/fads-black.svg" 
                alt="FADS Logo" 
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Социальные ссылки */}
          <div className="hidden md:flex items-center gap-4 ml-auto mr-8">
            <a 
              href="https://www.linkedin.com/in/denisfateev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
              <svg width="20" height="20" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
              </svg>
            </a>
            <a 
              href="mailto:info@fads.fi" 
              className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>

          {/* Ссылки на политики */}
          <div className="hidden md:flex flex-col gap-2 mr-4">
            <nav className="flex items-center gap-3 justify-end text-sm">
              <Link href="/privacy" className="hover:text-[#e59500] transition-colors duration-300">
                privacy policy
              </Link>
              <span className="opacity-90 font-medium">|</span>
              <Link href="/cookies" className="hover:text-[#e59500] transition-colors duration-300">
                cookie policy
              </Link>
            </nav>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/contact" 
              className="floating-button font-tektur bg-gradient-to-r from-[#e59500] to-[#d48700] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Contact us
            </Link>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-md backdrop-blur-xl" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div 
            className="md:hidden mx-4 mt-2 bg-white/70 rounded-2xl shadow-lg py-6 px-6 animate-fadeIn backdrop-blur-xl border border-white/20" 
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/contact" 
                className="floating-button font-tektur bg-gradient-to-r from-[#e59500] to-[#d48700] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
              
              <div className="flex items-center gap-3 justify-center mt-4 pt-4 border-t border-gray-200">
                <Link 
                  href="/privacy" 
                  className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  privacy policy
                </Link>
                <span className="opacity-90 font-medium">|</span>
                <Link 
                  href="/cookies" 
                  className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  cookie policy
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 