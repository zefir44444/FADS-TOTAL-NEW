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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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
              className="floating-button font-tektur bg-[#e59500] text-white px-4 py-2 rounded-md hover:bg-[#d48700] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden flex items-center" 
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/contact" 
                className="floating-button font-tektur bg-[#e59500] text-white px-4 py-2 rounded-md hover:bg-[#d48700] transition-colors duration-300 inline-block"
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