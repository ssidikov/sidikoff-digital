
import { Suspense } from 'react'
import { Metadata } from 'next'

import { BlogPageContent } from '@/components/BlogPageContent'
import { getBlogPosts, getBlogCategories } from '@/lib/sanity'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'

interface BlogPageProps {
  params: Promise<{
    locale: Locale
  }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { locale } = resolvedParams
  
  const dict = await getDictionary(locale)

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

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  const [posts, categories, dict] = await Promise.all([
    getBlogPosts(),
    getBlogCategories(),
    getDictionary(locale)
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      }>
        <BlogPageContent
          posts={posts}
          categories={categories}
          dictionary={dict.blog}
          locale={locale}
        />
      </Suspense>
    </div>
  )
}

