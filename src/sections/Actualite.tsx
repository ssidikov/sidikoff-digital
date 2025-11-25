'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { type Dictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import { type BlogPost } from '@/lib/sanity'
import { getLocalizedUrl } from '@/utils/navigation'
import Section, { SectionHeader } from '@/components/ui/Section'
import { BlogCard } from '@/components/ui/BlogCard'

interface ActualiteProps {
  posts: BlogPost[]
  dictionary: Dictionary['blog']
  locale: Locale
}

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
} as const

export function Actualite({ posts, dictionary, locale }: ActualiteProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <Section
      id='actualite'
      variant='blog'
      background='transparent'
      padding='lg'
      contentWidth='wide'>
      <div className='relative z-10'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <SectionHeader
            title={dictionary.latest_posts}
            subtitle={dictionary.subtitle}
            className='mb-0 text-left'
            as='h2'
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <Link
              href={getLocalizedUrl('/blog', locale)}
              className='group inline-flex items-center gap-2 text-lg font-semibold text-accent transition-colors hover:text-accent-dark'>
              <span>{dictionary.all_posts}</span>
              <svg
                className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1'
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
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={ANIMATION_CONFIG.container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post, index) => (
            <motion.div key={post._id} variants={ANIMATION_CONFIG.item} className='h-full'>
              <BlogCard post={post} locale={locale} index={index} featured={false} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
