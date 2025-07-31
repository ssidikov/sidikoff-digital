
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

// Sanity configuration
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production only
}

// Create Sanity client
export const sanityClient = createClient(sanityConfig)

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ queries for blog
export const BLOG_POSTS_QUERY = `*[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  category->{
    _id,
    title,
    slug,
    color
  },
  mainImage{
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  author->{
    _id,
    name,
    image
  },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  body,
  seo {
    metaTitle,
    metaDescription,
    keywords
  },
  category->{
    _id,
    title,
    slug,
    color
  },
  mainImage{
    asset->{
      _id,
      url,
      metadata {
        dimensions,
        lqip
      }
    },
    alt
  },
  author->{
    _id,
    name,
    image,
    bio
  },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`

export const BLOG_CATEGORIES_QUERY = `*[_type == "blogCategory"] | order(title asc) {
  _id,
  title,
  slug,
  color,
  description
}`

// Type definitions
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt: string
  body?: unknown[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
  category?: {
    _id: string
    title: string
    slug: {
      current: string
    }
    color?: string
  }
  mainImage?: {
    asset: {
      _id: string
      url: string
      metadata: {
        dimensions: {
          width: number
          height: number
        }
        lqip: string
      }
    }
    alt?: string
  }
  author?: {
    _id: string
    name: string
    image?: unknown
    bio?: unknown[]
  }
  estimatedReadingTime?: number
}

export interface BlogCategory {
  _id: string
  title: string
  slug: {
    current: string
  }
  color?: string
  description?: string
}

// Fetch functions
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch(BLOG_POSTS_QUERY)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityClient.fetch(BLOG_POST_BY_SLUG_QUERY, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    return await sanityClient.fetch(BLOG_CATEGORIES_QUERY)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}
