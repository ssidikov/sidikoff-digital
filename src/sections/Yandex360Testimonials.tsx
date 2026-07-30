'use client'

import React, { useState } from 'react'
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
} from 'lucide-react'
import { TESTIMONIALS_DATA } from '@/data/testimonials'

export function Yandex360Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS_DATA.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === TESTIMONIALS_DATA.length - 1 ? 0 : i + 1))

  const currentItem = TESTIMONIALS_DATA[index] ?? TESTIMONIALS_DATA[0]
  if (!currentItem) return null

  return (
    <section id='testimonials' className='relative bg-[#060812] px-4 py-20 text-white md:py-28 border-b border-white/10'>
      <div className='relative z-10 mx-auto max-w-5xl'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto'>
          <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-amber-300'>
            <div className='flex text-amber-400'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='h-3 w-3 fill-amber-400 text-amber-400' />
              ))}
            </div>
            <span>Avis Clients Vérifiés Google 5.0 / 5</span>
          </div>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl'>
            Retours d&apos;Expérience Clients
          </h2>

          <p className='mt-2 text-sm text-gray-400 leading-relaxed'>
            Avis authentiques publiés par nos clients PME, artisans et créateurs d&apos;entreprise.
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className='mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 md:p-10 backdrop-blur-xl'>
          <Quote className='absolute top-6 right-6 h-16 w-16 text-white/5 pointer-events-none' />

          <div className='grid grid-cols-1 gap-6 md:grid-cols-12 items-center'>
            {/* Author Meta (4 cols) */}
            <div className='md:col-span-4 text-left border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6'>
              <div className='h-12 w-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold font-mono text-base'>
                {currentItem.author.charAt(0)}
              </div>
              <h3 className='mt-3 text-lg font-bold text-white'>{currentItem.author}</h3>
              <p className='text-xs text-cyan-400 font-mono mt-0.5'>{currentItem.project}</p>
              <p className='text-[11px] text-gray-500 mt-1 font-mono'>
                {new Date(currentItem.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <div className='mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] font-mono font-bold text-emerald-400'>
                <ShieldCheck className='h-3.5 w-3.5' /> Avis Google Vérifié
              </div>
            </div>

            {/* Content (8 cols) */}
            <div className='md:col-span-8 flex flex-col justify-between'>
              <p className='text-sm md:text-base text-gray-200 leading-relaxed font-light italic'>
                &ldquo;{currentItem.text}&rdquo;
              </p>

              {/* Slider Controls & Rating */}
              <div className='mt-6 flex items-center justify-between border-t border-white/10 pt-4'>
                <div className='flex text-amber-400 gap-1'>
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className='h-4 w-4 fill-amber-400 text-amber-400' />
                  ))}
                </div>

                <div className='flex items-center gap-2'>
                  <span className='text-xs font-mono text-gray-400 mr-2'>
                    {index + 1} / {TESTIMONIALS_DATA.length}
                  </span>
                  <button
                    onClick={prev}
                    aria-label='Avis précédent'
                    className='rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-all'
                  >
                    <ChevronLeft className='h-4 w-4' />
                  </button>
                  <button
                    onClick={next}
                    aria-label='Avis suivant'
                    className='rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-all'
                  >
                    <ChevronRight className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Reviews Compact Grid */}
        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setIndex(idx)}
              className={`cursor-pointer rounded-xl border p-4 transition-all text-xs ${
                index === idx
                  ? 'border-cyan-400 bg-cyan-500/10 text-white'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200'
              }`}
            >
              <div className='flex items-center justify-between'>
                <span className='font-bold text-white truncate'>{item.author}</span>
                <div className='flex text-amber-400 text-[10px]'>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className='h-3 w-3 fill-amber-400 text-amber-400' />
                  ))}
                </div>
              </div>
              <p className='mt-1 text-[11px] text-cyan-400 font-mono truncate'>{item.project}</p>
              <p className='mt-2 text-gray-300 line-clamp-2 leading-normal'>&ldquo;{item.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

