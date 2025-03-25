"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  BuildingOfficeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  DocumentDuplicateIcon,
  LightBulbIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  PuzzlePieceIcon,
  Cog6ToothIcon,
  BuildingStorefrontIcon,
  RocketLaunchIcon,
  PaintBrushIcon,
  CommandLineIcon,
  DocumentMagnifyingGlassIcon,
  CloudArrowUpIcon,
  WrenchScrewdriverIcon
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

export default function BusinessWebsites() {
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
              Professional Web Development
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Websites
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Establish your brand&apos;s online presence with a professional business website that reflects your company&apos;s values and services.
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
            Key Benefits of Business Websites
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <BuildingStorefrontIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Professional Presence</h3>
              <p className="text-gray-600">Establish credibility with a polished website that reflects your company&apos;s expertise and values.</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Customer Engagement</h3>
              <p className="text-gray-600">Connect with potential clients through intuitive design and compelling content that drives action.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Search Visibility</h3>
              <p className="text-gray-600">Gain visibility in search results with SEO-optimized website structure and content.</p>
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
            Our Business Website Development Process
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
              <h3 className="text-xl font-semibold mb-2 text-black">Discovery</h3>
              <p className="text-gray-600">We analyze your business goals, target audience, and market position</p>
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
              <p className="text-gray-600">We create wireframes and visual designs that align with your brand identity</p>
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
              <p className="text-gray-600">We build your site using cutting-edge technologies and best practices</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Launch & Support</h3>
              <p className="text-gray-600">We deploy your site and provide ongoing maintenance and optimization</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Business Website Development with FADS</h2>
              <p className="text-lg text-gray-700 mb-6">
                FADS offers business website development of any complexity, helping your company establish a strong online presence, attract customers, and enhance credibility in the Finnish market. We create modern, functional, and user-friendly websites with intuitive navigation and a design tailored to your brand.
              </p>
              
              <motion.div 
                className="mt-10"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Solutions</h3>
                <ul className="space-y-3">
                  {[
                    "Website migration to Next.js or WordPress – fast, SEO-optimized solutions",
                    "Template-based website – stylish and easily manageable websites",
                    "Custom design and development – fully tailored websites for your business",
                    "Integration with CRM and external services – automation of business processes"
                  ].map((text, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={fadeInUp}
                    >
                      <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                      <p className="text-gray-700">{text}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-10 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center shadow-lg shadow-orange-200/50"
                >
                  Discuss Your Project
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
             
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">A Business Website Is More Than Just a Digital Presence</h2>
              <p className="text-lg text-gray-700 mb-8">
                Your website is the cornerstone of your digital presence, providing a professional platform to showcase your services, build trust, and connect with potential customers. We create solutions that align with the needs of Finnish businesses, ensuring efficiency and compliance with local standards.
              </p>
              
              <motion.div 
                className="mb-10"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              >
                <h3 className="text-2xl font-bold mb-4">Who Needs a Business Website?</h3>
                <ul className="space-y-3">
                  {[
                    { icon: BuildingOfficeIcon, text: "Technology and SaaS companies – for presenting products and services" },
                    { icon: UserGroupIcon, text: "Small and medium-sized businesses – for improving customer engagement" },
                    { icon: BuildingStorefrontIcon, text: "Industrial enterprises – for showcasing product catalogs and partnerships" },
                    { icon: BriefcaseIcon, text: "Agencies and consultancies – for portfolio presentation and client outreach" },
                    { icon: RocketLaunchIcon, text: "Startups – for a professional online presence and credibility" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={fadeInUp}
                    >
                      <item.icon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                      <p className="text-gray-700">{item.text}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">What&apos;s Included in Development?</h2>
              <p className="text-lg text-gray-700 mb-6">
                We offer Full-service business website development, covering all essential stages:
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              >
                {[
                  { icon: LightBulbIcon, title: "Strategy and analytics", text: "Market research, business objectives, and competitor analysis" },
                  { icon: DocumentDuplicateIcon, title: "Structure development", text: "Logical navigation and page architecture" },
                  { icon: PaintBrushIcon, title: "UI/UX design", text: "Responsive, intuitive, and aligned with your brand identity" },
                  { icon: CommandLineIcon, title: "Development and programming", text: "Next.js, WordPress, or custom solutions" },
                  { icon: DocumentMagnifyingGlassIcon, title: "Content and SEO", text: "Optimized texts, visuals, and technical improvements" },
                  { icon: CloudArrowUpIcon, title: "Deployment and launch", text: "Server setup, CRM integration, and analytics" },
                  { icon: WrenchScrewdriverIcon, title: "Testing and support", text: "Performance checks, updates, and ongoing assistance", fullWidth: true }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 ${item.fullWidth ? 'md:col-span-2' : ''}`}
                    variants={scaleIn}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-6 h-6 text-[#e59500] mb-3" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Остальные секции с аналогичными анимациями */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Features of a Business Website</h2>
              <p className="text-lg text-gray-700 mb-6">
                A business website may include:
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              >
                {[
                  { title: "Homepage", text: "An impactful first impression that drives conversions" },
                  { title: "About Us section", text: "Company history, mission, team, and values" },
                  { title: "Products and services", text: "Detailed descriptions, benefits, and pricing" },
                  { title: "Blog and news", text: "Content for SEO and audience engagement" },
                  { title: "Contact and inquiry forms", text: "Seamless communication channels" },
                  { title: "Career and recruitment", text: "Attracting qualified talent" },
                  { title: "Customer testimonials and case studies", text: "Building trust and credibility" },
                  { title: "Multilingual support", text: "English, Finnish, and other languages" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose FADS?</h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              >
                {[
                  { icon: CodeBracketIcon, text: "Cutting-edge technologies – Next.js, WordPress, Tailwind" },
                  { icon: MagnifyingGlassIcon, text: "SEO optimization – ready for Google, Bing, Yahoo, Yandex and other search engines" },
                  { icon: DevicePhoneMobileIcon, text: "Mobile responsiveness – fast and efficient across all devices" },
                  { icon: ShieldCheckIcon, text: "Security and GDPR compliance – ensuring data protection" },
                  { icon: PuzzlePieceIcon, text: "Custom and template-based solutions – tailored to your business needs" },
                  { icon: Cog6ToothIcon, text: "Automation – CRM, analytics, and external service integrations" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl shadow-lg p-8 mb-16 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Get a Personalized Business Website Solution</h2>
              
              <p className="text-lg text-gray-700 mb-8 text-center">
                Every business has unique requirements. Contact us to discuss your project and receive a tailored proposal that meets your specific needs and objectives.
              </p>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center shadow-lg shadow-orange-200/50"
                >
                  Request a personalized quote
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="text-center mb-8 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl font-medium">
                We build business websites that go beyond just being an online presence – they serve as strategic tools to help your business grow and succeed in Finland.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
} 