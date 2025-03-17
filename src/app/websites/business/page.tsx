"use client";

import Link from "next/link";

export default function BusinessWebsites() {
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
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
              Professional Web Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Websites
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Establish your brand&apos;s online presence with a professional business website that reflects your company&apos;s values and services.
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
      
      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Business Website Development with FADS</h2>
              <p className="text-lg text-gray-700 mb-6">
                FADS offers business website development of any complexity, helping your company establish a strong online presence, attract customers, and enhance credibility in the Finnish market. We create modern, functional, and user-friendly websites with intuitive navigation and a design tailored to your brand.
              </p>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Our Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                    <p className="text-gray-700">Website migration to Next.js or WordPress – fast, SEO-optimized solutions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                    <p className="text-gray-700">Template-based website – stylish and easily manageable websites</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                    <p className="text-gray-700">Custom design and development – fully tailored websites for your business</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                    <p className="text-gray-700">Integration with CRM and external services – automation of business processes</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10 text-center">
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6">A Business Website Is More Than Just a Digital Presence</h2>
              <p className="text-lg text-gray-700 mb-8">
                Your website is the cornerstone of your digital presence, providing a professional platform to showcase your services, build trust, and connect with potential customers. We create solutions that align with the needs of Finnish businesses, ensuring efficiency and compliance with local standards.
              </p>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Who Needs a Business Website?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                    <p className="text-gray-700">Technology and SaaS companies – for presenting products and services</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                    <p className="text-gray-700">Small and medium-sized businesses – for improving customer engagement</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                    <p className="text-gray-700">Industrial enterprises – for showcasing product catalogs and partnerships</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                    <p className="text-gray-700">Agencies and consultancies – for portfolio presentation and client outreach</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                    <p className="text-gray-700">Startups – for a professional online presence and credibility</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6">What&apos;s Included in Development?</h2>
              <p className="text-lg text-gray-700 mb-6">
                We offer Full-service business website development, covering all essential stages:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Strategy and analytics</h3>
                  <p className="text-gray-700">Market research, business objectives, and competitor analysis</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Structure development</h3>
                  <p className="text-gray-700">Logical navigation and page architecture</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">UI/UX design</h3>
                  <p className="text-gray-700">Responsive, intuitive, and aligned with your brand identity</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Development and programming</h3>
                  <p className="text-gray-700">Next.js, WordPress, or custom solutions</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Content and SEO</h3>
                  <p className="text-gray-700">Optimized texts, visuals, and technical improvements</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Deployment and launch</h3>
                  <p className="text-gray-700">Server setup, CRM integration, and analytics</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Testing and support</h3>
                  <p className="text-gray-700">Performance checks, updates, and ongoing assistance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6">Key Features of a Business Website</h2>
              <p className="text-lg text-gray-700 mb-6">
                A business website may include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Homepage</h3>
                    <p className="text-gray-700">An impactful first impression that drives conversions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">About Us section</h3>
                    <p className="text-gray-700">Company history, mission, team, and values</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Products and services</h3>
                    <p className="text-gray-700">Detailed descriptions, benefits, and pricing</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Blog and news</h3>
                    <p className="text-gray-700">Content for SEO and audience engagement</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Contact and inquiry forms</h3>
                    <p className="text-gray-700">Seamless communication channels</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Career and recruitment</h3>
                    <p className="text-gray-700">Attracting qualified talent</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Customer testimonials and case studies</h3>
                    <p className="text-gray-700">Building trust and credibility</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">•</div>
                  <div>
                    <h3 className="font-bold">Multilingual support</h3>
                    <p className="text-gray-700">Finnish, Swedish, English, and other languages</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Choose FADS?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p className="text-gray-700">Cutting-edge technologies – Next.js, WordPress, Tailwind</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p className="text-gray-700">SEO optimization – ready for Google, Bing, Yahoo, Yandex and other search engines</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p className="text-gray-700">Mobile responsiveness – fast and efficient across all devices</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p className="text-gray-700">Security and GDPR compliance – ensuring data protection</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p className="text-gray-700">Custom and template-based solutions – tailored to your business needs</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#e59500] to-[#840032] flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p className="text-gray-700">Automation – CRM, analytics, and external service integrations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 rounded-2xl shadow-sm p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6">Get a Personalized Business Website Solution</h2>
              
              <p className="text-lg text-gray-700 mb-8 text-center">
                Every business has unique requirements. Contact us to discuss your project and receive a tailored proposal that meets your specific needs and objectives.
              </p>
              
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg inline-flex justify-center items-center"
                >
                  Request a personalized quote
                </Link>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xl font-medium">
                We build business websites that go beyond just being an online presence – they serve as strategic tools to help your business grow and succeed in Finland.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 