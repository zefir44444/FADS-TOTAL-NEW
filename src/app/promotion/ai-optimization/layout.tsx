import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Optimization | FADS - Smart Website Optimization',
  description: 'Leverage the power of artificial intelligence to optimize your website\'s performance, content, and user experience. Our AI-driven solutions help you achieve better results.',
  keywords: 'AI optimization, artificial intelligence, website optimization, content optimization, user experience, AI-driven solutions',
  openGraph: {
    title: 'AI Optimization | FADS - Smart Website Optimization',
    description: 'Leverage the power of artificial intelligence to optimize your website\'s performance, content, and user experience. Our AI-driven solutions help you achieve better results.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FADS',
    images: [
      {
        url: '/images/og/ai-optimization.jpg',
        width: 1200,
        height: 630,
        alt: 'FADS AI Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Optimization | FADS - Smart Website Optimization',
    description: 'Leverage the power of artificial intelligence to optimize your website\'s performance, content, and user experience. Our AI-driven solutions help you achieve better results.',
    images: ['/images/og/ai-optimization.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/ai-optimization',
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
  category: 'website services',
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

export default function AIOptimizationLayout({
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