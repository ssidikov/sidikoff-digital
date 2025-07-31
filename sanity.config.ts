/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

// Простая конфигурация с fallback значениями
const projectId = '71pz7dxk'
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'SIDIKOFF DIGITAL Blog',

  projectId: projectId || '71pz7dxk',
  dataset: dataset || 'production',

  plugins: [
    deskTool({
      name: 'studio',
      title: 'Content Studio',
      structure: (S: any) =>
        S.list()
          .title('Content')
          .items([
            // Blog Posts
            S.listItem()
              .title('Blog Posts')
              .icon(() => '📝')
              .child(
                S.documentTypeList('blogPost').title('Blog Posts').filter('_type == "blogPost"')
              ),

            // Categories
            S.listItem()
              .title('Categories')
              .icon(() => '🏷️')
              .child(
                S.documentTypeList('blogCategory')
                  .title('Categories')
                  .filter('_type == "blogCategory"')
              ),

            // Authors
            S.listItem()
              .title('Authors')
              .icon(() => '👤')
              .child(S.documentTypeList('author').title('Authors').filter('_type == "author"')),

            // Divider
            S.divider(),

            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem: any) => !['blogPost', 'blogCategory', 'author'].includes(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  // Set default tool
  defaultTool: 'studio',

  schema: {
    types: schemaTypes,
  },

  // Vite configuration to avoid PostCSS conflicts
  vite: {
    css: {
      postcss: false,
    },
  },

  // Custom toolbar
  tools: (prev) => {
    // Return all tools including the structure tool (studio) and vision tool
    return prev
  },
})
