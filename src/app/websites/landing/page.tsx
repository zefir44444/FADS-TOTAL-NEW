"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  CommandLineIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  MegaphoneIcon
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

export default function LandingPages() {
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
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Conversion-Focused Design
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Landing Pages
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              High-converting landing pages designed to turn visitors into customers and maximize your marketing campaigns.
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
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center hover:scale-105 transition-transform duration-300"
            >
              Get a quote
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Key Benefits of Landing Pages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">High Conversion Rates</h3>
              <p className="text-gray-600">Focused messaging and clear CTAs designed to maximize conversions from your target audience.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Measurable Results</h3>
              <p className="text-gray-600">Clear analytics and tracking to measure performance and optimize your marketing ROI.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <BuildingStorefrontIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Brand Enhancement</h3>
              <p className="text-gray-600">Showcase your brand&apos;s unique value proposition in a focused, compelling presentation.</p>
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
            Our Landing Page Development Process
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
              <h3 className="text-xl font-semibold mb-2 text-black">Strategy</h3>
              <p className="text-gray-600">Defining your goals, target audience, and conversion approach</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Design</h3>
              <p className="text-gray-600">Creating a compelling layout that guides visitors toward conversion</p>
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
              <p className="text-gray-600">Building responsive, fast-loading pages with effective CTAs</p>
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
              <p className="text-gray-600">Testing, refining, and improving to maximize conversion rates</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Landing Page Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Business Challenges Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Business Challenges Solved by a Landing Page
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenge 1 */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <RocketLaunchIcon className="w-6 h-6 text-[#e59500] mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-black">Attracting Potential Customers</h4>
                </div>
                <p className="text-lg mb-4">We drive business growth by:</p>
                <motion.ul 
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    "Crafting compelling offers.",
                    "Differentiating you from competitors.",
                    "Building trust and encouraging purchases."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <p className="text-lg mb-3">
                  We design unique and engaging landing pages that users remember and love.
                </p>
              </motion.div>
              
              {/* Challenge 2 */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-[#e59500] mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-black">Increasing Sales and Revenue</h4>
                </div>
                <p className="text-lg mb-4">We ensure full control over your primary sales and positioning tool.</p>
                <motion.ul 
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    "Developing visually appealing landing pages that generate more leads.",
                    "Optimizing your budget by increasing website conversion rates."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <p className="text-lg mb-3">
                  A landing page plays a decisive role in every fifth purchase.
                </p>
              </motion.div>
              
              {/* Challenge 3 */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <BuildingStorefrontIcon className="w-6 h-6 text-[#e59500] mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-black">Boosting Brand Awareness and Loyalty</h4>
                </div>
                <p className="text-lg mb-4">We build a strong brand voice by:</p>
                <motion.ul 
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    "Showcasing your concept, style, philosophy, and principles.",
                    "Highlighting your product or service range.",
                    "Featuring case studies, customer reviews, and essential details."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              {/* Challenge 4 */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="w-6 h-6 text-[#e59500] mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-black">Enhanced User Experience</h4>
                </div>
                <p className="text-lg mb-4">We develop intuitive, functional, and engaging landing pages that:</p>
                <motion.ul 
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    "Ensure seamless communication with customers and partners.",
                    "Feature compelling content and interaction scenarios."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <p className="text-lg mb-3">
                  We help brands launch, transform, and grow.
                </p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="w-full border-t border-gray-300 my-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.div>
          
          {/* Competitive Advantage Section */}
          <div className="max-w-5xl mx-auto">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Competitive Advantage
            </motion.h3>
            <motion.p 
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              You get the most up-to-date digital asset in your industry.
              We eliminate generic designs – every project is a custom solution tailored to your business needs.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Advantage 1 */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center mb-4">
                  <LightBulbIcon className="w-6 h-6 text-[#e59500] mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-black">The Cost of Missed Opportunities</h4>
                </div>
                <motion.ul 
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    "Advertising without a high-quality website is a waste of time and money.",
                    "Optimize your marketing budget and maximize profits with a high-converting website."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              {/* Advantage 2 */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-[#e59500] mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-black">Transparency & Control</h4>
                </div>
                <motion.ul 
                  className="list-disc pl-6 mb-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    "With us, you remain confident in your main sales tool.",
                    "You have full visibility of the process and participate in key decisions."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            
            {/* Your Path to Success Section */}
      
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-center text-black mt-12 mb-12" 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                High-Converting Landing Pages for Businesses
              </motion.h3>
              
              <motion.h4 
                className="text-xl font-bold mb-4 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3" />
                Why Choose Us?
              </motion.h4>
              
              <div className="pl-9 mb-8">
                <motion.h5 
                  className="text-lg font-semibold mb-2 text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Expertise and Experience
                </motion.h5>
                <motion.p 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Our team consists of professionals with extensive experience in web development and digital marketing. We specialize in creating landing pages that not only look great but also deliver results.
                </motion.p>
                
                <motion.h5 
                  className="text-lg font-semibold mb-2 text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Tailored Approach
                </motion.h5>
                <motion.p 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  We understand that every business is unique. That&apos;s why we analyze your industry, target audience, and competition to create a landing page that aligns with your specific goals.
                </motion.p>
                
                <motion.h5 
                  className="text-lg font-semibold mb-2 text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Design and Content that Convert
                </motion.h5>
                <motion.p 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  A landing page is more than just a one-pager. We focus on user experience, visual appeal, and compelling content to ensure your site captures attention and drives conversions.
                </motion.p>
              </div>
              
              <motion.h4 
                className="text-xl font-bold mb-4 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <CommandLineIcon className="w-6 h-6 text-[#e59500] mr-3" />
                Our Process
              </motion.h4>
              
              <motion.ul 
                className="list-disc pl-9 mb-8 space-y-2"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  "Consultation – We start with a free consultation to discuss your business goals and requirements.",
                  "Analysis – Our team conducts a thorough analysis of your market, audience, and competitors.",
                  "Development – We design and develop a unique, conversion-optimized landing page that highlights your product or service.",
                  "Marketing & Optimization – After launch, we provide advertising, SEO, analytics, and ongoing optimization to maximize performance."
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    className="p-1 hover:bg-gray-50 rounded-md transition-colors duration-300 hover:shadow"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Boost Your Business Section */}
             
                <motion.h4 
                  className="text-xl md:text-2xl font-bold mb-6 text-center text-black flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <LightBulbIcon className="w-6 h-6 text-[#e59500] mr-3" />
                 High-Quality Landing Page
                </motion.h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center mb-3">
                      <MegaphoneIcon className="w-5 h-5 text-[#e59500] mr-2" />
                      <h5 className="font-semibold text-black">Improved Marketing</h5>
                    </div>
                    <p className="text-base">A well-crafted landing page significantly improves your marketing results and increases customer engagement.</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex items-center mb-3">
                      <CurrencyDollarIcon className="w-5 h-5 text-[#e59500] mr-2" />
                      <h5 className="font-semibold text-black">Competitive Pricing</h5>
                    </div>
                    <p className="text-base">We offer competitive pricing and high-quality development, ensuring you get the best return on investment.</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center mb-3">
                      <ClockIcon className="w-5 h-5 text-[#e59500] mr-2" />
                      <h5 className="font-semibold text-black">Timely Delivery</h5>
                    </div>
                    <p className="text-base">Want to know more about pricing and timelines? Contact us today for a consultation or request a quote.</p>
                  </motion.div>
                </div>
       
            
            {/* CTA */}
            <motion.div 
              className="text-center p-6 rounded-xl mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4">
                <CommandLineIcon className="w-6 h-6 text-[#e59500] mr-3" />
                <h4 className="text-xl font-bold">Ready to launch a high-performing landing page?</h4>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
                >
                  Order your custom landing page today!
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 