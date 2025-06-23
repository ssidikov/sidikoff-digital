import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/fr/', '/en/', '/ru/', '/projects/', '/mentions-legales/'],
        disallow: ['/api/', '/admin/', '/_next/', '/temp/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
