import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogPostContent } from '@/components/BlogPostContent'
import { getBlogPostBySlug, getBlogPosts, urlFor } from '@/lib/sanity'
import { getDictionary } from '@/lib/dictionaries'

interface BlogPostPageProps {
  params: Promise<{
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
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      tags: post.category ? [post.category.title] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  const [post, dict] = await Promise.all([
    getBlogPostBySlug(slug),
    getDictionary('fr'),
  ])

  if (!post) {
    notFound()
  }

  return (
    <BlogPostContent 
      post={post} 
      dictionary={dict.blog}
      locale="fr"
    />
  )
}
