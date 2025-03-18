import type { Metadata } from 'next';
import SocialShare from '../../components/SocialShare';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Websites Development Solutions',
  description: 'Explore our range of website development services tailored to meet your business needs and objectives.',
  keywords: ['website development', 'web design', 'business websites', 'landing pages', 'multi-page websites', 'showcases', 'blogs', 'ecommerce', 'business card websites'],
  openGraph: {
    title: 'FADS Digital Hub | Websites Development Solutions',
    description: 'Explore our range of website development services tailored to meet your business needs and objectives.',
    url: 'https://fads.fi/websites',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Websites',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Websites Development Solutions',
    description: 'Explore our range of website development services tailored to meet your business needs and objectives.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites',
  },
};

// Добавляем структурированные данные для SEO
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
            "name": "FADS Digital Hub Websites",
            "description": "Explore our range of website development services tailored to meet your business needs and objectives.",
            "url": "https://fads.fi/websites",
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
      {/* Website Content */}
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
                    
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[#e59500]">Share:</span>
                      <SocialShare 
                        url="https://fads.fi/websites"
                        title="FADS Digital Hub Website Solutions"
                        text="Check out the website development solutions from FADS Digital Hub!"
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