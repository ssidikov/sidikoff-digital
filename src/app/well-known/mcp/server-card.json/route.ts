import { NextResponse } from 'next/server'

/**
 * MCP Server Card — SEP-1649
 * Describes the MCP capabilities of this site to AI agents.
 * https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127
 */

const BASE_URL = 'https://www.sidikoff.com'

const SERVER_CARD = {
  $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1.json',
  serverInfo: {
    name: 'SIDIKOFF DIGITAL',
    version: '1.0.0',
    description:
      'Agence web française spécialisée dans la création de sites web professionnels, applications React/Next.js et optimisation SEO.',
    contact: {
      email: 's.sidikoff@gmail.com',
      url: `${BASE_URL}/contact`,
    },
    license: 'proprietary',
  },
  transport: {
    type: 'http',
    endpoint: `${BASE_URL}/api/mcp`,
  },
  capabilities: {
    tools: [
      {
        name: 'get-services',
        description: 'List all web development services offered by SIDIKOFF DIGITAL',
      },
      {
        name: 'get-projects',
        description: 'Browse the portfolio of completed web projects',
      },
      {
        name: 'get-contact',
        description: 'Get contact information and submit a project inquiry',
      },
    ],
    resources: [
      {
        name: 'llms-txt',
        uri: `${BASE_URL}/llms.txt`,
        description: 'LLM-friendly summary of the site in Markdown format',
        mimeType: 'text/markdown',
      },
      {
        name: 'sitemap',
        uri: `${BASE_URL}/sitemap.xml`,
        description: 'XML sitemap of all public pages',
        mimeType: 'application/xml',
      },
    ],
    prompts: [],
  },
  links: {
    homepage: BASE_URL,
    documentation: `${BASE_URL}/llms.txt`,
    apiCatalog: `${BASE_URL}/.well-known/api-catalog`,
    agentSkills: `${BASE_URL}/.well-known/agent-skills/index.json`,
  },
}

export async function GET() {
  return NextResponse.json(SERVER_CARD, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
