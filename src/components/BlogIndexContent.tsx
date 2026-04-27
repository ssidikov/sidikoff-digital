'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import { allBlogPosts } from '@/lib/blog-data'
import { BlogCard } from '@/components/ui/BlogCard'

export default function BlogIndexContent() {
  const [featuredPost, ...regularPosts] = allBlogPosts

  return (
    <main className='min-h-screen overflow-hidden bg-[#f6f2ea] text-slate-950 selection:bg-[#b45309] selection:text-white'>
      <section className='relative pt-32 pb-16 lg:pt-36 lg:pb-24'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(180,83,9,0.14),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(15,23,42,0.10),transparent_26%)]' />
        <div className='absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:56px_56px]' />

        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end'>
            <div>
              <span className='mb-6 inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#8a3b12] shadow-sm backdrop-blur'>
                <Sparkles className='h-4 w-4' />
                Le journal digital
              </span>
              <h1 className='max-w-full text-wrap font-serif text-4xl font-semibold leading-[1.02] text-slate-950 sm:text-5xl md:text-7xl lg:text-8xl lg:leading-[0.95]'>
                Articles web, SEO et croissance.
              </h1>
            </div>
            <div className='max-w-2xl min-w-0 lg:pb-3'>
              <p className='max-w-full text-wrap text-lg leading-8 text-slate-700 md:text-xl'>
                Conseils stratégiques, décryptages techniques et bonnes pratiques UX pour bâtir un site plus rapide, plus visible et plus convaincant.
              </p>
            </div>
          </div>

          {featuredPost && (
            <div className='group relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_40px_120px_rgba(15,23,42,0.22)] lg:rounded-[2.5rem]'>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className='grid min-h-[620px] w-full max-w-full overflow-hidden lg:grid-cols-[0.88fr_1.12fr]'>
                <div className='relative z-10 flex min-w-0 flex-col justify-between p-7 sm:p-10 lg:p-12'>
                  <div className='flex flex-wrap items-center gap-3'>
                    <span className='rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-950'>
                      {featuredPost.category}
                    </span>
                    <time className='inline-flex items-center gap-2 text-sm font-semibold text-white/70' dateTime={featuredPost.date}>
                      <CalendarDays className='h-4 w-4' />
                      {new Date(featuredPost.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <div className='pt-20'>
                    <h2 className='max-w-3xl text-wrap font-serif text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl'>
                      {featuredPost.title}
                    </h2>
                    <p className='mt-6 max-w-xl text-wrap text-lg leading-8 text-white/75'>
                      {featuredPost.description}
                    </p>
                    <span className='mt-8 inline-flex items-center gap-3 rounded-full bg-[#d97706] px-5 py-3 text-sm font-black text-white transition-transform duration-300 group-hover:translate-x-1'>
                      Lire l&apos;article
                      <ArrowRight className='h-4 w-4' />
                    </span>
                  </div>
                </div>

                <div className='relative min-h-[360px] overflow-hidden lg:min-h-full'>
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    fill
                    priority
                    quality={90}
                    sizes='(max-width: 1024px) 100vw, 56vw'
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/20 to-transparent lg:from-slate-950/80' />
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className='relative pb-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-10 flex flex-col gap-4 border-t border-slate-950/10 pt-10 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <span className='text-xs font-black uppercase tracking-[0.22em] text-[#8a3b12]'>
                Tous les guides
              </span>
              <h2 className='mt-2 font-serif text-4xl font-semibold text-slate-950 md:text-5xl'>
                Explorer les articles
              </h2>
            </div>
            <p className='max-w-xl text-slate-600'>
              Des analyses courtes, concrètes et pensées pour les dirigeants qui veulent décider avec plus de clarté.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {regularPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
