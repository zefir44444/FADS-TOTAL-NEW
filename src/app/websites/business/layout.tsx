import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Business Website Development',
  description: 'Custom business websites for small and medium-sized companies. We build fast, functional, SEO-optimized sites that drive conversions and support growth.',
  keywords: ['business websites', 'corporate websites', 'company websites', 'professional web development', 'business web design'],
  openGraph: {
    title: 'FADS Digital Hub | Business Website Development',
    description: 'Custom business websites for small and medium-sized companies. We build fast, functional, SEO-optimized sites that drive conversions and support growth.',
    url: 'https://fads.fi/websites/business',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Business Website Development',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Business Website Development',
    description: 'Custom business websites for small and medium-sized companies. We build fast, functional, SEO-optimized sites that drive conversions and support growth.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/business',
  },
};

export default function BusinessWebsitesLayout({
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
            "@type": "WebPage",
            "name": "Business Website Development",
            "description": "Custom business websites for small and medium-sized companies. We build fast, functional, SEO-optimized sites that drive conversions and support growth.",
            "url": "https://fads.fi/websites/business",
            "provider": {
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
      {children}
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <Link 
                href="/websites" 
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
                Back to Website Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 