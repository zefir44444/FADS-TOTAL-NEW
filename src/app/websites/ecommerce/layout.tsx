import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | E-commerce Solutions',
  description: 'Professional e-commerce website development services. Create powerful online stores with modern features and seamless user experience.',
  keywords: ['e-commerce', 'online store', 'web shop', 'e-commerce development', 'online retail', 'digital commerce'],
  openGraph: {
    title: 'FADS Digital Hub | E-commerce Solutions',
    description: 'Professional e-commerce website development services. Create powerful online stores with modern features and seamless user experience.',
    url: 'https://fads.fi/websites/ecommerce',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub E-commerce Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | E-commerce Solutions',
    description: 'Professional e-commerce website development services. Create powerful online stores with modern features and seamless user experience.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/ecommerce',
  },
};

export default function EcommerceLayout({
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
            "name": "FADS Digital Hub E-commerce Solutions",
            "description": "Professional e-commerce website development services. Create powerful online stores with modern features and seamless user experience.",
            "url": "https://fads.fi/websites/ecommerce",
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