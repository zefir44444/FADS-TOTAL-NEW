"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NewsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="w-full max-w-[100vw] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              Stay Updated
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              News & Updates
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 px-4">
              Stay informed about our latest developments, industry insights, and company announcements.
            </p>
          </div>
        </div>
      </section>
      
      {/* News Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="w-full max-w-[100vw] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* News Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image 
                    src="/fads-black.svg" 
                    alt="Website Update v0.8" 
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/fads-black.svg";
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-xs text-gray-500">March 17, 2025</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-[#e59500]">Updates</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 hover:text-[#e59500] transition-colors">
                    <Link href="/news/website-update-v0.8">
                      Website Update v0.8
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.
                  </p>
                  <Link 
                    href="/news/website-update-v0.8" 
                    className="text-[#e59500] font-medium hover:underline inline-flex items-center text-sm sm:text-base"
                  >
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="ml-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Placeholder for future news */}
              <div className="bg-white/50 rounded-xl sm:rounded-2xl border border-dashed border-gray-200 flex items-center justify-center p-6 sm:p-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-gray-400"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-400 mb-2">More News Coming Soon</h3>
                  <p className="text-sm sm:text-base text-gray-500">
                    Stay tuned for more updates and announcements from our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 