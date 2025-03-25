import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Website Audit Services',
  description: 'Comprehensive website audits to identify issues, improve performance, and enhance user experience. Get detailed reports and actionable recommendations.',
  keywords: ['website audit', 'site analysis', 'performance audit', 'SEO audit', 'security audit', 'accessibility audit', 'technical audit', 'user experience audit'],
  openGraph: {
    title: 'FADS Digital Hub | Website Audit Services',
    description: 'Comprehensive website audits to identify issues, improve performance, and enhance user experience. Get detailed reports and actionable recommendations.',
    url: 'https://fads.fi/services/website-audits',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Website Audit Services',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Website Audit Services',
    description: 'Comprehensive website audits to identify issues, improve performance, and enhance user experience. Get detailed reports and actionable recommendations.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/services/website-audits',
  },
};

export default function WebsiteAuditsLayout({
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
            "@type": "Service",
            "name": "Website Audit Services",
            "description": "Comprehensive website audits to identify issues, improve performance, and enhance user experience. Get detailed reports and actionable recommendations.",
            "url": "https://fads.fi/services/website-audits",
            "provider": {
              "@type": "Organization",
              "name": "FADS Digital Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Finland"
              },
              {
                "@type": "Place",
                "name": "European Union",
                "@id": "http://www.wikidata.org/entity/Q458"
              }
            ],
            "serviceType": "Website Audit",
            "category": "Digital Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Audit Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Basic Website Audit",
                  "description": "Comprehensive analysis of your website's performance, SEO, and technical aspects"
                },
                {
                  "@type": "Offer",
                  "name": "Advanced Website Audit",
                  "description": "In-depth analysis including security, accessibility, and user experience evaluation"
                },
                {
                  "@type": "Offer",
                  "name": "Custom Website Audit",
                  "description": "Tailored audit focusing on specific aspects of your website"
                }
              ]
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
                href="/services" 
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
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 