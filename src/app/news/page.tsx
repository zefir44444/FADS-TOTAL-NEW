"use client";

import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
          
          {/* Плавающие геометрические фигуры */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-[#e59500] rounded-lg opacity-30 animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-[#840032] rounded-full opacity-30 animate-float-medium"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Stay informed about our latest developments, industry insights, and company announcements.
            </p>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* News Cards */}
            <div className="space-y-8">
              {/* Website Update v0.8 Card */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
                      March 17, 2024
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#840032]/10 text-[#840032] font-medium text-sm">
                      Update
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Website Update v0.8</h2>
                  <p className="text-gray-600 mb-6">
                    Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization across all pages.
                  </p>
                  <Link 
                    href="/news/website-update-v0.8" 
                    className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 