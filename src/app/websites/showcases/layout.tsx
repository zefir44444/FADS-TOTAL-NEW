import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Showcase Website Solutions',
  description: 'Create stunning showcase websites to display your work, portfolio, or products. Professional web solutions for creative professionals and businesses.',
  keywords: ['showcase website', 'portfolio showcase', 'work showcase', 'project showcase', 'showcase design', 'showcase development'],
  openGraph: {
    title: 'FADS Digital Hub | Showcase Website Solutions',
    description: 'Create stunning showcase websites to display your work, portfolio, or products. Professional web solutions for creative professionals and businesses.',
    url: 'https://fads.fi/websites/showcases',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Showcase Website Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Showcase Website Solutions',
    description: 'Create stunning showcase websites to display your work, portfolio, or products. Professional web solutions for creative professionals and businesses.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/showcases',
  },
};

export default function ShowcasesLayout({
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
            "name": "FADS Digital Hub Showcase Website Solutions",
            "description": "Create stunning showcase websites to display your work, portfolio, or products. Professional web solutions for creative professionals and businesses.",
            "url": "https://fads.fi/websites/showcases",
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