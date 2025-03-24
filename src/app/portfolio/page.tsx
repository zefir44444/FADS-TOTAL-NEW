"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
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

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  interval?: number;
}

const ImageSlider = ({ images, interval = 5000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full">
      {images.map((image: SliderImage, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={700}
            height={450}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default function PortfolioPage() {
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
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Explore our successful projects and discover how we&apos;ve helped businesses achieve their digital goals
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <p className="text-gray-600">
              Below are some of the websites we&apos;ve designed and developed for our clients across various industries, showcasing our expertise in creating functional and visually appealing digital solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Volkkari Huolto */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image 
                  src="/pictures/portfolio/volkkarihuolto/volkkarihuolto.png" 
                  alt="VolkkariHuolto Website" 
                  width={700} 
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Automotive</span>
                    <h3 className="text-2xl font-bold text-white mt-2">VolkkariHuolto</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A website for a specialized Volkswagen service center that has distinguished itself in the automotive repair industry in Finland. With our team's support, the business achieved outstanding search engine rankings (SEO) and generated a substantial number of high-quality leads through Google Ads campaigns. The site features multilingual support, custom design, automation systems and integrated email marketing tools for customer retention.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Mobile-First</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">WordPress</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Google Ads</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Multilingual</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Email Marketing</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">CRO</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://volkkarihuolto.fi/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* BEMU Huolto */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image 
                  src="/pictures/portfolio/bemuhuolto.jpg" 
                  alt="BEMU Huolto Website" 
                  width={700} 
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Automotive</span>
                    <h3 className="text-2xl font-bold text-white mt-2">BEMU Huolto</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Professional website for a BMW service center in Finland. The site features a clean, modern design with a user-friendly contact form and service request functionality. We've implemented a responsive layout that highlights key business statistics, showcasing over 2,200 satisfied customers, 6,300+ parts replaced, and 2,600+ repaired vehicles.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Premium Design</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">WordPress</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Finnish Language</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Lead Generation</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Responsive Design</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://bemuhuolto.fi/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* OhMyFin */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <ImageSlider 
                  images={[
                    { src: "/pictures/portfolio/Ohmyfin/OhMyFin.jpg", alt: "OhMyFin Website Homepage" },
                    { src: "/pictures/portfolio/Ohmyfin/ohmyfin.png", alt: "OhMyFin Website Articles" }
                  ]} 
                  interval={6000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end z-10">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Media</span>
                    <h3 className="text-2xl font-bold text-white mt-2">OhMyFin</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Russian-language media portal about life in Finland. We developed this news and events website that covers cultural events, lifestyle, interviews, and local information for Russian-speaking residents and visitors of Finland. The platform features diverse content sections including Events, Lifestyle, Technology, Sports, and Family.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">News Portal</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Russian Content</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Events</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Lifestyle</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Responsive Design</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://ohmyfin.fi/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Volkkari Helsinki */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image 
                  src="/pictures/portfolio/volkkarihelisinki/volkkarihelisinki.png" 
                  alt="VolkkariHelsinki Website" 
                  width={700} 
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Automotive</span>
                    <h3 className="text-2xl font-bold text-white mt-2">VolkkariHelsinki</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Ongoing project for a VAG (Volkswagen AG) service center in Helsinki. We are developing a fast, lightweight WordPress website with a primary focus on local SEO for Helsinki and surrounding areas, conversion rate optimization, and Google Ads campaigns to drive targeted traffic.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">WordPress</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Local SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">CRO</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Google Ads</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Performance</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://volkkarihelsinki.fi/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Meadows UAE */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image 
                  src="/pictures/portfolio/Meadows/Meadowshigh-techwear.jpg" 
                  alt="Meadows UAE Website" 
                  width={700} 
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Equestrian Fashion</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Meadows UAE</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Premium equestrian clothing brand based in the UAE. We implemented digital marketing strategies including Google Ads campaigns, SEO optimization, and Google Shopping for their exclusive product line. Our efforts significantly increased the brand's visibility and lead generation across the EU and Middle East regions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Luxury Brand</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Equestrian Sports</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">E-commerce</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Google Ads</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Google Shopping</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Multi-currency</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://meadows.ae/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Asunnon Remontti */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image 
                  src="/pictures/portfolio/Asunnonremonti/AmmattimainenasunnonremontointiSuomessa-1200x599.jpg" 
                  alt="Asunnon Remontti Website" 
                  width={700} 
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Home Renovation</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Asunnon Remontti</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Professional renovation website for a Finnish home and apartment repair company. We created a service-focused website optimized for lead generation through targeted SEO strategies and Google Ads campaigns. The site showcases their renovation services, project portfolios, and includes a seamless contact system for potential clients.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Finnish Market</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">WordPress</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Google Ads</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Lead Generation</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://asunnonremontti.fi/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Finnmode */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image 
                  src="/pictures/portfolio/Finnmode/Finnmode.png" 
                  alt="Finnmode Beauty Salon Website" 
                  width={700} 
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-[#e59500] text-white text-xs font-medium rounded-full">Beauty & Wellness</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Finnmode</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A premium beauty salon in Helsinki offering advanced cosmetic treatments including Morpheus8, Diolaze XL, and other specialized services. We provided comprehensive digital marketing consultations and implemented targeted advertising strategies to enhance their online presence. Our work included developing a structured advertising approach, SEO optimization, and performance analysis to increase client bookings for their premium beauty services.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Digital Marketing</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Beauty Industry</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Advertising Strategy</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">SEO</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Performance Marketing</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">Lead Generation</span>
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href="https://www.finnmode.fi/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                  >
                    Visit Website
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
                  </a>
                </div>
              </div>
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
              Ready to Build Your Own Success Story?
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Let&apos;s create a website that showcases your brand and drives your business forward. Contact us today to discuss your project.
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
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 