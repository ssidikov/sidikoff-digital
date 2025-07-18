export interface LocalizedString {
  fr: string
  en: string
}

export interface LocalizedSlug {
  fr: { current: string }
  en: { current: string }
}

export interface LocalizedText {
  fr: string
  en: string
}

export interface LocalizedBlockContent {
  fr: unknown[]
  en: unknown[]
}

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  bio?: LocalizedBlockContent
  position?: LocalizedString
  social?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface Category {
  _id: string
  title: LocalizedString
  slug: LocalizedSlug
  description?: LocalizedText
  color?: {
    hex: string
  }
}

export interface Post {
  _id: string
  title: LocalizedString
  slug: LocalizedSlug
  author: Author
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: LocalizedString
  }
  categories?: Category[]
  publishedAt: string
  excerpt: LocalizedText
  body: LocalizedBlockContent
  seo?: {
    metaTitle?: LocalizedString
    metaDescription?: LocalizedText
    keywords?: string[]
  }
  featured?: boolean
  readingTime?: number
  _createdAt: string
  _updatedAt: string
}

export interface BlogPageProps {
  posts: Post[]
  categories: Category[]
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface PostPageProps {
  post: Post
  relatedPosts: Post[]
}
