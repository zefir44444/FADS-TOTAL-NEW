"use client";

import Link from "next/link";

export default function WebsitesOverview() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
          
          {/* Плавающие геометрические фигуры */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-[#e59500] rounded-lg opacity-30 animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-[#840032] rounded-full opacity-30 animate-float-medium"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              Professional Web Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Website Development Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Explore our range of website development services tailored to meet your business needs and objectives.
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
      
      {/* Website Types Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/5 to-[#840032]/5 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/5 to-[#e59500]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#840032]/10 text-[#840032] font-medium text-sm">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose the Right Website for Your Business</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              We offer a variety of website solutions to help you achieve your business goals and connect with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Website */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Corporate Website</h3>
                <p className="text-gray-600 mb-4">
                  Establish your brand&apos;s online presence with a professional corporate website that reflects your company&apos;s values and services.
                </p>
                <Link 
                  href="/websites/corporate" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Landing Page */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Landing Page</h3>
                <p className="text-gray-600 mb-4">
                  Convert visitors into customers with a focused landing page designed to highlight a specific product, service, or campaign.
                </p>
                <Link 
                  href="/websites/landing" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Multi-page Website */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Multi-page Website</h3>
                <p className="text-gray-600 mb-4">
                  Create a comprehensive online presence with a multi-page website that showcases all aspects of your business.
                </p>
                <Link 
                  href="/websites/multi-page" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Showcases */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Showcases</h3>
                <p className="text-gray-600 mb-4">
                  Display your portfolio, products, or services in an elegant and visually appealing showcase website.
                </p>
                <Link 
                  href="/websites/showcases" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Business Card Website */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Business Card Website</h3>
                <p className="text-gray-600 mb-4">
                  Establish a simple yet effective online presence with a business card website that provides essential information about your company.
                </p>
                <Link 
                  href="/websites/business-card" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Blogs */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Blogs</h3>
                <p className="text-gray-600 mb-4">
                  Share your expertise and engage with your audience through a professionally designed blog website.
                </p>
                <Link 
                  href="/websites/blogs" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Website Customization */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group md:col-span-2 lg:col-span-3">
              <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Website Customization</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your existing website with custom features, improved design, or additional functionality to better meet your business needs.
                </p>
                <Link 
                  href="/websites/customization" 
                  className="inline-flex items-center text-[#e59500] hover:text-[#840032] transition-colors duration-300"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e59500]/5 via-transparent to-[#840032]/5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8">
                Contact us today to discuss your website needs and get a personalized quote for your project.
              </p>
              <Link 
                href="/contact" 
                className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 