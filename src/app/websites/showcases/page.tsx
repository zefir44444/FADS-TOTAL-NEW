"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  PresentationChartLineIcon,
  EyeIcon,
  UserGroupIcon
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

export default function ShowcaseWebsites() {
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
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm shadow-lg shadow-orange-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Product Display Solutions
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Showcase Websites
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Elegant showcase websites that highlight your products and services with stunning visuals and intuitive browsing.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-200/50"
            >
              Get a quote
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Key Benefits of Showcase Websites
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <EyeIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Visual Impact</h3>
              <p className="text-gray-600">Create a stunning visual presentation that highlights your products or services in their best light.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">User Engagement</h3>
              <p className="text-gray-600">Engage visitors with interactive elements and intuitive navigation that showcases your work effectively.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <PresentationChartLineIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Professional Credibility</h3>
              <p className="text-gray-600">Establish trust and credibility with a polished, professional presentation of your portfolio or products.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Showcase Website Development Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Content Strategy</h3>
              <p className="text-gray-600">We identify your key visuals and content that will create the strongest impression</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Visual Design</h3>
              <p className="text-gray-600">We create a stunning, immersive design that showcases your work in the best possible way</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Development</h3>
              <p className="text-gray-600">We develop a responsive, fast-loading site with interactive elements and smooth animations</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Optimization</h3>
              <p className="text-gray-600">We optimize image loading, SEO, and performance to ensure an impeccable experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Inclusions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            What&apos;s Included in the Service?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, staggerChildren: 0.1 }}
          >
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Technical Specification
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Website Structure
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Custom Design Creation
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Programming & Development
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Template Installation
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Content Integration
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Hosting Deployment
              </h3>
            </motion.div>
            
            <motion.div 
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-2" />
                Website Testing
              </h3>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              className="bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 p-6 md:p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-700 text-lg md:text-xl text-center">
                Even a small startup can afford a professional online presence. A showcase website is an effective and budget-friendly solution that works 24/7 to grow your business.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-700 text-lg mb-6 text-center">
                Looking for a reliable partner to create a high-converting website at a competitive price?
              </p>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-200/50"
                >
                  Contact our team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Website Differences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            How Does a Showcase Website Differ from Other Web Solutions?
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto mb-12 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6">
              A showcase website is much simpler to develop than larger-scale projects like corporate portals or e-commerce platforms, which require more time and technical resources. The standard structure includes 4–6 key sections:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">1. Engaging First Screen</h3>
                <p className="text-gray-600">
                  A compelling value proposition or a visually appealing design that highlights your business identity.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">2. FAQ Section</h3>
                <p className="text-gray-600">
                  Address common customer concerns and objections, such as product quality and authenticity guarantees.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">3. Image Slider</h3>
                <p className="text-gray-600">
                  Showcase office photos, product images, or promotional banners directly on the homepage.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">4. Intuitive Navigation Menu</h3>
                <p className="text-gray-600">
                  A well-structured menu ensures an easy and seamless user experience without overwhelming visitors.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">5. News & Blog Section</h3>
                <p className="text-gray-600">
                  Regular updates on company news, promotions, and industry insights help establish trust and credibility.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">6. Testimonials</h3>
                <p className="text-gray-600">
                  A dedicated review section where clients can leave feedback, reinforcing trust and reliability.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">7. Conversion Forms</h3>
                <p className="text-gray-600">
                  Call-to-action buttons for inquiries, purchases, subscriptions, and more—strategically placed for maximum impact.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-black">8. Portfolio</h3>
                <p className="text-gray-600">
                  A showcase of completed projects, demonstrating expertise and encouraging potential customers to choose your services.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-black">The Key to a High-Performing Showcase Website</h3>
            <div className="space-y-6 text-gray-700">
              <p>
                Despite its simple structure, the website should immediately grab visitors&apos; attention and guide them through the marketing funnel towards the desired action—whether it&apos;s a call, a request, or a subscription.
              </p>
              <p>
                Unlike large websites, where you have unlimited space to present your product, a showcase website must be concise, visually appealing, and conversion-focused. An overload of text or poor navigation will drive potential clients away.
              </p>
              <p>
                That&apos;s why at FADS, we build streamlined, sales-driven websites with:
              </p>
              
              <motion.ul 
                className="list-disc pl-6 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  High-quality visuals
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Strategic pricing displays
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Carefully crafted value propositions
                </motion.li>
              </motion.ul>
              
              <p>
                We ensure that your website not only looks great but also works as an effective business tool to engage visitors and turn them into customers.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-200/50"
            >
              Let&apos;s build your website today!
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 