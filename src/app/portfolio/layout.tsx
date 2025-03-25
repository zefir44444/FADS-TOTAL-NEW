import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Portfolio',
  description: 'Explore our portfolio of successful website development projects from various industries including automotive services and real estate.',
  keywords: ['portfolio', 'website projects', 'case studies', 'web development examples', 'client websites'],
  openGraph: {
    title: 'FADS Digital Hub | Portfolio',
    description: 'Explore our portfolio of successful website development projects from various industries including automotive services and real estate.',
    url: 'https://fads.fi/portfolio',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Portfolio',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Portfolio',
    description: 'Explore our portfolio of successful website development projects from various industries including automotive services and real estate.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/portfolio',
  },
};

export default function PortfolioLayout({
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
            "@type": "CollectionPage",
            "name": "FADS Digital Hub Portfolio",
            "description": "Explore our portfolio of successful website development projects from various industries including automotive services and real estate.",
            "url": "https://fads.fi/portfolio",
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