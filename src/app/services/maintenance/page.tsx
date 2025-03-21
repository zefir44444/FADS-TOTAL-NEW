"use client";

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon,
  BugAntIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  LockClosedIcon
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

export default function WebsiteMaintenance() {
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
              Professional Support Services
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Website Maintenance
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Keep your website running smoothly, securely, and up-to-date with our comprehensive maintenance services.
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
              Get a maintenance plan
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
            Why Website Maintenance Matters
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Enhanced Security</h3>
              <p className="text-gray-600">Regular updates and security patches to protect your website from vulnerabilities and threats.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <CpuChipIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Improved Performance</h3>
              <p className="text-gray-600">Optimization of speed, functionality, and user experience to keep visitors engaged and satisfied.</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Better SEO Results</h3>
              <p className="text-gray-600">Well-maintained websites rank higher in search results, bringing more organic traffic to your business.</p>
            </motion.div>
          </div>
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
            Our Maintenance Services
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <ServerStackIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Regular software updates (CMS, plugins, themes)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Database optimization and cleanup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Broken link detection and fixing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Regular full website backups</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <LockClosedIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Security Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Security patches and vulnerability fixes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Malware scanning and removal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>SSL certificate management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Firewall configuration and monitoring</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <DocumentChartBarIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Optimization</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Speed optimization and caching setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Image optimization and compression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Mobile responsiveness checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Regular performance reports</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <BugAntIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Issue Resolution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Bug fixing and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Cross-browser compatibility issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>404 error page handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#e59500] mr-3 mt-1" />
                  <span>Form and functionality testing</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Maintenance Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Maintenance Plans</h2>
            <p className="text-lg text-gray-700 mb-10 text-center">
              Choose the right maintenance plan for your business needs. All plans include proactive monitoring and regular updates.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#e59500]/10 rounded-lg py-2 px-4 inline-block mb-4 self-start">
                  <h3 className="text-lg font-bold text-[#e59500]">Basic</h3>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">Essential maintenance for small websites</p>
                  <h4 className="text-3xl font-bold">€99<span className="text-lg font-normal text-gray-500">/month</span></h4>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Monthly CMS updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Regular backups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Up to 1 hour of content updates</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full py-2 px-4 bg-white border border-[#e59500] rounded-full text-center text-[#e59500] hover:bg-[#e59500] hover:text-white transition-all duration-300"
                >
                  Choose Basic
                </Link>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#e59500] flex flex-col relative"
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e59500] text-white py-1 px-4 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <div className="bg-[#e59500]/10 rounded-lg py-2 px-4 inline-block mb-4 self-start">
                  <h3 className="text-lg font-bold text-[#e59500]">Standard</h3>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">Comprehensive care for business websites</p>
                  <h4 className="text-3xl font-bold">€199<span className="text-lg font-normal text-gray-500">/month</span></h4>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Bi-weekly updates and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Security hardening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Up to 3 hours of content updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Monthly analytics review</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full py-2 px-4 bg-[#e59500] rounded-full text-center text-white hover:bg-[#d17800] transition-all duration-300 shadow-lg shadow-orange-200/50"
                >
                  Choose Standard
                </Link>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#e59500]/10 rounded-lg py-2 px-4 inline-block mb-4 self-start">
                  <h3 className="text-lg font-bold text-[#e59500]">Premium</h3>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">Complete solution for complex websites</p>
                  <h4 className="text-3xl font-bold">€349<span className="text-lg font-normal text-gray-500">/month</span></h4>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Weekly maintenance and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Advanced security protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Priority support with 24-hour response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>Up to 8 hours of content/development work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-[#e59500] mr-3 mt-1" />
                    <span>SEO monitoring and optimization</span>
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full py-2 px-4 bg-white border border-[#e59500] rounded-full text-center text-[#e59500] hover:bg-[#e59500] hover:text-white transition-all duration-300"
                >
                  Choose Premium
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
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
            How Our Maintenance Process Works
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
              <h3 className="text-xl font-semibold mb-2 text-black">Initial Audit</h3>
              <p className="text-gray-600">We thoroughly evaluate your website to identify issues and improvement opportunities</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Maintenance Plan</h3>
              <p className="text-gray-600">We create a custom maintenance schedule based on your website&apos;s specific needs</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Regular Maintenance</h3>
              <p className="text-gray-600">We perform scheduled updates, optimizations, and security checks</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Reporting & Recommendations</h3>
              <p className="text-gray-600">We provide detailed reports and suggestions for further improvements</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Keep Your Website in Top Shape?</h2>
            <p className="text-lg mb-8">
              Don&apos;t wait for your website to develop problems. Proactive maintenance is the key to a secure, fast, and effective online presence.
            </p>
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 