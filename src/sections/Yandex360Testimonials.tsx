/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  text: string
  rating: number
  metrics: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandre Roche',
    role: 'Fondateur & CEO',
    company: 'Luxe Automobile Lyon',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    text: 'Sardor a entièrement repensé notre plateforme web en 7 jours chrono. La vitesse du site est impressionnante et notre taux de conversion a bondi de 140% dès le premier mois.',
    rating: 5,
    metrics: '+140% Taux de Conversion',
  },
  {
    id: '2',
    name: 'Claire Dupont',
    role: 'Directrice Marketing',
    company: 'PulseMed Health',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    text: 'Une maîtrise technique rare. Notre SaaS médical tourne sans la moindre latence. L\'intégration de l\'assistant IA pour le tri des patients a changé notre quotidien.',
    rating: 5,
    metrics: '12,000+ RDV Automatisés',
  },
  {
    id: '3',
    name: 'Julien Mercier',
    role: 'Associé Gérant',
    company: 'Vaugirard Avocats',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    text: 'Grâce au travail de SEO programmatique et de refonte UX, notre cabinet est passé en position #1 sur Google à Lyon. Le ROI a été atteint en moins de 30 jours.',
    rating: 5,
    metrics: '#1 sur Google Lyon',
  },
]

export function Yandex360Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))

  const currentItem = TESTIMONIALS[index] ?? TESTIMONIALS[0]
  if (!currentItem) return null

  return (
    <section className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      <div className='relative z-10 mx-auto max-w-5xl'>
        {/* Header */}
        <div className='text-center'>
          <div className='inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-950/30 px-4 py-1.5 text-xs font-semibold text-yellow-300 backdrop-blur-md'>
            <div className='flex text-yellow-400'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className='h-3 w-3 fill-yellow-400' />
              ))}
            </div>
            <span>Avis Clients Vérifiés 5.0 / 5</span>
          </div>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight md:text-5xl'>
            Ils nous font confiance pour leur{' '}
            <span className='bg-gradient-to-r from-yellow-300 via-amber-400 to-rose-400 bg-clip-text text-transparent'>
              Croissance
            </span>
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className='mt-12 relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 p-8 backdrop-blur-2xl md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>
          <Quote className='absolute top-6 right-6 h-20 w-20 text-white/5 pointer-events-none' />

          <div className='grid grid-cols-1 gap-8 md:grid-cols-12 items-center'>
            {/* Client Image & Meta (4 cols) */}
            <div className='md:col-span-4 text-center md:text-left'>
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className='mx-auto md:mx-0 h-24 w-24 rounded-full border-2 border-amber-400 object-cover shadow-[0_0_20px_rgba(255,184,0,0.4)]'
              />
              <h3 className='mt-4 text-xl font-bold text-white'>{currentItem.name}</h3>
              <p className='text-xs text-amber-300 font-medium'>{currentItem.role}</p>
              <p className='text-xs text-gray-400'>{currentItem.company}</p>

              <div className='mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] font-bold text-emerald-400'>
                <ShieldCheck className='h-3.5 w-3.5' /> {currentItem.metrics}
              </div>
            </div>

            {/* Testimonial Content (8 cols) */}
            <div className='md:col-span-8 flex flex-col justify-between'>
              <p className='text-base md:text-lg italic text-gray-200 leading-relaxed'>
                "{currentItem.text}"
              </p>

              {/* Slider Controls */}
              <div className='mt-8 flex items-center justify-between border-t border-white/10 pt-6'>
                <div className='flex text-yellow-400 gap-1'>
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className='h-4 w-4 fill-yellow-400' />
                  ))}
                </div>

                <div className='flex items-center gap-2'>
                  <button
                    onClick={prev}
                    className='rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:bg-white/10 hover:text-white transition-all'
                  >
                    <ChevronLeft className='h-5 w-5' />
                  </button>
                  <button
                    onClick={next}
                    className='rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:bg-white/10 hover:text-white transition-all'
                  >
                    <ChevronRight className='h-5 w-5' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
