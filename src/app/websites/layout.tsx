import type { Metadata } from 'next';
import SocialShare from '../../components/SocialShare';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Website Development',
  description: 'Professional website development services for businesses and individuals. We create modern, functional, and user-friendly websites.',
  keywords: ['website development', 'web design', 'business websites', 'e-commerce websites', 'personal websites', 'custom web development'],
  openGraph: {
    title: 'FADS Digital Hub | Website Development',
    description: 'Professional website development services for businesses and individuals. We create modern, functional, and user-friendly websites.',
    url: 'https://fads.fi/websites',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Website Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Website Development',
    description: 'Professional website development services for businesses and individuals. We create modern, functional, and user-friendly websites.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites',
  },
};

export default function WebsitesLayout({
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
            "name": "Website Development Services",
            "description": "Professional website development services for businesses and individuals. We create modern, functional, and user-friendly websites.",
            "url": "https://fads.fi/websites",
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
      <section className="w-full min-h-screen">
        <div className="w-full max-w-[100vw] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="w-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="p-2 sm:p-4 md:p-6 lg:p-8 w-full">
                <div className="w-full max-w-full">
                  {children}
                </div>
                
                <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
                    <div className="flex items-center">
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="gradient-text text-gray-600">Share:</span>
                      <SocialShare 
                        url="https://fads.fi/websites"
                        title="FADS Digital Hub Website Development"
                        text="Check out our website development services!"
                      />
                    </div>
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