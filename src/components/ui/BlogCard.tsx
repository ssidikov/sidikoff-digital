'use client'

import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/i18n'
import { Locale } from '@/lib/i18n'
import { motion } from 'framer-motion'

import { BlogPost, urlFor } from '@/lib/sanity'




interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  locale: Locale
  index: number
}

export function BlogCard({ post, featured = false, locale, index }: BlogCardProps) {
  const formattedDate = formatDate(new Date(post.publishedAt), locale)
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(featured ? 800 : 400)
        .height(featured ? 500 : 300)
        .url()
    : '/images/misc/technology-bg.jpg'

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.article
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        featured ? 'lg:col-span-1' : ''
      }`}>
      <Link href={`/${locale}/blog/${post.slug.current}`} className='block'>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${featured ? 'h-72 lg:h-80' : 'h-56 lg:h-64'}`}>
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-700'
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            priority={featured || index < 4}
          />

          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          {/* Category Badge */}
          {post.category && (
            <div className='absolute top-4 left-4'>
              <span
                className='inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm border border-white/20'
                style={{ backgroundColor: post.category.color || '#3F72AF' }}>
                {post.category.title}
              </span>
            </div>
          )}

          {/* Reading Time */}
          {post.estimatedReadingTime && (
            <div className='absolute top-4 right-4'>
              <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm'>
                {post.estimatedReadingTime} min read
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:p-8' : 'lg:p-6'}`}>
          {/* Date */}
          <time className='text-sm text-gray-500 font-medium' dateTime={post.publishedAt}>
            {formattedDate}
          </time>

          {/* Title */}
          <h3
            className={`mt-3 font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 ${
              featured ? 'text-2xl lg:text-3xl leading-tight' : 'text-xl lg:text-2xl'
            }`}>
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p
              className={`mt-4 text-gray-600 leading-relaxed line-clamp-3 ${
                featured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
              }`}>
              {post.excerpt}
            </p>
          )}

          {/* Author & Read More */}
          <div className='mt-6 flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>SD</span>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-900'>SIDIKOFF DIGITAL</p>
                <p className='text-xs text-gray-500'>
                  {locale === 'fr' ? 'Auteur' : locale === 'ru' ? 'Автор' : 'Author'}
                </p>
              </div>
            </div>

            <div className='flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors'>
              <span className='mr-2'>
                {locale === 'fr' ? 'Lire plus' : locale === 'ru' ? 'Читать далее' : 'Read more'}
              </span>
              <svg
                className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
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
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
