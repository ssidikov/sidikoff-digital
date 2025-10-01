import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogPostContent } from '@/components/BlogPostContent'
import { getBlogPostBySlug, getBlogPosts, urlFor } from '@/lib/sanity'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'

interface BlogPostPageProps {
  params: Promise<{
    locale: Locale
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { slug, locale } = resolvedParams

  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article non trouvé',
      description: "Cet article de blog n'existe pas.",
    }
  }

  const canonicalUrl =
    locale === 'fr'
      ? `https://sidikoff.com/blog/${slug}`
      : `https://sidikoff.com/${locale}/blog/${slug}`

  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : '/images/og-homepage.jpg'

  return {
    title: `${post.title} | SIDIKOFF DIGITAL`,
    description: post.excerpt || post.title,
    keywords: post.seo?.keywords,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: canonicalUrl,
      siteName: 'SIDIKOFF DIGITAL',
      locale: locale,
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
      canonical: canonicalUrl,
      languages: {
        fr: `https://sidikoff.com/blog/${slug}`,
        en: `https://sidikoff.com/en/blog/${slug}`,
        ru: `https://sidikoff.com/ru/blog/${slug}`,
        'x-default': `https://sidikoff.com/blog/${slug}`,
      },
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  const locales: Locale[] = ['en', 'ru'] // Exclude 'fr' as French pages are served without prefix

  const params = []

  for (const locale of locales) {
    for (const post of posts) {
      params.push({
        locale,
        slug: post.slug.current,
      })
    }
  }

  return params
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const { locale, slug } = resolvedParams

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
