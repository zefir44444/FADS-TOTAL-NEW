"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon,
  VideoCameraIcon,
  UserGroupIcon,
  MegaphoneIcon,
  PlayCircleIcon,
  ChartBarIcon,
  PresentationChartLineIcon,
  FilmIcon,
  CodeBracketIcon,
  TagIcon,
  AdjustmentsHorizontalIcon,
  RocketLaunchIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  CreditCardIcon
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

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function YouTubeAdvertisingPage() {
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
              Video Advertising
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              YouTube Advertising
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Reach millions of potential customers with engaging video ads on the world&apos;s largest video platform.
              </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            YouTube Ad Formats We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <PlayCircleIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Skippable In-stream Ads</h3>
              <p className="text-gray-600">Play before, during, or after videos and can be skipped after 5 seconds, ideal for brand awareness and consideration.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <VideoCameraIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Non-skippable Ads</h3>
              <p className="text-gray-600">Short, 15-20 second ads that viewers must watch before their video plays, delivering high-impact brand messaging.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <CursorArrowRaysIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Discovery Ads</h3>
              <p className="text-gray-600">Appear alongside related YouTube videos, in YouTube search results, and on the YouTube homepage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our YouTube Advertising Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Target Audience Analysis</h3>
              <p className="text-gray-600">We define your ideal viewer demographics, interests, and viewing habits</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Ad Creative & Strategy</h3>
              <p className="text-gray-600">We help develop compelling video ads and create a targeted campaign strategy</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Campaign Launch</h3>
              <p className="text-gray-600">We configure targeting, bidding, and budget settings for optimal performance</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-100">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Optimization & Scaling</h3>
              <p className="text-gray-600">We continuously monitor performance and refine campaigns for maximum ROI</p>
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
            Benefits of YouTube Advertising
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
                <EyeIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Massive Reach</h3>
              <p className="text-gray-600">Access to over 2 billion monthly active users across diverse demographics and interests.</p>
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
              <p className="text-gray-600">Target viewers based on demographics, interests, viewing behavior, and search intent.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Performance Tracking</h3>
              <p className="text-gray-600">Comprehensive analytics to measure views, engagement, conversions, and ROI.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl p-8 md:p-12 text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Ready to Advertise on YouTube?
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Get a custom YouTube advertising strategy designed to maximize your return on ad spend. Let our experts help you reach your ideal audience on the world's largest video platform.
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
                Launch Your YouTube Campaign
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 