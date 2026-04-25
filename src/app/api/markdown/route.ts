import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * Markdown content negotiation endpoint.
 * Returns the site's llms.txt as text/markdown when agents request it.
 * RFC: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */
export async function GET(_request: NextRequest) {
  try {
    const llmsPath = join(process.cwd(), 'public', 'llms.txt')
    const content = readFileSync(llmsPath, 'utf-8')

    // Approximate token count (1 token ≈ 4 chars)
    const tokenCount = Math.ceil(content.length / 4)

    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': String(tokenCount),
        'Cache-Control': 'public, max-age=3600',
        Vary: 'Accept',
      },
    })
  } catch {
    return new NextResponse('# Sidikoff Digital\n\nAgence web France — création de sites web professionnels.\n\n**Site:** https://www.sidikoff.com\n**Contact:** s.sidikoff@gmail.com', {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': '50',
        Vary: 'Accept',
      },
    })
  }
}
