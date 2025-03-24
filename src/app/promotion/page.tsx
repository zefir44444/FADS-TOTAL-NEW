"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

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

export default function PromotionServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Promotion Services
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Digital promotion strategies to boost your business visibility and growth
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Promotion Solutions</h2>
            <p className="text-gray-600">
              From search engine optimization to advanced AI-driven strategies, we offer a complete suite of promotion services designed to maximize your online presence and drive measurable results.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* SEO */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e59500]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">SEO Optimization</h3>
              <p className="text-gray-600 mb-6">Improve your search engine rankings, drive targeted organic traffic, and achieve growth for your business.</p>
              <Link 
                href="/promotion/seo" 
                className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
              >
                Learn more
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
                  className="ml-1 transform transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>

            {/* Google Ads */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e59500]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Google Ads Management</h3>
              <p className="text-gray-600 mb-6">Maximize ROI with strategic pay-per-click campaigns, precise targeting, and ongoing optimization.</p>
              <Link 
                href="/promotion/google-ads" 
                className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
              >
                Learn more
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
                  className="ml-1 transform transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>

            {/* YouTube Advertising */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e59500]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">YouTube Advertising</h3>
              <p className="text-gray-600 mb-6">Engage your audience with compelling video ads on the world's largest video platform to build brand awareness.</p>
              <Link 
                href="/promotion/youtube" 
                className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
              >
                Learn more
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
                  className="ml-1 transform transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>

            {/* Growth Engine */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e59500]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Growth Engine</h3>
              <p className="text-gray-600 mb-6">Our growth solution combining website development, SEO, paid advertising, and AI optimization to deliver measurable, consistent results.</p>
              <Link 
                href="/promotion/growth-engine" 
                className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
              >
                Learn more
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
                  className="ml-1 transform transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Promotion Services</h2>
            <p className="text-gray-600">
              We combine data-driven strategies, industry expertise, and cutting-edge technologies to deliver measurable results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <h3 className="text-xl font-semibold mb-4">Data-Driven Approach</h3>
              <p className="text-gray-600">Every strategy we implement is backed by thorough research and analytics to ensure optimal performance.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-gray-600">Our team consists of seasoned professionals with experience across various industries and digital platforms.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
              <p className="text-gray-600">We create promotion strategies aligned with your specific business goals and target audience.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <h3 className="text-xl font-semibold mb-4">Transparent Reporting</h3>
              <p className="text-gray-600">We provide clear, comprehensive reports so you can track the impact of our promotion efforts.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl p-8 md:p-12 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Ready to Boost Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Let's create a promotion strategy for your business goals. Contact us today to get started.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                href="/contact" 
                className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center shadow-lg shadow-orange-200/50"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 