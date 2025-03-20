"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MagnifyingGlassIcon,
  DocumentMagnifyingGlassIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  PaintBrushIcon,
  BuildingStorefrontIcon,
  DocumentDuplicateIcon,
  LightBulbIcon,
  CloudArrowUpIcon
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

export default function WebsiteAudits() {
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
          className="absolute inset-0 z-0 opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm shadow-lg shadow-orange-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              Website Analysis
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Website Audits
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We help you discover how your website is performing and what can be improved. Receive easy-to-follow visual reports and practical recommendations.
            </motion.p>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-200/50"
            >
              Request an Audit Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Types of Audits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Types of Audits</h2>
            <p className="text-xl text-gray-600">
              Choose the audit type that best suits your needs and goals.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                title: "Full Website Audit",
                description: "Comprehensive analysis of marketing effectiveness, technical health, SEO status, and advertising performance.",
                icon: <DocumentMagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />
              },
              {
                title: "Technical Audit",
                description: "Detailed review of technical issues affecting your website&apos;s performance and functionality.",
                icon: <Cog6ToothIcon className="w-6 h-6 text-[#e59500]" />
              },
              {
                title: "SEO Audit",
                description: "Analysis of over 100 SEO factors to improve your site&apos;s search engine visibility.",
                icon: <MagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />
              },
              {
                title: "Google Ads Audit",
                description: "Review of your Google Ads campaigns to enhance performance and ROI.",
                icon: <ChartBarIcon className="w-6 h-6 text-[#e59500]" />
              },
              {
                title: "Marketing & Usability Audit",
                description: "Analysis of user interaction, conversion pathways, and overall website effectiveness.",
                icon: <UserGroupIcon className="w-6 h-6 text-[#e59500]" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Audit Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Full Website Audit */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Full Website Audit</h2>
              <p className="text-lg text-gray-700 mb-6">
                We review your website&apos;s marketing effectiveness, technical health, SEO status, and advertising performance. You&apos;ll receive a clear, visual report highlighting the most important issues to fix, along with recommendations for improvement.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[
                  { icon: <BuildingStorefrontIcon className="w-6 h-6 text-[#e59500]" />, text: "Marketing effectiveness analysis" },
                  { icon: <UserGroupIcon className="w-6 h-6 text-[#e59500]" />, text: "Usability assessment" },
                  { icon: <Cog6ToothIcon className="w-6 h-6 text-[#e59500]" />, text: "Technical health review" },
                  { icon: <MagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />, text: "SEO status evaluation" },
                  { icon: <ChartBarIcon className="w-6 h-6 text-[#e59500]" />, text: "Advertising performance analysis" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 bg-[#e59500]/10 rounded-lg flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Technical Audit */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Technical Website Audit</h2>
              <p className="text-lg text-gray-700 mb-6">
                We&apos;ll find technical issues that affect your website&apos;s performance, providing you with a clear report and practical solutions.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[
                  { icon: <CommandLineIcon className="w-6 h-6 text-[#e59500]" />, text: "Site indexing and crawling analysis" },
                  { icon: <RocketLaunchIcon className="w-6 h-6 text-[#e59500]" />, text: "Page loading speed optimization" },
                  { icon: <DocumentDuplicateIcon className="w-6 h-6 text-[#e59500]" />, text: "Duplicate content detection" },
                  { icon: <Cog6ToothIcon className="w-6 h-6 text-[#e59500]" />, text: "CMS and platform review" },
                  { icon: <ShieldCheckIcon className="w-6 h-6 text-[#e59500]" />, text: "Security assessment" },
                  { icon: <WrenchScrewdriverIcon className="w-6 h-6 text-[#e59500]" />, text: "Technical architecture analysis" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 bg-[#e59500]/10 rounded-lg flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* SEO Audit */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">SEO Audit</h2>
              <p className="text-lg text-gray-700 mb-6">
                We check over 100 SEO factors to identify key issues and opportunities. You&apos;ll receive a detailed report with clear recommendations on how to improve your site&apos;s visibility on search engines.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[
                  { icon: <MagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />, text: "Technical SEO analysis" },
                  { icon: <LightBulbIcon className="w-6 h-6 text-[#e59500]" />, text: "Keyword effectiveness review" },
                  { icon: <ChartBarIcon className="w-6 h-6 text-[#e59500]" />, text: "Traffic quality assessment" },
                  { icon: <DocumentDuplicateIcon className="w-6 h-6 text-[#e59500]" />, text: "Content quality analysis" },
                  { icon: <CloudArrowUpIcon className="w-6 h-6 text-[#e59500]" />, text: "Link quality evaluation" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 bg-[#e59500]/10 rounded-lg flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Google Ads Audit */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Google Ads Audit</h2>
              <p className="text-lg text-gray-700 mb-6">
                We review your Google Ads campaigns by understanding your business goals, current challenges, and desired outcomes. You&apos;ll get practical recommendations to enhance campaign performance.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[
                  { icon: <ChartBarIcon className="w-6 h-6 text-[#e59500]" />, text: "Campaign performance analysis" },
                  { icon: <MagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />, text: "Keyword quality review" },
                  { icon: <DocumentDuplicateIcon className="w-6 h-6 text-[#e59500]" />, text: "Ad campaign structure evaluation" },
                  { icon: <LightBulbIcon className="w-6 h-6 text-[#e59500]" />, text: "Ad effectiveness assessment" },
                  { icon: <Cog6ToothIcon className="w-6 h-6 text-[#e59500]" />, text: "Campaign settings optimization" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 bg-[#e59500]/10 rounded-lg flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Marketing & Usability Audit */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Marketing & Usability Audit</h2>
              <p className="text-lg text-gray-700 mb-6">
                We help clarify your website&apos;s goals and analyze how your audience interacts with your site. We&apos;ll highlight important marketing and usability issues and give you actionable recommendations.
              </p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
              >
                {[
                  { icon: <UserGroupIcon className="w-6 h-6 text-[#e59500]" />, text: "User interaction analysis" },
                  { icon: <BuildingStorefrontIcon className="w-6 h-6 text-[#e59500]" />, text: "Competitiveness assessment" },
                  { icon: <PaintBrushIcon className="w-6 h-6 text-[#e59500]" />, text: "Design effectiveness review" },
                  { icon: <ChartBarIcon className="w-6 h-6 text-[#e59500]" />, text: "Conversion pathway analysis" },
                  { icon: <LightBulbIcon className="w-6 h-6 text-[#e59500]" />, text: "Content clarity evaluation" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-8 h-8 bg-[#e59500]/10 rounded-lg flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Related Services</h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive range of website services to help your business grow.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { name: "Web Design & Development", url: "/websites" },
              { name: "Landing Page Creation", url: "/websites/landing" },
              { name: "Corporate Websites", url: "/websites/business" },
              { name: "E-commerce Solutions", url: "/websites/ecommerce" },
              { name: "Website Maintenance", url: "/promotion/website-audits" },
              { name: "Content & Usability Improvements", url: "/promotion/website-audits" },
              { name: "SEO Optimization", url: "/promotion/seo" },
              { name: "Google Ads Management", url: "/promotion/google-ads" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href={service.url}
                  className="block h-full w-full text-gray-700 hover:text-[#e59500] transition-colors duration-300"
                >
                  {service.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-xl text-gray-600">
              We provide comprehensive website audits with practical recommendations and expert support.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { icon: <DocumentMagnifyingGlassIcon className="w-6 h-6 text-[#e59500]" />, text: "Regularly updated, practical checklists" },
              { icon: <ShieldCheckIcon className="w-6 h-6 text-[#e59500]" />, text: "Dedicated testing environment for safe improvements" },
              { icon: <BuildingStorefrontIcon className="w-6 h-6 text-[#e59500]" />, text: "Based in Finland, serving clients throughout Europe" },
              { icon: <UserGroupIcon className="w-6 h-6 text-[#e59500]" />, text: "Expert team including developers, UX/UI designers, and IT specialists" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 bg-[#e59500]/10 rounded-lg flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-[#e59500] rounded-2xl p-8 md:p-12 text-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              Request Your Audit Today
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover clear, practical ways to enhance your website and grow your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                href="/contact" 
                className="inline-block bg-white text-[#e59500] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg shadow-orange-700/20"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
