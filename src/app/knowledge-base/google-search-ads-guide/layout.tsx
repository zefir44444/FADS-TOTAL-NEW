import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Google Search Ads: Complete Guide to Basics, Best Practices & Pricing (2025)',
  description: 'Comprehensive guide to Google Search Ads in 2025. Learn about PPC basics, best practices, pricing, and how to optimize your campaigns for maximum ROI.',
  keywords: [
    'Google Search Ads',
    'PPC marketing',
    'Google Ads',
    'digital advertising',
    'search engine marketing',
    'SEM',
    'pay-per-click',
    'advertising costs',
    'ROI optimization',
    'FADS Digital Hub'
  ],
  openGraph: {
    title: 'Google Search Ads: Complete Guide to Basics, Best Practices & Pricing (2025)',
    description: 'Comprehensive guide to Google Search Ads in 2025. Learn about PPC basics, best practices, pricing, and how to optimize your campaigns for maximum ROI.',
    url: 'https://fads.fi/news/google-search-ads-guide',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/news/google-search-ads-guide/ppc-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Search Ads Guide - FADS Digital Hub',
      },
    ],
    locale: 'en_FI',
    type: 'article',
    publishedTime: '2024-03-27T09:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Search Ads: Complete Guide to Basics, Best Practices & Pricing (2025)',
    description: 'Comprehensive guide to Google Search Ads in 2025. Learn about PPC basics, best practices, pricing, and how to optimize your campaigns for maximum ROI.',
    images: ['https://fads.fi/news/google-search-ads-guide/ppc-marketing.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news/google-search-ads-guide',
  },
};

export default function GoogleSearchAdsLayout({
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
            "@type": "NewsArticle",
            "headline": "Google Search Ads: Complete Guide to Basics, Best Practices & Pricing (2025)",
            "description": "Comprehensive guide to Google Search Ads in 2025. Learn about PPC basics, best practices, pricing, and how to optimize your campaigns for maximum ROI.",
            "image": "https://fads.fi/news/google-search-ads-guide/ppc-marketing.jpg",
            "datePublished": "2024-03-27",
            "dateModified": "2024-03-27",
            "author": {
              "@type": "Organization",
              "name": "FADS Digital Hub Team"
            },
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