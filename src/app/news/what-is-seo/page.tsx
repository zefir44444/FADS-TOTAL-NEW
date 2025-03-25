"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SeoPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1 rounded-full text-[#e59500] font-medium text-sm">
          March 25, 2024
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032]">
          What Is SEO and Why It Matters for Businesses in Europe
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-600">
          At FADS Digital Hub, we help businesses in Finland and across the EU grow through data-driven SEO strategies. In this guide, we explain what SEO is, how it works, and why it&apos;s essential for long-term growth in the European market.
        </p>
      </div>

      <div className="relative h-64 md:h-120 w-full group mb-8">
        <Image 
          src="/news/what-is-seo/grow-online-business.jpg" 
          alt="Grow Your Online Business with SEO" 
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="transition-transform duration-500 group-hover:scale-105"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = "/fads-black.svg";
          }}
        />
      </div>

      <div className="p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">What Is SEO?</h2>
        <p className="text-black mb-4">
          SEO (Search Engine Optimization) is the process of improving a website to rank higher in search engine results pages (SERPs), especially on Google. The goal is simple: attract more relevant visitors who are already searching for what your business offers.
        </p>
      </div>

      <div className="p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#e59500]">Why Everyone Wants to Be #1 in Search</h2>
        <p className="text-black mb-4">
          Imagine the internet as a massive library and search engines as expert librarians. When someone enters a query, Google instantly sorts through billions of pages to find the most relevant answers using complex ranking algorithms.
        </p>
        <p className="text-black mb-4">
          Top positions in search results mean more visibility and traffic:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            91.5% of users stay on the first page
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Nearly 50% of all clicks go to the top 3 results
          </li>
        </ul>
        
        <p className="text-black mt-4">
          Being visible in search results is crucial for European businesses, where digital competition is high and online decision-making is fast.
        </p>
        
        <div className="mt-6 p-4 rounded-lg border-l-4 border-[#e59500]">
          <p className="text-black">
            Need help increasing your search visibility? <Link href="https://fads.fi" className="text-[#863800] hover:text-[#e59500] transition-colors">Contact FADS</Link>
          </p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">How SEO Has Evolved</h2>
      
      <div className="p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#e59500]">The Key Stages:</h3>
        
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#e59500] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <span className="font-medium">1990s–1998:</span> Keyword stuffing era
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#e59500] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <span className="font-medium">1998–2009:</span> Link building era (Google PageRank)
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#e59500] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <span className="font-medium">2009–2012:</span> Machine learning integration
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#e59500] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <span className="font-medium">2012–2016:</span> Penalties for low-quality links (Google Penguin)
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#e59500] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <span className="font-medium">2016–2022:</span> Emphasis on content quality and usability
            </div>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#e59500] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <span className="font-medium">2023+:</span> AI-driven SEO (Search Generative Experience)
            </div>
          </li>
        </ul>
        
        <p className="text-black mt-4">
          Today, SEO success depends on structured content, technical performance, user experience, and the right use of AI tools.
        </p>
        
        <div className="mt-6 p-4 rounded-lg border-l-4 border-[#e59500]">
          <p className="text-black">
            Want your website to keep up with modern SEO? <Link href="https://fads.fi" className="text-[#863800] hover:text-[#e59500] transition-colors">Talk to FADS</Link>
          </p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What Makes Up SEO?</h2>
      
      <div className="p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#e59500]">1. Keyword Research & Analytics</h3>
        <p className="text-black mb-4">
          We identify what your audience is searching for using data and competitor analysis. This allows us to build a semantic core — a structured set of relevant keywords and topics for your website.
        </p>
      </div>
      
      <div className="p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#e59500]">2. On-Page Optimization</h3>
        <p className="text-black mb-4">
          We improve your website from the inside:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Technical fixes (speed, mobile-friendliness, indexing)
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Clean site structure and navigation
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Internal linking
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Meta tag setup (title, description)
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Page content tailored to specific queries
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            UX/UI improvements and trust elements
          </li>
        </ul>
      </div>
      
      <div className="p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#e59500]">3. Off-Page Optimization</h3>
        <p className="text-black mb-4">
          We build a strong reputation for your website with:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            High-quality backlinks from relevant sites
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Mentions in blogs, directories, and media
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            PR and social sharing strategies
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Competitive backlink gap analysis
          </li>
        </ul>
        
        <div className="mt-6 p-4 rounded-lg border-l-4 border-[#e59500]">
          <p className="text-black">
            FADS offers white-hat link-building and outreach services across the EU market.
          </p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">SEO Methods: White, Grey & Black Hat</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-[#e59500] flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            White Hat
          </h3>
          <p className="text-black">
            Follows search engine guidelines (quality content, ethical link-building)
          </p>
        </div>
        
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-gray-500 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            Grey Hat
          </h3>
          <p className="text-black">
            Risky shortcuts that may work short-term but can lead to penalties
          </p>
        </div>
        
        <div className="p-6 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
            </svg>
            Black Hat
          </h3>
          <p className="text-black">
            Spammy, manipulative techniques — highly discouraged
          </p>
        </div>
      </div>
      
      <p className="text-black mb-8">
        We use only ethical, long-term strategies aligned with Google guidelines.
      </p>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">SEO vs. Paid Ads (PPC)</h2>
      
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Feature</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">SEO</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">PPC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Speed</td>
              <td className="py-2 px-4 border-b border-gray-200">Slower start</td>
              <td className="py-2 px-4 border-b border-gray-200">Instant results</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Cost over time</td>
              <td className="py-2 px-4 border-b border-gray-200">More cost-effective long-term</td>
              <td className="py-2 px-4 border-b border-gray-200">Requires constant budget</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Trust & branding</td>
              <td className="py-2 px-4 border-b border-gray-200">Higher trust in organic listings</td>
              <td className="py-2 px-4 border-b border-gray-200">Labeled as ads</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Flexibility</td>
              <td className="py-2 px-4 border-b border-gray-200">Slower to test</td>
              <td className="py-2 px-4 border-b border-gray-200">Highly agile and testable</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">Effect duration</td>
              <td className="py-2 px-4 border-b border-gray-200">Long-lasting</td>
              <td className="py-2 px-4 border-b border-gray-200">Stops when budget ends</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-black mb-4 font-semibold">
        The best strategy? <span className="text-[#e59500]">Combine both</span>. SEO builds long-term presence, PPC provides immediate reach and testing opportunities.
      </p>
      
      <div className="mt-2 mb-8 p-4 rounded-lg border-l-4 border-[#e59500]">
        <p className="text-black">
          Want help with both SEO and Ads? <Link href="https://fads.fi" className="text-[#863800] hover:text-[#e59500] transition-colors">FADS can help</Link>
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">The Rise of AI in SEO</h2>
      
      <div className="p-6 rounded-xl mb-8">
        <p className="text-black mb-4">
          Since 2023, both Google and SEOs have been using AI:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Search Generative Experience (SGE) creates AI-driven answers
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Neural networks improve understanding of search intent
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            SEO tools now use AI for faster audits, content creation, and analysis
          </li>
        </ul>
        
        <p className="text-black mt-4">
          Modern SEO requires both technical expertise and AI adaptability. Our team at FADS integrates AI-powered tools with human insight to deliver efficient and ethical SEO solutions.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">How Much Does SEO Cost?</h2>
      
      <div className="p-6 rounded-xl mb-8">
        <p className="text-black mb-4">
          SEO pricing in Europe depends on your goals, industry, and competition. At FADS, we offer flexible plans:
        </p>
        
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Entry-level for local visibility
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Growth plans for SME traffic expansion
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Enterprise strategies for high-competition niches
          </li>
        </ul>
        
        <div className="mt-6 p-4 rounded-lg border-l-4 border-[#e59500]">
          <p className="text-black">
            Ready to grow? <Link href="https://fads.fi/contact" className="text-[#863800] hover:text-[#e59500] transition-colors">Get your SEO quote</Link>
          </p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Final Thoughts</h2>
      
      <div className="p-6 rounded-xl mb-8">
        <p className="text-black mb-4">
          Search engines change, but SEO remains one of the most powerful digital tools for long-term growth. When done right, SEO brings in consistent traffic, higher conversions, and a stronger brand.
        </p>
        
        <p className="text-black mb-4">
          If you don&apos;t have time to keep up with algorithms and strategies — we do.
        </p>
        
        <p className="text-black font-semibold text-center my-6">
          <span className="text-black">Let FADS handle your SEO, so you can focus on your business.</span>
        </p>
        
        <div className="text-center mt-6">
          <Link 
            href="https://fads.fi/contact" 
            className="gradient-button"
          >
            Schedule a free consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 