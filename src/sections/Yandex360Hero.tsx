'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sliders,
  CheckCircle2,
  Zap,
  Shield,
  Search,
} from 'lucide-react'

export function Yandex360Hero() {
  return (
    <section className='relative overflow-hidden bg-[#060812] px-4 pt-28 pb-16 text-white md:pt-36 md:pb-24 border-b border-white/10'>
      {/* Subtle ambient light spot */}
      <div className='pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-[120px]' />

      <div className='relative z-10 mx-auto max-w-5xl text-center'>
        {/* Top Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-6 flex justify-center'
        >
          <div className='inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-cyan-300 backdrop-blur-md'>
            <span className='h-2 w-2 rounded-full bg-cyan-400 animate-pulse' />
            <span className='uppercase tracking-wider'>Agence Web Villeurbanne & Lyon (69)</span>
          </div>
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]'
        >
          Création de Sites Web &{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-200'>
            SEO Local à Villeurbanne
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg leading-relaxed font-light'
        >
          Développement sur-mesure Next.js 16, performance Core Web Vitals 100/100 et visibilité Google garantie.
          Conçu pour faire grandir votre entreprise dans la Métropole de Lyon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-8 flex flex-wrap items-center justify-center gap-3'
        >
          <a
            href='#contact'
            className='inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-black transition-all hover:bg-gray-200'
          >
            <span>Démarrer Votre Projet</span>
            <ArrowRight className='h-4 w-4' />
          </a>

          <a
            href='#calculator'
            className='inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-gray-300 transition-all hover:border-white/20 hover:text-white'
          >
            <Sliders className='h-4 w-4 text-cyan-400' />
            <span>Simuler un Devis (dès 890 €)</span>
          </a>
        </motion.div>

        {/* Feature Highlights Minimal Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 border-t border-white/10 pt-8'
        >
          <div className='flex items-center gap-2'>
            <CheckCircle2 className='h-4 w-4 text-cyan-400' />
            <span>Livraison sous 7 à 14 jours</span>
          </div>
          <div className='flex items-center gap-2'>
            <Zap className='h-4 w-4 text-cyan-400' />
            <span>Score Vitesse 100/100</span>
          </div>
          <div className='flex items-center gap-2'>
            <Search className='h-4 w-4 text-cyan-400' />
            <span>SEO & Data JSON-LD Inclus</span>
          </div>
          <div className='flex items-center gap-2'>
            <Shield className='h-4 w-4 text-cyan-400' />
            <span>100% Conforme RGPD</span>
          </div>
        </motion.div>

        {/* Minimalist Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl md:grid-cols-4'
        >
          <div className='border-r border-white/10 pr-4 text-center md:text-left'>
            <div className='text-2xl font-bold font-mono text-cyan-400 md:text-3xl'>50+</div>
            <div className='mt-1 text-xs text-gray-400'>Projets Lyon & Métropole</div>
          </div>
          <div className='border-r border-white/10 pr-4 text-center md:text-left'>
            <div className='text-2xl font-bold font-mono text-purple-400 md:text-3xl'>7–14 J</div>
            <div className='mt-1 text-xs text-gray-400'>Délai de Livraison</div>
          </div>
          <div className='border-r border-white/10 pr-4 text-center md:text-left'>
            <div className='text-2xl font-bold font-mono text-amber-400 md:text-3xl'>Dès 890 €</div>
            <div className='mt-1 text-xs text-gray-400'>Formule Vitrine Pro</div>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-2xl font-bold font-mono text-emerald-400 md:text-3xl'>&lt;0.2s</div>
            <div className='mt-1 text-xs text-gray-400'>Temps de Chargement</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

