'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'

import { formatDate } from '@/lib/i18n'
import { getBlogPostUrl } from '@/utils/navigation'
import { type BlogPost } from '@/lib/blog-data'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  index: number
}

const DEFAULT_IMAGE = '/images/opengraph-fr.png'

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
  name: 'Sidikoff Digital',
  avatar: 'SD',
} as const

function estimateReadTime(content: string): string {
  const plainText = content.replace(/<[^>]*>/g, ' ')
  const words = plainText.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(3, Math.ceil(words / 220))} min`
}

/**
 * BlogCard component for displaying blog post previews
 * Supports featured layout with enhanced styling and animations
 */
export function BlogCard({ post, featured = false, index }: BlogCardProps) {
  const formattedDate = formatDate(new Date(post.date), 'fr')
  const imageUrl = post.image || DEFAULT_IMAGE
  const imageAlt = post.imageAlt || post.title
  const categoryTitle = post.category || 'Article'
  const readTime = estimateReadTime(post.content)

  return (
    <motion.article
      custom={index}
      variants={CARD_VARIANTS}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      className='group h-full'>
      <Link
        href={getBlogPostUrl(post.slug)}
        className={`relative flex h-full w-full max-w-full overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#fffdf8] shadow-[0_22px_70px_rgba(15,23,42,0.08)] ring-1 ring-white/70 transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_34px_90px_rgba(15,23,42,0.15)] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-4 ${
          featured ? 'min-h-[520px] flex-col lg:min-h-[580px]' : 'min-h-[460px] flex-col'
        }`}>
        <div className={`relative overflow-hidden ${featured ? 'h-80 lg:h-[22rem]' : 'h-64'}`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            quality={90}
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            priority={featured || index < 4}
          />
          <div className='absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent' />
          <div className='absolute inset-x-5 bottom-5 flex items-end justify-between gap-4'>
            <span className='inline-flex rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md'>
              {categoryTitle}
            </span>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-950 shadow-lg'>
              <Clock className='h-3.5 w-3.5' />
              {readTime}
            </span>
          </div>
        </div>

        <div className={`flex min-w-0 flex-1 flex-col ${featured ? 'p-7 lg:p-9' : 'p-6'}`}>
          <div className='mb-5 flex items-center justify-between gap-4 text-sm font-semibold text-slate-500'>
            <time className='inline-flex items-center gap-2' dateTime={post.date}>
              <CalendarDays className='h-4 w-4 text-[#b45309]' />
              {formattedDate}
            </time>
            <span className='h-px flex-1 bg-slate-200' />
          </div>

          <h3
            className={`line-clamp-3 text-wrap font-serif font-semibold leading-[1.05] text-slate-950 transition-colors duration-300 group-hover:text-[#8a3b12] ${
              featured ? 'text-3xl lg:text-4xl' : 'text-2xl'
            }`}>
            {post.title}
          </h3>

          <p
            className={`mt-5 line-clamp-3 text-wrap leading-relaxed text-slate-600 ${
              featured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
            }`}>
            {post.description}
          </p>

          <div className='mt-auto flex items-center justify-between gap-5 pt-8'>
            <div className='flex min-w-0 items-center gap-3'>
              <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)]'>
                {AUTHOR_INFO.avatar}
              </div>
              <div className='min-w-0'>
                <p className='truncate text-sm font-bold text-slate-950'>{AUTHOR_INFO.name}</p>
                <p className='text-xs font-medium text-slate-500'>Article expert</p>
              </div>
            </div>

            <span className='grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-950 transition-all duration-300 group-hover:rotate-12 group-hover:border-[#b45309] group-hover:bg-[#b45309] group-hover:text-white'>
              <ArrowUpRight className='h-5 w-5' />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
