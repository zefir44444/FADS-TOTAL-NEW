import type { Metadata } from 'next';
import SocialShare from '@/components/SocialShare';

export const metadata: Metadata = {
  title: 'Knowledge Base | FADS Digital Agency',
  description: 'Detailed guides, checklists, and resources to help you improve your website performance, SEO, and online presence.',
  keywords: ['knowledge base', 'website optimization', 'website guides', 'SEO resources', 'performance checklists', 'digital marketing resources'],
  openGraph: {
    title: 'Knowledge Base | FADS Digital Agency',
    description: 'Detailed guides, checklists, and resources to help you improve your website performance, SEO, and online presence.',
    url: 'https://fads.fi/knowledge-base',
    siteName: 'FADS Digital Agency',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Knowledge Base',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Base | FADS Digital Agency',
    description: 'Detailed guides, checklists, and resources to help you improve your website performance, SEO, and online presence.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/knowledge-base',
  },
};

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "FADS Digital Agency Knowledge Base",
            "description": "Detailed guides, checklists, and resources to help you improve your website performance, SEO, and online presence.",
            "url": "https://fads.fi/knowledge-base",
            "image": "https://fads.fi/fads-black.svg",
            "provider": {
              "@type": "Organization",
              "name": "FADS Digital Agency",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            }
          })
        }}
      />
      {children}
      <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center">
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="gradient-text text-gray-600">Share:</span>
                    <SocialShare />
                  </div>
                </div>
              </div>
    </div>
  );
} 