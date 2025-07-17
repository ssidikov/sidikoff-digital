import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import blockContent from './schemas/blockContent'
import author from './schemas/author'
import category from './schemas/category'
import post from './schemas/post'

const schemaTypes = [blockContent, author, category, post]

// Sanity configuration - using direct values for Studio compatibility
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1t4u1s5h'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables')
}

export default defineConfig({
  name: 'sidikoff-digital-blog',
  title: 'SIDIKOFF DIGITAL Blog',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio',
})
