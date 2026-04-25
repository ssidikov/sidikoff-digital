import { Suspense } from 'react'
import { Metadata } from 'next'

import { BlogPageContent } from '@/components/BlogPageContent'
import { getBlogPosts, getBlogCategories } from '@/lib/sanity'
import common from '@/locales/fr/common.json'
import { createCanonicalUrl } from '@/lib/seo-utils'

export const revalidate = 3600 // 1 hour ISR

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: common.blog.title,
    description: common.blog.subtitle,
    alternates: {
      canonical: createCanonicalUrl('blog', 'fr'),
    },
    openGraph: {
      title: common.blog.title,
      description: common.blog.subtitle,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: createCanonicalUrl('blog', 'fr'),
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: common.blog.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: common.blog.title,
      description: common.blog.subtitle,
      creator: '@sidikoffdigital',
    },
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getBlogPosts(), getBlogCategories()])

  return (
    <div className='min-h-screen bg-gray-50'>
      <Suspense
        fallback={
          <div className='flex items-center justify-center min-h-screen'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600'></div>
          </div>
        }>
        <BlogPageContent posts={posts} categories={categories} />
      </Suspense>
    </div>
  )
}
