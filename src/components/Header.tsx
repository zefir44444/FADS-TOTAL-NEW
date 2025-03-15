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
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-4">
        <div 
          className={`
            flex items-center justify-between 
            bg-white/70 backdrop-blur-xl 
            rounded-full shadow-lg 
            py-2 px-4 md:px-6 
            transition-all duration-300 
            pointer-events-auto
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

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/contact" 
              className="floating-button font-tektur bg-gradient-to-r from-[#e59500] to-[#d48700] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-md" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)"
            }}
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
            className="md:hidden mx-4 mt-2 bg-white/70 rounded-2xl shadow-lg py-6 px-6 animate-fadeIn pointer-events-auto border border-white/20" 
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)"
            }}
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/contact" 
                className="floating-button font-tektur bg-gradient-to-r from-[#e59500] to-[#d48700] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 