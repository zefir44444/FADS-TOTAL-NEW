import type { Metadata } from "next";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "FADS Growth Engine | Smart Website & eCommerce Promotion",
  description: "Complete growth system combining website development, SEO, paid ads, AI-driven optimization, and compliance with industry standards to bring in traffic, increase conversions, and scale your business.",
  keywords: "growth engine, website promotion, SEO optimization, paid advertising, AI optimization, business growth, digital marketing, ecommerce promotion",
  metadataBase: new URL("https://fads.fi"),
  openGraph: {
    title: "FADS Growth Engine | Smart Website & eCommerce Promotion",
    description: "Complete growth system combining website development, SEO, paid ads, AI-driven optimization, and compliance with industry standards to bring in traffic, increase conversions, and scale your business.",
    url: "https://fads.fi/promotion/growth-engine",
    siteName: "FADS",
    images: [
      {
        url: "/fads-black.svg",
        width: 1200,
        height: 630,
        alt: "FADS Growth Engine - Smart Website & eCommerce Promotion",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Finland",
    emails: ["info@fads.fi"],
    phoneNumbers: ["+358 40 123 4567"],
    determiner: "the",
    alternateLocale: ["en_FI"]
  },
  twitter: {
    card: "summary_large_image",
    title: "FADS Growth Engine | Smart Website & eCommerce Promotion",
    description: "Complete growth system combining website development, SEO, paid ads, AI-driven optimization, and compliance with industry standards to bring in traffic, increase conversions, and scale your business.",
    images: ["/fads-black.svg"],
    creator: "@fadsmarketing",
    site: "@fadsmarketing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fads.fi/promotion/growth-engine",
    languages: {
      "en-US": "https://fads.fi/promotion/growth-engine",
      "fi-FI": "https://fads.fi/fi/promotion/growth-engine",
    },
  },
  authors: [{ name: "FADS Team", url: "https://fads.fi" }],
  category: "Digital Marketing",
  classification: "business",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  creator: "FADS Team",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "FADS Growth Engine",
    "application-name": "FADS Growth Engine",
    "msapplication-TileColor": "#e59500",
    "theme-color": "#ffffff",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
};

export default function GrowthEngineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 