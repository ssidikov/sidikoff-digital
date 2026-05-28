import { BlogPost, blogPosts as part1 } from './blog-data-part1'
import { blogPostsPart2 as part2 } from './blog-data-part2'

export type { BlogPost }

export const allBlogPosts: BlogPost[] = [...part1, ...part2].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug)
}
