import { Suspense } from 'react'
import { Metadata } from 'next'

import { BlogPageContent } from '@/components/BlogPageContent'
import { getBlogPosts, getBlogCategories } from '@/lib/sanity'
import { getDictionary } from '@/lib/dictionaries'

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary('fr')

  return {
    title: `${dict.blog.title} | SIDIKOFF DIGITAL`,
    description: dict.blog.subtitle,
    openGraph: {
      title: dict.blog.title,
      description: dict.blog.subtitle,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.blog.title,
      description: dict.blog.subtitle,
    },
  }
}

export default async function BlogPage() {
  const dict = await getDictionary('fr')
  
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getBlogCategories(),
  ])

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <BlogPageContent 
        posts={posts} 
        categories={categories} 
        dictionary={dict.blog}
        locale="fr"
      />
    </Suspense>
  )
}
