'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { formatDate, type Locale } from '@/lib/i18n'
import { getBlogPostUrl } from '@/utils/navigation'
import { type BlogPost, urlFor } from '@/lib/sanity'
import { cardStyles } from '@/utils/styles'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  locale: Locale
  index: number
}

const DEFAULT_CATEGORY_COLOR = '#3F72AF'
const DEFAULT_IMAGE = '/images/misc/technology-bg.jpg'

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
    },
  }),
} as const

const AUTHOR_INFO = {
  name: 'SIDIKOFF DIGITAL',
  avatar: 'SD',
} as const

/**
 * BlogCard component for displaying blog post previews
 * Supports featured layout with enhanced styling and animations
 */
export function BlogCard({ post, featured = false, locale, index }: BlogCardProps) {
  const formattedDate = formatDate(new Date(post.publishedAt), locale)
  
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(featured ? 800 : 400)
        .height(featured ? 500 : 300)
        .url()
    : DEFAULT_IMAGE

  const imageAlt = post.mainImage?.alt || post.title
  const categoryColor = post.category?.color || DEFAULT_CATEGORY_COLOR
  
  // Localized strings
  const localizedStrings = {
    author: {
      fr: 'Auteur',
      ru: 'Автор',
      en: 'Author',
    }[locale],
    readMore: {
      fr: 'Lire plus',
      ru: 'Читать далее', 
      en: 'Read more',
    }[locale],
    readTime: `${post.estimatedReadingTime} min read`,
  }

  return (
    <motion.article
      custom={index}
      variants={CARD_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`group relative overflow-hidden ${cardStyles.card} ${
        featured ? 'lg:col-span-1' : ''
      }`}
    >
      <Link href={getBlogPostUrl(post.slug.current, locale)} className="block">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'h-72 lg:h-80' : 'h-56 lg:h-64'}`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            priority={featured || index < 4}
          />

          {/* Category Badge */}
          {post.category && (
            <div className="absolute left-4 top-4">
              <span
                className="inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                style={{ backgroundColor: categoryColor }}
              >
                {post.category.title}
              </span>
            </div>
          )}

          {/* Reading Time */}
          {post.estimatedReadingTime && (
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm">
                {localizedStrings.readTime}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:p-8' : 'lg:p-6'}`}>
          {/* Date */}
          <time className="text-sm font-medium text-gray-500" dateTime={post.publishedAt}>
            {formattedDate}
          </time>

          {/* Title */}
          <h3
            className={`mt-3 line-clamp-2 font-bold text-gray-900 transition-colors duration-300 group-hover:text-accent ${
              featured ? 'text-2xl leading-tight lg:text-3xl' : 'text-xl lg:text-2xl'
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p
              className={`mt-4 line-clamp-3 leading-relaxed text-gray-600 ${
                featured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
              }`}
            >
              {post.excerpt}
            </p>
          )}

          {/* Author & Read More */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <span className="text-sm font-bold text-white">{AUTHOR_INFO.avatar}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{AUTHOR_INFO.name}</p>
                <p className="text-xs text-gray-500">{localizedStrings.author}</p>
              </div>
            </div>

            <div className="flex items-center text-sm font-medium text-accent transition-colors group-hover:text-accent-dark">
              <span className="mr-2">{localizedStrings.readMore}</span>
              <svg
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
