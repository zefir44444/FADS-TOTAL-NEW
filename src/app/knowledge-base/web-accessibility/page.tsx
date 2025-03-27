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
        <div className="inline-block mb-4 px-4 py-1 rounded-full text-[#e59500] font-medium text-sm">
          March 24, 2024
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032]">
          What is Web Accessibility and Why Should You Care Now?
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-black">
          Learn about web accessibility essentials, key requirements for European and B2G projects, and practical steps for implementation.
        </p>
      </div>

      <div className="relative h-64 md:h-96 w-full group mb-8">
        <Image 
          src="/news/web-accessibility/users.jpg" 
          alt="Web Accessibility Illustration" 
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="transition-transform duration-500 group-hover:scale-105 rounded-xl"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = "/fads-black.svg";
          }}
        />
      </div>

      <p className="lead text-xl text-black mb-8 leading-relaxed">
        In today&apos;s digital world, web accessibility is no longer just a recommendation but a crucial requirement, especially for projects in Europe and the government sector. Let&apos;s explore why it&apos;s important and how to properly implement accessibility on your web resources.
      </p>
      
      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">What is Web Accessibility?</h2>
        <p className="text-black mb-4">
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

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#840032] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Legislative Requirements in Europe</h2>
        <p className="text-black mb-4">
          The European Union has strict requirements for digital resource accessibility, especially in the public sector:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <Link href="https://eur-lex.europa.eu/eli/dir/2016/2102/oj/eng" className="text-[#863800] hover:text-[#e59500] transition-colors" target="_blank" rel="noopener noreferrer">
              EU Directive 2016/2102</Link>&nbsp;on website accessibility
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <Link href="https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation" className="text-[#863800] hover:text-[#e59500] transition-colors" target="_blank" rel="noopener noreferrer">
              EN 301 549 standard</Link>&nbsp;for public procurement
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <Link href="https://www.w3.org/TR/WCAG21/" className="text-[#863800] hover:text-[#e59500] transition-colors" target="_blank" rel="noopener noreferrer">
              WCAG 2.1</Link>&nbsp;Level AA requirements
          </li>
        </ul>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-xl"></div>
        <div className="relative p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Key Aspects of Web Accessibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-[#e59500]">Perceivable</h3>
              <p className="text-sm text-black">
                Content must be available to all senses - visual, auditory, and tactile alternatives.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-[#e59500]">Operable</h3>
              <p className="text-sm text-black">
                All functions accessible via keyboard, with enough time to read and use content.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-[#e59500]">Understandable</h3>
              <p className="text-sm text-black">
                Information and interface must be clear, with predictable functionality.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3 text-[#e59500]">Robust</h3>
              <p className="text-sm text-black">
                Compatibility with current and future technologies, including assistive tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Practical Recommendations</h2>
        <p className="text-black mb-4">
          Key steps for implementing web accessibility in your project:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <strong>Accessibility Audit</strong>
            </div>
            <p className="mt-2 pl-7 text-sm">Conduct a comprehensive review of existing websites for compliance gaps.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <strong>Semantic HTML</strong>
            </div>
            <p className="mt-2 pl-7 text-sm">Use proper HTML elements that convey meaning and structure, not just presentation.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <strong>Color Contrast</strong>
            </div>
            <p className="mt-2 pl-7 text-sm">Ensure sufficient contrast between text and background (minimum 4.5:1 ratio).</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <strong>Alt Text for Images</strong>
            </div>
            <p className="mt-2 pl-7 text-sm">Add descriptive alternative text for all meaningful images and graphics.</p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-[#e59500]/10 p-8 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#e59500]/20 rounded-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#840032]/10 rounded-full -ml-12 -mb-12"></div>
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 relative z-10">Benefits of Implementing Web Accessibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Expanded Audience</h3>
            <p className="text-sm text-black">
              Access to 15% of the world population with disabilities, increasing your potential user base.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Legal Compliance</h3>
            <p className="text-sm text-black">
              Meet requirements for EU projects and avoid potential lawsuits or penalties.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Improved SEO</h3>
            <p className="text-sm text-black">
              Accessibility improvements directly correspond to better search engine performance.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Social Responsibility</h3>
            <p className="text-sm text-black">
              Demonstrate your organization&apos;s commitment to inclusion and equal access.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#840032] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">How We Can Help</h2>
        <p className="text-black mb-4">
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
        </ul>
      </div>

      <div className="p-8 rounded-xl mb-8 shadow-lg relative overflow-hidden">  
        <h2 className="text-2xl font-semibold mb-4 text-black">Start Implementing Web Accessibility Now</h2>
        <p className="text-black mb-6">
          Don&apos;t wait until web accessibility becomes mandatory for your project. Start implementing it now to ensure equal access to your digital resources for all users.
        </p>
        
        <div className="bg-white p-4 rounded-lg inline-block shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="/contact" className="text-[#840032] hover:text-[#e59500] font-medium transition-colors flex items-center">
            Get accessibility consultation from FADS
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 