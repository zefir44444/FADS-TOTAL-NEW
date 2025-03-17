"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function WebsiteUpdatePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
              March 17, 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Website Update v0.8
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.
            </p>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
              <div className="relative h-64 w-full">
                <Image 
                  src="/fads-black.svg" 
                  alt="Website Update v0.8" 
                  fill
                  style={{ objectFit: "contain" }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/1200x600/e59500/ffffff?text=Website+Update+v0.8";
                  }}
                />
              </div>
              
              <div className="p-8 md:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-gray-700 mb-6">
                    We&apos;re excited to announce the release of version 0.8 of our website, featuring significant improvements to enhance your browsing experience and make our services more accessible.
                  </p>
                  
                  <h2>What&apos;s New in v0.8</h2>
                  
                  <h3>Redesigned Navigation</h3>
                  <p>
                    We&apos;ve completely revamped our navigation system to make it more intuitive and user-friendly. The new menu structure provides clearer pathways to our services and resources, helping you find exactly what you&apos;re looking for with fewer clicks.
                  </p>
                  
                  <ul>
                    <li>Streamlined main menu with logical grouping of services</li>
                    <li>Improved dropdown menus with enhanced visual cues</li>
                    <li>New &quot;Digital Hub&quot; section for quick access to our core offerings</li>
                    <li>Mobile-optimized navigation for seamless browsing on all devices</li>
                  </ul>
                  
                  <h3>Enhanced Website Services Section</h3>
                  <p>
                    Our website services section has been reorganized to better showcase our offerings. Each service now has a dedicated page with detailed information, examples, and clear pricing options.
                  </p>
                  
                  <ul>
                    <li>New dedicated pages for Business Websites, Landing Pages, and more</li>
                    <li>Improved content structure with clear service descriptions</li>
                    <li>Updated portfolio examples showcasing our recent work</li>
                    <li>Streamlined contact process for service inquiries</li>
                  </ul>
                  
                  <h3>Improved Performance</h3>
                  <p>
                    We&apos;ve made significant behind-the-scenes improvements to enhance the website&apos;s performance:
                  </p>
                  
                  <ul>
                    <li>Faster page loading times through code optimization</li>
                    <li>Enhanced mobile responsiveness for a better experience on all devices</li>
                    <li>Improved accessibility features for users with disabilities</li>
                    <li>Better SEO optimization for improved search engine visibility</li>
                  </ul>
                  
                  <h3>New Content and Resources</h3>
                  <p>
                    We&apos;ve added new content to provide more value to our visitors:
                  </p>
                  
                  <ul>
                    <li>Expanded service descriptions with detailed information</li>
                    <li>New case studies showcasing successful client projects</li>
                    <li>Updated FAQ section addressing common questions</li>
                    <li>This news section to keep you informed about our latest updates</li>
                  </ul>
                  
                  <h2>What&apos;s Coming Next</h2>
                  <p>
                    This update lays the groundwork for even more exciting features in the future. Here&apos;s a sneak peek at what we&apos;re working on for upcoming releases:
                  </p>
                  
                  <ul>
                    <li>Client portal for project management and communication</li>
                    <li>Enhanced blog with industry insights and tips</li>
                    <li>Interactive service calculators and tools</li>
                    <li>Expanded multilingual support</li>
                  </ul>
                  
                  <h2>Your Feedback Matters</h2>
                  <p>
                    We value your input and would love to hear your thoughts on our website update. If you have any feedback, suggestions, or encounter any issues, please don&apos;t hesitate to <Link href="/contact" className="text-[#e59500] hover:underline">contact us</Link>.
                  </p>
                  
                  <p>
                    Thank you for being part of our journey as we continue to improve and grow!
                  </p>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-[#e59500]/10 flex items-center justify-center mr-4">
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
                          className="text-[#e59500]"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Posted by</p>
                        <p className="text-gray-600">FADS Digital Hub Team</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <a 
                        href="https://twitter.com/share?url=https://fads.fi/news/website-update-v0.8&text=Check out the new website update from FADS Digital Hub!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#e59500] transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/shareArticle?mini=true&url=https://fads.fi/news/website-update-v0.8&title=FADS Digital Hub Website Update v0.8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#e59500] transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/news" 
                className="inline-flex items-center text-[#e59500] font-medium hover:underline"
              >
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
                  className="mr-1"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
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