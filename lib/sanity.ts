import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Ensure environment variables are available
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  console.warn('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

export const client = createClient({
  projectId: projectId || 'placeholder', // Use placeholder to prevent errors during build
  dataset,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(
  source: { asset: { _ref: string } } | { _id: string; url: string } | string
) {
  return builder.image(source)
}

// Preview client for draft content
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (usePreview = false) => (usePreview ? previewClient : client)
