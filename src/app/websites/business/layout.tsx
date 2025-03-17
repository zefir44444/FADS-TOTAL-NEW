import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Business Websites',
  description: 'Professional business website development services. Create powerful corporate websites that represent your brand and drive business growth.',
  keywords: ['business website', 'corporate website', 'company website', 'business web development', 'corporate web design'],
  openGraph: {
    title: 'FADS Digital Hub | Business Websites',
    description: 'Professional business website development services. Create powerful corporate websites that represent your brand and drive business growth.',
    url: 'https://fads.fi/websites/business',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Business Websites',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Business Websites',
    description: 'Professional business website development services. Create powerful corporate websites that represent your brand and drive business growth.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/business',
  },
};

export default function BusinessLayout({
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
            "name": "FADS Digital Hub Business Websites",
            "description": "Professional business website development services. Create powerful corporate websites that represent your brand and drive business growth.",
            "url": "https://fads.fi/websites/business",
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
      {children}
    </>
  );
} 