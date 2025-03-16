"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {

return (
  <div className="flex flex-col min-h-screen">
    {/* Hero Section - на всю высоту экрана */}
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        
        {/* Плавающие геометрические фигуры */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-[#e59500] rounded-lg opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-[#840032] rounded-full opacity-30 animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-[#e59500] rounded-full opacity-30 animate-float-fast"></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 border-2 border-[#840032] rounded-lg opacity-30 animate-float-medium"></div>
        
        {/* Декоративные линии */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e59500]/20 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#840032]/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
          Professional Web Development
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Website<br />
          <span 
            className="gradient-text text-[#e59500] relative inline-block" 
          >
            Development and Creation
          </span><br />
          in Finland
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          We build websites that help your business grow, achieve high search rankings, and include all the necessary features for effective promotion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/contact" 
            className="gradient-button text-center px-8 py-3 text-lg min-w-[180px] inline-flex justify-center items-center"
          >
            Start now
          </Link>
          
        </div>
        
        {/* Доверительные элементы */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Trusted by brands in Finland</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-48 h-16 flex items-center justify-center">
              <Image 
                src="/pictures/Clients/Bemu.png" 
                alt="Bemuhuolto" 
                width={180} 
                height={60}
                priority
                quality={100}
                className="object-contain transition-opacity duration-300"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="w-48 h-16 flex items-center justify-center">
              <Image 
                src="/pictures/Clients/Volk.png" 
                alt="Volkkarihuolto" 
                width={180} 
                height={60}
                priority
                quality={100}
                className="object-contain transition-opacity duration-300"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="w-48 h-16 flex items-center justify-center">
              <Image 
                src="/pictures/Clients/espoonkumi.png" 
                alt="Espoonkumi" 
                width={180} 
                height={60}
                priority
                quality={100}
                className="object-contain transition-opacity duration-300"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      </div>

    </section>

    {/* Introduction Section */}
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative">
            We&apos;ll perform analytics and thoroughly study your business to develop an effective
            <span className="text-[#e59500] word-rotation">
              <span>Landing Page</span>
            </span>
          </h2>
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/5 to-[#840032]/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/5 to-[#e59500]/5 blur-3xl"></div>
        
        {/* Декоративные линии */}
        <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e59500]/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#840032]/10 text-[#840032] font-medium text-sm">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Development Process</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 relative">
          {/* Вертикальная линия соединяющая шаги */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e59500] via-[#840032] to-[#002642] hidden md:block transform -translate-x-1/2 z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/3 flex justify-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#e59500] flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                1
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Initial Consultation and Task Discussion</h3>
              <p className="text-lg">
                Website development cooperation begins with your inquiry. To utilize our services and order turnkey web application development, submit a request through any form on our website, call us directly, or contact us via your preferred messenger. Upon receiving your request, we&apos;ll promptly review your project specifics. After completing the brief, discussing objectives, and signing the contract, we&apos;ll issue an invoice for an initial payment.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/3 flex justify-center md:order-last relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#840032] flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                2
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Analysis, Information Gathering, Design, and Planning</h3>
              <p className="text-lg">
                We analyze competitors&apos; websites to identify their strengths and weaknesses. Using this data, we develop detailed technical specifications and gather essential business information. Next, we create a website prototype and define user scenarios, followed by designing the concept and all necessary design mockups. Your website should clearly represent the content relevant to your market niche, making it easy for customers to recognize your official resource.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/3 flex justify-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#002642] flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                3
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Website Development – Layout, Coding, Testing, and Content Creation</h3>
              <p className="text-lg">
                Responsive website layout, programming functionality on CMS or PHP frameworks, integration with external services, followed by rigorous layout and functionality testing. Finally, we populate the site with content and conduct basic SEO optimization.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/3 flex justify-center md:order-last relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#e59500] flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                4
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Website Launch and Support</h3>
              <p className="text-lg">
                Deployment of the website to a live server. Submission to search engines, setup of analytics, and integration of other required scripts. Training sessions on managing the admin panel, guaranteed 24-month support, and consultation on any website-related questions.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/3 flex justify-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#840032] flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                5
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Website Promotion</h3>
              <p className="text-lg">
                Website promotion is handled by our trusted partners, whose quality results we&apos;re confident in. Numerous proven methods are available to refine your website&apos;s details to achieve successful and effective sales.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/contact" 
            className="floating-button text-lg"
          >
            Start your project
          </Link>
        </div>
      </div>
    </section>

    {/* Always Connected Section */}
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#0088cc]/10 to-[#e59500]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#0088cc]/10 blur-3xl"></div>
        
        {/* Плавающие геометрические фигуры */}
        <div className="absolute top-1/4 right-1/4 w-10 h-10 border-2 border-[#0088cc] rounded-lg opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border-2 border-[#e59500] rounded-full opacity-30 animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#0088cc]/10 text-[#0088cc] font-medium text-sm">
              Communication & Transparency
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work With You</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We believe in keeping our clients informed and involved throughout the entire development process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#0088cc]/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-4 gradient-text flex items-center">
                <span className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center text-white mr-3 shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                  </svg>
                </span>
                Always Connected
              </h3>
              
              <p className="text-lg mb-6 pl-14">
                Before starting any work, we create a Telegram working chat and add team leader and client in the project. This ensures immediate communication and quick resolution of any questions.
              </p>
              
              <div className="mt-6 pl-14 flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#0088cc]/20 flex items-center justify-center text-[#0088cc]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-base">Instant communication</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#0088cc]/20 flex items-center justify-center text-[#0088cc]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-base">Quick response time</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#0088cc]/20 flex items-center justify-center text-[#0088cc]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-base">Team collaboration</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-[#e59500]/10 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-4 gradient-text flex items-center">
                <span className="w-10 h-10 rounded-full bg-[#e59500] flex items-center justify-center text-white mr-3 shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 6.5l-3.5 3.5 3.5 3.5 1.5-1.5-2-2 2-2-1.5-1.5zm3 0l-1.5 1.5 2 2-2 2 1.5 1.5 3.5-3.5-3.5-3.5z"/>
                  </svg>
                </span>
                We Work Transparently
              </h3>
              
              <p className="text-lg mb-6 pl-14">
                At any time, you can check the current status of the development. We provide regular updates and maintain complete transparency about progress, challenges, and solutions.
              </p>
              
              <div className="mt-6 pl-14 flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#e59500]/20 flex items-center justify-center text-[#e59500]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-base">Regular progress reports</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#e59500]/20 flex items-center justify-center text-[#e59500]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-base">Access to development environment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#e59500]/20 flex items-center justify-center text-[#e59500]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-base">Clear milestone tracking</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[#0088cc]/5 to-[#e59500]/5 rounded-full blur-xl"></div>
            <Link 
              href="/contact" 
              className="floating-button text-lg relative z-10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Development Plans Section */}
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
        
        {/* Плавающие геометрические фигуры */}
        <div className="absolute top-1/4 right-1/4 w-10 h-10 border-2 border-[#e59500] rounded-lg opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border-2 border-[#840032] rounded-full opacity-30 animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#840032]/10 text-[#840032] font-medium text-sm">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Development Plans in Helsinki</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Choose the perfect solution for your business needs with our comprehensive development plans
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Corporate Website */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
            <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Corporate Website</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Represents your company online, providing comprehensive information about your services, team, and achievements. It helps strengthen your brand and establish communication with clients and partners.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e59500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development time: from 1 month
              </div>
              <a 
                href="/contact" 
                className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-center text-gray-700 hover:bg-gradient-to-r hover:from-[#e59500]/10 hover:to-[#840032]/10 hover:border-[#e59500] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group-hover:border-[#e59500]"
              >
                <span className="flex items-center justify-center">
                  Submit a request
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Landing Page */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
            <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Landing Page</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                A one-page website designed to promote a specific product and increase conversions. It focuses on capturing attention and encouraging visitors to take action, such as making a purchase, placing an order, or subscribing.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e59500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development time: from 2 weeks
              </div>
              <a 
                href="/contact" 
                className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-center text-gray-700 hover:bg-gradient-to-r hover:from-[#e59500]/10 hover:to-[#840032]/10 hover:border-[#e59500] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group-hover:border-[#e59500]"
              >
                <span className="flex items-center justify-center">
                  Submit a request
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* E-commerce Website */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
            <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">E-commerce Website</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Enables online sales of products and services by providing a convenient platform for managing orders and customers. The website includes secure functionality, integration with payment systems, and more.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e59500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development time: 2-5 months
              </div>
              <a 
                href="/contact" 
                className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-center text-gray-700 hover:bg-gradient-to-r hover:from-[#e59500]/10 hover:to-[#840032]/10 hover:border-[#e59500] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group-hover:border-[#e59500]"
              >
                <span className="flex items-center justify-center">
                  Submit a request
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Catalog Website */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
            <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Catalog Website</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Designed to showcase your product range without online purchasing capabilities. It helps attract potential customers and increase interest in your products.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e59500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development time: 1-2 months
              </div>
              <a 
                href="/contact" 
                className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-center text-gray-700 hover:bg-gradient-to-r hover:from-[#e59500]/10 hover:to-[#840032]/10 hover:border-[#e59500] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group-hover:border-[#e59500]"
              >
                <span className="flex items-center justify-center">
                  Submit a request
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Blogs, Content Websites */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
            <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Blogs & Content Websites</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                We create web portals and user-friendly platforms for content management and reader engagement. These platforms are designed for publishing articles, news, and other materials.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e59500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development time: 3-4 weeks
              </div>
              <a 
                href="/contact" 
                className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-center text-gray-700 hover:bg-gradient-to-r hover:from-[#e59500]/10 hover:to-[#840032]/10 hover:border-[#e59500] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group-hover:border-[#e59500]"
              >
                <span className="flex items-center justify-center">
                  Submit a request
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Web Applications */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
            <div className="h-3 bg-gradient-to-r from-[#e59500] to-[#840032]"></div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">Custom and Tailor-Made Solutions</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Developed according to unique client requirements and business processes. We offer a full-cycle development process, from concept to final implementation.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#e59500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Development time: discussed individually
              </div>
              <a 
                href="/contact" 
                className="block w-full py-2 px-4 bg-white border border-gray-300 rounded-full text-center text-gray-700 hover:bg-gradient-to-r hover:from-[#e59500]/10 hover:to-[#840032]/10 hover:border-[#e59500] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group-hover:border-[#e59500]"
              >
                <span className="flex items-center justify-center">
                  Submit a request
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
} 