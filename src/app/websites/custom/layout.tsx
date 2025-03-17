import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Custom Website Solutions',
  description: 'Tailored website development services for unique business needs. Custom web solutions designed to match your specific requirements and goals.',
  keywords: ['custom website', 'custom web development', 'tailored web solutions', 'bespoke website', 'custom web design'],
  openGraph: {
    title: 'FADS Digital Hub | Custom Website Solutions',
    description: 'Tailored website development services for unique business needs. Custom web solutions designed to match your specific requirements and goals.',
    url: 'https://fads.fi/websites/custom',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Custom Website Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Custom Website Solutions',
    description: 'Tailored website development services for unique business needs. Custom web solutions designed to match your specific requirements and goals.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/custom',
  },
};

export default function CustomLayout({
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
            "name": "FADS Digital Hub Custom Website Solutions",
            "description": "Tailored website development services for unique business needs. Custom web solutions designed to match your specific requirements and goals.",
            "url": "https://fads.fi/websites/custom",
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