"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function GoogleSearchAdsGuide() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-1 rounded-full text-[#e59500] font-medium text-sm">
          March 21, 2024
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032]">
          Google Search Ads: Complete Guide to Basics, Best Practices & Pricing (2025)
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-black">
          Comprehensive guide to Google Search Ads in 2025. Learn about PPC basics, best practices, pricing, and how to optimize your campaigns for maximum ROI.
        </p>
      </div>

      <div className="relative h-64 md:h-96 w-full group mb-8">
        <Image 
          src="/news/google-search-ads-guide/ppc-marketing.jpg" 
          alt="Google Search Ads Guide" 
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="transition-transform duration-500 group-hover:scale-105 rounded-xl"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src = "/fads-black.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
          <span className="text-sm md:text-base font-medium">Google Search Ads: Your Gateway to Targeted Marketing</span>
        </div>
      </div>

      <p className="lead text-xl text-black mb-8 leading-relaxed">
        In the competitive digital landscape, Google Search Ads remain one of the most effective ways to connect with potential customers. This guide covers everything from the basics to advanced strategies for maximizing your ad spend in 2025.
      </p>
      
      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">What Are Google Search Ads?</h2>
        <p className="text-black mb-4">
          Google Search Ads are keyword-driven pay-per-click (PPC) ads that appear at the top or bottom of Google's search results pages (SERPs). They immediately connect your business with users actively searching for products or services you offer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Use Google Search Ads?</h2>
          <p className="text-black mb-4">
            Google Search Ads offer numerous advantages, making them an essential tool for digital marketing:
          </p>
          
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Instant visibility, unlike SEO which takes months
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Captures user intent by targeting active searchers
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Budget flexibility for businesses of any size
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Positive impact on both online and offline metrics
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">What is Pay-Per-Click (PPC) Marketing?</h2>
          <p className="text-black mb-4">
            Pay-per-click (PPC) marketing is an online advertising model where advertisers pay a fee each time their ad is clicked by a user. It involves bidding on keywords relevant to your audience across platforms such as Google Ads, Facebook, Instagram, LinkedIn, Twitter, and TikTok.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#840032] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">PPC vs. SEM vs. SEO</h2>
        <p className="text-black mb-4">
          Search Engine Marketing (SEM) is an overarching strategy that includes both PPC and Search Engine Optimization (SEO). PPC refers specifically to paid online advertising, where advertisers pay for clicks, while SEO focuses on organically improving a website's visibility through content optimization, link-building, and keyword strategies. Effective digital marketing often integrates both PPC and SEO to maximize visibility and reach.
        </p>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-xl"></div>
        <div className="relative p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">How Do Google Search Ads Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#e59500] font-bold text-xl">1</span>
              </div>
              <h3 className="font-medium mb-2">Set Bids</h3>
              <p className="text-sm">Advertisers bid on keywords relevant to their business</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#e59500] font-bold text-xl">2</span>
              </div>
              <h3 className="font-medium mb-2">Quality Score</h3>
              <p className="text-sm">Google evaluates ad relevance, quality, and landing page experience</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#e59500] font-bold text-xl">3</span>
              </div>
              <h3 className="font-medium mb-2">Pay Per Click</h3>
              <p className="text-sm">Advertisers only pay when users click on their ads</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cost of Google Ads (2025)</h2>
        <p className="text-black mb-4">
          Google Ads costs vary significantly based on competition, industry, and keyword demand. The average CPC across industries for search ads is approximately $2.69, with display ads averaging around $0.63 per click. Competitive industries such as legal services and home improvement generally have higher CPC rates, often above $6.00 per click. Meanwhile, industries with lower competition like travel or entertainment enjoy lower CPC rates.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-black">Key Cost Metrics:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <strong>Cost Per Thousand Impressions (CPM)</strong>
            </div>
            <p className="mt-2 pl-7 text-sm">Search ads average around $38.40, whereas display ads average about $3.12.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#e59500] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <strong>Cost Per Acquisition (CPA)</strong>
            </div>
            <p className="mt-2 pl-7 text-sm">The average cost to acquire a new customer using Google Ads is around $48.96, though this varies widely by industry.</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#840032] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">How to Set Up a Google Ads Account</h2>
        <p className="text-black mb-4">
          To launch your first campaign, visit ads.google.com to create and verify your account. Clearly define your campaign objectives such as increasing sales, generating leads, or driving web traffic. Next, configure your targeting settings, including audience demographics, locations, and languages. Then build compelling ads by crafting relevant headlines, engaging descriptions, and clear URLs that lead to optimized landing pages.
        </p>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Best Practices for Google Search Ads</h2>
        <p className="text-black mb-4">
          To ensure successful campaigns, utilize keyword match types (broad, phrase, exact, and negative) to precisely control when your ads appear. Maximize ad performance by fully utilizing character limits—30 characters for headlines and 90 for descriptions. Regularly implement conversion tracking to measure key user actions like purchases or sign-ups, and periodically optimize your ad copy and campaign settings based on these insights.
        </p>
      </div>

      <div className="mb-12 bg-[#e59500]/10 p-8 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#e59500]/20 rounded-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#840032]/10 rounded-full -ml-12 -mb-12"></div>
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 relative z-10">PPC Strategy & Campaign Planning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Define Your Audience</h3>
            <p className="text-sm text-black">
              Clearly identify demographics, interests, and behaviors of your target audience for more effective campaigns.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Set Clear Goals</h3>
            <p className="text-sm text-black">
              Establish specific objectives like driving website traffic, boosting sales, or generating leads.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Keyword Research</h3>
            <p className="text-sm text-black">
              Identify and target search terms that resonate with your audience and match their search intent.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3 text-[#e59500]">Budget Management</h3>
            <p className="text-sm text-black">
              Set and manage your budget strategically to optimize spend efficiency and maximize ROI.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#840032] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Common Mistakes to Avoid</h2>
        <p className="text-black mb-4">
          Avoid common pitfalls such as poor keyword selection, which can attract irrelevant traffic and waste ad spend. Weak ad copy can also fail to engage potential customers—always ensure your messaging is clear, concise, and persuasive. Additionally, inadequate budgets can restrict performance; it's crucial to test and incrementally scale your spending based on performance insights. Proper targeting and the use of ad extensions further ensure your ads reach the most receptive audiences effectively.
        </p>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#e59500] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Measuring Ad Performance</h2>
        <p className="text-black mb-4">
          Accurately measure your Google Ads effectiveness by tracking key metrics including Return on Ad Spend (ROAS), Cost Per Click (CPC), Cost Per Conversion, and Cost Per Acquisition (CPA). Integrating offline conversion tracking allows you to better understand how your online ads influence offline sales and customer behaviors.
        </p>
      </div>

      <div className="p-6 rounded-xl mb-8 bg-gray-50 border-l-4 border-[#840032] shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Advanced Strategies for Optimizing Budget</h2>
        <p className="text-black mb-4">
          Leverage automated bidding strategies like Target CPA or Maximize Conversions, powered by AI, to dynamically manage bids based on the likelihood of conversions. Schedule your ads to appear during peak engagement times to maximize efficiency, and use audience segmentation and remarketing to focus on the most valuable users. Regular performance analysis and ongoing A/B testing will further refine your campaigns, ensuring the best possible return on investment.
        </p>
      </div>

      <div className="p-8 rounded-xl mb-8 bg-gradient-to-br from-[#e59500]/20 to-[#840032]/20 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-20">
          <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v8m-4-4h8"></path>
          </svg>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Work with a Google Ads Agency?</h2>
        <p className="text-black mb-6">
          Hiring a specialized Google Ads agency provides access to expert knowledge, advanced tools, and strategic insights that can dramatically improve your campaign outcomes. Agencies help optimize budget allocation, enhance ad performance, and free up valuable internal resources, allowing you to focus on core business functions. Their proven track records in delivering successful PPC campaigns offer a reliable path to achieving your marketing goals.
        </p>
        
        <div className="bg-white p-4 rounded-lg inline-block">
          <Link href="/contact" className="text-[#e59500] hover:text-[#840032] font-medium transition-colors">
            Get expert advice from FADS → 
          </Link>
        </div>
      </div>

      <div className="p-6 rounded-xl mb-12 bg-gray-900 text-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Real-World Results</h2>
        <p className="mb-6">
          Agencies like FADS demonstrate how effective Google Ads management can result in substantial increases in ROI, significant reductions in cost per acquisition, and improved overall lead quality and conversion rates.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-3xl font-bold text-[#e59500] mb-2">+145%</div>
            <div className="text-sm text-gray-300">Average ROI Increase</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-3xl font-bold text-[#e59500] mb-2">-32%</div>
            <div className="text-sm text-gray-300">Cost Per Acquisition</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-3xl font-bold text-[#e59500] mb-2">+78%</div>
            <div className="text-sm text-gray-300">Lead Quality Improvement</div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Get Started Now</h2>
      <p className="text-black mb-6">
        Leverage Google Search Ads today to drive growth and quickly achieve measurable business outcomes. Define clear objectives, set realistic budgets, and continuously monitor and refine your campaigns for sustained success. Start small, measure your results, and strategically scale your efforts to maximize your digital marketing impact. <Link href="/contact" className="text-[#e59500] hover:underline font-medium">Contact us</Link> for a consultation to optimize your Google Ads campaigns.
      </p>
    </div>
  );
} 