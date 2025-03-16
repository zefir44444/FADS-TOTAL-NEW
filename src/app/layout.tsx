import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"

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
  title: "FADS | Digital Solutions for Your Business",
  description: "We create innovative digital solutions to help your business grow and succeed in the digital world.",
  keywords: "digital solutions, web development, business growth, innovation",
  openGraph: {
    title: "FADS | Digital Solutions for Your Business",
    description: "We create innovative digital solutions to help your business grow and succeed in the digital world.",
    url: "https://fads.fi",
    siteName: "FADS",
    images: [
      {
        url: "/fads-black.svg",
        width: 1200,
        height: 630,
        alt: "FADS - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FADS | Digital Solutions for Your Business",
    description: "We create innovative digital solutions to help your business grow and succeed in the digital world.",
    images: ["/fads-black.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Предварительное соединение с доменами HubSpot */}
        <link rel="preconnect" href="https://js-na1.hs-scripts.com" />
        <link rel="dns-prefetch" href="https://js-na1.hs-scripts.com" />
        <link rel="preconnect" href="https://js.hscollectedforms.net" />
        <link rel="dns-prefetch" href="https://js.hscollectedforms.net" />
        <link rel="preconnect" href="https://js.hs-banner.com" />
        <link rel="dns-prefetch" href="https://js.hs-banner.com" />
        <link rel="preconnect" href="https://js.hs-analytics.net" />
        <link rel="dns-prefetch" href="https://js.hs-analytics.net" />
        {/* Мета-тег для корректного отображения на мобильных устройствах */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, height=device-height" />
        <Analytics/>
      </head>
      <body
        className={`${tektur.variable} ${spaceGrotesk.variable} antialiased`}
      >
         <Header />
         <div className="pt-26">
           <div className="container mx-auto px-4 md:px-6 lg:px-8">
             <Breadcrumbs />
             {children}
           </div>
         </div>
         <Footer />
            
        <CookieConsent />
        {/* HubSpot скрипт с оптимизированной загрузкой */}
        <Script
          id="hubspot-script"
          strategy="lazyOnload"
          defer
          src="//js-na1.hs-scripts.com/49357637.js"
        />
      </body>
    </html>
  );
}
