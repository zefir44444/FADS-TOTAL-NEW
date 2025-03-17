import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

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