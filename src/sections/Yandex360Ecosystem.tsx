'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  LayoutGrid,
  Bot,
  Palette,
  ShoppingBag,
  Search,
  Check,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

interface EcosystemProduct {
  id: string
  title: string
  subtitle: string
  description: string
  color: 'cyan' | 'purple' | 'amber' | 'emerald' | 'rose' | 'blue'
  badge: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  stats: { label: string; value: string }
}

const PRODUCTS: EcosystemProduct[] = [
  {
    id: 'web-studio',
    title: 'Création Web Next.js 16',
    subtitle: 'Sites vitrines & corporate d\'exception',
    description:
      'Architectures web de dernière génération propulsées par React 19 et Next.js 16 App Router. Vitesse de chargement fulgurante et conversion maximale.',
    color: 'cyan',
    badge: '100/100 Web Vitals',
    icon: Code,
    features: ['Next.js 16 App Router', 'Tailwind CSS v4 Design', 'Framer Motion & GSAP', 'Zero Latency SSR'],
    stats: { label: 'Temps de réponse', value: '< 180ms' },
  },
  {
    id: 'saas-cloud',
    title: 'WebApps & SaaS Scalables',
    subtitle: 'Plateformes d\'entreprise & Dashboards',
    description:
      'Développement de webapps complexes, espaces membres sécurisés, tableaux de bord interactifs et API REST / GraphQL ultra-performantes.',
    color: 'purple',
    badge: 'Enterprise Grade',
    icon: LayoutGrid,
    features: ['Auth & Security RBAC', 'Bases de données SQL / NoSQL', 'API REST & WebSockets', 'Architecture Cloud Edge'],
    stats: { label: 'Disponibilité', value: '99.99%' },
  },
  {
    id: 'ai-automation',
    title: 'Agents IA & Automatisation',
    subtitle: 'Intégration d\'Intelligences Artificielles',
    description:
      'Création d\'assistants virtuels sur-mesure, chatbots intelligents, pipelines RAG et automatisation des workflows métier.',
    color: 'amber',
    badge: 'LLM & RAG Custom',
    icon: Bot,
    features: ['Assistants GPT / Claude', 'Base de connaissances RAG', 'Automatisations Zapier / Make', 'Fine-Tuning Métier'],
    stats: { label: 'Productivité', value: '+300%' },
  },
  {
    id: 'design-system',
    title: 'Design System & Motion',
    subtitle: 'Identité visuelle & UI/UX d\'élite',
    description:
      'Création de charte graphique moderne, composants UI réutilisables, animations 3D et micro-interactions inspirées des meilleurs studios.',
    color: 'emerald',
    badge: 'Awwwards Quality',
    icon: Palette,
    features: ['Figma Design Tokens', 'Micro-animations GSAP', 'Interface Responsive 360°', 'Accessibilité WCAG 2.1'],
    stats: { label: 'Satisfaction UI', value: '10/10' },
  },
  {
    id: 'ecommerce-pro',
    title: 'E-Commerce Sur-Mesure',
    subtitle: 'Boutiques en ligne haute conversion',
    description:
      'Solutions e-commerce sur-mesure ou Shopify headless. Expérience d\'achat fluide, paiement Stripe / Apple Pay et gestion de stock en temps réel.',
    color: 'rose',
    badge: 'High Conversion',
    icon: ShoppingBag,
    features: ['Checkout 1-Click', 'Gestion Multi-devises', 'SEO Produits Avancé', 'Stripe & PayPal Native'],
    stats: { label: 'Taux de conversion', value: '+45%' },
  },
  {
    id: 'seo-growth',
    title: 'SEO Programmatique & Growth',
    subtitle: 'Positionnement 1ère page Google',
    description:
      'Optimisation SEO technique de pointe, netlinking stratégique, données structurées JSON-LD et génération de pages programmatiques à fort trafic.',
    color: 'blue',
    badge: 'Google 1ère Page',
    icon: Search,
    features: ['Rich Snippets Schema.org', 'SEO Local Lyon & France', 'Programmatic SEO System', 'Audit Core Web Vitals'],
    stats: { label: 'Trafic organique', value: 'x3.5' },
  },
]

export function Yandex360Ecosystem() {
  const [selectedId, setSelectedId] = useState<string>('web-studio')

  const getColorClasses = (color: EcosystemProduct['color']) => {
    switch (color) {
      case 'cyan':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-400',
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          icon: 'text-cyan-400 bg-cyan-500/10',
          glow: 'shadow-[0_0_30px_rgba(0,240,255,0.15)]',
          text: 'text-cyan-400',
        }
      case 'purple':
        return {
          border: 'border-purple-500/30 hover:border-purple-400',
          badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
          icon: 'text-purple-400 bg-purple-500/10',
          glow: 'shadow-[0_0_30px_rgba(112,0,255,0.15)]',
          text: 'text-purple-400',
        }
      case 'amber':
        return {
          border: 'border-amber-500/30 hover:border-amber-400',
          badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          icon: 'text-amber-400 bg-amber-500/10',
          glow: 'shadow-[0_0_30px_rgba(255,184,0,0.15)]',
          text: 'text-amber-400',
        }
      case 'emerald':
        return {
          border: 'border-emerald-500/30 hover:border-emerald-400',
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          icon: 'text-emerald-400 bg-emerald-500/10',
          glow: 'shadow-[0_0_30px_rgba(0,255,148,0.15)]',
          text: 'text-emerald-400',
        }
      case 'rose':
        return {
          border: 'border-rose-500/30 hover:border-rose-400',
          badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
          icon: 'text-rose-400 bg-rose-500/10',
          glow: 'shadow-[0_0_30px_rgba(255,42,109,0.15)]',
          text: 'text-rose-400',
        }
      case 'blue':
        return {
          border: 'border-blue-500/30 hover:border-blue-400',
          badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
          icon: 'text-blue-400 bg-blue-500/10',
          glow: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
          text: 'text-blue-400',
        }
    }
  }

  return (
    <section id='services' className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/30 px-4 py-1.5 text-xs font-semibold text-purple-300 backdrop-blur-md'>
            <Sparkles className='h-3.5 w-3.5' /> L'Écosystème des Solutions Sidikoff
          </span>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl'>
            Une Suite Complète de{' '}
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent'>
              Technologies Modernes
            </span>
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-gray-400 text-sm md:text-base'>
            Chaque brique de notre écosystème est conçue pour fonctionner en synergie parfaite.
          </p>
        </div>

        {/* Products Grid */}
        <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {PRODUCTS.map((prod) => {
            const styles = getColorClasses(prod.color)
            const Icon = prod.icon
            const isSelected = selectedId === prod.id

            return (
              <motion.div
                key={prod.id}
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setSelectedId(prod.id)}
                className={`cursor-pointer relative overflow-hidden rounded-3xl border bg-slate-900/60 p-6 transition-all duration-300 backdrop-blur-xl ${styles.border} ${styles.glow} ${
                  isSelected ? 'ring-2 ring-white/20' : ''
                }`}
              >
                {/* Top Badge & Icon */}
                <div className='flex items-center justify-between'>
                  <div className={`rounded-2xl p-3 ${styles.icon}`}>
                    <Icon className='h-6 w-6' />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold ${styles.badge}`}>
                    {prod.badge}
                  </span>
                </div>

                {/* Card Titles */}
                <div className='mt-6'>
                  <h3 className='text-xl font-bold text-white'>{prod.title}</h3>
                  <p className={`text-xs font-medium mt-1 ${styles.text}`}>{prod.subtitle}</p>
                  <p className='mt-3 text-xs leading-relaxed text-gray-300'>{prod.description}</p>
                </div>

                {/* Features Checklist */}
                <div className='mt-6 space-y-2 border-t border-white/10 pt-4'>
                  {prod.features.map((feat, idx) => (
                    <div key={idx} className='flex items-center gap-2 text-xs text-gray-300'>
                      <Check className={`h-3.5 w-3.5 ${styles.text}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Metric Pill */}
                <div className='mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-xs'>
                  <span className='text-gray-400'>{prod.stats.label}</span>
                  <span className={`font-bold font-mono ${styles.text}`}>{prod.stats.value}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className='mt-16 text-center'>
          <a
            href='#contact'
            className='inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]'
          >
            <span>Réserver une consultation technique gratuite</span>
            <ChevronRight className='h-4 w-4' />
          </a>
        </div>
      </div>
    </section>
  )
}
