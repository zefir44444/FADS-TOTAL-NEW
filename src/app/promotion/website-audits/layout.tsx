import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Audits | FADS - Website Analysis',
  description: 'Get a detailed analysis of your website\'s performance, SEO, and user experience. Our comprehensive audit helps identify issues and opportunities for improvement.',
  keywords: 'website audit, website analysis, SEO audit, performance analysis, user experience audit, website optimization, website improvement',
  openGraph: {
    title: 'Website Audits | FADS - Website Analysis',
    description: 'Get a detailed analysis of your website\'s performance, SEO, and user experience. Our comprehensive audit helps identify issues and opportunities for improvement.',
    type: 'website',
    locale: 'en_US',
    siteName: 'FADS',
    images: [
      {
        url: '/images/og/website-audits.jpg',
        width: 1200,
        height: 630,
        alt: 'FADS Website Audits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Audits | FADS - Website Analysis',
    description: 'Get a detailed analysis of your website\'s performance, SEO, and user experience. Our comprehensive audit helps identify issues and opportunities for improvement.',
    images: ['/images/og/website-audits.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion/website-audits',
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

export default function WebsiteAuditsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
      {children}
 
  );
} 