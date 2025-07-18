import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Article de Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        {
          name: 'fr',
          title: 'Français',
          type: 'slug',
          options: {
            source: 'title.fr',
            maxLength: 96,
          },
        },
        {
          name: 'en',
          title: 'English',
          type: 'slug',
          options: {
            source: 'title.en',
            maxLength: 96,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'object',
          title: 'Texte alternatif',
          fields: [
            { name: 'fr', title: 'Français', type: 'string' },
            { name: 'en', title: 'English', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'object',
      fields: [
        { name: 'fr', title: 'Français', type: 'text', rows: 4 },
        { name: 'en', title: 'English', type: 'text', rows: 4 },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'object',
      fields: [
        {
          name: 'fr',
          title: 'Français',
          type: 'blockContent',
        },
        {
          name: 'en',
          title: 'English',
          type: 'blockContent',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'object',
          fields: [
            { name: 'fr', title: 'Français', type: 'string', validation: (Rule) => Rule.max(60) },
            { name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.max(60) },
          ],
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'object',
          fields: [
            {
              name: 'fr',
              title: 'Français',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.max(160),
            },
            {
              name: 'en',
              title: 'English',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.max(160),
            },
          ],
        },
        {
          name: 'keywords',
          title: 'Mots-clés',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Article en vedette',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'readingTime',
      title: 'Temps de lecture (minutes)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(60),
    }),
  ],

  preview: {
    select: {
      title: 'title.fr',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `par ${author}` }
    },
  },
})
