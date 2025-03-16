import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Development Services | FADS",
  description: "Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.",
  keywords: "web development services, website design, business website, e-commerce development, corporate website, landing page, web design Finland, custom website development",
  openGraph: {
    title: "Website Development Services | FADS",
    description: "Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.",
    url: "https://fads.fi/websites",
    siteName: "FADS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Services | FADS",
    description: "Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fads.fi/websites",
  },
};

export default function WebsitesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        id="schema-org-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Website Development Services",
              "provider": {
                "@type": "Organization",
                "name": "FADS"
              },
              "description": "Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.",
              "areaServed": "Finland",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Website Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Website Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Landing Page Development"
                    }
                  }
                ]
              }
            }
          `
        }}
      />
      {children}
    </>
  );
} 