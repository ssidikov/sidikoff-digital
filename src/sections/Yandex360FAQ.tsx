'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle,
  Search,
  ChevronDown,
} from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: 'general' | 'delays' | 'pricing' | 'tech'
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'Combien de temps faut-il pour créer un site internet sur-mesure ?',
    answer:
      'Un site vitrine complet est généralement livré en 7 jours ouvrés. Pour une plateforme SaaS ou un e-commerce complexe, le délai varie entre 2 et 4 semaines.',
    category: 'delays',
  },
  {
    question: 'Pourquoi choisir Next.js 16 et React 19 au lieu de WordPress ?',
    answer:
      'Next.js 16 offre une vitesse de chargement instantanée (<0.2s), une sécurité maximale sans plugins vulnérables et un score Core Web Vitals 100/100 garanti par Google.',
    category: 'tech',
  },
  {
    question: 'Comment se déroule la facturation et le paiement ?',
    answer:
      'Nous fonctionnons avec un acompte de 30% au lancement du projet, et le solde (70%) après validation finale avant la mise en ligne officielle.',
    category: 'pricing',
  },
  {
    question: 'Est-ce que le référencement naturel (SEO) est inclus ?',
    answer:
      'Absolument. Chaque projet inclut l\'optimisation des balises meta, les sitemaps XML, la structure sémantique Hn, la vitesse 100/100 et l\'injection des données structurées Schema.org JSON-LD.',
    category: 'tech',
  },
  {
    question: 'Serai-je autonome pour modifier le contenu de mon site ?',
    answer:
      'Oui, nous pouvons intégrer un CMS Headless intuitif (Sanity, Strapi ou Decap) ou vous fournir une interface d\'édition ultra-simple.',
    category: 'general',
  },
]

export function Yandex360FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id='faq' className='relative bg-[#060812] px-4 py-24 text-white md:py-32'>
      <div className='relative z-10 mx-auto max-w-4xl'>
        {/* Header */}
        <div className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md'>
            <HelpCircle className='h-3.5 w-3.5 text-blue-400' /> Foire Aux Questions
          </span>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight md:text-5xl'>
            Toutes vos Reponses en{' '}
            <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Toute Transparence
            </span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className='mt-8 relative max-w-lg mx-auto'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
          <input
            type='text'
            placeholder='Rechercher une question (ex: délais, prix, SEO...)'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full rounded-2xl border border-white/15 bg-white/5 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-400 backdrop-blur-xl focus:border-cyan-400 focus:outline-none'
          />
        </div>

        {/* Accordion List */}
        <div className='mt-10 space-y-4'>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className='overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all'
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className='flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white md:text-base hover:text-cyan-300 transition-colors'
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='border-t border-white/5 p-5 text-xs md:text-sm text-gray-300 leading-relaxed bg-white/[0.02]'
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
