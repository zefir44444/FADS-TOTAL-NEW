import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FADS Digital Hub | News & Updates",
  description: "Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.",
  keywords: "news, updates, digital solutions, web development, business growth, digital hub",
  openGraph: {
    title: "FADS Digital Hub | News & Updates",
    description: "Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.",
    url: "https://fads.fi/news",
    siteName: "FADS Digital Hub",
    images: [
      {
        url: "/fads-black.svg",
        width: 1200,
        height: 630,
        alt: "FADS Digital Hub - News & Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FADS Digital Hub | News & Updates",
    description: "Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.",
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
                "name": "FADS Digital Hub News & Updates",
                "url": "https://fads.fi/news",
                "description": "Stay informed about our latest developments, industry insights, and company announcements from FADS Digital Hub.",
                "publisher": {
                  "@type": "Organization",
                  "name": "FADS Digital Hub",
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