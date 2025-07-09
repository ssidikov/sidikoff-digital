import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/fr/',
          '/en/',
          '/ru/',
          '/projects/',
          '/mentions-legales/',
          '/about/',
          '/fr/about/',
          '/en/about/',
          '/ru/about/',
          '/fr/projects/',
          '/en/projects/',
          '/ru/projects/',
          '/fr/mentions-legales/',
          '/en/mentions-legales/',
          '/ru/mentions-legales/',
          '/images/',
          '/favicon.svg',
          '/logo-sidikoff.svg',
          '/manifest.json',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/temp/',
          '/_vercel/',
          '/private/',
          '*.json$', // Block JSON files except public ones
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        // No crawlDelay for Google to maximize crawl efficiency
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        crawlDelay: 1,
      },
      // Eco-friendly: Block aggressive crawlers to save server resources
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
