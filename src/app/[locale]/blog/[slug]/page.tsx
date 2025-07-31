
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
  const { slug } = resolvedParams
  
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article non trouvé',
      description: 'Cet article de blog n\'existe pas.'
    }
  }

  return {
    title: `${post.title} | SIDIKOFF DIGITAL`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  const locales: Locale[] = ['fr', 'en', 'ru']
  
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
  
  const [post, dict] = await Promise.all([
    getBlogPostBySlug(slug),
    getDictionary(locale)
  ])

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogPostContent 
        post={post} 
        dictionary={dict.blog} 
        locale={locale} 
      />
    </div>
  )
}

