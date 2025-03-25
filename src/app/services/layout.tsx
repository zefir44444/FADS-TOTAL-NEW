import type { Metadata } from 'next';
import SocialShare from '../../components/SocialShare';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Services',
  description: 'Professional web services to keep your site running smoothly, securely, and up-to-date. Website maintenance, audits, and technical support.',
  keywords: ['web services', 'website maintenance', 'website audits', 'technical support', 'digital services'],
  openGraph: {
    title: 'FADS Digital Hub | Services',
    description: 'Professional web services to keep your site running smoothly, securely, and up-to-date. Website maintenance, audits, and technical support.',
    url: 'https://fads.fi/services',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Services',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Services',
    description: 'Professional web services to keep your site running smoothly, securely, and up-to-date. Website maintenance, audits, and technical support.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/services',
  },
};

export default function ServicesLayout({
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
            "@type": "ItemList",
            "name": "FADS Digital Hub Services",
            "description": "Professional web services to keep your site running smoothly, securely, and up-to-date. Website maintenance, audits, and technical support.",
            "url": "https://fads.fi/services",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Website Maintenance",
                "url": "https://fads.fi/services/maintenance"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Website Audits",
                "url": "https://fads.fi/services/website-audits"
              }
            ],
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
                    <SocialShare />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
