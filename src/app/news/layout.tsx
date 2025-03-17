import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FADS | News & Updates",
  description: "Stay informed about our latest developments, industry insights, and company announcements.",
  keywords: "news, updates, digital solutions, web development, business growth",
  openGraph: {
    title: "FADS | News & Updates",
    description: "Stay informed about our latest developments, industry insights, and company announcements.",
    url: "https://fads.fi/news",
    siteName: "FADS",
    images: [
      {
        url: "/fads-black.svg",
        width: 1200,
        height: 630,
        alt: "FADS - News & Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FADS | News & Updates",
    description: "Stay informed about our latest developments, industry insights, and company announcements.",
    images: ["/fads-black.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* Структурированные данные JSON-LD для новостного раздела */}
        <Script
          id="schema-org-news"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Blog",
                "name": "FADS News & Updates",
                "url": "https://fads.fi/news",
                "description": "Stay informed about our latest developments, industry insights, and company announcements.",
                "publisher": {
                  "@type": "Organization",
                  "name": "FADS",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://fads.fi/fads-black.svg"
                  }
                }
              }
            `
          }}
        />
      </head>
      {children}
    </>
  );
} 