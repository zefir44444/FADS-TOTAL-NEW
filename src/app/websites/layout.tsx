import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Development Services | FADS',
  description: 'Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.',
  keywords: 'web development services, website design, business website, e-commerce development, corporate website, landing page, web design Finland, custom website development',
  openGraph: {
    title: 'Website Development Services | FADS',
    description: 'Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.',
    url: 'https://fads.fi/websites',
    siteName: 'FADS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Services | FADS',
    description: 'Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://fads.fi/websites',
  }
}

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 