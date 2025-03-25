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
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1 rounded-full text-[#e59500] font-medium text-sm">
          16 March 2025
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032]">
          Website Update v0.8
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-black">
          Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.
        </p>
      </div>

      <div className="relative h-64 md:h-96 w-full group mb-8">
        <Image 
          src="/fads-black.svg" 
          alt="Website Update v0.8" 
          fill
          style={{ objectFit: "contain" }}
          className="transition-transform duration-500 group-hover:scale-105"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = "/fads-black.svg";
          }}
        />
      </div>

      <p className="lead text-xl text-black mb-8 leading-relaxed">
        We&apos;re excited to announce the release of version 0.8 of our website, featuring significant improvements to enhance your browsing experience and make our services more accessible.
      </p>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-900">What&apos;s New in v0.8</h2>
      
      <div className="p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4 text-[#e59500]">Redesigned Navigation</h3>
        <p className="text-black mb-4">
          We&apos;ve completely revamped our navigation system to make it more intuitive and user-friendly. The new menu structure provides clearer pathways to our services and resources, helping you find exactly what you&apos;re looking for with fewer clicks.
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Streamlined main menu with logical grouping of services
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Improved dropdown menus with enhanced visual cues
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            New &quot;Digital Hub&quot; section for quick access to our core offerings
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Mobile-optimized navigation for seamless browsing on all devices
          </li>
        </ul>
      </div>

      <div className="p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4 text-[#e59500]">Enhanced Website Services Section</h3>
        <p className="text-black mb-4">
          Our website services section has been reorganized to better showcase our offerings. Each service now has a dedicated page with detailed information, examples, and clear pricing options.
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            New dedicated pages for Business Websites, Landing Pages, and more
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Improved content structure with clear service descriptions
          </li>
          
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Streamlined contact process for service inquiries
          </li>
        </ul>
      </div>

      <div className="p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4 text-[#e59500]">Improved Performance</h3>
        <p className="text-black mb-4">
          We&apos;ve made significant behind-the-scenes improvements to enhance the website&apos;s performance:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Faster page loading times through code optimization
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Enhanced mobile responsiveness for a better experience on all devices
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Improved accessibility features for users with disabilities
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Better SEO optimization for improved search engine visibility
          </li>
        </ul>
      </div>

      <div className="p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4 text-[#e59500]">New Content and Resources</h3>
        <p className="text-black mb-4">
          We&apos;ve added new content to provide more value to our visitors:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Expanded service descriptions with detailed information
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Updated FAQ section addressing common questions
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            This news section to keep you informed about our latest updates
          </li>
        </ul>
      </div>
   
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What&apos;s Coming Next</h2>
      <p className="text-black mb-6">
        This update lays the groundwork for even more exciting features in the future. Here&apos;s a sneak peek at what we&apos;re working on for upcoming releases:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span>Client portal for project management</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"></path>
          </svg>
          <span>Enhanced blog with industry insights</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <span>Interactive service calculators</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
          </svg>
          <span>Expanded multilingual support</span>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Your Feedback Matters</h2>
      <p className="text-black mb-6">
        We value your input and would love to hear your thoughts on our website update. If you have any feedback, suggestions, or encounter any issues, please don&apos;t hesitate to <Link href="/contact" className="text-[#e59500] hover:underline font-medium">contact us</Link>.
      </p>
    </div>
  );
}