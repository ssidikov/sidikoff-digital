// Initial data to populate your Sanity CMS
// You can import this data into your Sanity studio

export const initialCategories = [
  {
    _type: 'blogCategory',
    _id: 'web-development',
    title: 'Web Development',
    slug: { current: 'web-development' },
    description: 'Everything about modern web development, frameworks, and best practices',
    color: '#3F72AF',
  },
  {
    _type: 'blogCategory',
    _id: 'design',
    title: 'Design',
    slug: { current: 'design' },
    description: 'UI/UX design trends, principles, and creative inspiration',
    color: '#9C27B0',
  },
  {
    _type: 'blogCategory',
    _id: 'seo',
    title: 'SEO',
    slug: { current: 'seo' },
    description: 'Search engine optimization tips and strategies',
    color: '#4CAF50',
  },
  {
    _type: 'blogCategory',
    _id: 'business',
    title: 'Business',
    slug: { current: 'business' },
    description: 'Digital business strategies and insights',
    color: '#FF9800',
  },
  {
    _type: 'blogCategory',
    _id: 'technology',
    title: 'Technology',
    slug: { current: 'technology' },
    description: 'Latest tech trends and innovations',
    color: '#2196F3',
  },
]

export const initialAuthor = {
  _type: 'author',
  _id: 'sidikoff-digital',
  name: 'SIDIKOFF DIGITAL',
  slug: { current: 'sidikoff-digital' },
  bio: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'SIDIKOFF DIGITAL - команда опытных веб-разработчиков и дизайнеров, специализирующаяся на создании современных веб-сайтов и цифровых решений. Мы помогаем бизнесу достигать успеха в цифровом мире через инновационные технологии и креативный подход.',
        },
      ],
    },
  ],
  email: 's.sidikoff@gmail.com',
  website: 'https://sidikoff.com',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sardorbeksidikov/',
    github: 'https://github.com/ssidikov',
  },
}

export const sampleBlogPost = {
  _type: 'blogPost',
  title: 'Топ 10 трендов веб-дизайна в 2025 году',
  slug: { current: 'top-10-web-design-trends-2025' },
  author: {
    _type: 'reference',
    _ref: 'sidikoff-digital',
  },
  category: {
    _type: 'reference',
    _ref: 'design',
  },
  publishedAt: new Date().toISOString(),
  excerpt:
    'Изучите последние тренды в веб-дизайне, которые будут доминировать в 2024 году. От новых цветовых палитр до инновационных анимаций.',
  body: [
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Введение',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Веб-дизайн постоянно эволюционирует, и 2024 год обещает принести множество интересных трендов. В этой статье мы рассмотрим самые актуальные направления в дизайне веб-сайтов.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          marks: [],
          text: '1. Минимализм и чистые линии',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Минималистичный дизайн продолжает оставаться популярным. Чистые линии, много белого пространства и фокус на контенте помогают создать элегантный и функциональный пользовательский опыт.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          marks: [],
          text: '2. Анимации и микроинтеракции',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Тонкие анимации и микроинтеракции делают веб-сайт более живым и отзывчивым. Они помогают пользователям лучше понимать интерфейс и создают приятное впечатление от взаимодействия.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Заключение',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Современный веб-дизайн развивается в сторону большей функциональности и лучшего пользовательского опыта. Следование этим трендам поможет создать актуальный и эффективный веб-сайт.',
        },
      ],
    },
  ],
  seo: {
    metaTitle: 'Топ 10 трендов веб-дизайна 2025 | SIDIKOFF DIGITAL',
    metaDescription:
      'Откройте для себя новейшие тренды веб-дизайна 2025 года. Экспертные советы от SIDIKOFF DIGITAL для современного и эффективного дизайна.',
    keywords: ['веб-дизайн', 'тренды 2025', 'UI/UX', 'современный дизайн'],
  },
  featured: true,
  status: 'published',
}
