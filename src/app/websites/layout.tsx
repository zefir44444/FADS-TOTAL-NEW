import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Website Solutions',
  description: 'Explore our comprehensive website solutions including personal websites, e-commerce platforms, business websites, and more. Professional web development services tailored to your needs.',
  keywords: ['website solutions', 'web development', 'e-commerce', 'business websites', 'personal websites', 'landing pages', 'multi-page websites'],
  openGraph: {
    title: 'FADS Digital Hub | Website Solutions',
    description: 'Explore our comprehensive website solutions including personal websites, e-commerce platforms, business websites, and more. Professional web development services tailored to your needs.',
    url: 'https://fads.fi/websites',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Website Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Website Solutions',
    description: 'Explore our comprehensive website solutions including personal websites, e-commerce platforms, business websites, and more. Professional web development services tailored to your needs.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites',
  },
};

export default function WebsitesLayout({
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
            "name": "FADS Digital Hub Website Solutions",
            "description": "Explore our comprehensive website solutions including personal websites, e-commerce platforms, business websites, and more. Professional web development services tailored to your needs.",
            "url": "https://fads.fi/websites",
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