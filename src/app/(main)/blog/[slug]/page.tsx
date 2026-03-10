import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogPostContent } from '@/components/BlogPostContent'
import { getBlogPostBySlug, urlFor } from '@/lib/sanity'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const locale = defaultLocale

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
      description: "Cet article de blog n'existe pas.",
    }
  }

  const canonicalUrl = createCanonicalUrl(`blog/${slug}`, locale)

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
      canonical: createCanonicalUrl(`blog/${slug}`, locale),
      languages: generateAlternateUrls(`blog/${slug}`),
    },
  }
}

export async function generateStaticParams() {
  return []
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const locale = defaultLocale

  const [post, dict] = await Promise.all([getBlogPostBySlug(slug), getDictionary(locale)])

  if (!post) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <BlogPostContent post={post} dictionary={dict.blog} locale={locale} />
    </div>
  )
}
