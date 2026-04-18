import { NextResponse } from 'next/server'

const baseUrl = 'https://www.sidikoff.com'

/**
 * Raw robots.txt route handler.
 * Using a Route Handler instead of MetadataRoute.Robots so we can emit
 * non-standard directives like Content-Signal (Content Signals draft spec).
 * https://contentsignals.org/
 */
const ROBOTS_CONTENT = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/static/media/
Disallow: /admin/
Disallow: /private/
Disallow: /studio/
Disallow: /tmp/
Disallow: /_vercel/
Disallow: /404
Disallow: /500
Disallow: /fonts/
Disallow: /favicon.ico
Content-Signal: ai-train=no, search=yes, ai-input=no

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/static/media/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/
Disallow: /_next/static/media/
Crawl-delay: 1

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Explicitly allow AI search and LLM bots
User-agent: GPTBot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: ChatGPT-User
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: Google-Extended
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: anthropic-ai
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: Claude-Web
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: ClaudeBot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: PerplexityBot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: CCBot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

User-agent: OAI-SearchBot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /private/

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`

export async function GET() {
  return new NextResponse(ROBOTS_CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
