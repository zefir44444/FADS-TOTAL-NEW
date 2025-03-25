import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Website Maintenance Services',
  description: 'Professional website maintenance services to keep your site running smoothly, securely, and up-to-date. Regular updates, security monitoring, and performance optimization.',
  keywords: ['website maintenance', 'site maintenance', 'security updates', 'performance optimization', 'technical support', 'website monitoring', 'backup services'],
  openGraph: {
    title: 'FADS Digital Hub | Website Maintenance Services',
    description: 'Professional website maintenance services to keep your site running smoothly, securely, and up-to-date. Regular updates, security monitoring, and performance optimization.',
    url: 'https://fads.fi/services/maintenance',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Website Maintenance Services',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Website Maintenance Services',
    description: 'Professional website maintenance services to keep your site running smoothly, securely, and up-to-date. Regular updates, security monitoring, and performance optimization.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/services/maintenance',
  },
};

export default function MaintenanceLayout({
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
            "name": "Website Maintenance Services",
            "description": "Professional website maintenance services to keep your site running smoothly, securely, and up-to-date. Regular updates, security monitoring, and performance optimization.",
            "url": "https://fads.fi/services/maintenance",
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
            "serviceType": "Website Maintenance",
            "category": "Digital Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Maintenance Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Basic Maintenance Plan",
                  "price": "99",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "Standard Maintenance Plan",
                  "price": "199",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "name": "Premium Maintenance Plan",
                  "price": "349",
                  "priceCurrency": "EUR"
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