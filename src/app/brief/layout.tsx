import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Бриф на разработку сайта | FADS',
  description: 'Заполните бриф на разработку сайта и получите профессиональную оценку вашего проекта. Наши эксперты создадут уникальный дизайн и функциональность, соответствующие вашим требованиям и бюджету. Закажите разработку сайта в FADS.',
  keywords: ['бриф', 'разработка сайта', 'веб-разработка', 'заказать сайт', 'FADS', 'дизайн сайта', 'создание сайтов'],
  openGraph: {
    title: 'Бриф на разработку сайта | FADS',
    description: 'Заполните бриф на разработку сайта и получите профессиональную оценку вашего проекта. Наши эксперты создадут уникальный дизайн и функциональность, соответствующие вашим требованиям и бюджету. Закажите разработку сайта в FADS.',
    url: 'https://fads.fi/brief',
    siteName: 'FADS Digital Hub',
    images: [
      {
        url: 'https://fads.fi/fads-black.svg',
        width: 1200,
        height: 630,
        alt: 'FADS Бриф на разработку сайта',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бриф на разработку сайта | FADS',
    description: 'Заполните бриф на разработку сайта и получите профессиональную оценку вашего проекта. Наши эксперты создадут уникальный дизайн и функциональность, соответствующие вашим требованиям и бюджету.',
    images: ['https://fads.fi/fads-black.svg'],
  },
  alternates: {
    canonical: 'https://fads.fi/brief',
  },
};

// Добавляем структурированные данные для SEO
export default function BriefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Бриф на разработку сайта",
            "description": "Заполните бриф на разработку сайта и получите профессиональную оценку вашего проекта. Наши эксперты создадут уникальный дизайн и функциональность, соответствующие вашим требованиям и бюджету.",
            "url": "https://fads.fi/brief",
            "publisher": {
              "@type": "Organization",
              "name": "FADS Digital Hub",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fads.fi/fads-black.svg"
              }
            },
            "offers": {
              "@type": "Offer",
              "description": "Заполните бриф и получите индивидуальное предложение по разработке сайта. Мы создадим для вас уникальное веб-решение, которое будет соответствовать вашим целям и бюджету.",
              "price": "0",
              "priceCurrency": "EUR"
            }
          })
        }}
      />
      {children}
    </>
  );
} 