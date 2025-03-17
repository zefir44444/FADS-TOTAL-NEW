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
        {/* Article Content */}
        <section className="">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden">
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
    </>
  );
} 