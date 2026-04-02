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
      name: 'faq',
      title: 'FAQ Schema',
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

    // FAQ Schema Group — for Google Rich Snippets (FAQ carousel in SERPs)
    defineField({
      name: 'faq',
      title: 'FAQ (Rich Snippet)',
      type: 'array',
      group: 'faq',
      description:
        'Add FAQ questions and answers to generate a schema.org FAQPage for Google rich snippets. Each Q&A pair can appear as an expandable result in Google Search.',
      of: [
        defineField({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          icon: () => '❓',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              description: 'The question as it will appear in Google (e.g. "Combien coûte un site web ?")',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required().max(300),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              description:
                'A concise, complete answer. Aim for 50–300 words. HTML is not supported — plain text only.',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required().min(50).max(2000),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare(value: Record<string, string>) {
              return {
                title: value.title || 'Question',
                subtitle: value.subtitle ? value.subtitle.slice(0, 80) + '...' : 'No answer yet',
              }
            },
          },
        }),
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
