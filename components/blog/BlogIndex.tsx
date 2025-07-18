'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Calendar, User, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { urlFor } from '@/lib/sanity'
import { formatDate, getLocalizedContent } from '@/lib/blog-api'
import type { Post, Category } from '@/lib/types/blog'

interface BlogIndexProps {
  initialData: {
    posts: Post[]
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
  categories: Category[]
  featuredPosts: Post[]
  currentPage: number
  selectedCategory?: string
}

export default function BlogIndex({
  initialData,
  categories,
  featuredPosts,
  currentPage,
  selectedCategory,
}: BlogIndexProps) {
  const { language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState(selectedCategory || '')
  const [filteredPosts, setFilteredPosts] = useState(initialData.posts)

  const locale = language as 'fr' | 'en'

  useEffect(() => {
    let filtered = initialData.posts

    if (searchTerm) {
      filtered = filtered.filter((post) => {
        const title = getLocalizedContent(post.title, locale).toLowerCase()
        const excerpt = getLocalizedContent(post.excerpt, locale).toLowerCase()
        const search = searchTerm.toLowerCase()
        return title.includes(search) || excerpt.includes(search)
      })
    }

    if (selectedCategoryId) {
      filtered = filtered.filter((post) =>
        post.categories?.some((cat) => cat._id === selectedCategoryId)
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategoryId, initialData.posts, locale])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className='space-y-12'>
      {/* Featured Posts */}
      {featuredPosts.length > 0 && currentPage === 1 && (
        <section>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            {locale === 'fr' ? 'Articles en vedette' : 'Featured Articles'}
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post._id} post={post} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'>
        <div className='grid md:grid-cols-2 gap-4'>
          {/* Search */}
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder={locale === 'fr' ? 'Rechercher des articles...' : 'Search articles...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
            />
          </div>

          {/* Category Filter */}
          <div className='relative'>
            <Filter className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              className='w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none'>
              <option value=''>
                {locale === 'fr' ? 'Toutes les catégories' : 'All categories'}
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {getLocalizedContent(category.title, locale)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section>
        <h2 className='text-3xl font-bold mb-8'>
          {locale === 'fr' ? 'Tous les articles' : 'All Articles'}
        </h2>

        <AnimatePresence mode='wait'>
          <motion.div
            key={`${searchTerm}-${selectedCategoryId}`}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredPosts.map((post) => (
              <motion.div key={post._id} variants={itemVariants}>
                <PostCard post={post} locale={locale} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 dark:text-gray-400 text-lg'>
              {locale === 'fr' ? 'Aucun article trouvé.' : 'No articles found.'}
            </p>
          </div>
        )}
      </section>

      {/* Pagination */}
      {initialData.totalPages > 1 && !searchTerm && !selectedCategoryId && (
        <section className='flex justify-center'>
          <div className='flex gap-2'>
            {Array.from({ length: initialData.totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/blog?page=${page}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  page === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                {page}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function FeaturedPostCard({ post, locale }: { post: Post; locale: 'fr' | 'en' }) {
  const title = getLocalizedContent(post.title, locale)
  const excerpt = getLocalizedContent(post.excerpt, locale)
  const slug = getLocalizedContent(post.slug, locale).current

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden shadow-lg border border-blue-200 dark:border-blue-800'>
      <Link href={`/blog/${slug}`}>
        {post.mainImage && (
          <div className='relative h-48 overflow-hidden'>
            <Image
              src={urlFor(post.mainImage.asset).width(400).height(200).url()}
              alt={post.mainImage.alt ? getLocalizedContent(post.mainImage.alt, locale) : title}
              fill
              className='object-cover transition-transform duration-300 hover:scale-105'
            />
            <div className='absolute top-4 left-4'>
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                {locale === 'fr' ? 'En vedette' : 'Featured'}
              </span>
            </div>
          </div>
        )}
        <div className='p-6'>
          <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2'>
            {title}
          </h3>
          <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>{excerpt}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'>
              <Calendar className='w-4 h-4 mr-1' />
              {formatDate(post.publishedAt, locale)}
            </div>
            <ArrowRight className='w-5 h-5 text-blue-600' />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function PostCard({ post, locale }: { post: Post; locale: 'fr' | 'en' }) {
  const title = getLocalizedContent(post.title, locale)
  const excerpt = getLocalizedContent(post.excerpt, locale)
  const slug = getLocalizedContent(post.slug, locale).current

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className='bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
      <Link href={`/blog/${slug}`}>
        {post.mainImage && (
          <div className='relative h-48 overflow-hidden'>
            <Image
              src={urlFor(post.mainImage.asset).width(400).height(200).url()}
              alt={post.mainImage.alt ? getLocalizedContent(post.mainImage.alt, locale) : title}
              fill
              className='object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        )}
        <div className='p-6'>
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className='flex gap-2 mb-3'>
              {post.categories.slice(0, 2).map((category) => (
                <span
                  key={category._id}
                  className='px-2 py-1 text-xs font-medium rounded-full'
                  style={{
                    backgroundColor: category.color?.hex || '#3B82F6',
                    color: 'white',
                  }}>
                  {getLocalizedContent(category.title, locale)}
                </span>
              ))}
            </div>
          )}

          <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2'>
            {title}
          </h3>
          <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>{excerpt}</p>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400'>
              <div className='flex items-center'>
                <User className='w-4 h-4 mr-1' />
                {post.author.name}
              </div>
              <div className='flex items-center'>
                <Calendar className='w-4 h-4 mr-1' />
                {formatDate(post.publishedAt, locale)}
              </div>
              {post.readingTime && (
                <div className='flex items-center'>
                  <Clock className='w-4 h-4 mr-1' />
                  {post.readingTime} min
                </div>
              )}
            </div>
            <ArrowRight className='w-5 h-5 text-blue-600' />
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
