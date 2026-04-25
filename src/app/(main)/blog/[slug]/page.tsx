import { notFound } from 'next'
import { Metadata } from 'next'
import { allBlogPosts, getPostBySlug } from '@/lib/blog-data'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import BlogArticleContent from '@/components/BlogArticleContent'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
    }
  }

  const PAGE_URL = createCanonicalUrl(`blog/${post.slug}`, 'fr')

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
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls(`blog/${post.slug}`),
    },
    robots: { index: true, follow: true },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const PAGE_URL = createCanonicalUrl(`blog/${post.slug}`, 'fr')

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": "https://www.sidikoff.com/images/opengraph-fr.png",
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
