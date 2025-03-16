"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Gradient background blobs */}
        <div 
          className="absolute top-0 left-0 w-[80vw] h-[80vh] rounded-full bg-gradient-to-r from-[#e59500]/5 to-[#840032]/5 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-[70vw] h-[70vh] rounded-full bg-gradient-to-r from-[#840032]/5 to-[#e59500]/5 blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.015]"></div>
        
        {/* Animated floating shapes */}
        <div className="absolute top-1/6 left-1/6 w-16 h-16 border-2 border-[#e59500] rounded-lg opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/6 w-12 h-12 border-2 border-[#840032] rounded-full opacity-20 animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-[#e59500] rounded-lg opacity-10 animate-float-fast rotate-45"></div>
        <div className="absolute top-2/3 left-1/3 w-10 h-10 border-2 border-[#840032] rounded-lg opacity-20 animate-float-medium rotate-12"></div>
        <div className="absolute bottom-1/6 left-2/3 w-14 h-14 border-2 border-[#e59500] rounded-full opacity-15 animate-float-slow"></div>
        
        {/* Moving lines */}
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e59500]/20 to-transparent animate-slide-right-slow"></div>
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#840032]/20 to-transparent animate-slide-left-slow"></div>
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e59500]/20 to-transparent animate-slide-right-slow"></div>
        <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#840032]/20 to-transparent animate-slide-left-slow"></div>
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#e59500]/20 to-transparent animate-slide-down-slow"></div>
        <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-[#840032]/20 to-transparent animate-slide-up-slow"></div>
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-[#e59500]/20 to-transparent animate-slide-down-slow"></div>
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-[#840032]/20 to-transparent animate-slide-up-slow"></div>
      </div>
      
      <main className="flex-grow flex items-center justify-center relative z-10 px-6 py-24">
        <div className="max-w-4xl w-full text-center">
          {/* 404 with animated gradient */}
          <div className="mb-12 inline-block relative">
            <div className="text-[200px] md:text-[300px] font-bold text-transparent bg-clip-text bg-size-200 animate-gradient-flow leading-none">
              404
            </div>
            
            {/* Decorative elements around 404 */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-[#e59500] opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-[#840032] opacity-70"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-[#e59500] opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-[#840032] opacity-70"></div>
            
            {/* Pulsing circles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#e59500]/10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-[#840032]/10 animate-pulse"></div>
          </div>
          
          {/* Page not found text with gradient */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Page Not Found
          </h1>
          
          {/* Description with word rotation */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-4">
              Sorry, but the page you are looking for does not exist or has been moved.
            </p>
          </div>
          
          {/* Buttons with enhanced styling */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/" 
              className="gradient-button text-center px-10 py-4 text-lg inline-flex justify-center items-center group"
            >
              <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </span>
              Return to Home
            </Link>
            
            <Link 
              href="/contact" 
              className="floating-button text-center px-10 py-4 text-lg inline-flex justify-center items-center group"
            >
              Contact Us
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
          
        </div>
      </main>
    </div>
  );
}
