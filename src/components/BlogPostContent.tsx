'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Dictionary } from '@/lib/dictionaries'
import { formatDate, Locale } from '@/lib/i18n'
import { motion } from 'framer-motion'

import { BlogPost, urlFor } from '@/lib/sanity'




interface BlogPostContentProps {
  post: BlogPost
  dictionary: Dictionary['blog']
  locale: Locale
}

// Simple portable text renderer for now
/* eslint-disable @typescript-eslint/no-explicit-any */
function PortableTextRenderer({ blocks }: { blocks: unknown[] }) {
  if (!blocks || !Array.isArray(blocks)) return null

  return (
    <div className='prose prose-lg max-w-none'>
      {blocks.map((block: any, index: number) => {
        if (block._type === 'block') {
          const style = block.style || 'normal'

          switch (style) {
            case 'h1':
              return (
                <h1 key={index} className='text-4xl font-bold text-gray-900 mt-12 mb-6'>
                  {block.children?.map((child: any) => child.text).join('')}
                </h1>
              )
            case 'h2':
              return (
                <h2 key={index} className='text-3xl font-bold text-gray-900 mt-10 mb-5'>
                  {block.children?.map((child: any) => child.text).join('')}
                </h2>
              )
            case 'h3':
              return (
                <h3 key={index} className='text-2xl font-bold text-gray-900 mt-8 mb-4'>
                  {block.children?.map((child: any) => child.text).join('')}
                </h3>
              )
            default:
              return (
                <p key={index} className='text-gray-700 leading-relaxed mb-6 text-lg'>
                  {block.children?.map((child: any) => child.text).join('')}
                </p>
              )
          }
        }

        if (block._type === 'image') {
          return (
            <div key={index} className='my-10'>
              <Image
                src={urlFor(block).width(800).height(450).url()}
                alt={block.alt || ''}
                width={800}
                height={450}
                className='rounded-xl shadow-lg w-full'
              />
              {block.caption && (
                <p className='text-center text-gray-500 text-sm mt-3 italic'>{block.caption}</p>
              )}
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export function BlogPostContent({ post, dictionary, locale }: BlogPostContentProps) {
  const formattedDate = formatDate(new Date(post.publishedAt), locale)
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(600).url()
    : '/images/misc/technology-bg.jpg'

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  }

  return (
    <article className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-32 overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20' />
        </div>

        <div className='relative z-10 container mx-auto px-4'>
          <motion.div
            variants={headerVariants}
            initial='hidden'
            animate='visible'
            className='max-w-4xl mx-auto text-center text-white'>
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='mb-8'>
              <Link
                href={`/${locale}/blog`}
                className='inline-flex items-center text-white/80 hover:text-white transition-colors group'>
                <svg
                  className='w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
                {dictionary.back_to_blog}
              </Link>
            </motion.div>

            {/* Category Badge */}
            {post.category && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='mb-6'>
                <span
                  className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white backdrop-blur-sm border border-white/30'
                  style={{ backgroundColor: post.category.color || '#3F72AF' }}>
                  {post.category.title}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>{post.title}</h1>

            {/* Meta Information */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-white/80'>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3'>
                  <span className='text-white font-bold text-xs'>SD</span>
                </div>
                <span>SIDIKOFF DIGITAL</span>
              </div>
              <div className='flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              {post.estimatedReadingTime && (
                <div className='flex items-center'>
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>
                    {post.estimatedReadingTime} {dictionary.min_read}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <motion.div
            variants={contentVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='max-w-4xl mx-auto'>
            {/* Excerpt */}
            {post.excerpt && (
              <div className='mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500'>
                <p className='text-xl text-gray-700 leading-relaxed italic'>{post.excerpt}</p>
              </div>
            )}

            {/* Article Body */}
            {post.body && (
              <div className='mb-16'>
                <PortableTextRenderer blocks={post.body} />
              </div>
            )}

            {/* Share Section */}
            <div className='border-t border-gray-200 pt-12'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='mb-6 md:mb-0'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {dictionary.share_article}
                  </h3>
                  <p className='text-gray-600'>{dictionary.share_article}</p>
                </div>

                <div className='flex space-x-4'>
                  <button className='p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                    </svg>
                  </button>
                  <button className='p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' />
                    </svg>
                  </button>
                  <button className='p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]' />

        <div className='relative z-10 container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              {dictionary.cta.title}
            </h2>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
              {dictionary.cta.description}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={`/${locale}/contact`}
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                {dictionary.cta.button}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className='bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1'>
                {dictionary.back_to_blog}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  )
}
