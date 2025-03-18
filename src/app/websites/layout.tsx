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
      <section className="">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="p-8">
                {children}
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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