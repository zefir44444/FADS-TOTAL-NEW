"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

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
    
    const handleResize = () => {
      // Проверка размера экрана и закрытие мобильного меню при ресайзе на десктоп
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
        setOpenMobileSubmenu(null);
      }
    };
    
    handleResize(); // Инициализация при первой загрузке
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenMobileSubmenu(null); // Сбрасываем открытое подменю при закрытии/открытии основного меню
  };

  const toggleMobileSubmenu = (submenu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === submenu ? null : submenu);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-4">
        <div 
          className={`
            flex items-center justify-between 
            bg-white/70 backdrop-filter backdrop-blur-md
            rounded-full shadow-lg 
            py-2 px-4 md:px-6 
            transition-all duration-300 
            border border-white/30
            ${scrolled ? "mx-4 md:mx-8 lg:mx-16" : "mx-0"}
          `}
    
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
        
          {/* Выпадающее меню */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link 
              href="/" 
              className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
            >
              Digital Hub
            </Link>
            
            <div className="relative group">
              <button 
                className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
                aria-label="Websites"
              >
                Development
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-3 px-4 z-50 min-w-[240px] border border-white/30 
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 transform origin-top scale-95 group-hover:scale-100"
                  
              >
                <div className="flex flex-col gap-2">
                  <Link 
                    href="/websites" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    All Development Services
                  </Link>
                  <div className="w-full h-px bg-gray-100 my-1"></div>
                  <Link 
                    href="/websites/business" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Business Websites
                  </Link>
                  <Link 
                    href="/websites/landing" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Landing Page
                  </Link>
                  <Link 
                    href="/websites/showcases" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Showcases
                  </Link>
                  <Link 
                    href="/websites/blogs" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Blogs
                  </Link>
                  <Link 
                    href="/websites/ecommerce" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    E-commerce Websites
                  </Link>
                  <Link 
                    href="/websites/custom" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Custom Development
                  </Link>
                 
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
                aria-label="Services"
              >
                Services
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-3 px-4 z-50 min-w-[220px] border border-white/30 
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 transform origin-top scale-95 group-hover:scale-100"
            
              >
                <div className="flex flex-col gap-2">
                  <Link 
                    href="/services" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    All Services
                  </Link>
                  <div className="w-full h-px bg-gray-100 my-1"></div>
                  <Link 
                    href="/services/maintenance" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Website Maintenance
                  </Link>
                  <Link 
                    href="/services/website-audits" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Website Audits
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
                aria-label="Website Promotion"
              >
                Promotion
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-3 px-4 z-50 min-w-[220px] border border-white/30 
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-300 transform origin-top scale-95 group-hover:scale-100"
              
              >
                <div className="flex flex-col gap-2">
                  <Link 
                    href="/promotion" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    All Promotion Services
                  </Link>
                  <div className="w-full h-px bg-gray-100 my-1"></div>
                  <Link 
                    href="/promotion/seo" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    SEO Optimization & Promotion
                  </Link>
                  <Link 
                    href="/promotion/google-ads" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Google Ads Setup & Management
                  </Link>
                  <Link 
                    href="/promotion/youtube" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    YouTube Advertising
                  </Link>
             
                  <Link 
                    href="/promotion/growth-engine" 
                    className="text-sm hover:text-[#e59500] transition-colors duration-300"
                  >
                    Growth Engine
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              href="/portfolio" 
              className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
            >
              Portfolio
            </Link>
            
            <Link 
              href="/news" 
              className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
            >
              News
            </Link>
            
            <Link 
              href="/contact" 
              className="text-sm flex items-center gap-1 hover:text-[#e59500] transition-colors duration-300"
            >
              Contact us
            </Link>
          </div>

          {/* Социальные ссылки */}
          <div className="hidden md:flex items-center gap-4 ml-4 mr-0">
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

          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md" 
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mx-4 mt-2 bg-white rounded-2xl shadow-lg py-6 px-6 border border-white/30 overflow-hidden" 
            >
              <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col space-y-4 items-center"
              >
                <Link 
                  href="/" 
                  className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Digital Hub
                </Link>
                
                {/* Development подменю */}
                <div className="w-full">
                  <button 
                    className="text-sm flex items-center justify-center gap-1 hover:text-[#e59500] transition-colors duration-300 w-full"
                    onClick={() => toggleMobileSubmenu('development')}
                  >
                    Development
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ rotate: openMobileSubmenu === 'development' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openMobileSubmenu === 'development' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2 mt-2 overflow-hidden"
                      >
                        <Link 
                          href="/websites" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          All Development Services
                        </Link>
                        <Link 
                          href="/websites/business" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Business Websites
                        </Link>
                        <Link 
                          href="/websites/landing" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Landing Page
                        </Link>
                        <Link 
                          href="/websites/showcases" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Showcases
                        </Link>
                        <Link 
                          href="/websites/blogs" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Blogs
                        </Link>
                        <Link 
                          href="/websites/ecommerce" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          E-commerce Websites
                        </Link>
                        <Link 
                          href="/websites/custom" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Custom Development
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services подменю */}
                <div className="w-full">
                  <button 
                    className="text-sm flex items-center justify-center gap-1 hover:text-[#e59500] transition-colors duration-300 w-full"
                    onClick={() => toggleMobileSubmenu('services')}
                  >
                    Services
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ rotate: openMobileSubmenu === 'services' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openMobileSubmenu === 'services' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2 mt-2 overflow-hidden"
                      >
                        <Link 
                          href="/services" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          All Services
                        </Link>
                        <Link 
                          href="/services/maintenance" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Website Maintenance
                        </Link>
                        <Link 
                          href="/services/website-audits" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Website Audits
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Promotion подменю */}
                <div className="w-full">
                  <button 
                    className="text-sm flex items-center justify-center gap-1 hover:text-[#e59500] transition-colors duration-300 w-full"
                    onClick={() => toggleMobileSubmenu('promotion')}
                  >
                    Promotion
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ rotate: openMobileSubmenu === 'promotion' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openMobileSubmenu === 'promotion' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2 mt-2 overflow-hidden"
                      >
                        <Link 
                          href="/promotion" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          All Promotion Services
                        </Link>
                        <Link 
                          href="/promotion/seo" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          SEO Optimization & Promotion
                        </Link>
                        <Link 
                          href="/promotion/google-ads" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Google Ads Setup & Management
                        </Link>
                        <Link 
                          href="/promotion/youtube" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          YouTube Advertising
                        </Link>
                        <Link 
                          href="/promotion/growth-engine" 
                          className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Growth Engine
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link 
                  href="/portfolio" 
                  className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center mt-4 pt-4 border-t border-gray-200 w-full flex justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                
                <Link 
                  href="/news" 
                  className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center mt-4 pt-4 border-t border-gray-200 w-full flex justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                
                <Link 
                  href="/contact" 
                  className="text-sm hover:text-[#e59500] transition-colors duration-300 text-center mt-4 pt-4 border-t border-gray-200 w-full flex justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </motion.nav>
              
              {/* Социальные сети в мобильном меню */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-gray-200"
              >
                <a 
                  href="https://www.linkedin.com/in/denisfateev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                  onClick={() => setIsMenuOpen(false)}
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
                  onClick={() => setIsMenuOpen(false)}
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:info@fads.fi" 
                  className="text-black hover:text-[#e59500] transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                  onClick={() => setIsMenuOpen(false)}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 