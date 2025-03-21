"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ClockIcon
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

export default function ServicesOverview() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="py-20 md:py-28 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
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
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm shadow-lg shadow-orange-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive Web Solutions
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032]">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Professional services to keep your website running smoothly, securely, and effectively in the digital landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600">
              Our expert team provides comprehensive services to ensure your online presence performs at its best. From routine maintenance to detailed audits, we&apos;ve got you covered.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
          >
            {/* Website Maintenance Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-6">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-[#e59500]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Website Maintenance</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Keep your website running smoothly with our comprehensive maintenance services. Regular updates, security patches, performance optimization, and more.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regular software updates & security patches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Performance optimization & monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Content updates & technical support</span>
                  </li>
                </ul>
                <Link 
                  href="/services/maintenance" 
                  className="flex items-center text-[#e59500] font-medium hover:text-[#840032] transition-colors duration-300 group"
                >
                  Learn more about maintenance
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
            
            {/* Website Audits Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-6">
                  <MagnifyingGlassIcon className="w-8 h-8 text-[#e59500]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Website Audits</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Get a comprehensive analysis of your website&apos;s performance, structure, and content. Identify issues and opportunities for improvement.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Technical SEO & performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-0.5 flex-shrink-0" />
                    <span>UX assessment & accessibility check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Security audit & detailed reporting</span>
                  </li>
                </ul>
                <Link 
                  href="/services/website-audits" 
                  className="flex items-center text-[#e59500] font-medium hover:text-[#840032] transition-colors duration-300 group"
                >
                  Learn more about website audits
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience in delivering high-quality web solutions for businesses of all sizes.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-full flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Timely Support</h3>
              <p className="text-gray-600">Fast response times and reliable support when you need it most.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e59500]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Customized Approach</h3>
              <p className="text-gray-600">We don't believe in one-size-fits-all solutions. Every business is unique, and we carefully listen to your needs to create exactly the solution that will perfectly fit your company.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#e59500]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Reliable Protection</h3>
              <p className="text-gray-600">Your website is your digital home. We provide complete protection against threats and maintain optimal performance so you can sleep peacefully and focus on growing your business.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl p-8 md:p-12 shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Website?</h2>
            <p className="text-lg mb-8">
              Whether you need regular maintenance or a comprehensive website audit, our team is here to help. Contact us today to discuss your needs.
            </p>
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 