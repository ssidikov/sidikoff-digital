'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Sparkles, UserRound } from 'lucide-react'
import { BlogPost } from '@/lib/blog-data'

export default function BlogArticleContent({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const plainText = post.content.replace(/<[^>]*>/g, ' ')
  const readTime = `${Math.max(3, Math.ceil(plainText.trim().split(/\s+/).filter(Boolean).length / 220))} min`

  return (
    <main className='min-h-screen overflow-hidden bg-[#f6f2ea] text-slate-950 selection:bg-[#b45309] selection:text-white'>
      <article>
        <section className='relative pt-28 pb-12 lg:pt-36 lg:pb-20'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(180,83,9,0.16),transparent_28%),radial-gradient(circle_at_82%_6%,rgba(15,23,42,0.12),transparent_24%)]' />
          <div className='absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:54px_54px]' />

          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <Link
              href='/blog'
              className='mb-10 inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-colors hover:text-[#8a3b12]'>
              <ArrowLeft className='h-4 w-4' />
              Retour aux articles
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-end'>
              <div>
                <div className='mb-6 flex flex-wrap items-center gap-3'>
                  <span className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white'>
                    <Sparkles className='h-4 w-4 text-[#fbbf24]' />
                    {post.category}
                  </span>
                  <span className='inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-950/10 backdrop-blur'>
                    <Clock className='h-4 w-4 text-[#b45309]' />
                    {readTime} de lecture
                  </span>
                </div>

                <h1 className='font-serif text-5xl font-semibold leading-[0.98] text-slate-950 md:text-7xl'>
                  {post.title}
                </h1>
                <p className='mt-7 max-w-2xl text-xl leading-9 text-slate-700'>
                  {post.description}
                </p>

                <div className='mt-8 flex flex-wrap items-center gap-5 text-sm font-bold text-slate-600'>
                  <span className='inline-flex items-center gap-2'>
                    <CalendarDays className='h-4 w-4 text-[#b45309]' />
                    {formattedDate}
                  </span>
                  <span className='inline-flex items-center gap-2'>
                    <UserRound className='h-4 w-4 text-[#b45309]' />
                    {post.author}
                  </span>
                </div>
              </div>

              <div className='relative min-h-[380px] overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-[0_38px_100px_rgba(15,23,42,0.24)] lg:min-h-[620px]'>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  quality={90}
                  sizes='(max-width: 1024px) 100vw, 54vw'
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-linear-to-t from-slate-950/75 via-transparent to-transparent' />
                <div className='absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md'>
                  <span className='text-sm font-bold'>Sidikoff Digital</span>
                  <span className='text-xs font-bold uppercase tracking-[0.18em] text-white/70'>
                    Analyse
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className='relative pb-24'>
          <div className='mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[240px_minmax(0,820px)_1fr] lg:px-8'>
            <aside className='hidden lg:block'>
              <div className='sticky top-28 rounded-3xl border border-slate-950/10 bg-white/65 p-5 shadow-sm backdrop-blur'>
                <p className='text-xs font-black uppercase tracking-[0.22em] text-[#8a3b12]'>
                  Article
                </p>
                <div className='mt-5 space-y-4 text-sm font-semibold text-slate-600'>
                  <div>
                    <span className='block text-slate-950'>{post.category}</span>
                    <span>Catégorie</span>
                  </div>
                  <div>
                    <span className='block text-slate-950'>{readTime}</span>
                    <span>Temps de lecture</span>
                  </div>
                </div>
              </div>
            </aside>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className='rounded-[2rem] border border-slate-950/10 bg-[#fffdf8] px-6 py-9 shadow-[0_26px_90px_rgba(15,23,42,0.08)] sm:px-10 lg:px-14 lg:py-14'>
              <div
                className='article-prose text-lg leading-9 text-slate-700
                  [&>h2]:mt-14 [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:leading-tight [&>h2]:text-slate-950
                  [&>h2:first-child]:mt-0
                  [&>p]:mb-7
                  [&>ul]:my-7 [&>ul]:space-y-3 [&>ul]:pl-0
                  [&>ol]:my-7 [&>ol]:space-y-3 [&>ol]:pl-6
                  [&>ul>li]:relative [&>ul>li]:list-none [&>ul>li]:pl-7
                  [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[0.72em] [&>ul>li]:before:h-2 [&>ul>li]:before:w-2 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-[#b45309]
                  [&>ol>li]:pl-2
                  [&_strong]:font-black [&_strong]:text-slate-950
                  [&_em]:italic [&_em]:text-slate-600'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className='mt-16 overflow-hidden rounded-[1.75rem] bg-slate-950 p-7 text-white sm:p-9'>
                <div className='grid gap-7 md:grid-cols-[1fr_auto] md:items-center'>
                  <div>
                    <h3 className='font-serif text-3xl font-semibold'>Besoin d&apos;un regard expert ?</h3>
                    <p className='mt-3 max-w-2xl text-white/70'>
                      Nous analysons votre site, vos priorités SEO et les leviers UX qui peuvent faire progresser vos conversions.
                    </p>
                  </div>
                  <Link
                    href='/contact'
                    className='inline-flex items-center justify-center gap-3 rounded-full bg-[#d97706] px-6 py-4 text-sm font-black text-white transition-transform hover:translate-x-1'>
                    Contactez-nous
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </article>
    </main>
  )
}
