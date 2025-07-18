'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import { formatDate, getLocalizedContent } from '@/lib/blog-api'
import type { Post } from '@/lib/types/blog'

interface ImageValue {
  asset: {
    _ref: string
  }
  alt?: string
  caption?: string
}

interface CodeBlockValue {
  language: string
  code: string
}

interface TypedObject {
  _type: string
  [key: string]: unknown
}

interface CalloutValue {
  type: 'info' | 'warning' | 'error' | 'success'
  title?: string
  content: TypedObject[]
}

interface BlogPostProps {
  post: Post
  relatedPosts: Post[]
  locale: 'fr' | 'en'
}

export default function BlogPost({ post, relatedPosts, locale }: BlogPostProps) {
  const title = getLocalizedContent(post.title, locale)
  const excerpt = getLocalizedContent(post.excerpt, locale)
  const body = getLocalizedContent(post.body, locale)

  const portableTextComponents: PortableTextComponents = {
    types: {
      image: ({ value }: { value: ImageValue }) => (
        <div className='my-8'>
          <Image
            src={urlFor({ asset: value.asset }).width(800).height(400).url()}
            alt={value.alt || ''}
            width={800}
            height={400}
            className='rounded-lg shadow-lg'
          />
          {value.caption && (
            <p className='text-center text-sm text-gray-500 mt-2 italic'>{value.caption}</p>
          )}
        </div>
      ),
      codeBlock: ({ value }: { value: CodeBlockValue }) => (
        <div className='my-8'>
          <pre className='bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto'>
            <code className={`language-${value.language}`}>{value.code}</code>
          </pre>
        </div>
      ),
      callout: ({ value }: { value: CalloutValue }) => (
        <div className={`my-8 p-4 rounded-lg border-l-4 ${getCalloutStyles(value.type)}`}>
          {value.title && <h4 className='font-semibold mb-2'>{value.title}</h4>}
          <PortableText value={value.content} />
        </div>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target={value?.blank ? '_blank' : '_self'}
          rel={value?.blank ? 'noopener noreferrer' : undefined}
          className='text-blue-600 hover:text-blue-800 underline'>
          {children}
        </a>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className='text-3xl font-bold my-6 text-gray-900 dark:text-white'>{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className='text-2xl font-bold my-5 text-gray-900 dark:text-white'>{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className='text-xl font-bold my-4 text-gray-900 dark:text-white'>{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className='text-lg font-semibold my-3 text-gray-900 dark:text-white'>{children}</h4>
      ),
      normal: ({ children }) => (
        <p className='my-4 text-gray-700 dark:text-gray-300 leading-relaxed'>{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className='my-6 pl-4 border-l-4 border-blue-500 italic text-gray-600 dark:text-gray-400'>
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className='my-4 pl-6 space-y-2 text-gray-700 dark:text-gray-300'>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className='my-4 pl-6 space-y-2 text-gray-700 dark:text-gray-300 list-decimal'>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className='list-disc'>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
  }

  const breadcrumbItems = [
    { label: locale === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: title, href: '#' },
  ]

  return (
    <article className='container mx-auto px-4 py-8'>
      {/* Custom Breadcrumbs */}
      <nav className='flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8'>
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className='flex items-center'>
            {index > 0 && <span className='mx-2'>/</span>}
            {index === breadcrumbItems.length - 1 ? (
              <span className='text-gray-900 dark:text-white'>{item.label}</span>
            ) : (
              <Link href={item.href} className='hover:text-blue-600'>
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Header */}
      <header className='mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className='flex gap-2 mb-4'>
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className='px-3 py-1 text-sm font-medium rounded-full text-white'
                  style={{ backgroundColor: category.color?.hex || '#3B82F6' }}>
                  {getLocalizedContent(category.title, locale)}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight'>
            {title}
          </h1>

          {/* Excerpt */}
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>{excerpt}</p>

          {/* Meta Information */}
          <div className='flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-8'>
            <div className='flex items-center'>
              <User className='w-5 h-5 mr-2' />
              <span>{post.author.name}</span>
            </div>
            <div className='flex items-center'>
              <Calendar className='w-5 h-5 mr-2' />
              <span>{formatDate(post.publishedAt, locale)}</span>
            </div>
            {post.readingTime && (
              <div className='flex items-center'>
                <Clock className='w-5 h-5 mr-2' />
                <span>{post.readingTime} min</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 mb-8'>
            <button className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
              <Share2 className='w-4 h-4' />
              {locale === 'fr' ? 'Partager' : 'Share'}
            </button>
            <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'>
              <Bookmark className='w-4 h-4' />
              {locale === 'fr' ? 'Sauvegarder' : 'Bookmark'}
            </button>
          </div>
        </motion.div>

        {/* Featured Image */}
        {post.mainImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl'>
            <Image
              src={urlFor(post.mainImage.asset).width(1200).height(600).url()}
              alt={post.mainImage.alt ? getLocalizedContent(post.mainImage.alt, locale) : title}
              fill
              className='object-cover'
              priority
            />
          </motion.div>
        )}
      </header>

      <div className='grid lg:grid-cols-12 gap-12'>
        {/* Main Content */}
        <div className='lg:col-span-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='prose prose-lg max-w-none dark:prose-invert prose-blue'>
            <PortableText value={body as TypedObject[]} components={portableTextComponents} />
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl'>
            <div className='flex items-start gap-4'>
              {post.author.image && (
                <Image
                  src={urlFor(post.author.image.asset).width(80).height(80).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className='rounded-full'
                />
              )}
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                  {post.author.name}
                </h3>
                {post.author.position && (
                  <p className='text-gray-600 dark:text-gray-300 mb-3'>
                    {getLocalizedContent(post.author.position, locale)}
                  </p>
                )}
                {post.author.bio && (
                  <div className='text-gray-700 dark:text-gray-300'>
                    <PortableText
                      value={getLocalizedContent(post.author.bio, locale) as TypedObject[]}
                      components={portableTextComponents}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className='lg:col-span-4'>
          {/* Back to Blog */}
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8'>
            <ArrowLeft className='w-4 h-4' />
            {locale === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Link>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg'>
              <h3 className='text-xl font-bold mb-6 text-gray-900 dark:text-white'>
                {locale === 'fr' ? 'Articles similaires' : 'Related Articles'}
              </h3>
              <div className='space-y-4'>
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost._id} post={relatedPost} locale={locale} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </article>
  )
}

function RelatedPostCard({ post, locale }: { post: Post; locale: 'fr' | 'en' }) {
  const title = getLocalizedContent(post.title, locale)
  const slug = getLocalizedContent(post.slug, locale).current

  return (
    <Link href={`/blog/${slug}`} className='block group'>
      <div className='flex gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'>
        {post.mainImage && (
          <div className='relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden'>
            <Image
              src={urlFor(post.mainImage.asset).width(64).height(64).url()}
              alt={title}
              fill
              className='object-cover'
            />
          </div>
        )}
        <div className='flex-1 min-w-0'>
          <h4 className='font-medium text-gray-900 dark:text-white group-hover:text-blue-600 line-clamp-2 text-sm'>
            {title}
          </h4>
          <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
            {formatDate(post.publishedAt, locale)}
          </p>
        </div>
      </div>
    </Link>
  )
}

function getCalloutStyles(type: string): string {
  switch (type) {
    case 'warning':
      return 'bg-yellow-50 border-yellow-400 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-600 dark:text-yellow-200'
    case 'error':
      return 'bg-red-50 border-red-400 text-red-800 dark:bg-red-900/20 dark:border-red-600 dark:text-red-200'
    case 'success':
      return 'bg-green-50 border-green-400 text-green-800 dark:bg-green-900/20 dark:border-green-600 dark:text-green-200'
    default:
      return 'bg-blue-50 border-blue-400 text-blue-800 dark:bg-blue-900/20 dark:border-blue-600 dark:text-blue-200'
  }
}
