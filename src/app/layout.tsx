import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UnviewedPages from "@/components/UnviewedPages";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// GTM ID для использования в нескольких местах
const GTM_ID = "GTM-K48CG77";

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
    locale: "en_FI",
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
      {/* Google Tag Manager Script */}
      <Script id='gtm' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <head>
        {/* Google Tag Manager NoScript (for when JavaScript is disabled) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height='0'
            width='0'
            style={{ display: "none", visibility: "hidden" }}
            title='Google Tag Manager'
          />
        </noscript>
        
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
                <UnviewedPages />
              </div>
              <SpeedInsights />
            
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

