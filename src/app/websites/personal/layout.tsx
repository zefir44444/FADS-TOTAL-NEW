import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Personal Websites',
  description: 'Create your perfect personal website with FADS Digital Hub. Professional, modern, and personalized web solutions for individuals.',
  keywords: ['personal website', 'portfolio website', 'personal branding', 'web development', 'personal web design'],
  openGraph: {
    title: 'FADS Digital Hub | Personal Websites',
    description: 'Create your perfect personal website with FADS Digital Hub. Professional, modern, and personalized web solutions for individuals.',
    url: 'https://fads.fi/websites/personal',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Personal Websites',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Personal Websites',
    description: 'Create your perfect personal website with FADS Digital Hub. Professional, modern, and personalized web solutions for individuals.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/personal',
  },
};

export default function PersonalWebsitesLayout({
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
            "name": "FADS Digital Hub Personal Websites",
            "description": "Create your perfect personal website with FADS Digital Hub. Professional, modern, and personalized web solutions for individuals.",
            "url": "https://fads.fi/websites/personal",
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