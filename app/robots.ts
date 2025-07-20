import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/ru/',
          '/about/',
          '/services/',
          '/projects/',
          '/contact/',
          '/mentions-legales/',
          '/en/about/',
          '/en/services/',
          '/en/projects/',
          '/en/contact/',
          '/ru/about/',
          '/ru/services/',
          '/ru/projects/',
          '/ru/contact/',
          '/blog/',
          '/en/blog/',
          '/ru/blog/',
          '/images/',
          '/fonts/',
          '/_next/static/',
          '/favicon.svg',
          '/logo-sidikoff.svg',
          '/opengraph-image.jpg',
          '/sitemap.xml',
          '/sitemap-0.xml'
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
