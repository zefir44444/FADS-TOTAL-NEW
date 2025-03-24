import type { Metadata } from 'next';

// Метаданные для SEO оптимизации
export const metadata: Metadata = {
  title: 'Website Development Brief - FADS Digital Agency',
  description: 'Fill out this website development brief to help us understand your project requirements. Get a personalized quote for your website design and development.',
  
  // Open Graph / Facebook metadata
  openGraph: {
    title: 'Website Development Brief - FADS Digital Agency',
    description: 'Fill out this website development brief to help us understand your project requirements. Get a personalized quote for your website design and development.',
    url: 'https://fads.fi/en/brief',
    siteName: 'FADS Digital Agency',
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Brief - FADS Digital Agency',
    description: 'Fill out this website development brief to help us understand your project requirements. Get a personalized quote for your website design and development.',
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://fads.fi/en/brief',
    languages: {
      'en': 'https://fads.fi/en/brief',
      'ru': 'https://fads.fi/brief',
    },
  },
  
  // Robots metadata
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

// Structured data for SEO (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Website Development Brief - FADS Digital Agency',
  description: 'Fill out this website development brief to help us understand your project requirements. Get a personalized quote for your website design and development.',
  url: 'https://fads.fi/en/brief',
  publisher: {
    '@type': 'Organization',
    name: 'FADS Digital Agency',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fads.fi/fads-black.svg'
    }
  },
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'ContactPage',
    name: 'Website Development Brief',
    description: 'Fill out this website development brief to help us understand your project requirements. Get a personalized quote for your website design and development.'
  }
};

export default function BriefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
} 