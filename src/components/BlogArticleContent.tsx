import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowLeft, User } from 'lucide-react'
import { BlogPost } from '@/lib/blog-data'

export default function BlogArticleContent({ post }: { post: BlogPost }) {
  return (
    <div className='min-h-screen bg-white pt-32 pb-20'>
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href='/blog' className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Retour aux articles
          </Link>

          <div className='flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6'>
            <span className='flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold'>
              <Tag className='w-4 h-4 mr-2' />
              {post.category}
            </span>
            <span className='flex items-center'>
              <Calendar className='w-4 h-4 mr-2' />
              {new Date(post.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className='flex items-center'>
              <User className='w-4 h-4 mr-2' />
              {post.author}
            </span>
          </div>

          <h1 className='text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight'>
            {post.title}
          </h1>

          <div className='h-px w-full bg-slate-200 mb-10'></div>

          <div 
            className='prose-custom text-lg text-slate-700 leading-relaxed space-y-6 
                       [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6 
                       [&>p]:mb-6 
                       [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:my-6 
                       [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:my-6 
                       [&>li>strong]:text-slate-900 
                       [&_strong]:text-slate-900 [&_strong]:font-bold
                       [&_em]:italic'
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className='mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Besoin d'accompagnement sur votre projet ?</h3>
              <p className='text-slate-600'>Nos experts sont à votre disposition pour analyser vos besoins.</p>
            </div>
            <Link href='/contact'>
              <button className='px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shrink-0 shadow-lg shadow-blue-500/30'>
                Contactez-nous
              </button>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  )
}
