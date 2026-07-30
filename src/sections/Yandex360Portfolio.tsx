/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  ArrowRight,
} from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  client: string
  category: 'web' | 'saas' | 'ecommerce' | 'seo'
  image: string
  description: string
  results: string
  tags: string[]
  url?: string
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'luxe-auto',
    title: 'Luxe Automobile Lyon',
    client: 'Concessionnaire Véhicules de Prestige',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    description: 'Plateforme vitrine avec configurateur 3D interactif et système d\'essai en ligne.',
    results: '+140% de demandes d\'essai en 30 jours',
    tags: ['Next.js 16', 'GSAP Motion', 'Tailwind CSS', 'SEO Local'],
  },
  {
    id: 'med-saas',
    title: 'PulseMed Health SaaS',
    client: 'Réseau Médical Rhône-Alpes',
    category: 'saas',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Plateforme SaaS de prise de rendez-vous médicale et gestion des dossiers patients sécurisée.',
    results: '12 000+ rendez-vous automatisés / mois',
    tags: ['React 19', 'Node.js', 'PostgreSQL', 'Auth RBAC'],
  },
  {
    id: 'gastro-lyon',
    title: 'Maison Bocquet Gastronomie',
    client: 'Restaurant Étoilé Lyon',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Site gastronomique avec module de réservation en direct et boutique Click & Collect.',
    results: '0 commission intermédiaire & ROI x8',
    tags: ['Next.js App Router', 'Stripe', 'Nodemailer', 'Framer Motion'],
  },
  {
    id: 'law-firm',
    title: 'Cabinet Vaugirard & Associés',
    client: 'Cabinet d\'Avocats d\'Affaires',
    category: 'seo',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Refonte complète et stratégie SEO programmatique pour dominer les requêtes juridiques.',
    results: '#1 Google sur 18 mots-clés stratégiques',
    tags: ['Programmatic SEO', 'JSON-LD', 'Core Web Vitals 100/100'],
  },
]

export function Yandex360Portfolio() {
  const [filter, setFilter] = useState<'all' | 'web' | 'saas' | 'ecommerce' | 'seo'>('all')
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null)

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter)

  return (
    <section id='portfolio' className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md'>
            <Layers className='h-3.5 w-3.5 text-cyan-400' /> Portfolio 360°
          </span>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl'>
            Nos Réalisations d'
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 bg-clip-text text-transparent'>
              Exception
            </span>
          </h2>

          <p className='mx-auto mt-4 max-w-xl text-gray-400 text-sm md:text-base'>
            Découvrez une sélection de nos projets web les plus percutants.
          </p>

          {/* Filter Bar */}
          <div className='mt-10 flex flex-wrap items-center justify-center gap-2'>
            {(
              [
                { id: 'all', label: 'Tous les projets' },
                { id: 'web', label: 'Sites Web' },
                { id: 'saas', label: 'WebApps SaaS' },
                { id: 'ecommerce', label: 'E-Commerce' },
                { id: 'seo', label: 'SEO & Growth' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.5)]'
                    : 'border border-white/10 bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className='mt-14 grid grid-cols-1 gap-8 md:grid-cols-2'>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveItem(item)}
              className='group cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all hover:border-cyan-400/40'
            >
              {/* Card Media Preview */}
              <div className='relative h-64 w-full overflow-hidden bg-slate-950'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent' />

                <div className='absolute top-4 left-4 flex gap-2'>
                  <span className='rounded-full border border-cyan-400/30 bg-cyan-950/80 px-3 py-1 text-[10px] font-bold text-cyan-300 backdrop-blur-md'>
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors'>
                  {item.title}
                </h3>
                <p className='mt-2 text-xs text-gray-300 leading-relaxed'>{item.description}</p>

                {/* Key Result Banner */}
                <div className='mt-4 flex items-center gap-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-3 text-xs text-emerald-400 font-bold'>
                  <Sparkles className='h-4 w-4 text-emerald-400' />
                  <span>{item.results}</span>
                </div>

                {/* Tech Tags */}
                <div className='mt-4 flex flex-wrap gap-2'>
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className='rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-gray-400'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Item Detail Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl'
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className='relative max-w-2xl w-full rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 md:p-8 text-white shadow-2xl overflow-hidden'
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-gray-400 hover:text-white'
                >
                  <X className='h-5 w-5' />
                </button>

                <span className='text-xs font-bold text-cyan-400 uppercase tracking-wider'>
                  {activeItem.client}
                </span>

                <h3 className='mt-2 text-3xl font-bold text-white'>{activeItem.title}</h3>
                <p className='mt-4 text-sm text-gray-300 leading-relaxed'>{activeItem.description}</p>

                <div className='mt-6 rounded-2xl bg-emerald-950/40 border border-emerald-400/30 p-4 text-emerald-300 text-sm font-bold flex items-center gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-emerald-400' />
                  <span>Résultat obtenu : {activeItem.results}</span>
                </div>

                <div className='mt-8 flex justify-end gap-3'>
                  <button
                    onClick={() => setActiveItem(null)}
                    className='rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-gray-300 hover:text-white'
                  >
                    Fermer
                  </button>
                  <a
                    href='#contact'
                    onClick={() => setActiveItem(null)}
                    className='inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-xs font-bold text-black hover:bg-cyan-400'
                  >
                    <span>Un projet similaire ?</span>
                    <ArrowRight className='h-4 w-4' />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
