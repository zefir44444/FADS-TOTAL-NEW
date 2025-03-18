import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Multi-page Websites Development',
  description: 'Create a comprehensive online presence with a multi-page website that showcases all aspects of your business.',
  keywords: ['multi-page websites', 'website development', 'comprehensive websites', 'business websites', 'company website', 'professional web design'],
  openGraph: {
    title: 'FADS Digital Hub | Multi-page Websites Development',
    description: 'Create a comprehensive online presence with a multi-page website that showcases all aspects of your business.',
    url: 'https://fads.fi/websites/multi-page',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Multi-page Websites',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Multi-page Websites Development',
    description: 'Create a comprehensive online presence with a multi-page website that showcases all aspects of your business.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/multi-page',
  },
};

export default function MultiPageWebsitesLayout({
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
            "name": "Multi-page Websites Development",
            "description": "Create a comprehensive online presence with a multi-page website that showcases all aspects of your business.",
            "url": "https://fads.fi/websites/multi-page",
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
      
      <section className="py-12 bg-gray-50">
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