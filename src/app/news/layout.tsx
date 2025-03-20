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
      <section className="min-h-screen">
        <div className="w-full max-w-[100vw] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="min-h-[200px]">
                  {children}
                </div>
                
                <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center">
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="gradient-text text-gray-600">Share:</span>
                      <SocialShare 
                        url="https://fads.fi/news"
                        title="FADS Digital Hub News"
                        text="Check out the latest news from FADS Digital Hub!"
                      />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6 sm:mt-8">
                    <Link 
                      href="/news" 
                      className="inline-flex items-center text-[#e59500] font-medium hover:underline group text-sm sm:text-base"
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