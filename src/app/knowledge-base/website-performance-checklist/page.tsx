"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import Head from 'next/head';
import ContactForm from '@/components/ContactForm';
import Modal from '@/components/Modal';


type ChecklistItem = {
  id: string;
  text: string;
  checked: boolean;
  category: string;
  subcategory?: string;
};

export default function WebsitePerformanceChecklist() {
  const printRef = useRef<HTMLDivElement>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    const handleBeforePrint = (e: BeforeUnloadEvent) => {
      if (!contactSubmitted) {
        e.preventDefault();
        setShowContactForm(true);
        return false;
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint as unknown as EventListener);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint as unknown as EventListener);
    };
  }, [contactSubmitted]);

  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    { id: 'lcp-1', text: 'Optimize server response times', checked: false, category: 'Core Web Vitals', subcategory: 'LCP' },
    { id: 'lcp-2', text: 'Remove render-blocking resources', checked: false, category: 'Core Web Vitals', subcategory: 'LCP' },
    { id: 'lcp-3', text: 'Optimize and compress images', checked: false, category: 'Core Web Vitals', subcategory: 'LCP' },
    { id: 'lcp-4', text: 'Minify and defer non-critical CSS/JavaScript', checked: false, category: 'Core Web Vitals', subcategory: 'LCP' },
    { id: 'lcp-5', text: 'Implement proper resource prioritization', checked: false, category: 'Core Web Vitals', subcategory: 'LCP' },
    
    { id: 'fid-1', text: 'Break up Long Tasks', checked: false, category: 'Core Web Vitals', subcategory: 'FID' },
    { id: 'fid-2', text: 'Optimize your page for interaction readiness', checked: false, category: 'Core Web Vitals', subcategory: 'FID' },
    { id: 'fid-3', text: 'Use a web worker for complex operations', checked: false, category: 'Core Web Vitals', subcategory: 'FID' },
    { id: 'fid-4', text: 'Reduce JavaScript execution time', checked: false, category: 'Core Web Vitals', subcategory: 'FID' },
    { id: 'fid-5', text: 'Minimize main thread work', checked: false, category: 'Core Web Vitals', subcategory: 'FID' },
    
    { id: 'cls-1', text: 'Include size attributes for images and videos', checked: false, category: 'Core Web Vitals', subcategory: 'CLS' },
    { id: 'cls-2', text: 'Reserve space for ads, embeds, and iframes', checked: false, category: 'Core Web Vitals', subcategory: 'CLS' },
    { id: 'cls-3', text: 'Avoid inserting content above existing content', checked: false, category: 'Core Web Vitals', subcategory: 'CLS' },
    { id: 'cls-4', text: 'Preload fonts to prevent FOIT/FOUT', checked: false, category: 'Core Web Vitals', subcategory: 'CLS' },
    { id: 'cls-5', text: 'Use transform animations instead of those triggering layout changes', checked: false, category: 'Core Web Vitals', subcategory: 'CLS' },
    
    { id: 'img-1', text: 'Use modern image formats (WebP, AVIF)', checked: false, category: 'Image Optimization' },
    { id: 'img-2', text: 'Implement responsive images using srcset and sizes attributes', checked: false, category: 'Image Optimization' },
    { id: 'img-3', text: 'Compress images without sacrificing quality', checked: false, category: 'Image Optimization' },
    { id: 'img-4', text: 'Lazy load images below the fold', checked: false, category: 'Image Optimization' },
    { id: 'img-5', text: 'Consider using image CDN services', checked: false, category: 'Image Optimization' },
    { id: 'img-6', text: 'Properly size images to avoid unnecessary downloads', checked: false, category: 'Image Optimization' },
    { id: 'img-7', text: 'Use appropriate image dimensions for different devices', checked: false, category: 'Image Optimization' },
    { id: 'img-8', text: 'Add width and height attributes to prevent layout shifts', checked: false, category: 'Image Optimization' },
    
    { id: 'js-1', text: 'Minify and compress JavaScript files', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    { id: 'js-2', text: 'Use code splitting to load only what&apos;s needed', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    { id: 'js-3', text: 'Defer non-critical JavaScript', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    { id: 'js-4', text: 'Reduce JavaScript bundle size', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    { id: 'js-5', text: 'Use tree shaking to eliminate dead code', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    { id: 'js-6', text: 'Consider using Intersection Observer for lazy loading', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    { id: 'js-7', text: 'Optimize third-party scripts loading', checked: false, category: 'Code Optimization', subcategory: 'JavaScript' },
    
    { id: 'css-1', text: 'Minify and compress CSS files', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    { id: 'css-2', text: 'Remove unused CSS', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    { id: 'css-3', text: 'Use CSS containment to improve rendering performance', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    { id: 'css-4', text: 'Inline critical CSS', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    { id: 'css-5', text: 'Load non-critical CSS asynchronously', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    { id: 'css-6', text: 'Reduce complexity of selectors', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    { id: 'css-7', text: 'Minimize CSS frameworks if not fully utilized', checked: false, category: 'Code Optimization', subcategory: 'CSS' },
    
    { id: 'html-1', text: 'Minify HTML', checked: false, category: 'Code Optimization', subcategory: 'HTML' },
    { id: 'html-2', text: 'Use semantic HTML elements', checked: false, category: 'Code Optimization', subcategory: 'HTML' },
    { id: 'html-3', text: 'Remove unnecessary markup and comments', checked: false, category: 'Code Optimization', subcategory: 'HTML' },
    { id: 'html-4', text: 'Implement proper heading hierarchy', checked: false, category: 'Code Optimization', subcategory: 'HTML' },
    { id: 'html-5', text: 'Optimize DOM size (keep it under 1500 nodes if possible)', checked: false, category: 'Code Optimization', subcategory: 'HTML' },
    { id: 'html-6', text: 'Use native lazy loading with loading="lazy" for images and iframes', checked: false, category: 'Code Optimization', subcategory: 'HTML' },
    
    { id: 'srv-1', text: 'Enable HTTP/2 or HTTP/3', checked: false, category: 'Server Optimization' },
    { id: 'srv-2', text: 'Implement effective browser caching policies', checked: false, category: 'Server Optimization' },
    { id: 'srv-3', text: 'Use a Content Delivery Network (CDN)', checked: false, category: 'Server Optimization' },
    { id: 'srv-4', text: 'Enable GZIP or Brotli compression', checked: false, category: 'Server Optimization' },
    { id: 'srv-5', text: 'Reduce server response time (TTFB under 200ms)', checked: false, category: 'Server Optimization' },
    { id: 'srv-6', text: 'Consider using service workers for offline capabilities', checked: false, category: 'Server Optimization' },
    { id: 'srv-7', text: 'Implement resource hints (preload, prefetch, preconnect)', checked: false, category: 'Server Optimization' },
    { id: 'srv-8', text: 'Optimize critical rendering path', checked: false, category: 'Server Optimization' },
    { id: 'srv-9', text: 'Consider serverless architectures for scalability', checked: false, category: 'Server Optimization' },
    
    { id: 'tpr-1', text: 'Audit and minimize third-party scripts', checked: false, category: 'Third-Party Resources' },
    { id: 'tpr-2', text: 'Load third-party scripts asynchronously or defer them', checked: false, category: 'Third-Party Resources' },
    { id: 'tpr-3', text: 'Self-host third-party scripts when possible', checked: false, category: 'Third-Party Resources' },
    { id: 'tpr-4', text: 'Use resource hints for third-party domains', checked: false, category: 'Third-Party Resources' },
    { id: 'tpr-5', text: 'Implement proper timeout handling for third-party resources', checked: false, category: 'Third-Party Resources' },
    { id: 'tpr-6', text: 'Consider using Tag Managers to control script loading', checked: false, category: 'Third-Party Resources' },
    { id: 'tpr-7', text: 'Regularly review and remove unused third-party services', checked: false, category: 'Third-Party Resources' },
    
    { id: 'mob-1', text: 'Ensure responsive design implementation', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-2', text: 'Optimize tap targets (minimum 48x48px)', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-3', text: 'Eliminate render-blocking resources on mobile', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-4', text: 'Prioritize above-the-fold content on mobile', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-5', text: 'Implement AMP (Accelerated Mobile Pages) if appropriate', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-6', text: 'Test on actual devices, not just emulators', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-7', text: 'Optimize for poor connectivity conditions', checked: false, category: 'Mobile Optimization' },
    { id: 'mob-8', text: 'Design with thumb-friendly navigation in mind', checked: false, category: 'Mobile Optimization' },
    
    { id: 'mon-1', text: 'Implement Real User Monitoring (RUM)', checked: false, category: 'Performance Monitoring' },
    { id: 'mon-2', text: 'Set up regular performance testing', checked: false, category: 'Performance Monitoring' },
    { id: 'mon-3', text: 'Track Core Web Vitals with Google Search Console', checked: false, category: 'Performance Monitoring' },
    { id: 'mon-4', text: 'Monitor server response times', checked: false, category: 'Performance Monitoring' },
    { id: 'mon-5', text: 'Track performance impact on business metrics', checked: false, category: 'Performance Monitoring' },
    { id: 'mon-6', text: 'Set up alerts for performance regressions', checked: false, category: 'Performance Monitoring' },
  ]);

  const handleCheckboxChange = (id: string) => {
    setChecklistItems(
      checklistItems.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const progress = Math.round(
    (checklistItems.filter(item => item.checked).length / checklistItems.length) * 100
  );

  const resetChecklist = () => {
    if (window.confirm('Are you sure you want to reset all checkboxes?')) {
      setChecklistItems(
        checklistItems.map(item => ({ ...item, checked: false }))
      );
    }
  };

  const checkAll = () => {
    setChecklistItems(
      checklistItems.map(item => ({ ...item, checked: true }))
    );
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Website_Performance_Checklist_Results',
    onAfterPrint: () => console.log('PDF успешно создан!'),
  });

  const handlePrintClick = () => {
    if (!contactSubmitted) {
      setShowContactForm(true);
    } else {
      handlePrint();
    }
  };

  const categorizedItems: Record<string, Record<string, ChecklistItem[]>> = {};
  
  checklistItems.forEach(item => {
    if (!categorizedItems[item.category]) {
      categorizedItems[item.category] = {};
    }
    
    const subcategory = item.subcategory || 'default';
    
    if (!categorizedItems[item.category][subcategory]) {
      categorizedItems[item.category][subcategory] = [];
    }
    
    categorizedItems[item.category][subcategory].push(item);
  });

  const renderCategories = () => {
    return Object.entries(categorizedItems).map(([category, subcategories], categoryIndex) => (
      <section className="mb-10" key={category}>
        <h2 className="text-2xl font-bold mb-4">{categoryIndex + 1}. {category}</h2>
        
        {category === 'Core Web Vitals' && (
          <p className="mb-4">Google&apos;s Core Web Vitals are a set of specific factors that Google considers important in a webpage&apos;s overall user experience:</p>
        )}
        
        {Object.entries(subcategories).map(([subcategory, items]) => (
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6" key={`${category}-${subcategory}`}>
            {subcategory !== 'default' && (
              <h3 className="text-xl font-semibold mb-3">{
                subcategory === 'LCP' ? 'Largest Contentful Paint (LCP)' :
                subcategory === 'FID' ? 'First Input Delay (FID)' :
                subcategory === 'CLS' ? 'Cumulative Layout Shift (CLS)' :
                subcategory
              }</h3>
            )}
            
            {(subcategory === 'LCP') && (
              <p className="mb-3">Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</p>
            )}
            
            {(subcategory === 'FID') && (
              <p className="mb-3">Measures interactivity. Pages should have a FID of 100 milliseconds or less.</p>
            )}
            
            {(subcategory === 'CLS') && (
              <p className="mb-3">Measures visual stability. Pages should maintain a CLS of 0.1 or less.</p>
            )}
            
            <ul className="space-y-2">
              {items.map(item => (
                <li className="flex items-start" key={item.id}>
                  <div className="checkbox-wrapper-46">
                    <input 
                      type="checkbox"
                      id={item.id}
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item.id)}
                      className="inp-cbx"
                    />
                    <label htmlFor={item.id} className="cbx">
                      <span>
                        <svg width="12px" height="10px">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span className="text-black">{item.text}</span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Modal 
        isOpen={showContactForm && !contactSubmitted}
        onClose={() => setShowContactForm(false)}
        title="Enter Your Details to Download PDF"
      >
        <ContactForm onSuccess={() => {
          setContactSubmitted(true);
          setShowContactForm(false);
          handlePrint();
        }} />
      </Modal>
      
      <Head>
        <style>{`
          @media print {
            ${!contactSubmitted ? `
              html, body {
                display: none !important;
              }
            ` : `
              @page {
                margin: 2cm;
                size: A4;
              }
              body {
                font-size: 12pt;
              }
              .prose {
                max-width: none !important;
                padding: 0 1cm !important;
              }
              .no-print {
                display: none !important;
              }
              section {
                break-inside: avoid;
                page-break-inside: avoid;
              }
              h1 {
                font-size: 24pt !important;
              }
              h2 {
                font-size: 18pt !important;
                margin-top: 1cm !important;
              }
              h3 {
                font-size: 14pt !important;
              }
              p, li {
                font-size: 11pt !important;
                line-height: 1.4 !important;
              }
              a {
                text-decoration: none !important;
                color: #000 !important;
              }
              .bg-white, .bg-gray-50, .bg-blue-50 {
                background: none !important;
                border: none !important;
              }
              input[type="checkbox"] {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .sticky {
                position: relative !important;
              }
            `}
          }
        `}</style>
      </Head>
      <div className="sticky top-20 z-10 bg-white shadow-md rounded-lg p-4 mb-8 no-print">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full md:flex-1">
            <p className="text-sm font-semibold mb-2">Your progress: {progress}%</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-[#e59500] h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={resetChecklist}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={checkAll}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Check All
            </button>
            <button
              onClick={handlePrintClick}
              className="px-4 py-2 text-sm bg-[#e59500] text-white rounded-md hover:bg-[#d18700] transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {contactSubmitted ? 'Download PDF' : 'Get PDF Checklist'}
            </button>
          </div>
        </div>
      </div>
      
      <header className="mb-12">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm">
          Website Performance
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Website Performance Checklist
        </h1>
        <p className="text-lg text-black">
          A guide to optimize your website&apos;s speed and performance
        </p>
      </header>

      <div className="prose prose-lg max-w-none print:!max-w-full" ref={printRef}>
        <style jsx global>{`
          @media print {
            @page {
              margin: 2cm;
              size: A4;
            }
            .prose {
              max-width: none !important;
              padding: 0 !important;
              margin: 0 !important;
              border: none !important;
              box-shadow: none !important;
              background: none !important;
            }
            img {
              print-color-adjust: exact !important;
              -webkit-print-color-adjust: exact !important;
            }
          }
        `}</style>
        <div className="hidden print:block print:!m-0 mb-8">
          <div className="flex items-center justify-between border-b pb-4 mb-8 print:border-gray-200">
            <div className="text-sm text-black space-y-1">
              <div>Email: info@fads.fi</div>
              <div>Website: fads.fi</div>
            </div>
            <div className="text-sm text-black">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-8 print:bg-blue-50">
          <p className="text-blue-800 font-medium">
            Website performance directly impacts user experience, conversion rates, and SEO rankings. Use this checklist to identify and fix performance issues on your website.
          </p>
        </div>

        {renderCategories()}

        <section className="mb-12 print:break-before-page">
          <h2 className="text-2xl font-bold mb-4">Key Performance Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Measurement Tools</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://pagespeed.web.dev/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">PageSpeed Insights</a></li>
                <li><a href="https://gtmetrix.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">GTmetrix</a></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Monitoring Services</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://search.google.com/search-console/about" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Google Search Console</a></li>
              </ul>
            </div>
          </div>
        </section>

        <div className="p-6 rounded-lg border border-gray-200 no-print">
          <h2 className="text-2xl font-bold mb-4">Need Help Optimizing Your Website?</h2>
          <p className="mb-6">Our performance optimization services can help you implement all the recommendations in this checklist, resulting in a faster, more efficient website that ranks better and converts more visitors.</p>
          <Link 
            href="/services/website-audits" 
            className="inline-block bg-[#e59500] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d18700] transition-colors"
          >
            Learn About Our Performance Audits
          </Link>
        </div>

        <div className="hidden print:block mt-8 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-black">
              <div>Email: info@fads.fi</div>
              <div>Website: fads.fi</div>
            </div>
            <div className="text-sm text-black">
              © {new Date().getFullYear()} FADS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 