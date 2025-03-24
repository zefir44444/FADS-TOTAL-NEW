import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Promotion Solutions',
  description: 'Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.',
  keywords: ['digital promotion', 'online marketing', 'SEO', 'Google Ads', 'YouTube advertising', 'AI optimization', 'growth engine'],
  openGraph: {
    title: 'FADS Digital Hub | Promotion Solutions',
    description: 'Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.',
    url: 'https://fads.fi/promotion',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Promotion Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Promotion Solutions',
    description: 'Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion',
  },
};

export default function PromotionLayout({
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
            "name": "Promotion Solutions",
            "description": "Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.",
            "url": "https://fads.fi/promotion",
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
    </>
  );
} 