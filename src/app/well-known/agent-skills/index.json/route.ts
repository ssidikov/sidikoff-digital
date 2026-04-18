import { NextResponse } from 'next/server'

/**
 * Agent Skills Discovery Index — RFC v0.2.0
 * https://github.com/cloudflare/agent-skills-discovery-rfc
 * https://agentskills.io/
 */

const BASE_URL = 'https://www.sidikoff.com'

const AGENT_SKILLS_INDEX = {
  $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  name: 'SIDIKOFF DIGITAL',
  description: 'Agent skills and capabilities published by SIDIKOFF DIGITAL web agency',
  skills: [
    {
      name: 'site-documentation',
      type: 'skill-md',
      description:
        'LLM-friendly summary of SIDIKOFF DIGITAL services, expertise, and contact information in Markdown format',
      url: `${BASE_URL}/llms.txt`,
      digest: 'sha256:8a6e7a388749a43acf5aa3ef36d23e568b76c5140c7f1046089d30f0def4f890',
    },
    {
      name: 'mcp-server',
      type: 'skill-md',
      description:
        'MCP Server Card declaring available tools and resources exposed by this site to AI agents',
      url: `${BASE_URL}/.well-known/mcp/server-card.json`,
      digest: 'sha256:0000000000000000000000000000000000000000000000000000000000000000',
    },
  ],
}

export async function GET() {
  return NextResponse.json(AGENT_SKILLS_INDEX, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
