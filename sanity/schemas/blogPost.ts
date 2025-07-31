import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: () => '📝',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO & Meta',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    // Content Group
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of your blog post',
      group: 'content',
      validation: (Rule) =>
        Rule.required().max(100).error('Title must be less than 100 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used in URLs. Auto-generated from title.',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the blog post',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'content',
      to: { type: 'blogCategory' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When this post was/will be published',
      group: 'settings',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description of the blog post (will be used in previews and SEO)',
      group: 'content',
      rows: 3,
      validation: (Rule) =>
        Rule.required().max(200).error('Excerpt must be less than 200 characters'),
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description: 'The main content of your blog post',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),

    // SEO Group
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      description: 'SEO settings for better search engine visibility',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines (leave empty to use post title)',
          validation: (Rule) =>
            Rule.max(60).warning(
              'Meta title should be less than 60 characters for optimal display'
            ),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines (leave empty to use excerpt)',
          rows: 2,
          validation: (Rule) =>
            Rule.max(160).warning(
              'Meta description should be less than 160 characters for optimal display'
            ),
        },
        {
          name: 'keywords',
          title: 'Focus Keywords',
          type: 'array',
          description: 'Keywords this post should rank for',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        },
        {
          name: 'noIndex',
          title: 'Hide from search engines',
          type: 'boolean',
          description: 'Check this to prevent search engines from indexing this post',
          initialValue: false,
        },
      ],
    }),

    // Settings Group
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Featured posts appear prominently on the blog page',
      group: 'settings',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Publication Status',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      category: 'category.title',
      status: 'status',
    },
    prepare(selection) {
      const { title, author, category, status } = selection
      const statusEmoji = status === 'published' ? '✅' : status === 'draft' ? '📝' : '🗃️'

      return {
        title: title,
        subtitle: `${statusEmoji} ${category || 'No category'} • by ${author || 'No author'}`,
        media: selection.media,
      }
    },
  },

  orderings: [
    {
      title: 'Published Date (newest first)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date (oldest first)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
