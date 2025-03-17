import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Landing Page Solutions',
  description: 'Professional landing page development services. Create high-converting landing pages that drive results and engage your target audience.',
  keywords: ['landing page', 'landing page development', 'conversion optimization', 'landing page design', 'lead generation', 'landing page optimization'],
  openGraph: {
    title: 'FADS Digital Hub | Landing Page Solutions',
    description: 'Professional landing page development services. Create high-converting landing pages that drive results and engage your target audience.',
    url: 'https://fads.fi/websites/landing',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Landing Page Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Landing Page Solutions',
    description: 'Professional landing page development services. Create high-converting landing pages that drive results and engage your target audience.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/landing',
  },
};

export default function LandingLayout({
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
            "name": "FADS Digital Hub Landing Page Solutions",
            "description": "Professional landing page development services. Create high-converting landing pages that drive results and engage your target audience.",
            "url": "https://fads.fi/websites/landing",
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