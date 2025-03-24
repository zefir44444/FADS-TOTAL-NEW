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
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://*.hs-scripts.com https://snap.licdn.com https://*.linkedin.com https://*.hs-banner.com https://*.hscollectedforms.net https://*.hs-analytics.net https://ssl.google-analytics.com https://googleads.g.doubleclick.net https://*.googlesyndication.com https://www.googleadservices.com https://*.cookieyes.com https://cdn-cookieyes.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://*.cookieyes.com https://cdn-cookieyes.com;
              img-src 'self' data: https://www.google-analytics.com https://*.linkedin.com https://px.ads.linkedin.com https://*.hubspot.com https://*.hsforms.com https://www.googletagmanager.com https://ssl.gstatic.com https://www.gstatic.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com https://www.google.fi https://www.google.co.uk https://www.google.de https://*.googlesyndication.com https://fonts.gstatic.com https://*.cookieyes.com https://cdn-cookieyes.com;
              font-src 'self' https://fonts.gstatic.com https://*.cookieyes.com https://cdn-cookieyes.com;
              connect-src 'self' https://www.google-analytics.com https://region1.analytics.google.com https://www.google.com https://*.hs-scripts.com https://*.linkedin.com https://*.hubspot.com https://*.hs-banner.com https://*.hscollectedforms.net https://*.hs-analytics.net https://*.hsforms.com https://stats.g.doubleclick.net https://*.doubleclick.net https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.cookieyes.com https://cdn-cookieyes.com;
              frame-src 'self' https://www.googletagmanager.com https://*.hubspot.com https://*.hsforms.com https://bid.g.doubleclick.net https://*.googlesyndication.com https://*.google.com https://*.cookieyes.com https://cdn-cookieyes.com;
              form-action 'self' https://*.hubspot.com https://*.hsforms.com https://*.cookieyes.com https://cdn-cookieyes.com;
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