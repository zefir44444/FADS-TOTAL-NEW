import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | YouTube Advertising',
  description: 'Engage your audience with compelling YouTube video ads. Reach millions of potential customers on the world\'s largest video platform.',
  keywords: ['YouTube advertising', 'video ads', 'video marketing', 'YouTube campaigns', 'in-stream ads', 'discovery ads', 'brand awareness'],
  openGraph: {
    title: 'FADS Digital Hub | YouTube Advertising',
    description: 'Engage your audience with compelling YouTube video ads. Reach millions of potential customers on the world\'s largest video platform.',
    url: 'https://fads.fi/promotion/youtube',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub YouTube Advertising',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | YouTube Advertising',
    description: 'Engage your audience with compelling YouTube video ads. Reach millions of potential customers on the world\'s largest video platform.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/youtube',
  },
};

export default function YouTubeLayout({
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
            "name": "YouTube Advertising",
            "description": "Engage your audience with compelling YouTube video ads. Reach millions of potential customers on the world's largest video platform.",
            "url": "https://fads.fi/promotion/youtube",
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
                href="/promotion" 
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
                Back to Promotion Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 