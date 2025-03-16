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
    <>
      {/* Simple background with subtle gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
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
      </div>
      
      <div className="flex items-center justify-center py-24 relative z-10">
        <div className="max-w-4xl w-full text-center">
          {/* Simple 404 with gradient */}
          <div className="mb-12 inline-block">
            <div className="text-[200px] md:text-[300px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e59500] via-[#840032] to-[#e59500] bg-size-200 animate-gradient-flow leading-none">
              404
            </div>
          </div>
          
          {/* Page not found text with gradient */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Page Not Found
          </h1>
          
          {/* Simple description */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-4">
              Sorry, but the page you are looking for does not exist or has been moved.
            </p>
          </div>
          
          {/* Buttons with glass morphism styling */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/" 
              className="glass-button text-center px-10 py-4 text-lg group"
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
              className="glass-button text-center px-10 py-4 text-lg group"
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
      </div>
    </>
  );
}
