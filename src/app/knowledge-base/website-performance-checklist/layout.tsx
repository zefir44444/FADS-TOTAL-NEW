import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Performance Checklist | FADS Digital Agency',
  description: 'Step-by-step guide to optimize your website\'s speed, improve user experience, and boost SEO rankings with our actionable performance checklist.',
  keywords: ['website performance', 'performance optimization', 'web vitals', 'page speed', 'website speed', 'SEO optimization'],
  openGraph: {
    title: 'Website Performance Checklist | FADS Digital Agency',
    description: 'Step-by-step guide to optimize your website\'s speed, improve user experience, and boost SEO rankings with our actionable performance checklist.',
    url: 'https://fads.fi/knowledge-base/website-performance-checklist',
    siteName: 'FADS Digital Agency',
    images: [
      {
        url: 'https://fads.fi/pictures/ppc-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'FADS Website Performance Checklist',
      },
    ],
    locale: 'en_FI',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Performance Checklist | FADS Digital Agency',
    description: 'Step-by-step guide to optimize your website\'s speed, improve user experience, and boost SEO rankings with our actionable performance checklist.',
    images: ['https://fads.fi/pictures/ppc-marketing.jpg'],
  },
  alternates: {
    canonical: 'https://fads.fi/knowledge-base/website-performance-checklist',
  },
};

export default function ChecklistLayout({
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
            "@type": "TechArticle",
            "headline": "Website Performance Checklist",
            "description": "Step-by-step guide to optimize your website's speed, improve user experience, and boost SEO rankings with our actionable performance checklist.",
            "image": "https://fads.fi/pictures/ppc-marketing.jpg",
            "author": {
              "@type": "Organization",
              "name": "FADS Digital Agency"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FADS Digital Agency",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://fads.fi/knowledge-base/website-performance-checklist"
            },
            "datePublished": "2023-03-15",
            "dateModified": new Date().toISOString().split('T')[0]
          })
        }}
      />
      {children}
    </>
  );
} 