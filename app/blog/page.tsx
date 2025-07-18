import { Suspense } from 'react'
import { Metadata } from 'next'
import BlogIndex from '@/components/blog/BlogIndex'
import BlogLoadingSkeleton from '@/components/blog/BlogLoadingSkeleton'
import { getAllPosts, getAllCategories, getFeaturedPosts } from '@/lib/blog-api'

export const metadata: Metadata = {
  title: 'Blog - SIDIKOFF DIGITAL | Conseils en développement web et SEO',
  description:
    'Découvrez nos articles sur le développement web, le SEO, et les dernières tendances du digital. Conseils d&apos;experts pour optimiser votre présence en ligne.',
  keywords: [
    'blog',
    'développement web',
    'SEO',
    'conseils digital',
    'Next.js',
    'React',
    'optimisation',
  ],
  openGraph: {
    title: 'Blog - SIDIKOFF DIGITAL',
    description: "Conseils d'experts en développement web et SEO",
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: '/blog',
    languages: {
      fr: '/blog',
      en: '/en/blog',
    },
  },
}

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam, category } = await searchParams
  const page = parseInt(pageParam || '1', 10)

  const [blogData, categories, featuredPosts] = await Promise.all([
    getAllPosts(page),
    getAllCategories(),
    getFeaturedPosts(),
  ])

  return (
    <main className='min-h-screen pt-20'>
      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <section className='text-center mb-12'>
          <h1
            className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4'
            style={{ lineHeight: 1.2 }}>
            Blog SIDIKOFF DIGITAL
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Découvrez nos conseils d&apos;experts en développement web, SEO et stratégies digitales
            pour faire croître votre business en ligne.
          </p>
        </section>

        <Suspense fallback={<BlogLoadingSkeleton />}>
          <BlogIndex
            initialData={blogData}
            categories={categories}
            featuredPosts={featuredPosts}
            currentPage={page}
            selectedCategory={category}
          />
        </Suspense>
      </div>
    </main>
  )
}
