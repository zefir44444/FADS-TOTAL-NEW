import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Multi-page Website Solutions',
  description: 'Professional multi-page website development services. Create comprehensive websites with multiple sections and pages for your business needs.',
  keywords: ['multi-page website', 'multi-page development', 'multi-section website', 'business website', 'corporate website', 'multi-page design'],
  openGraph: {
    title: 'FADS Digital Hub | Multi-page Website Solutions',
    description: 'Professional multi-page website development services. Create comprehensive websites with multiple sections and pages for your business needs.',
    url: 'https://fads.fi/websites/multi-page',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Multi-page Website Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Multi-page Website Solutions',
    description: 'Professional multi-page website development services. Create comprehensive websites with multiple sections and pages for your business needs.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/multi-page',
  },
};

export default function MultiPageLayout({
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
            "name": "FADS Digital Hub Multi-page Website Solutions",
            "description": "Professional multi-page website development services. Create comprehensive websites with multiple sections and pages for your business needs.",
            "url": "https://fads.fi/websites/multi-page",
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