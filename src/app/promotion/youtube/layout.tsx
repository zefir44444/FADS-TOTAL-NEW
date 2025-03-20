import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube Promotion | FADS - Video Marketing',
  description: 'Boost your YouTube channel with our expert promotion services. We help you increase subscribers, views, and engagement through targeted strategies.',
  keywords: 'YouTube promotion, video marketing, channel growth, YouTube SEO, video optimization, YouTube advertising',
  openGraph: {
    title: 'YouTube Promotion | FADS - Video Marketing',
    description: 'Boost your YouTube channel with our expert promotion services. We help you increase subscribers, views, and engagement through targeted strategies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FADS',
    images: [
      {
        url: '/images/og/youtube-promotion.jpg',
        width: 1200,
        height: 630,
        alt: 'FADS YouTube Promotion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Promotion | FADS - Video Marketing',
    description: 'Boost your YouTube channel with our expert promotion services. We help you increase subscribers, views, and engagement through targeted strategies.',
    images: ['/images/og/youtube-promotion.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/youtube',
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

export default function YouTubeLayout({
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