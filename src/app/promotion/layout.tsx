import type { Metadata } from 'next';
import SocialShare from '../../components/SocialShare';
export const metadata: Metadata = {
  title: 'FADS Digital Hub | Promotion Solutions',
  description: 'Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.',
  keywords: ['digital promotion', 'online marketing', 'SEO', 'Google Ads', 'YouTube advertising', 'AI optimization', 'growth engine'],
  openGraph: {
    title: 'FADS Digital Hub | Promotion Solutions',
    description: 'Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.',
    url: 'https://fads.fi/promotion',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Digital Hub Promotion Solutions',
      },
    ],
    locale: 'en_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FADS Digital Hub | Promotion Solutions',
    description: 'Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/promotion',
  },
};

export default function PromotionLayout({
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
            "name": "Promotion Solutions",
            "description": "Discover our comprehensive range of digital promotion services including SEO, Google Ads, YouTube advertising and AI optimization.",
            "url": "https://fads.fi/promotion",
            "provider": {
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
         <section>
 
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

</section>
    </>
  );
} 