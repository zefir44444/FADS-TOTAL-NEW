"use client";

import Link from "next/link";

export default function EcommerceWebsitesPage() {
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
              E-commerce Website Development
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Create a powerful online store that drives sales and provides an exceptional shopping experience for your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">E-commerce Development in Finland</h2>
            <p className="text-xl text-gray-600">
              Create a competitive and efficient online store for your business. We offer professional e-commerce platform development designed to meet the needs of the Finnish and European markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Integration with various payment systems (Klarna, Paytrail, Stripe, PayPal).</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-gray-600">CRM and inventory system integrations with Netvisor, Visma, Procountor.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#e59500]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e59500]">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing Tools</h3>
              <p className="text-gray-600">Loyalty programs, personalized discounts, automated campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Store Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why is an Online Store the Key to Success?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Minimal Investment</h3>
              <p className="text-gray-600">Launch a business with minimal initial investment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Process Optimization</h3>
              <p className="text-gray-600">Optimize processes and automate sales</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Flexible Operations</h3>
              <p className="text-gray-600">Operate without a physical store or with minimal staff</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-gray-600">Sell products across Finland and internationally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">E-commerce Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Payment & Search</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Online payments integration (Klarna, Paytrail, Stripe, PayPal)</li>
                <li>• Flexible search and filtering by product features</li>
                <li>• User accounts with purchase history and wishlist</li>
                <li>• CRM and inventory system integrations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Marketing & Localization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Marketing tools and loyalty programs</li>
                <li>• Automated email and SMS campaigns</li>
                <li>• Multilingual support (Finnish, Swedish, English)</li>
                <li>• Multi-currency support (Euro and others)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Flexible Platforms</h3>
              <p className="text-gray-600">We work with Shopify, WooCommerce, Magento, Next.js + Headless CMS</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Modern Design</h3>
              <p className="text-gray-600">Carefully crafted user experience and interface</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
              <p className="text-gray-600">Optimized for mobile, tablet, and desktop devices</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Easy Management</h3>
              <p className="text-gray-600">Convenient order and content management</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Reliable Support</h3>
              <p className="text-gray-600">Technical support after launch</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <p className="text-gray-600">High-speed performance and SEO optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">Business analysis and requirements gathering</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Technical requirements and UX prototyping</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Design and functionality development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Programming and testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-gray-600">Project launch and team training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e59500]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#e59500]">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing</h3>
              <p className="text-gray-600">Marketing, SEO, analytics, and promotion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">E-commerce Development Costs</h2>
            <p className="text-xl text-gray-600 mb-8">
              The cost of development depends on the required functionalities and integrations. We offer scalable solutions for both small businesses and large online retailers.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#e59500] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d08500] transition-colors"
            >
              Get a Personalized Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-[#e59500] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Selling Online?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s create an e-commerce website that helps you reach more customers and increase your sales.
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