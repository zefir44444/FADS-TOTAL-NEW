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
  title: "FADS | Website Update v0.8",
  description: "Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.",
  keywords: "website update, user experience, navigation, accessibility, web development",
  openGraph: {
    title: "FADS | Website Update v0.8",
    description: "Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.",
    url: "https://fads.fi/news/website-update-v0.8",
    siteName: "FADS",
    images: [
      {
        url: "/fads-black.svg",
        width: 1200,
        height: 630,
        alt: "FADS - Website Update v0.8",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FADS | Website Update v0.8",
    description: "Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.",
    images: ["/fads-black.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        {/* Структурированные данные JSON-LD для статьи */}
        <Script
          id="schema-org-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Website Update v0.8",
                "description": "Major improvements in website structure and user experience. Enhanced navigation, improved accessibility, and updated content organization.",
                "image": "https://fads.fi/fads-black.svg",
                "datePublished": "2024-03-17T08:00:00+02:00",
                "author": {
                  "@type": "Organization",
                  "name": "FADS"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "FADS",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://fads.fi/fads-black.svg"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://fads.fi/news/website-update-v0.8"
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