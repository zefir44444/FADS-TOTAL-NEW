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
import { SpeedInsights } from "@vercel/speed-insights/next"


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
  metadataBase: new URL("https://fads.fi"),
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
        
        {/* Мета-теги для корректного отображения на мобильных устройствах */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <Analytics/>
        
        {/* Структурированные данные JSON-LD для организации */}
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "FADS",
                "url": "https://fads.fi",
                "logo": "https://fads.fi/fads-black.svg",
                "description": "We create innovative digital solutions to help your business grow and succeed in the digital world.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Finland"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "info@fads.fi",
                  "contactType": "customer service"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/fadsfi/",
                  "https://www.linkedin.com/in/denisfateev/",
                  "https://www.youtube.com/@fadsmarketing",
                  "https://t.me/zeisch"
                ]
              }
            `
          }}
        />
        
        {/* HubSpot Script */}
        <Script
          id="hubspot-script"
          src="//js.hs-scripts.com/49357637.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`${tektur.variable} ${spaceGrotesk.variable} font-sans antialiased overflow-y-auto`}
      >
    
        <div className="flex flex-col min-h-screen select-none">
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
              <div className="h-[30px] mt-14 mb-6">
                <Breadcrumbs />
              </div>
              <div className="min-h-screen">
                {children}
              </div>
              <SpeedInsights />
            </div>
          </main>
          
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}

