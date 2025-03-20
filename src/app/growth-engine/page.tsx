"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

export default function GrowthEnginePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              FADS Growth Engine
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Smart Website & eCommerce Promotion
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-4">
              We don't just build websites—we make them work for your business. The FADS Growth Engine is a complete growth system that combines website development, SEO, paid ads, AI-driven optimization, and compliance with industry standards.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#e59500] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#840032] transition-colors"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              We take a strategic, step-by-step approach to ensure your website not only looks great but also performs well, complies with regulations, and provides an inclusive user experience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Step 1: Website Creation & Optimization",
                description: "Your website is the foundation of your online success. We design and develop fast, conversion-focused websites that are secure, accessible, and compliant with global standards.",
                features: [
                  "Business websites, eCommerce stores, landing pages, blogs, and custom platforms",
                  "Modern, responsive design for a seamless experience on all devices",
                  "SEO-friendly structure for better search rankings",
                  "Fast loading speeds and mobile optimization for higher engagement",
                  "Easy-to-manage content and product updates",
                  "GDPR compliance – Data privacy and security aligned with EU regulations",
                  "Web Accessibility Initiative (WAI) compliance – Ensuring accessibility for all users"
                ]
              },
              {
                title: "Step 2: SEO Strategy & Traffic Growth",
                description: "We set up a strong SEO foundation so your website attracts consistent organic traffic without relying only on ads.",
                features: [
                  "Keyword research and content optimization",
                  "On-page SEO for better visibility in search engines",
                  "Backlink building and off-page SEO to increase authority",
                  "AI-driven content marketing for targeted traffic growth"
                ]
              },
              {
                title: "Step 3: Paid Advertising for Fast Growth",
                description: "While SEO builds long-term growth, paid ads deliver instant traffic and sales. We manage high-performance advertising campaigns that bring measurable results.",
                features: [
                  "Google Ads for search, display, and shopping campaigns",
                  "YouTube advertising to increase brand awareness and engagement",
                  "Retargeting strategies to convert previous visitors into customers",
                  "AI-powered bid optimization for better ad performance"
                ]
              },
              {
                title: "Step 4: AI-Driven Optimization & Automation",
                description: "We use AI and automation to constantly analyze, improve, and scale your website and marketing efforts.",
                features: [
                  "A/B testing for landing pages, ads, and CTAs",
                  "Automated lead qualification and chatbots to enhance customer engagement",
                  "Data-driven decisions to improve conversion rates"
                ]
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#e59500] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Who Is This For?
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Startups",
                description: "Needing a high-performance, compliant, and accessible website"
              },
              {
                title: "E-commerce Brands",
                description: "Looking to increase sales with lower ad spend"
              },
              {
                title: "Businesses",
                description: "That need more leads and conversions from their website"
              },
              {
                title: "Companies",
                description: "That want consistent, long-term organic growth while ensuring GDPR and WAI compliance"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#e59500] rounded-2xl p-8 md:p-12 text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's Build a Smarter Growth System for Your Business
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We create a custom strategy based on your needs to deliver steady traffic, lower acquisition costs, and higher conversions, while ensuring compliance with GDPR and Web Accessibility Initiative standards.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/contact" 
                className="inline-block bg-white text-[#e59500] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 