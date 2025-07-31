'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

import { BlogPost, BlogCategory } from '@/lib/sanity'
import { CategoryFilter } from '@/components/ui/CategoryFilter'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { motion } from 'framer-motion'

import { BlogCard } from '@/components/ui/BlogCard'

interface BlogPageContentProps {
  posts: BlogPost[]
  categories: BlogCategory[]
  dictionary: Dictionary['blog']
  locale: Locale
}

export function BlogPageContent({ posts, categories, dictionary, locale }: BlogPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts
    return posts.filter((post) => post.category?._id === selectedCategory)
  }, [posts, selectedCategory])

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.slice(0, 2)
  const regularPosts = filteredPosts.slice(2)

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30'>
      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center'>
        {/* Background decoration */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5' />
        <div className='absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />

        <div className='relative z-10 container mx-auto px-4 text-center'>
          <motion.div
            variants={headerVariants}
            initial='hidden'
            animate='visible'
            className='max-w-4xl mx-auto'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50'>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse' />
              {dictionary.latest_posts}
            </motion.div>

            {/* Title */}
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight'>
              {dictionary.title}
            </h1>

            {/* Subtitle */}
            <p className='text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed'>
              {dictionary.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className='relative py-12'>
        <div className='container mx-auto px-4'>
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-20'>
              <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{dictionary.no_posts}</h3>
              <p className='text-gray-600'>
                Try selecting a different category or check back later.
              </p>
            </motion.div>
          )}

          {/* Featured Posts Grid (2 large cards) */}
          {featuredPosts.length > 0 && (
            <div className='grid lg:grid-cols-2 gap-8 mb-16'>
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  featured={true}
                  locale={locale}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Regular Posts Grid (3 columns) */}
          {regularPosts.length > 0 && (
            <div className='grid lg:grid-cols-3 gap-8'>
              {regularPosts.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  featured={false}
                  locale={locale}
                  index={index + featuredPosts.length}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        {/* Background */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]' />
        </div>

        <div className='relative z-10 container mx-auto px-4 text-center'>
          <motion.div
            variants={ctaVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='max-w-4xl mx-auto'>
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </motion.div>

            {/* Title */}
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
              {dictionary.cta.title}
            </h2>

            {/* Description */}
            <p className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed'>
              {dictionary.cta.description}
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={`/${locale}/contact`}
                className='group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1'>
                <span className='relative z-10 flex items-center justify-center'>
                  {dictionary.cta.button}
                  <svg
                    className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href={`/${locale}#services`}
                className='group relative bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 transform hover:-translate-y-1'>
                <span className='relative z-10 flex items-center justify-center'>
                  {dictionary.cta.secondary_button}
                  <svg
                    className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
