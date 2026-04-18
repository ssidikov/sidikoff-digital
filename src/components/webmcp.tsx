'use client'

import { useEffect } from 'react'

/**
 * WebMCP — exposes site tools to AI agents via the browser API.
 * https://webmachinelearning.github.io/webmcp/
 * https://developer.chrome.com/blog/webmcp-epp
 */

interface ModelContextTool {
  name: string
  description: string
  inputSchema: object
  execute: (input: unknown) => Promise<unknown>
}

interface ModelContext {
  registerTool: (tool: ModelContextTool, signal?: AbortSignal) => void
}

declare global {
  interface Navigator {
    modelContext?: ModelContext
  }
}

const BASE_URL = 'https://www.sidikoff.com'

export default function WebMCP() {
  useEffect(() => {
    if (typeof navigator === 'undefined' || !navigator.modelContext) return

    const controller = new AbortController()
    const { signal } = controller

    // Tool 1: Get all services
    navigator.modelContext.registerTool(
      {
        name: 'get-services',
        description:
          'List all web development and digital services offered by SIDIKOFF DIGITAL, a French web agency',
        inputSchema: {
          type: 'object',
          properties: {},
          additionalProperties: false,
        },
        execute: async () => ({
          agency: 'SIDIKOFF DIGITAL',
          services: [
            {
              name: 'Création de sites web sur mesure',
              slug: 'creation-site-web',
              url: `${BASE_URL}/services/creation-site-web`,
              description: 'Sites web professionnels React & Next.js',
            },
            {
              name: 'Développement application web',
              slug: 'application-web',
              url: `${BASE_URL}/services/application-web`,
              description: 'Applications web complexes et sur mesure',
            },
            {
              name: 'Optimisation SEO',
              slug: 'optimisation-seo',
              url: `${BASE_URL}/services/optimisation-seo`,
              description: 'Référencement naturel et performance web',
            },
            {
              name: 'E-commerce',
              slug: 'e-commerce',
              url: `${BASE_URL}/services/e-commerce`,
              description: 'Boutiques en ligne performantes',
            },
          ],
          contact: `${BASE_URL}/contact`,
        }),
      },
      signal
    )

    // Tool 2: Get contact information
    navigator.modelContext.registerTool(
      {
        name: 'get-contact',
        description:
          'Get contact information for SIDIKOFF DIGITAL web agency to request a quote or ask a question',
        inputSchema: {
          type: 'object',
          properties: {},
          additionalProperties: false,
        },
        execute: async () => ({
          agency: 'SIDIKOFF DIGITAL',
          email: 's.sidikoff@gmail.com',
          phone: '+33 6 26 93 27 34',
          website: BASE_URL,
          contactPage: `${BASE_URL}/contact`,
          location: 'France (Paris, Lyon, Toulouse, Strasbourg)',
          languages: ['Français', 'English', 'Русский'],
        }),
      },
      signal
    )

    // Tool 3: Navigate to a page
    navigator.modelContext.registerTool(
      {
        name: 'navigate',
        description: 'Navigate to a specific page on the SIDIKOFF DIGITAL website',
        inputSchema: {
          type: 'object',
          properties: {
            page: {
              type: 'string',
              enum: ['home', 'services', 'projects', 'contact', 'blog', 'tarifs'],
              description: 'The page to navigate to',
            },
          },
          required: ['page'],
          additionalProperties: false,
        },
        execute: async (input: unknown) => {
          const { page } = input as { page: string }
          const routes: Record<string, string> = {
            home: '/',
            services: '/services',
            projects: '/projects',
            contact: '/contact',
            blog: '/blog',
            tarifs: '/tarifs',
          }
          const path = routes[page] ?? '/'
          window.location.href = `${BASE_URL}${path}`
          return { navigated: true, url: `${BASE_URL}${path}` }
        },
      },
      signal
    )

    return () => {
      controller.abort()
    }
  }, [])

  return null
}
