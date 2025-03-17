"use client";

import Link from "next/link";

export default function UpdatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              March 17, 2024
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Update v0.8
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Major improvements in website structure and user experience
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">What&apos;s New</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Website Services Restructuring</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Reorganized website services section for better navigation</li>
                    <li>Updated paths and naming conventions for consistency</li>
                    <li>Improved menu structure in both desktop and mobile versions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">User Interface Improvements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Enhanced contrast in form elements for better accessibility</li>
                    <li>Optimized navigation menu layout</li>
                    <li>Added new animations for interactive elements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Content Updates</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Added new service descriptions</li>
                    <li>Updated website customization section to &quot;Custom Website Development&quot;</li>
                    <li>Improved content organization across all pages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Improvements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Enhanced page load performance</li>
                    <li>Improved mobile responsiveness</li>
                    <li>Fixed various navigation issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/news" 
                className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 