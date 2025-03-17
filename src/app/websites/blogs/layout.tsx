import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Blog Website Solutions',
  description: 'Professional blog website development services. Create engaging and interactive blog platforms with modern features and excellent user experience.',
  keywords: ['blog website', 'blog development', 'blog platform', 'content management', 'blog design', 'blogging platform'],
  openGraph: {
    title: 'FADS Digital Hub | Blog Website Solutions',
    description: 'Professional blog website development services. Create engaging and interactive blog platforms with modern features and excellent user experience.',
    url: 'https://fads.fi/websites/blogs',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Blog Website Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Blog Website Solutions',
    description: 'Professional blog website development services. Create engaging and interactive blog platforms with modern features and excellent user experience.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/websites/blogs',
  },
};

export default function BlogsLayout({
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
            "name": "FADS Digital Hub Blog Website Solutions",
            "description": "Professional blog website development services. Create engaging and interactive blog platforms with modern features and excellent user experience.",
            "url": "https://fads.fi/websites/blogs",
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