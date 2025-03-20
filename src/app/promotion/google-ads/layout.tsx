import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads | FADS - Paid Advertising',
  description: 'Maximize your ROI with our expert Google Ads management. We create and optimize campaigns that drive targeted traffic and conversions.',
  keywords: 'Google Ads, paid advertising, PPC management, campaign optimization, ad targeting, conversion optimization',
  openGraph: {
    title: 'Google Ads | FADS - Paid Advertising',
    description: 'Maximize your ROI with our expert Google Ads management. We create and optimize campaigns that drive targeted traffic and conversions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FADS',
    images: [
      {
        url: '/images/og/google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'FADS Google Ads',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads | FADS - Paid Advertising',
    description: 'Maximize your ROI with our expert Google Ads management. We create and optimize campaigns that drive targeted traffic and conversions.',
    images: ['/images/og/google-ads.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/google-ads',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'FADS Team' }],
  category: 'marketing services',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#e59500',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function GoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 