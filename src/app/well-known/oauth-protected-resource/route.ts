import { NextResponse } from 'next/server'

/**
 * OAuth Protected Resource Metadata — RFC 9728
 * Declares this site as a public resource with no authentication required.
 * https://www.rfc-editor.org/rfc/rfc9728
 */

const BASE_URL = 'https://www.sidikoff.com'

const PROTECTED_RESOURCE_METADATA = {
  resource: BASE_URL,
  resource_name: 'SIDIKOFF DIGITAL Web API',
  resource_documentation: `${BASE_URL}/llms.txt`,
  // No authorization servers — this is a public resource
  authorization_servers: [],
  // No scopes — all public endpoints are freely accessible
  scopes_supported: [],
  bearer_methods_supported: [],
  resource_signing_alg_values_supported: [],
  // Public endpoints available without auth
  resource_endpoints: [
    `${BASE_URL}/.well-known/api-catalog`,
    `${BASE_URL}/.well-known/agent-skills/index.json`,
    `${BASE_URL}/.well-known/mcp/server-card.json`,
    `${BASE_URL}/api/markdown`,
    `${BASE_URL}/llms.txt`,
  ],
}

export async function GET() {
  return NextResponse.json(PROTECTED_RESOURCE_METADATA, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
