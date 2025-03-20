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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-5 sm:top-10 left-0 sm:left-5 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-0 sm:right-5 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="w-full max-w-[100vw] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-block mb-2 sm:mb-3 px-3 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              Stay Updated
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              News & Updates
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600 px-2 sm:px-4">
              Stay informed about our latest developments, industry insights, and company announcements.
            </p>
          </div>
        </div>
      </section>
      
      {/* News Content */}
      <section className="py-6 sm:py-8 md:py-12 bg-gray-50">
        <div className="w-full max-w-[100vw] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {/* News Card */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="relative h-32 sm:h-40 w-full">
                  <div className="absolute inset-0">
                    <Image 
                      src="/fads-black.svg" 
                      alt="Website Update v0.8" 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/fads-black.svg";
                      }}
                    />
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-gray-500">17-03-2025</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-[#e59500]">Updates</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 hover:text-[#e59500] transition-colors">
                    <Link href="/news/website-update-v0.8">
                      Website Update v0.8
                    </Link>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.
                  </p>
                  <Link 
                    href="/news/website-update-v0.8" 
                    className="text-[#e59500] font-medium hover:underline inline-flex items-center text-sm"
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
              <div className="bg-white/50 rounded-lg sm:rounded-xl border border-dashed border-gray-200 flex items-center justify-center p-4 sm:p-6">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2 sm:mb-3">
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
                      className="text-gray-400"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-400 mb-1 sm:mb-2">More News Coming Soon</h3>
                  <p className="text-xs sm:text-sm text-gray-500">
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