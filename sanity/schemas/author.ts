import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100).error('Name must be less than 100 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used in URLs. Auto-generated from name.',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Author profile picture',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility.',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
      description: 'Author biography and background information',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      description: 'Contact email (optional)',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: 'Personal or company website',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      description: 'Social media profiles',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle || 'No email provided',
      }
    },
  },
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
