"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  CommandLineIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SEOArticle() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.header 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Digital Marketing
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          What Is SEO and Why It Matters for Businesses in Europe
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          At FADS Digital Hub, we help businesses in Finland and across the EU grow through data-driven SEO strategies. In this guide, we explain what SEO is, how it works, and why it's essential for long-term growth in the European market.
        </p>
        <div className="flex items-center justify-center text-gray-500 text-sm">
          <span>March 25, 2024</span>
          <span className="mx-2">•</span>
          <span>10 min read</span>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div 
        className="prose prose-lg max-w-none"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* What Is SEO Section */}
        <motion.section variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">What Is SEO?</h2>
          <p className="text-lg mb-6">
            SEO (Search Engine Optimization) is the process of improving a website to rank higher in search engine results pages (SERPs), especially on Google. The goal is simple: attract more relevant visitors who are already searching for what your business offers.
          </p>
        </motion.section>

        {/* Why Everyone Wants to Be #1 Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">Why Everyone Wants to Be #1 in Search</h2>
          <p className="text-lg mb-6">
            Imagine the internet as a massive library and search engines as expert librarians. When someone enters a query, Google instantly sorts through billions of pages to find the most relevant answers using complex ranking algorithms.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold mb-4">Top positions in search results mean more visibility and traffic:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>91.5% of users stay on the first page</li>
              <li>Nearly 50% of all clicks go to the top 3 results</li>
            </ul>
          </div>
          <p className="text-lg">
            Being visible in search results is crucial for European businesses, where digital competition is high and online decision-making is fast.
          </p>
          <div className="bg-[#e59500]/10 p-6 rounded-xl mt-6">
            <p className="text-lg">
              Need help increasing your search visibility?{' '}
              <Link href="/contact" className="text-[#e59500] font-medium hover:underline">
                Contact FADS
              </Link>
            </p>
          </div>
        </motion.section>

        {/* How SEO Has Evolved Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">How SEO Has Evolved</h2>
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">The Key Stages:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-bold mr-2">1990s–1998:</span>
                <span>Keyword stuffing era</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">1998–2009:</span>
                <span>Link building era (Google PageRank)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2009–2012:</span>
                <span>Machine learning integration</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2012–2016:</span>
                <span>Penalties for low-quality links (Google Penguin)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2016–2022:</span>
                <span>Emphasis on content quality and usability</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2023+:</span>
                <span>AI-driven SEO (Search Generative Experience)</span>
              </li>
            </ul>
          </div>
          <p className="text-lg">
            Today, SEO success depends on structured content, technical performance, user experience, and the right use of AI tools.
          </p>
          <div className="bg-[#e59500]/10 p-6 rounded-xl mt-6">
            <p className="text-lg">
              Want your website to keep up with modern SEO?{' '}
              <Link href="/contact" className="text-[#e59500] font-medium hover:underline">
                Talk to FADS
              </Link>
            </p>
          </div>
        </motion.section>

        {/* What Makes Up SEO Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">What Makes Up SEO?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Keyword Research & Analytics</h3>
              <p className="text-gray-600">
                We identify what your audience is searching for using data and competitor analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <CommandLineIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. On-Page Optimization</h3>
              <p className="text-gray-600">
                We improve your website from the inside with technical fixes and content optimization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Off-Page Optimization</h3>
              <p className="text-gray-600">
                We build a strong reputation for your website with quality backlinks and mentions.
              </p>
            </div>
          </div>

          <div className="bg-[#e59500]/10 p-6 rounded-xl">
            <p className="text-lg">
              FADS offers white-hat link-building and outreach services across the EU market.
            </p>
          </div>
        </motion.section>

        {/* SEO Methods Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">SEO Methods: White, Grey & Black Hat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-600">White Hat</h3>
              <p className="text-gray-600">
                Follows search engine guidelines (quality content, ethical link-building)
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Grey Hat</h3>
              <p className="text-gray-600">
                Risky shortcuts that may work short-term but can lead to penalties
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Black Hat</h3>
              <p className="text-gray-600">
                Spammy, manipulative techniques — highly discouraged
              </p>
            </div>
          </div>
          <p className="text-lg mt-6">
            We use only ethical, long-term strategies aligned with Google guidelines.
          </p>
        </motion.section>

        {/* SEO vs PPC Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">SEO vs. Paid Ads (PPC)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left border">Feature</th>
                  <th className="p-4 text-left border">SEO</th>
                  <th className="p-4 text-left border">PPC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 border">Speed</td>
                  <td className="p-4 border">Slower start</td>
                  <td className="p-4 border">Instant results</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 border">Cost over time</td>
                  <td className="p-4 border">More cost-effective long-term</td>
                  <td className="p-4 border">Requires constant budget</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 border">Trust & branding</td>
                  <td className="p-4 border">Higher trust in organic listings</td>
                  <td className="p-4 border">Labeled as ads</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 border">Flexibility</td>
                  <td className="p-4 border">Slower to test</td>
                  <td className="p-4 border">Highly agile and testable</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 border">Effect duration</td>
                  <td className="p-4 border">Long-lasting</td>
                  <td className="p-4 border">Stops when budget ends</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg mt-6">
            The best strategy? <strong>Combine both</strong>. SEO builds long-term presence, PPC provides immediate reach and testing opportunities.
          </p>
          <div className="bg-[#e59500]/10 p-6 rounded-xl mt-6">
            <p className="text-lg">
              Want help with both SEO and Ads?{' '}
              <Link href="/contact" className="text-[#e59500] font-medium hover:underline">
                FADS can help
              </Link>
            </p>
          </div>
        </motion.section>

        {/* AI in SEO Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">The Rise of AI in SEO</h2>
          <p className="text-lg mb-6">
            Since 2023, both Google and SEOs have been using AI:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Search Generative Experience (SGE) creates AI-driven answers</li>
            <li>Neural networks improve understanding of search intent</li>
            <li>SEO tools now use AI for faster audits, content creation, and analysis</li>
          </ul>
          <p className="text-lg">
            Modern SEO requires both technical expertise and AI adaptability. Our team at FADS integrates AI-powered tools with human insight to deliver efficient and ethical SEO solutions.
          </p>
        </motion.section>

        {/* Cost Section */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">How Much Does SEO Cost?</h2>
          <p className="text-lg mb-6">
            SEO pricing in Europe depends on your goals, industry, and competition. At FADS, we offer flexible plans:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>Entry-level for local visibility</li>
            <li>Growth plans for SME traffic expansion</li>
            <li>Enterprise strategies for high-competition niches</li>
          </ul>
          <div className="bg-[#e59500]/10 p-6 rounded-xl">
            <p className="text-lg">
              Ready to grow?{' '}
              <Link href="/contact" className="text-[#e59500] font-medium hover:underline">
                Get your SEO quote
              </Link>
            </p>
          </div>
        </motion.section>

        {/* Final Thoughts */}
        <motion.section variants={fadeInUp} className="my-12">
          <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
          <p className="text-lg mb-6">
            Search engines change, but SEO remains one of the most powerful digital tools for long-term growth. When done right, SEO brings in consistent traffic, higher conversions, and a stronger brand.
          </p>
          <p className="text-lg mb-6">
            If you don't have time to keep up with algorithms and strategies — we do.
          </p>
          <div className="bg-[#e59500]/10 p-6 rounded-xl">
            <p className="text-lg font-bold mb-4">
              Let FADS handle your SEO, so you can focus on your business.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
            >
              Schedule a free consultation
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </article>
  );
} 