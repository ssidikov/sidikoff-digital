'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { BlogPost, BlogCategory } from '@/lib/sanity'
import { CategoryFilter } from '@/components/ui/CategoryFilter'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { getLocalizedUrl } from '@/utils/navigation'
import { BlogCard } from '@/components/ui/BlogCard'
import Section from '@/components/ui/Section'

interface BlogPageContentProps {
  readonly posts: BlogPost[]
  readonly categories: BlogCategory[]
  readonly dictionary: Dictionary['blog']
  readonly locale: Locale
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  header: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  },

  badge: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.2 },
  },

  cta: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  },

  ctaIcon: {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.3 },
  },

  noResults: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
} as const

// Style configuration constants
const STYLES = {
  heroSection: 'min-h-screen flex items-center justify-center',

  heroContainer: 'relative z-10 container mx-auto px-4 text-center',

  heroContent: 'max-w-4xl mx-auto',

  badge:
    'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50',

  badgeDot: 'w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse',

  title: 'text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight',

  subtitle: 'text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed',

  mainContent: 'relative py-12',

  container: 'container mx-auto px-4',

  featuredGrid: 'grid lg:grid-cols-2 gap-8 mb-16',

  regularGrid: 'grid lg:grid-cols-3 gap-8',

  noResults: {
    container: 'text-center py-20',
    icon: 'w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4',
    svg: 'w-8 h-8 text-gray-400',
    title: 'text-xl font-semibold text-gray-900 mb-2',
    description: 'text-gray-600',
  },

  ctaSection: 'relative py-20 lg:py-32 overflow-hidden',

  ctaBackground: 'absolute inset-0',

  ctaGradient: 'absolute inset-0 bg-linear-to-r from-gray-900 to-gray-800',

  ctaPattern:
    'absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]',

  ctaContainer: 'relative z-10 container mx-auto px-4 text-center',

  ctaContent: 'max-w-4xl mx-auto',

  ctaIcon:
    'w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8',

  ctaIconSvg: 'w-8 h-8 text-white',

  ctaTitle: 'text-3xl md:text-5xl font-bold text-white mb-6 leading-tight',

  ctaDescription: 'text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed',

  ctaButtons: 'flex flex-col sm:flex-row gap-4 justify-center',

  primaryButton:
    'group relative bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1',

  secondaryButton:
    'group relative bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 transform hover:-translate-y-1',

  buttonContent: 'relative z-10 flex items-center justify-center',

  buttonIcon: 'w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform',
} as const

// Grid configuration constants
const GRID_CONFIG = {
  featuredPostsCount: 2,
  regularPostsStartIndex: 2,
} as const

export function BlogPageContent({ posts, categories, dictionary, locale }: BlogPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts
    return posts.filter((post) => post.category?._id === selectedCategory)
  }, [posts, selectedCategory])

  // Separate featured and regular posts
  const { featuredPosts, regularPosts } = useMemo(
    () => ({
      featuredPosts: filteredPosts.slice(0, GRID_CONFIG.featuredPostsCount),
      regularPosts: filteredPosts.slice(GRID_CONFIG.regularPostsStartIndex),
    }),
    [filteredPosts]
  )

  /**
   * Handle category change
   */
  const handleCategoryChange = useCallback((categoryId: string | null) => {
    setSelectedCategory(categoryId)
  }, [])

  /**
   * Check if there are no posts to display
   */
  const hasNoPosts = filteredPosts.length === 0

  return (
    <Section variant='blog' background='transparent' padding='none' contentWidth='full'>
      {/* Hero Section */}
      <section className={STYLES.heroSection}>
        <div className={STYLES.heroContainer}>
          <motion.div
            variants={ANIMATION_CONFIG.header}
            initial='hidden'
            animate='visible'
            className={STYLES.heroContent}>
            {/* Badge */}
            <motion.div {...ANIMATION_CONFIG.badge} className={STYLES.badge}>
              <span className={STYLES.badgeDot} />
              {dictionary.latest_posts}
            </motion.div>

            {/* Title */}
            <h1 className={STYLES.title}>{dictionary.title}</h1>

            {/* Subtitle */}
            <p className={STYLES.subtitle}>{dictionary.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={STYLES.mainContent}>
        <div className={STYLES.container}>
          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* No Posts Message */}
          {hasNoPosts && (
            <motion.div {...ANIMATION_CONFIG.noResults} className={STYLES.noResults.container}>
              <div className={STYLES.noResults.icon}>
                <svg
                  className={STYLES.noResults.svg}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h3 className={STYLES.noResults.title}>{dictionary.no_posts}</h3>
              <p className={STYLES.noResults.description}>
                Try selecting a different category or check back later.
              </p>
            </motion.div>
          )}

          {/* Featured Posts Grid (2 large cards) */}
          {featuredPosts.length > 0 && (
            <div className={STYLES.featuredGrid}>
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
            <div className={STYLES.regularGrid}>
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
      <section className={STYLES.ctaSection}>
        {/* Background */}
        <div className={STYLES.ctaBackground}>
          <div className={STYLES.ctaGradient} />
          <div className={STYLES.ctaPattern} />
        </div>

        <div className={STYLES.ctaContainer}>
          <motion.div
            variants={ANIMATION_CONFIG.cta}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className={STYLES.ctaContent}>
            {/* Icon */}
            <motion.div
              {...ANIMATION_CONFIG.ctaIcon}
              viewport={{ once: true }}
              className={STYLES.ctaIcon}>
              <svg
                className={STYLES.ctaIconSvg}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </motion.div>

            {/* Title */}
            <h2 className={STYLES.ctaTitle}>{dictionary.cta.title}</h2>

            {/* Description */}
            <p className={STYLES.ctaDescription}>{dictionary.cta.description}</p>

            {/* CTA Buttons */}
            <div className={STYLES.ctaButtons}>
              <Link href={getLocalizedUrl('/contact', locale)} className={STYLES.primaryButton}>
                <span className={STYLES.buttonContent}>
                  {dictionary.cta.button}
                  <svg
                    className={STYLES.buttonIcon}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </span>
              </Link>

              <Link href={getLocalizedUrl('/#services', locale)} className={STYLES.secondaryButton}>
                <span className={STYLES.buttonContent}>
                  {dictionary.cta.secondary_button}
                  <svg
                    className={STYLES.buttonIcon}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
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
    </Section>
  )
}
