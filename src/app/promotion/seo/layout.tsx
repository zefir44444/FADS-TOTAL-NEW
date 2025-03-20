import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services | FADS - Search Engine Optimization',
  description: 'Improve your website\'s visibility in search results with our comprehensive SEO services. We optimize your content, structure, and technical aspects for better rankings.',
  keywords: 'SEO services, search engine optimization, keyword research, content optimization, technical SEO, link building',
  openGraph: {
    title: 'SEO Services | FADS - Search Engine Optimization',
    description: 'Improve your website\'s visibility in search results with our comprehensive SEO services. We optimize your content, structure, and technical aspects for better rankings.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FADS',
    images: [
      {
        url: '/images/og/seo-services.jpg',
        width: 1200,
        height: 630,
        alt: 'FADS SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services | FADS - Search Engine Optimization',
    description: 'Improve your website\'s visibility in search results with our comprehensive SEO services. We optimize your content, structure, and technical aspects for better rankings.',
    images: ['/images/og/seo-services.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/seo',
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

export default function SEOLayout({
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