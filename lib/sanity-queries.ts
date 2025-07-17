// Base fragments for reusability
export const authorFragment = `
  _id,
  name,
  slug,
  image {
    asset-> {
      _id,
      url
    },
    alt
  },
  position,
  social
`

export const categoryFragment = `
  _id,
  title,
  slug,
  description,
  color
`

export const postFragment = `
  _id,
  title,
  slug,
  author-> {
    ${authorFragment}
  },
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  categories[]-> {
    ${categoryFragment}
  },
  publishedAt,
  excerpt,
  body,
  seo,
  featured,
  readingTime,
  _createdAt,
  _updatedAt
`

// Query for all published posts with pagination
export const postsQuery = `
*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) [$start...$end] {
  ${postFragment}
}
`

// Query for total count of published posts
export const postsCountQuery = `
count(*[_type == "post" && publishedAt <= now()])
`

// Query for a single post by slug
export const postBySlugQuery = `
*[_type == "post" && (slug.fr.current == $slug || slug.en.current == $slug) && publishedAt <= now()][0] {
  ${postFragment}
}
`

// Query for related posts (same category, excluding current post)
export const relatedPostsQuery = `
*[_type == "post" 
  && _id != $postId 
  && publishedAt <= now() 
  && count(categories[]._ref[@ in $categoryIds]) > 0
] | order(publishedAt desc) [0...3] {
  ${postFragment}
}
`

// Query for featured posts
export const featuredPostsQuery = `
*[_type == "post" && featured == true && publishedAt <= now()] | order(publishedAt desc) [0...3] {
  ${postFragment}
}
`

// Query for posts by category
export const postsByCategoryQuery = `
*[_type == "post" 
  && publishedAt <= now() 
  && $categoryId in categories[]._ref
] | order(publishedAt desc) [$start...$end] {
  ${postFragment}
}
`

// Query for all categories
export const categoriesQuery = `
*[_type == "category"] | order(title.fr asc) {
  ${categoryFragment}
}
`

// Query for posts sitemap
export const postsSitemapQuery = `
*[_type == "post" && publishedAt <= now()] {
  slug,
  _updatedAt,
  publishedAt
}
`

// Query for recent posts (for RSS feed)
export const recentPostsQuery = `
*[_type == "post" && publishedAt <= now()] | order(publishedAt desc) [0...10] {
  ${postFragment}
}
`

// Search posts query
export const searchPostsQuery = `
*[_type == "post" 
  && publishedAt <= now()
  && (
    title.fr match $searchTerm 
    || title.en match $searchTerm 
    || excerpt.fr match $searchTerm 
    || excerpt.en match $searchTerm
  )
] | order(publishedAt desc) {
  ${postFragment}
}
`
