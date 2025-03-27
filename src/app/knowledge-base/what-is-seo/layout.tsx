import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | What Is SEO and Why It Matters for Businesses in Europe',
  description: 'Learn how SEO can help your business grow through improved search visibility, higher traffic, and increased conversions in the European market.',
  keywords: [
    'SEO',
    'search engine optimization',
    'European business SEO',
    'Google ranking',
    'SEO strategy',
    'SEO Finland',
    'SEO Europe',
    'SEO vs PPC',
    'AI in SEO',
    'FADS Digital Hub'
  ],
  openGraph: {
    title: 'What Is SEO and Why It Matters for Businesses in Europe',
    description: 'Learn how SEO can help your business grow through improved search visibility, higher traffic, and increased conversions in the European market.',
    url: 'https://fads.fi/news/what-is-seo',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/news/what-is-seo/grow-online-business.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO and Online Business Growth - FADS Digital Hub',
      },
    ],
    locale: 'en_FI',
    type: 'article',
    publishedTime: '2024-03-25T09:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is SEO and Why It Matters for Businesses in Europe',
    description: 'Learn how SEO can help your business grow through improved search visibility, higher traffic, and increased conversions in the European market.',
    images: ['https://fads.fi/news/what-is-seo/grow-online-business.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news/what-is-seo',
  },
};

export default function SeoLayout({
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
            "headline": "What Is SEO and Why It Matters for Businesses in Europe",
            "description": "Learn how SEO can help your business grow through improved search visibility, higher traffic, and increased conversions in the European market.",
            "image": "https://fads.fi/news/what-is-seo/grow-online-business.jpg",
            "datePublished": "2024-03-25",
            "dateModified": "2024-03-25",
            "author": {
              "@type": "Organization",
              "name": "FADS Digital Hub Team"
            },
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