import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fads.fi';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/brief/thank-you',
        '/contact/thank-you',
        '/promotion/ai-optimization/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 