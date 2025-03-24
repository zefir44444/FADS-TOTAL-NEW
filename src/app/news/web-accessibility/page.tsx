"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function WebAccessibilityPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
          March 24, 2024
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032]">
          What is Web Accessibility and Why Should You Care Now?
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          Learn about web accessibility essentials, key requirements for European and B2G projects, and practical steps for implementation.
        </p>
      </div>

      <div className="relative h-64 md:h-96 w-full group mb-8">
        <Image 
          src="/news/web-accessibility/users.jpg" 
          alt="Web Accessibility Illustration" 
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="transition-transform duration-500 group-hover:scale-105"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = "/fads-black.svg";
          }}
        />
      </div>

      <p className="lead text-xl text-gray-700 mb-8 leading-relaxed">
        In today's digital world, web accessibility is no longer just a recommendation but a crucial requirement, especially for projects in Europe and the government sector. Let's explore why it's important and how to properly implement accessibility on your web resources.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">What is Web Accessibility?</h2>
        <p className="text-gray-700 mb-4">
          Web Accessibility is the principle of creating websites and applications that can be used by everyone, regardless of their physical abilities, technical limitations, or information perception characteristics.
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Ensuring equal access to information
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Supporting various interaction methods
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Compatibility with assistive technologies
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">Legislative Requirements in Europe</h2>
        <p className="text-gray-700 mb-4">
          The European Union has strict requirements for digital resource accessibility, especially in the public sector:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            EU Directive 2016/2102 on website accessibility
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            EN 301 549 standard for public procurement
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            WCAG 2.1 Level AA requirements
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">Key Aspects of Web Accessibility</h2>
        <p className="text-gray-700 mb-4">
          When developing accessible web resources, consider the following aspects:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Perceivable: content must be available to all senses
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Operable: all functions accessible via keyboard
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Understandable: information and interface must be clear
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Robust: compatibility with current and future technologies
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">Practical Recommendations</h2>
        <p className="text-gray-700 mb-4">
          Key steps for implementing web accessibility in your project:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Conducting accessibility audit of existing website
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Implementing semantic HTML markup
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Ensuring sufficient color contrast
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Adding alternative text for images
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Testing with screen readers
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Benefits of Implementing Web Accessibility</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span>Expanding user audience</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Compliance with legal requirements</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>Improved SEO and performance</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex items-center">
          <svg className="w-6 h-6 text-[#e59500] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span>Corporate social responsibility</span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">How We Can Help</h2>
        <p className="text-gray-700 mb-6">
          FADS Digital Hub offers comprehensive solutions for implementing web accessibility:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Auditing existing web resources for accessibility compliance
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Developing new projects with WCAG 2.1 compliance
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Consulting on accessibility implementation
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Training development teams on accessibility principles
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Start Implementing Web Accessibility Now</h2>
      <p className="text-gray-700 mb-6">
        Don't wait until web accessibility becomes mandatory for your project. Start implementing it now to ensure equal access to your digital resources for all users. <Link href="/contact" className="text-[#e59500] hover:underline font-medium">Contact us</Link> for a consultation or to conduct an accessibility audit of your website.
      </p>
    </div>
  );
} 