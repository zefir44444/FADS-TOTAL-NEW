"use client";

import Link from "next/link";

export default function AIOptimizationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Search & Agent Optimization
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              More visibility, less effort. Tired of outdated optimization methods? We create content that not only looks good but effectively works with AI systems. Our optimization ensures maximum visibility of your content in AI search and AI agents.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Compatible Content</h3>
              <p className="text-gray-600">We don't just optimize content—we create a structure that AI systems easily understand and use.</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Intuitive structure for AI agents</li>
                <li>• Clean, semantically rich content</li>
                <li>• Optimization for various AI platforms</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Right Platform for Your Needs</h3>
              <p className="text-gray-600">Choose the optimal solution for your business:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Headless CMS with AI optimization</li>
                <li>• Integration with AI search systems</li>
                <li>• Compatibility with AI agents</li>
                <li>• Scalable AI solutions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Speed and Performance</h3>
              <p className="text-gray-600">Optimized structure for AI systems:</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Fast processing by AI agents</li>
                <li>• Optimization for all platforms</li>
                <li>• Clean code and modern tech stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI Optimization & Marketing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI search optimization from day one</li>
                <li>• Pages optimized for AI visibility</li>
                <li>• Integration with AI analytics</li>
                <li>• AI metrics tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Content Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• User-friendly dashboard</li>
                <li>• Automatic AI optimization</li>
                <li>• Real-time analytics</li>
                <li>• AI-powered improvement recommendations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Automation & Growth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Integration with AI-CRM systems</li>
                <li>• Automatic AI notifications</li>
                <li>• Advanced AI analytics</li>
                <li>• AI-optimized decision making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Who Is This For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Small Business</h3>
              <p className="text-gray-600">Quick start with AI optimization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Growing Brands</h3>
              <p className="text-gray-600">Scalable AI solutions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">B2B & B2C Companies</h3>
              <p className="text-gray-600">Integration with AI systems</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Startups</h3>
              <p className="text-gray-600">AI-optimized MVPs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Listen</h3>
              <p className="text-gray-600">We study your business and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plan</h3>
              <p className="text-gray-600">Create AI strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Develop</h3>
              <p className="text-gray-600">Optimize for AI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Test</h3>
              <p className="text-gray-600">Check AI compatibility</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">Support and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-[#e59500] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize for AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create content that effectively works with AI systems and attracts your target audience.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#e59500] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 