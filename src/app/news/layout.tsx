import type { Metadata } from 'next';
import SocialShare from '../../components/SocialShare';

export const metadata: Metadata = {
  title: 'News & Updates | FADS Digital Hub',
  description: 'Stay informed about our latest developments, industry insights, and company announcements.',
  keywords: ['news', 'updates', 'digital marketing', 'web development', 'SEO', 'accessibility', 'company news'],
  openGraph: {
    title: 'News & Updates | FADS Digital Hub',
    description: 'Stay informed about our latest developments, industry insights, and company announcements.',
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
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Updates | FADS Digital Hub',
    description: 'Stay informed about our latest developments, industry insights, and company announcements.',
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
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
} 