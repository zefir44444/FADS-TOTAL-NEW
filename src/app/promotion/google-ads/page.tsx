"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  VideoCameraIcon,
  UserGroupIcon,
  PlayCircleIcon,
  ChartBarIcon,
  CursorArrowRaysIcon
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

export default function GoogleAds() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm shadow-lg shadow-orange-100"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              Google Advertising
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Google Ads Setup & Management
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Maximize your ROI with professionally managed Google Ads campaigns tailored to your business goals and target audience.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center shadow-lg shadow-orange-200/50"
            >
              Get a quote
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Our Google Ads Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <CursorArrowRaysIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Search Ads</h3>
              <p className="text-gray-600">Target customers actively searching for your products or services on Google.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <VideoCameraIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Display Ads</h3>
              <p className="text-gray-600">Visually engaging ads across Google&apos;s network of websites to build brand awareness.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <PlayCircleIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Shopping Ads</h3>
              <p className="text-gray-600">Showcase your products with images and pricing directly in Google search results.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Our Google Ads Management Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Research</h3>
              <p className="text-gray-600">Keyword and competitor analysis to identify opportunities</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Strategy</h3>
              <p className="text-gray-600">Campaign structure and bidding strategy development</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Launch</h3>
              <p className="text-gray-600">Ad creation, targeting configuration, and campaign activation</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Optimize</h3>
              <p className="text-gray-600">Continuous monitoring, testing, and refinement for improved performance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Benefits of Professional Google Ads Management
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <VideoCameraIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Immediate Results</h3>
              <p className="text-gray-600">Start generating leads and sales quickly while SEO builds over time.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Precise Targeting</h3>
              <p className="text-gray-600">Reach your ideal customers based on search intent, demographics, and behavior.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Measurable ROI</h3>
              <p className="text-gray-600">Track and analyze every aspect of your campaign performance and return on investment.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the most suitable Google Ads management plan for your business
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Basic Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-2 bg-[#e59500]"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold text-[#e59500] mb-4">€499<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">Perfect for small businesses just getting started with Google Ads</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#e59500] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to €2,500 monthly ad spend</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#e59500] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Search ads campaign setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#e59500] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#e59500] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monthly performance reports</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Link 
                  href="/contact?service=google-ads-starter" 
                  className="block w-full text-center py-3 px-4 bg-[#e59500] text-white rounded-lg font-medium hover:bg-[#d48700] transition-colors duration-300"
                >
                  Select
                </Link>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col border-2 border-[#840032] relative"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute top-0 right-0 bg-[#840032] text-white px-4 py-1 rounded-bl-lg font-medium">
                Popular
              </div>
              <div className="h-2 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <div className="text-4xl font-bold text-[#840032] mb-4">€799<span className="text-lg text-gray-500">/mo</span></div>
                <p className="text-gray-600 mb-6">For businesses looking to grow and expand their digital presence</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to €5,000 monthly ad spend</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Search and Display campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A/B testing of ad copy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bi-weekly optimization</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Link 
                  href="/contact?service=google-ads-growth" 
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-[#e59500] to-[#840032] text-white rounded-lg font-medium hover:shadow-lg hover:from-[#d48700] hover:to-[#730029] transition-all duration-300"
                >
                  Select
                </Link>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-2 bg-[#840032]"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-[#840032] mb-4">Contact for pricing</div>
                <p className="text-gray-600 mb-6">Advanced solution for established businesses seeking maximum ROI</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>€5,000+ monthly ad spend</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full-funnel campaign strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Shopping ads (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conversion rate optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly performance reviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#840032] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Link 
                  href="/contact?service=google-ads-enterprise" 
                  className="block w-full text-center py-3 px-4 bg-[#840032] text-white rounded-lg font-medium hover:bg-[#730029] transition-colors duration-300"
                >
                  Select
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Custom option */}
          <motion.div
            className="mt-12 p-6 bg-white rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
            <p className="mb-6 text-gray-600">Let&apos;s work together to design a personalized Google Ads strategy that perfectly matches your business goals and delivers remarkable results</p>
            <Link 
              href="/contact?service=google-ads-custom" 
              className="inline-flex items-center text-[#e59500] hover:text-[#840032] font-medium transition-colors duration-300"
            >
              Contact us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
} 