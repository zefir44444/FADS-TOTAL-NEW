import type { Metadata } from 'next';
import SocialShare from '../../components/SocialShare';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | News & Updates',
  description: 'Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.',
  keywords: ['news', 'updates', 'digital hub', 'web development', 'SEO', 'marketing'],
  openGraph: {
    title: 'FADS Digital Hub | News & Updates',
    description: 'Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.',
    url: 'https://fads.fi/news',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | News & Updates',
    description: 'Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news',
  },
};

// Добавляем структурированные данные для SEO
export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "FADS Digital Hub News",
            "description": "Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.",
            "url": "https://fads.fi/news",
            "publisher": {
              "@type": "Organization",
              "name": "FADS Digital Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            }
          })
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#e59500]/10 to-[#840032]/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#840032]/10 to-[#e59500]/10 blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#e59500]/10 text-[#e59500] font-medium text-sm animate-fade-in">
                March 17, 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e59500] to-[#840032] animate-fade-in-up">
                Website Update v0.8
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 animate-fade-in-up delay-200">
                Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  {children}
                  
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#e59500]/10 flex items-center justify-center mr-4">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-[#e59500]"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Posted by</p>
                          <p className="text-gray-600">FADS Digital Hub Team</p>
                        </div>
                      </div>
                      
                      <SocialShare 
                        url="https://fads.fi/news"
                        title="FADS Digital Hub News"
                        text="Check out the latest news from FADS Digital Hub!"
                      />
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <Link 
                      href="/news" 
                      className="inline-flex items-center text-[#e59500] font-medium hover:underline group"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="mr-1 transform transition-transform group-hover:-translate-x-1"
                      >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                      Back to News
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 