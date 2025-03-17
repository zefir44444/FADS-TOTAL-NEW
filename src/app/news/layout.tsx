import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | News & Updates',
  description: 'Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.',
  keywords: ['news', 'updates', 'digital hub', 'web development', 'SEO', 'marketing'],
  openGraph: {
    title: 'FADS Digital Hub | News & Updates',
    description: 'Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.',
    url: 'https://fads.fi/news',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | News & Updates',
    description: 'Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news',
  },
};

// Добавляем структурированные данные для SEO
export default function NewsLayout({
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
            "@type": "Blog",
            "name": "FADS Digital Hub News",
            "description": "Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.",
            "url": "https://fads.fi/news",
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