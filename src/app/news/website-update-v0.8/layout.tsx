import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | Website Update v0.8',
  description: 'Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.',
  keywords: [
    'website update',
    'digital hub',
    'user experience',
    'navigation',
    'accessibility',
    'performance',
    'FADS Digital Hub',
    'website development',
    'UI/UX improvements',
    'mobile optimization'
  ],
  openGraph: {
    title: 'FADS Digital Hub | Website Update v0.8',
    description: 'Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.',
    url: 'https://fads.fi/news/website-update-v0.8',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: '/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Website Update v0.8',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-03-17T10:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Website Update v0.8',
    description: 'Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.',
    images: ['/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news/website-update-v0.8',
  },
};

// Добавляем структурированные данные для SEO
export default function WebsiteUpdateLayout({
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
            "@type": "NewsArticle",
            "headline": "FADS Digital Hub Website Update v0.8",
            "description": "Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.",
            "image": "/fads-black.svg",
            "datePublished": "2025-03-17",
            "dateModified": "2025-03-17",
            "author": {
              "@type": "Organization",
              "name": "FADS Digital Hub Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FADS Digital Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "/fads-black.svg"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
} 