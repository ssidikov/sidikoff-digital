import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/',
          '/_next/static/media/', // Prevent crawling of font files (.woff2) — wastes crawl budget
          '/_next/image',          // Next.js image optimizer — not indexable
          '/admin/',
          '/private/',
          '/studio/',
          '/tmp/',
          '/_vercel/',
          '/404',
          '/500',
          '/fonts/',
          '/favicon.ico', // Prevent crawling of favicon — not indexable content
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: [
          '/api/',
          '/_next/static/media/', // Prevent .woff2 font file crawling
          '/admin/',
          '/studio/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/studio/', '/private/', '/_next/static/media/'],
        crawlDelay: 1,
      },
      // Block specific bad bots
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
      // Explicitly allow AI search and LLM bots
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot',
          'CCBot',
          'OAI-SearchBot',
        ],
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/studio/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
