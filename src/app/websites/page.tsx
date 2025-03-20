"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Варианты анимации для контейнеров с элементами
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Варианты анимации для элементов
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function WebsitesOverview() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Эффект для отслеживания прокрутки
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollPosition(scrolled);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section 
        className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Professional Web Development
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Websites Development Solutions
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore our range of website development services tailored to meet your business needs and objectives.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
            >
              Get a quote
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Website Types Section */}
      <motion.section 
        className="py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Business Websites */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Business Websites</h3>
                <p className="text-gray-600 mb-4">
                  Establish your brand&apos;s online presence with a professional business website that reflects your company&apos;s values and services.
                </p>
                <Link 
                  href="/websites/business" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* E-commerce Websites */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">E-commerce Websites</h3>
                <p className="text-gray-600 mb-4">
                  Create a powerful online store that drives sales and provides an exceptional shopping experience for your customers.
                </p>
                <Link 
                  href="/websites/ecommerce" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Landing Pages */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Landing Pages</h3>
                <p className="text-gray-600 mb-4">
                  Convert visitors into customers with a focused landing page designed to highlight a specific product, service, or campaign.
                </p>
                <Link 
                  href="/websites/landing" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Showcase Websites */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Showcase Websites</h3>
                <p className="text-gray-600 mb-4">
                  Display your portfolio, products, or services in an elegant and visually appealing showcase website.
                </p>
                <Link 
                  href="/websites/showcases" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Blog Websites */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Blog Websites</h3>
                <p className="text-gray-600 mb-4">
                  Share your expertise and engage with your audience through a professionally designed blog website.
                </p>
                <Link 
                  href="/websites/blogs" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            {/* Custom Website Development */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Custom Website Development</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your existing website with custom features, improved design, or additional functionality to better meet your business needs.
                </p>
                <Link 
                  href="/websites/custom" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 z-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e59500]/5 via-transparent to-[#840032]/5"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p 
                className="text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                Contact us today to discuss your website needs and get a personalized quote for your project.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 