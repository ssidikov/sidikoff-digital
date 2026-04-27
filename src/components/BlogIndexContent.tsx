'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { allBlogPosts } from '@/lib/blog-data'

export default function BlogIndexContent() {
  return (
    <div className='min-h-screen bg-slate-50 pt-32 pb-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>Le Hub d'Expertise Digitale</h1>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
            Conseils stratégiques, décryptages techniques et bonnes pratiques SEO pour accélérer la croissance de votre entreprise.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {allBlogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full overflow-hidden group'
            >
              <div className='p-8 flex flex-col flex-1'>
                <div className='flex items-center gap-4 text-xs text-slate-500 mb-4'>
                  <span className='flex items-center bg-slate-100 px-3 py-1 rounded-full text-slate-700 font-medium'>
                    <Tag className='w-3 h-3 mr-1.5' />
                    {post.category}
                  </span>
                  <span className='flex items-center'>
                    <Calendar className='w-3 h-3 mr-1.5' />
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <h2 className='text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3'>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className='text-slate-600 mb-8 line-clamp-4 flex-1'>
                  {post.description}
                </p>
                
                <Link href={`/blog/${post.slug}`} className='mt-auto'>
                  <span className='inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors'>
                    Lire l'article
                    <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
