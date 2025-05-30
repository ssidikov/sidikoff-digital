import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // backend API routes, not for indexing
          '/admin/', // admin panel
          '/_next/', // Next.js build files
          '/temp/', // temporary files
          // '*.json$' — removed, чтобы не блокировать все JSON
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1, // ограничение скорости обхода для Google (может игнорироваться)
      },
      // Можно добавить других ботов при необходимости
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // ссылка на sitemap
    host: baseUrl,
  }
}
