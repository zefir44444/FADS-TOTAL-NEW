import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FADS Digital Hub | What is Web Accessibility and Why Should You Care Now?',
  description: 'Learn about web accessibility essentials, key requirements for European and B2G projects, and practical steps for implementation.',
  keywords: [
    'web accessibility',
    'WCAG',
    'EN 301 549',
    'B2G projects',
    'European standards',
    'inclusive design',
    'government websites',
    'website accessibility',
    'digital inclusion',
    'FADS Digital Hub'
  ],
  openGraph: {
    title: 'What is Web Accessibility and Why Should You Care Now?',
    description: 'Learn about web accessibility essentials, key requirements for European and B2G projects, and practical steps for implementation.',
    url: 'https://fads.fi/news/web-accessibility',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/news/web-accessibility/users.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Accessibility - FADS Digital Hub',
      },
    ],
    locale: 'en_FI',
    type: 'article',
    publishedTime: '2024-03-24T09:00:00Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Web Accessibility and Why Should You Care Now?',
    description: 'Learn about web accessibility essentials, key requirements for European and B2G projects, and practical steps for implementation.',
    images: ['https://fads.fi/news/web-accessibility/users.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news/web-accessibility',
  },
};

export default function WebAccessibilityLayout({
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
            "headline": "What is Web Accessibility and Why Should You Care Now?",
            "description": "Learn about web accessibility essentials, key requirements for European and B2G projects, and practical steps for implementation.",
            "image": "https://fads.fi/news/web-accessibility/users.jpg",
            "datePublished": "2024-03-24",
            "dateModified": "2024-03-24",
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