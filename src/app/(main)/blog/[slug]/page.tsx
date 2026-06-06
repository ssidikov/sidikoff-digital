import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allBlogPosts, getPostBySlug } from '@/lib/blog-data'
import { createCanonicalUrl, generateAlternateUrls, generateArticleSchema } from '@/lib/seo-utils'
import BlogArticleContent from '@/components/BlogArticleContent'

export const dynamicParams = false

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  const PAGE_URL = createCanonicalUrl(`blog/${post.slug}`, 'fr')
  const imageUrl = post.image

  return {
    title: { absolute: post.title },
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      authors: [post.author],
      publishedTime: post.date,
      images: [{ url: imageUrl, width: 1600, height: 900, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@sidikoffdigital',
      images: [imageUrl],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls(`blog/${post.slug}`),
    },
    robots: { index: true, follow: true },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    return notFound()
  }

  const PAGE_URL = createCanonicalUrl(`blog/${post.slug}`, 'fr')
  const imageUrl = post.image

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    url: PAGE_URL,
    imageUrl: imageUrl,
    publishedAt: post.date,
    authorName: 'Sardorbek SIDIKOV', // Explicit authoritative author name for E-E-A-T
    authorSameAs: [
      'https://linkedin.com/in/sardorbeksidikov',
      'https://github.com/ssidikov',
    ]
  })

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogArticleContent post={post} />
    </>
  )
}
