import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogPostContent } from '@/components/BlogPostContent'
import { getBlogPostBySlug, urlFor } from '@/lib/sanity'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
      description: "Cet article de blog n'existe pas.",
    }
  }

  const canonicalUrl = createCanonicalUrl(`blog/${slug}`, 'fr')

  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : '/images/opengraph-fr.png'

  return {
    title: post.title,
    description: post.excerpt || post.title,
    keywords: post.seo?.keywords,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: canonicalUrl,
      siteName: 'SIDIKOFF DIGITAL',
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: [imageUrl],
      creator: '@sidikoffdigital',
    },
    alternates: {
      canonical: createCanonicalUrl(`blog/${slug}`, 'fr'),
      languages: generateAlternateUrls(`blog/${slug}`),
    },
  }
}

export async function generateStaticParams() {
  return []
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleUrl = `${DEFAULT_SEO.siteUrl}/blog/${post.slug.current}`
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).quality(100).url()
    : `${DEFAULT_SEO.siteUrl}/images/misc/technology-bg.jpg`

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt || post.title,
    url: articleUrl,
    imageUrl,
    publishedAt: post.publishedAt,
    authorName: post.author?.name || 'SIDIKOFF DIGITAL',
    authorUrl: DEFAULT_SEO.siteUrl,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Blog', url: `${DEFAULT_SEO.siteUrl}/blog` },
    { name: post.title, url: articleUrl },
  ])

  return (
    <>
      <script
        id='article-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id='breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className='min-h-screen bg-gray-50'>
        <BlogPostContent post={post} />
      </div>
    </>
  )
}
