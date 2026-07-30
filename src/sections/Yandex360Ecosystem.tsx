'use client'

import React from 'react'
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
  Layers,
} from 'lucide-react'

interface EcosystemProduct {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  stats: { label: string; value: string }
}

const PRODUCTS: EcosystemProduct[] = [
  {
    id: 'web-studio',
    title: 'Création Web Next.js 16',
    subtitle: 'Sites vitrines & sur-mesure d\'exception',
    description:
      'Architectures web de dernière génération propulsées par React 19 et Next.js 16. Vitesse de chargement fulgurante et conversion maximale.',
    badge: '100/100 Vitals',
    icon: Code,
    features: ['Next.js 16 App Router', 'Tailwind CSS v4 Design', 'Framer Motion', 'Zero Latency SSR'],
    stats: { label: 'Temps de réponse', value: '< 180ms' },
  },
  {
    id: 'saas-cloud',
    title: 'WebApps & SaaS Scalables',
    subtitle: 'Plateformes métier & Dashboards',
    description:
      'Développement de webapps complexes, espaces membres sécurisés, tableaux de bord interactifs et API ultra-performantes.',
    badge: 'Enterprise Grade',
    icon: LayoutGrid,
    features: ['Auth & Security RBAC', 'Bases de données SQL / NoSQL', 'API REST & WebSockets', 'Cloud Edge'],
    stats: { label: 'Disponibilité', value: '99.99%' },
  },
  {
    id: 'ai-automation',
    title: 'Agents IA & Workflows',
    subtitle: 'Intégration d\'Intelligences Artificielles',
    description:
      'Création d\'assistants virtuels sur-mesure, chatbots intelligents, pipelines RAG et automatisation des processus métier.',
    badge: 'AI Integration',
    icon: Bot,
    features: ['Assistants GPT / Claude', 'Base de connaissances RAG', 'Automatisations API', 'Fine-Tuning Métier'],
    stats: { label: 'Productivité', value: '+300%' },
  },
  {
    id: 'design-system',
    title: 'Design System & Motion',
    subtitle: 'Identité visuelle & UI/UX d\'élite',
    description:
      'Création de charte graphique moderne, composants UI réutilisables, animations raffinées et expérience utilisateur fluide.',
    badge: 'Premium UI/UX',
    icon: Palette,
    features: ['Figma Design Tokens', 'Micro-animations', 'Interface Responsive 360°', 'Accessibilité WCAG'],
    stats: { label: 'Satisfaction UI', value: '10/10' },
  },
  {
    id: 'ecommerce-pro',
    title: 'E-Commerce Sur-Mesure',
    subtitle: 'Boutiques en ligne haute conversion',
    description:
      'Solutions e-commerce sur-mesure. Expérience d\'achat fluide, paiement Stripe / Apple Pay et gestion de stock en temps réel.',
    badge: 'High Conversion',
    icon: ShoppingBag,
    features: ['Checkout 1-Click', 'Paiement Stripe Native', 'SEO Produits Avancé', 'Multi-Devises'],
    stats: { label: 'Taux de conversion', value: '+45%' },
  },
  {
    id: 'seo-growth',
    title: 'SEO Local & Programmatique',
    subtitle: 'Positionnement 1ère page Google',
    description:
      'Optimisation SEO technique de pointe, netlinking stratégique, données structurées JSON-LD et pages ciblées Villeurbanne/Lyon.',
    badge: 'Google 1ère Page',
    icon: Search,
    features: ['Schema.org JSON-LD', 'SEO Local Villeurbanne & Lyon', 'Programmatic SEO', 'Audit Web Vitals'],
    stats: { label: 'Trafic organique', value: 'x3.5' },
  },
]

export function Yandex360Ecosystem() {
  return (
    <section id='services' className='relative bg-[#060812] px-4 py-20 text-white md:py-28 border-b border-white/10'>
      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono tracking-wider text-cyan-300 uppercase'>
            <Layers className='h-3.5 w-3.5 text-cyan-400' /> Écosystème & Expertise
          </span>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl'>
            Une Suite Complète de Solutions Web
          </h2>

          <p className='mt-3 text-sm text-gray-400 leading-relaxed'>
            Chaque composant de notre infrastructure est conçu pour garantir performance, sécurité et conversion.
          </p>
        </div>

        {/* Products Bento Grid */}
        <div className='mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {PRODUCTS.map((prod) => {
            const Icon = prod.icon

            return (
              <motion.div
                key={prod.id}
                whileHover={{ y: -4 }}
                className='relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20'
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className='flex items-center justify-between'>
                    <div className='rounded-xl bg-white/5 border border-white/10 p-2.5 text-cyan-400'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <span className='rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-gray-300'>
                      {prod.badge}
                    </span>
                  </div>

                  {/* Card Titles */}
                  <div className='mt-5'>
                    <h3 className='text-lg font-bold text-white'>{prod.title}</h3>
                    <p className='text-xs font-medium text-cyan-400 mt-0.5'>{prod.subtitle}</p>
                    <p className='mt-2.5 text-xs leading-relaxed text-gray-400'>{prod.description}</p>
                  </div>

                  {/* Features Checklist */}
                  <div className='mt-5 space-y-1.5 border-t border-white/10 pt-4'>
                    {prod.features.map((feat, idx) => (
                      <div key={idx} className='flex items-center gap-2 text-xs text-gray-300'>
                        <Check className='h-3.5 w-3.5 text-cyan-400 shrink-0' />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Pill */}
                <div className='mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs font-mono'>
                  <span className='text-gray-400'>{prod.stats.label}</span>
                  <span className='font-bold text-cyan-400'>{prod.stats.value}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className='mt-12 text-center'>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black'
          >
            <span>Réserver une Consultation Technique</span>
            <ChevronRight className='h-4 w-4' />
          </a>
        </div>
      </div>
    </section>
  )
}

