import { client } from './sanity'
import {
  postsQuery,
  postsCountQuery,
  postBySlugQuery,
  relatedPostsQuery,
  featuredPostsQuery,
  postsByCategoryQuery,
  categoriesQuery,
  postsSitemapQuery,
  recentPostsQuery,
  searchPostsQuery,
} from './sanity-queries'
import type { Post, Category, LocalizedSlug } from './types/blog'

const POSTS_PER_PAGE = 6

export async function getAllPosts(page = 1): Promise<{
  posts: Post[]
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}> {
  const start = (page - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE

  const [posts, totalCount] = await Promise.all([
    client.fetch<Post[]>(postsQuery, { start, end }),
    client.fetch<number>(postsCountQuery),
  ])

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)

  return {
    posts,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return await client.fetch<Post>(postBySlugQuery, { slug })
}

export async function getRelatedPosts(postId: string, categoryIds: string[]): Promise<Post[]> {
  return await client.fetch<Post[]>(relatedPostsQuery, { postId, categoryIds })
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return await client.fetch<Post[]>(featuredPostsQuery)
}

export async function getPostsByCategory(
  categoryId: string,
  page = 1
): Promise<{
  posts: Post[]
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}> {
  const start = (page - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE

  const [posts, totalCount] = await Promise.all([
    client.fetch<Post[]>(postsByCategoryQuery, { categoryId, start, end }),
    client.fetch<number>(
      `count(*[_type == "post" && publishedAt <= now() && $categoryId in categories[]._ref])`,
      { categoryId }
    ),
  ])

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)

  return {
    posts,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

export async function getAllCategories(): Promise<Category[]> {
  return await client.fetch<Category[]>(categoriesQuery)
}

export async function getPostsForSitemap(): Promise<
  Array<{ slug: LocalizedSlug; _updatedAt: string; publishedAt: string }>
> {
  // Check if Sanity is properly configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.warn('Sanity project ID not configured, returning empty blog posts array')
    return []
  }
  
  try {
    return await client.fetch(postsSitemapQuery)
  } catch (error) {
    console.warn('Failed to fetch posts for sitemap:', error)
    return []
  }
}

export async function getRecentPosts(): Promise<Post[]> {
  return await client.fetch<Post[]>(recentPostsQuery)
}

export async function searchPosts(searchTerm: string): Promise<Post[]> {
  const searchQuery = `"${searchTerm}"*`
  return await client.fetch<Post[]>(searchPostsQuery, { searchTerm: searchQuery })
}

// Define interfaces for content blocks
interface ContentBlock {
  _type: string
  children?: ContentChild[]
}

interface ContentChild {
  _type: string
  text?: string
}

// Utility function to get reading time
export function calculateReadingTime(content: unknown[]): number {
  if (!content) return 0

  const text = content
    .filter(
      (block: unknown): block is ContentBlock =>
        typeof block === 'object' && block !== null && (block as ContentBlock)._type === 'block'
    )
    .map((block: ContentBlock) =>
      block.children
        ?.filter((child: ContentChild) => child._type === 'span')
        .map((span: ContentChild) => span.text || '')
        .join('')
    )
    .join(' ')

  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Utility function to format date
export function formatDate(dateString: string, locale: 'fr' | 'en' = 'fr'): string {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', options)
}

// Utility function to get localized content
export function getLocalizedContent<T>(content: { fr: T; en: T }, locale: 'fr' | 'en'): T {
  return content[locale] || content.fr
}
