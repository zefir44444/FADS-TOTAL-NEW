import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Development Services | FADS',
  description: 'Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.',
  keywords: 'web development services, website design, business website, e-commerce development, corporate website, landing page, web design Finland, custom website development',
  openGraph: {
    title: 'Website Development Services | FADS',
    description: 'Professional web development services in Finland. We create corporate websites, landing pages, e-commerce solutions and custom web designs for businesses.',
    url: 'https://fads-total-new.vercel.app/websites',
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
    canonical: 'https://fads-total-new.vercel.app/websites',
  }
}

// Добавляем HTTP-заголовки для кеширования статических ресурсов
export function generateMetadata(): Metadata {
  return {
    ...metadata,
    other: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  };
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