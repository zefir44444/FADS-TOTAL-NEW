"use client";

import Link from "next/link";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  UserGroupIcon, 
  BriefcaseIcon, 
  UserIcon, 
  BuildingOfficeIcon,
  DocumentTextIcon,
  PhotoIcon,
  HeartIcon,
  AcademicCapIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";

export default function BlogWebsites() {
  // Added state for accordion functionality
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Toggle function for FAQ accordion
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "What features should a blog website have?",
      answer: "It should include the ability to publish text, photos, and videos, easy navigation, comments, and feedback functions. We will help you determine the key elements for your project."
    },
    {
      question: "Which platforms are best for a blog?",
      answer: "We work with CMS platform WordPress. We can also develop a custom solution from scratch to meet all your specific requirements."
    },
    {
      question: "Can a blog be useful for a business?",
      answer: "Absolutely! A blog helps build trust with customers, share updates, and provide valuable content. It is a powerful tool for engaging with your audience."
    },
    {
      question: "What information is needed to start development?",
      answer: "We need your vision for the blog's structure, topics for posts, target audience, and preferred design. These details will help us create a website that fully meets your expectations."
    }
  ];

  // Schema.org JSON-LD data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org JSON-LD */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              Content-Driven Platforms
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog Websites
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Engaging blog platforms designed for content creators, businesses, and thought leaders to share their expertise.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
            >
              Get a quote
            </Link>
          </div>
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
            Key Benefits of Blog Websites
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <DocumentTextIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Content Marketing</h3>
              <p className="text-gray-600">Create valuable content that attracts your audience and improves your search engine rankings.</p>
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
              <h3 className="text-xl font-semibold mb-2 text-black">Audience Engagement</h3>
              <p className="text-gray-600">Build a community around your brand and strengthen relationships with customers through regular publications.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-[#e59500]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Monetization</h3>
              <p className="text-gray-600">Transform your blog into a revenue source through advertising, affiliate marketing, or premium content.</p>
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
            Our Blog Development Process
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
              <p className="text-gray-600">We define goals, target audience and key topics for your blog</p>
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
              <p className="text-gray-600">We create a visual style that reflects your individuality</p>
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
              <p className="text-gray-600">We build a functional platform with a user-friendly content management system</p>
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
              <p className="text-gray-600">We deploy your blog and provide ongoing technical support</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
        
            <p className="text-gray-700 text-lg text-center mb-12">
              Remote work and personal branding are growing trends online. A personal blog allows you to share your expertise, attract followers, and build meaningful connections.
            </p>
          </motion.div>

          {/* Who Needs a Personal Blog Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6">Who Needs a Personal Blog?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="w-8 h-8 text-[#e59500] mr-3" />
                  <h4 className="text-xl font-semibold text-black">Freelancers, Entrepreneurs, and Independent Specialists</h4>
                </div>
                <p className="text-gray-600">
                  A professional blog helps freelancers and entrepreneurs establish a strong brand and market their services. Whether you&apos;re a tutor, consultant, artisan, or lawyer, a well-structured blog with industry insights, case studies, and testimonials can increase credibility and attract potential clients.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <PhotoIcon className="w-8 h-8 text-[#e59500] mr-3" />
                  <h4 className="text-xl font-semibold text-black">Creative Professionals</h4>
                </div>
                <p className="text-gray-600">
                  If you&apos;re a musician, actor, designer, or photographer, a blog allows you to showcase your work, share your creative journey, and connect with your audience. It&apos;s also a great way to promote your portfolio and gain media exposure.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="w-8 h-8 text-[#e59500] mr-3" />
                  <h4 className="text-xl font-semibold text-black">Network Marketing Leaders</h4>
                </div>
                <p className="text-gray-600">
                  A personal blog is a powerful tool for promoting products and services, building trust with potential customers, and expanding your network. It also strengthens personal branding in the industry.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <UserIcon className="w-8 h-8 text-[#e59500] mr-3" />
                  <h4 className="text-xl font-semibold text-black">Job Seekers & Professionals</h4>
                </div>
                <p className="text-gray-600">
                  A blog can serve as an interactive resume, where professionals highlight their experience, achievements, and expertise in an engaging way. Unlike traditional CVs, a personal blog allows professionals to create in-depth content that demonstrates their skills to potential employers.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Types of Personal Blogs Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6">Types of Personal Blogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <BuildingOfficeIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Professional & Business Blogs</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Ideal for entrepreneurs, freelancers, and specialists looking to educate their audience, build trust, and generate leads.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <PhotoIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Creative Blogs</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Perfect for photographers, artists, and writers to showcase their work, document their creative process, and gain exposure.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <HeartIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Lifestyle & Personal Blogs</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Focused on travel, fashion, fitness, food, or wellness, these blogs allow individuals to share personal experiences and connect with like-minded communities.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-3">
                  <AcademicCapIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Educational & Industry Blogs</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  For professionals in finance, healthcare, tech, or education, these blogs serve as valuable knowledge hubs that establish authority in the field.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6">6 Key Benefits of Running a Personal Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <ChartBarIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Increased Visibility & Brand Growth</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  A well-maintained blog can help promote products, services, and personal expertise, leading to higher brand recognition and organic traffic.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <GlobeAltIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Professional Online Presence</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  A personal blog allows you to share insights, document achievements, and showcase your work in a structured and engaging way.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <UserGroupIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Community & Networking</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  By sharing valuable content, you can connect with professionals and audiences worldwide, fostering new opportunities and collaborations.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-3">
                  <PencilSquareIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Skill Development & Self-Improvement</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Blogging enhances writing, communication, and digital marketing skills, helping individuals grow both personally and professionally.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center mb-3">
                  <BookOpenIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Digital Memoirs & Storytelling</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Many people use blogs as a way to document personal journeys, travel experiences, or career milestones, creating a lasting digital footprint.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center mb-3">
                  <CurrencyDollarIcon className="w-6 h-6 text-[#e59500] mr-2" />
                  <h4 className="text-lg font-semibold text-black">Monetization & Business Expansion</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  A personal blog can generate income through sponsored content, affiliate marketing, online courses, or paid subscriptions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
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
              Start your blog today with FADS!
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-left text-lg font-semibold text-black">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#e59500]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#e59500]" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="p-5 bg-gray-50">
                        <p className="text-gray-700">{faq.answer.replace(/'/g, "'")}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 