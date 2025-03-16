/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Применяем ко всем статическим ресурсам
        source: '/:path*.(jpg|jpeg|png|gif|webp|svg|ico|ttf|woff|woff2|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Для HTML-страниц используем более короткое время кеширования
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 