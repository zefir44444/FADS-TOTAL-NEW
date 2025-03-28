import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Social Media Marketing',
  description: 'Comprehensive social media management and promotion services across all major platforms. Boost your brand presence and engagement with our expert SMM solutions.',
  keywords: ['social media marketing', 'SMM', 'social media management', 'social media promotion', 'Facebook marketing', 'Instagram marketing', 'LinkedIn marketing', 'YouTube marketing', 'TikTok marketing', 'social media strategy'],
  openGraph: {
    title: 'FADS Digital Hub | Social Media Marketing',
    description: 'Comprehensive social media management and promotion services across all major platforms. Boost your brand presence and engagement with our expert SMM solutions.',
    url: 'https://fads.fi/promotion/smm',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Social Media Marketing',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Social Media Marketing',
    description: 'Comprehensive social media management and promotion services across all major platforms. Boost your brand presence and engagement with our expert SMM solutions.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/smm',
  },
};

export default function SMMLayout({
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
            "name": "Social Media Marketing",
            "description": "Comprehensive social media management and promotion services across all major platforms. Boost your brand presence and engagement with our expert SMM solutions.",
            "url": "https://fads.fi/promotion/smm",
            "provider": {
              "@type": "Organization",
              "name": "FADS Digital Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            },
            "offers": {
              "@type": "Offer",
              "category": "Social Media Marketing Services",
              "serviceType": [
                "Facebook Marketing",
                "Instagram Marketing",
                "LinkedIn Marketing",
                "YouTube Marketing",
                "TikTok Marketing",
                "Twitter Marketing",
                "Pinterest Marketing",
                "Google Business Profile Management"
              ]
            }
          })
        }}
      />
      {children}
    </>
  );
} 