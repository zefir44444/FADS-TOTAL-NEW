"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DynamicBackground } from "@/components/DynamicBackground";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Добавляем эффект параллакса при прокрутке с оптимизацией производительности
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Устанавливаем CSS переменные для разных скоростей параллакса
          document.documentElement.style.setProperty('--parallax-offset-slow', String(scrollY * 0.03));
          document.documentElement.style.setProperty('--parallax-offset-medium', String(scrollY * 0.05));
          document.documentElement.style.setProperty('--parallax-offset-fast', String(scrollY * 0.08));
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Добавляем обработчик события прокрутки с пассивным флагом для улучшения производительности
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Вызываем обработчик один раз для инициализации
    handleScroll();
    
    // Очищаем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Динамический фон на всю страницу */}
      <div className="fixed inset-0 z-0">
        <DynamicBackground 
          type="particles"
          color1="rgba(132, 0, 50, 0.5)"  // #840032 (бордовый)
          color2="rgba(229, 149, 0, 0.5)" // #e59500 (оранжевый)
          color3="rgba(0, 38, 66, 0.5)"   // #002642 (темно-синий)
          showControls={true}
        />
      </div>
      
      {/* Декоративные элементы фона */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
      </div>
      
      {/* Контент страницы */}
      <div className="relative z-10 w-full">
        {/* Hero Section - на всю высоту экрана */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 py-12 md:py-24 text-center">
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
            
            {/* Оптимизация LCP элемента - добавляем приоритет и предварительную загрузку */}
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-medium">
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
                    quality={90}
                    className="object-contain transition-opacity duration-300"
                    style={{ mixBlendMode: 'multiply' }}
                    loading="eager"
                  />
                </div>
                <div className="w-48 h-16 flex items-center justify-center">
                  <Image 
                    src="/pictures/Clients/Volk.png" 
                    alt="Volkkarihuolto" 
                    width={180} 
                    height={60}
                    priority
                    quality={90}
                    className="object-contain transition-opacity duration-300"
                    style={{ mixBlendMode: 'multiply' }}
                    loading="eager"
                  />
                </div>
                <div className="w-48 h-16 flex items-center justify-center">
                  <Image 
                    src="/pictures/Clients/espoonkumi.png" 
                    alt="Espoonkumi" 
                    width={180} 
                    height={60}
                    priority
                    quality={90}
                    className="object-contain transition-opacity duration-300"
                    style={{ mixBlendMode: 'multiply' }}
                    loading="eager"
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
                    Website development cooperation begins with your inquiry. To utilize our services and order custom website development, submit a request through any form on our website, call us directly, or contact us via your preferred messenger. Upon receiving your request, we&apos;ll promptly review your project specifics. After completing the brief, discussing objectives, and signing the contract, we&apos;ll issue an invoice for an initial payment.
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

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Динамичный фон с линиями */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full parallax-container">
              {/* Горизонтальные линии */}
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#e59500]/50 to-transparent top-[20%] transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-slow) * -0.5px))' }}></div>
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#840032]/50 to-transparent top-1/4 transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-medium) * 0.7px))' }}></div>
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#e59500]/50 to-transparent top-1/3 transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-fast) * -0.3px))' }}></div>
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#840032]/50 to-transparent top-2/4 transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-slow) * 0.6px))' }}></div>
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#e59500]/50 to-transparent top-2/3 transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-medium) * -0.4px))' }}></div>
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#840032]/50 to-transparent top-3/4 transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-fast) * 0.5px))' }}></div>
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#e59500]/50 to-transparent top-[83%] transform -translate-y-1/2 parallax-line" style={{ transform: 'translateY(calc(-50% + var(--parallax-offset-slow) * -0.7px))' }}></div>
              
              {/* Вертикальные линии */}
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#e59500]/50 to-transparent left-[16%] transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-medium) * 0.4px))' }}></div>
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#840032]/50 to-transparent left-1/4 transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-fast) * -0.6px))' }}></div>
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#e59500]/50 to-transparent left-1/3 transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-slow) * 0.3px))' }}></div>
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#840032]/50 to-transparent left-2/4 transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-medium) * -0.5px))' }}></div>
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#e59500]/50 to-transparent left-2/3 transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-fast) * 0.7px))' }}></div>
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#840032]/50 to-transparent left-3/4 transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-slow) * -0.4px))' }}></div>
              <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#e59500]/50 to-transparent left-[83%] transform -translate-x-1/2 parallax-line" style={{ transform: 'translateX(calc(-50% + var(--parallax-offset-medium) * 0.5px))' }}></div>
              
              {/* Диагональные линии */}
              <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#e59500]/40 to-transparent top-0 left-0 origin-top-left rotate-45 parallax-line" style={{ transform: 'rotate(45deg) translateY(calc(var(--parallax-offset-slow) * 0.8px))' }}></div>
              <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#840032]/40 to-transparent bottom-0 left-0 origin-bottom-left rotate-[-45deg] parallax-line" style={{ transform: 'rotate(-45deg) translateY(calc(var(--parallax-offset-fast) * -0.8px))' }}></div>
            </div>
          </div>
          
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#d17800]/20 text-[#d17800] font-semibold text-sm">
                Get Answers
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl max-w-3xl mx-auto">
                Find answers to common questions about our website development services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {/* FAQ Items */}
                {[
                  {
                    question: "How long does it take to develop a website?",
                    answer: "The development timeline depends on the complexity of your project. A simple landing page can be completed in 2-3 weeks, while a complex e-commerce website might take 2-5 months. During our initial consultation, we'll provide you with a more accurate timeline based on your specific requirements."
                  },
                  {
                    question: "What information do you need from me to start the project?",
                    answer: "To begin, we need your business information, project goals, target audience details, content (text, images, videos), and any design preferences. We'll guide you through this process with our comprehensive brief to ensure we gather all necessary information."
                  },
                  {
                    question: "Do you provide website maintenance services?",
                    answer: "Yes, we offer comprehensive website maintenance services. All our projects include a 24-month support period, during which we handle updates, security patches, and minor content changes. For ongoing maintenance beyond this period, we offer flexible maintenance packages."
                  },
                  {
                    question: "Can you help with website content creation?",
                    answer: "Absolutely! We provide professional content creation services, including copywriting, photography, and graphic design. Our team can create engaging, SEO-optimized content that resonates with your target audience and effectively communicates your brand message."
                  },
                  {
                    question: "How do you ensure my website will rank well in search engines?",
                    answer: "We implement comprehensive SEO best practices during development, including proper site structure, mobile optimization, fast loading speeds, and clean code. We also optimize meta tags, headings, and content for relevant keywords. For more advanced SEO needs, we offer specialized SEO services through our trusted partners."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  href="/contact" 
                  className="gradient-button text-center px-8 py-3 text-lg min-w-[180px] inline-flex justify-center items-center"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 