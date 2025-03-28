'use client';

import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaTumblr } from 'react-icons/fa';
import { SiTiktok, SiX, SiThreads, SiBluesky } from 'react-icons/si';
import { 
  ChartBarIcon,
  UserGroupIcon,
  CursorArrowRaysIcon,
  MegaphoneIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  PencilSquareIcon,
  ArrowPathIcon,
  ChartBarSquareIcon,
  EyeIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const socialNetworks = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    description: 'Professional Facebook marketing to increase your brand visibility and engagement.',
    color: '#1877F2'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    description: 'Creative Instagram content and strategy to grow your visual presence.',
    color: '#E4405F'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    description: 'Professional networking and B2B marketing solutions.',
    color: '#0A66C2'
  },
  {
    name: 'TikTok',
    icon: SiTiktok,
    description: 'Viral content creation and trend-based marketing.',
    color: '#000000'
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    description: 'Video content strategy and channel growth optimization.',
    color: '#FF0000'
  },
  {
    name: 'Pinterest',
    icon: FaPinterest,
    description: 'Visual discovery and inspiration marketing.',
    color: '#E60023'
  },
  {
    name: 'X (Twitter)',
    icon: SiX,
    description: 'Real-time engagement and brand voice development.',
    color: '#000000'
  },
  {
    name: 'Threads',
    icon: SiThreads,
    description: 'Text-based social networking and community building.',
    color: '#000000'
  },
  {
    name: 'Bluesky',
    icon: SiBluesky,
    description: 'Decentralized social networking and community engagement.',
    color: '#0085FF'
  },
  {
    name: 'Tumblr',
    icon: FaTumblr,
    description: 'Creative content sharing and niche community building.',
    color: '#35465C'
  },
];

const services = [
  {
    title: 'SMM Strategy',
    description: 'Research, positioning, tone of voice, audience segmentation',
    icon: LightBulbIcon
  },
  {
    title: 'Content Creation',
    description: 'Planning, copywriting, visual design, publishing',
    icon: PencilSquareIcon
  },
  {
    title: 'Community Management',
    description: 'Comments, messages, engagement tactics',
    icon: UserGroupIcon
  },
  {
    title: 'Paid Media',
    description: 'Targeted advertising, retargeting, lead generation',
    icon: MegaphoneIcon
  },
  {
    title: 'Influencer Collaborations',
    description: 'Finding authentic voices to represent your brand',
    icon: SparklesIcon
  },
  {
    title: 'Analytics',
    description: 'Monthly reports, actionable insights, ongoing optimization',
    icon: ChartBarSquareIcon
  }
];

const process = [
  {
    title: 'Discovery & Briefing',
    description: 'We explore your business, your goals, and your audience to understand where you are and where you want to go.',
    icon: MagnifyingGlassIcon
  },
  {
    title: 'Audit & Competitor Analysis',
    description: 'We look at your current presence, what\'s working (and what\'s not), and how your competitors are positioning themselves.',
    icon: ChartBarIcon
  },
  {
    title: 'Strategy Development',
    description: 'We build a roadmap: what to say, where to say it, and how to reach the right people.',
    icon: LightBulbIcon
  },
  {
    title: 'Content Production & Setup',
    description: 'From visuals to messaging, we design and deliver consistent, brand-aligned content across platforms.',
    icon: PencilSquareIcon
  },
  {
    title: 'Campaign Launch',
    description: 'Organic and paid efforts go live — and we monitor results from day one.',
    icon: RocketLaunchIcon
  },
  {
    title: 'Ongoing Optimization',
    description: 'We track engagement, conversions, and other KPIs to continuously improve performance.',
    icon: ArrowPathIcon
  }
];

const benefits = [
  {
    title: 'Multilingual Teams',
    description: 'Native Russian & English speakers, AI-powered support for other European languages',
    icon: CursorArrowRaysIcon
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication and measurable results',
    icon: PresentationChartLineIcon
  },
  {
    title: 'Data-Driven Approach',
    description: 'Strategic decisions based on real analytics and insights',
    icon: ChartBarSquareIcon
  },
  {
    title: 'Creative Excellence',
    description: 'Unique content that stands out and drives engagement',
    icon: SparklesIcon
  },
];

const SMMPromotion = () => {
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
              Strategic Social Media Marketing
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              For Brands That Want to Grow
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              In a world full of content, likes, and algorithms — it&apos;s easy to feel lost. We help brands cut through the noise and build a real, lasting connection with their audience.
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
              Book a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Social Media Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Social Media Still Matters
          </motion.h2>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            More than 80% of Europeans use social media every day — not just to connect with friends, but to follow brands, discover new products, and make buying decisions.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: 'Stay visible and relevant in a crowded market',
                icon: EyeIcon
              },
              {
                text: 'Build trust and brand awareness',
                icon: HeartIcon
              },
              {
                text: 'Drive traffic to your website',
                icon: ArrowTopRightOnSquareIcon
              },
              {
                text: 'Generate leads and increase sales',
                icon: CurrencyDollarIcon
              },
              {
                text: 'Collect feedback and grow a loyal community',
                icon: ChatBubbleLeftRightIcon
              }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.text}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#e59500]" />
                </div>
                <p className="text-lg font-semibold text-gray-800">{benefit.text}</p>
              </motion.div>
            ))}
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
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We combine strategy, creativity, and performance to deliver real results.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#e59500]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
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
            How We Work
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div 
                key={step.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#e59500]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Platforms We Work With
          </motion.h2>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We focus on platforms that matter for your audience
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialNetworks.map((network, index) => (
              <motion.div 
                key={network.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                  <network.icon
                    className="w-6 h-6"
                    style={{ color: network.color }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{network.name}</h3>
                <p className="text-gray-600">{network.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Work With Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#e59500]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
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
              Let's Talk About Your Goals
            </motion.h2>
            <motion.p 
              className="text-lg max-w-3xl mx-auto text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Whether you&apos;re launching a new brand, entering a new market, or want to improve your current performance — we&apos;re here to help. Let&apos;s build something that connects, engages, and grows.
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
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SMMPromotion; 