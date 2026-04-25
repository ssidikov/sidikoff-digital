import { NextRequest, NextResponse } from 'next/server'

/**
 * RFC 9727 API Catalog — automated API discovery via linkset+json.
 * https://www.rfc-editor.org/rfc/rfc9727
 */

const BASE_URL = 'https://www.sidikoff.com'

export async function GET(_request: NextRequest) {
  const catalog = {
    linkset: [
      {
        anchor: BASE_URL,
        'service-doc': [
          {
            href: `${BASE_URL}/llms.txt`,
            type: 'text/markdown',
            title: 'Sidikoff Digital — Service Documentation (LLM-friendly)',
          },
        ],
        'service-desc': [
          {
            href: `${BASE_URL}/.well-known/agent-skills/index.json`,
            type: 'application/json',
            title: 'Agent Skills Discovery Index',
          },
        ],
        describedby: [
          {
            href: `${BASE_URL}/.well-known/mcp/server-card.json`,
            type: 'application/json',
            title: 'MCP Server Card',
          },
        ],
      },
      {
        anchor: `${BASE_URL}/api/contact`,
        'service-doc': [
          {
            href: `${BASE_URL}/contact`,
            type: 'text/html',
            title: 'Contact Form Documentation',
          },
        ],
      },
    ],
  }

  return NextResponse.json(catalog, {
    status: 200,
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
