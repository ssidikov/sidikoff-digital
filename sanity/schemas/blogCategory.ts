import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(50).error('Title must be less than 50 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used in URLs. Auto-generated from title.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of this category',
      rows: 3,
      validation: (Rule) => Rule.max(200).error('Description must be less than 200 characters'),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Hex color code for category badge (e.g., #3F72AF)',
      initialValue: '#3F72AF',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex',
          invert: false,
        }).error('Please enter a valid hex color code (e.g., #3F72AF)'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      color: 'color',
    },
    prepare(selection) {
      const { title, subtitle, color } = selection
      return {
        title: title,
        subtitle: subtitle || 'No description',
        media: () => '🏷️',
      }
    },
  },
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
