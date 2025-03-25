import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is SEO and Why It Matters for Businesses in Europe | FADS Digital Hub',
  description: 'Learn about SEO fundamentals, its evolution, and why it\'s crucial for European businesses. Discover modern SEO strategies, AI integration, and cost-effective approaches for long-term growth.',
  keywords: ['SEO', 'search engine optimization', 'European SEO', 'business growth', 'digital marketing', 'search visibility', 'AI in SEO', 'SEO strategies'],
  openGraph: {
    title: 'What Is SEO and Why It Matters for Businesses in Europe | FADS Digital Hub',
    description: 'Learn about SEO fundamentals, its evolution, and why it\'s crucial for European businesses. Discover modern SEO strategies, AI integration, and cost-effective approaches for long-term growth.',
    url: 'https://fads.fi/news/what-is-seo',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub SEO Guide',
      },
    ],
    locale: 'en_FI',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is SEO and Why It Matters for Businesses in Europe | FADS Digital Hub',
    description: 'Learn about SEO fundamentals, its evolution, and why it\'s crucial for European businesses. Discover modern SEO strategies, AI integration, and cost-effective approaches for long-term growth.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/news/what-is-seo',
  },
};

export default function SEOLayout({
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
            "@type": "Article",
            "headline": "What Is SEO and Why It Matters for Businesses in Europe",
            "description": "Learn about SEO fundamentals, its evolution, and why it's crucial for European businesses. Discover modern SEO strategies, AI integration, and cost-effective approaches for long-term growth.",
            "image": "https://fads.fi/fads-black.svg",
            "author": {
              "@type": "Organization",
              "name": "FADS Digital Hub"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FADS Digital Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            },
            "datePublished": "2024-03-25T10:00:00Z",
            "dateModified": "2024-03-25T10:00:00Z",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://fads.fi/news/what-is-seo"
            }
          })
        }}
      />
      {children}
    </>
  );
} 