import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allBlogPosts, getPostBySlug } from '@/lib/blog-data'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import BlogArticleContent from '@/components/BlogArticleContent'

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
    title: post.title,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://www.sidikoff.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sidikoff Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sidikoff.com/images/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": PAGE_URL
    }
  }

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
