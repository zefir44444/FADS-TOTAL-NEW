/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true
  },
  // Добавляем HTTP заголовки безопасности
  async headers() {
    return [
      {
        // Применяем заголовки для всех маршрутов
        source: '/:path*',
        headers: [
          // Content Security Policy (CSP)
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com https://js.hs-scripts.com https://js.hsforms.net https://js.hubspot.com https://snap.licdn.com https://js.hs-banner.com https://js.hscollectedforms.net https://js.hs-analytics.net;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.google.com https://www.gstatic.com;
              img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://*.hubspot.com https://www.google.com https://www.gstatic.com https://px.ads.linkedin.com;
              font-src 'self' https://fonts.gstatic.com https://js.hsforms.net;
              connect-src 'self' https://www.google-analytics.com https://region1.analytics.google.com https://stats.g.doubleclick.net https://api.hubapi.com https://forms.hubspot.com https://www.google.com https://www.gstatic.com https://px.ads.linkedin.com https://snap.licdn.com;
              frame-src 'self' https://www.google.com https://vars.hotjar.com https://app.hubspot.com https://www.googletagmanager.com;
              frame-ancestors 'none';
              form-action 'self';
              base-uri 'self';
              object-src 'none';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          // HTTP Strict Transport Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // Cross-Origin Opener Policy (COOP)
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          // X-Frame-Options для защиты от кликджекинга
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Дополнительные заголовки безопасности
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig 