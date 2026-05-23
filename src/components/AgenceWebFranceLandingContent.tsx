'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Sparkles,
  Search,
  Globe2,
  Zap,
  ShieldCheck,
  ArrowRight,
  MonitorSmartphone,
} from 'lucide-react'
import Link from 'next/link'

export default function AgenceWebFranceLandingContent() {
  return (
    <div className="bg-[#030014] text-white min-h-screen overflow-hidden selection:bg-purple-500/30">
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-600/10 blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-purple-200 uppercase">
              Agence Web Premium en France
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            L'Excellence Numérique <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
              Sur Mesure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
          >
            Création de sites internet ultra-performants, vitrines digitales et applications sur-mesure pour propulser votre entreprise sur le marché français.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2"
            >
              Démarrer un Projet <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#expertise"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center justify-center"
            >
              Découvrir nos offres
            </Link>
          </motion.div>

          {/* Floating Element like in screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 relative w-full max-w-4xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              {[
                { label: 'Conversion', value: '45%+', text: 'Augmentation moyenne' },
                { label: 'Performance', value: '100', text: 'Score Google Lighthouse' },
                { label: 'Satisfaction', value: '98%', text: 'Clients fidèles' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start p-4">
                  <span className="text-gray-400 text-sm mb-2">{stat.label}</span>
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{stat.value}</span>
                  <span className="text-purple-400 text-sm mt-1">{stat.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section id="expertise" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Notre Expertise Tech</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Des solutions robustes conçues pour dominier votre marché.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-blue-400" />,
                title: 'Design Ultra-Réactif',
                desc: 'Expérience parfaite sur chaque écran, mobile ou desktop.'
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-400" />,
                title: 'Performances Extrêmes',
                desc: 'Temps de chargement millisecondes pour un SEO parfait.'
              },
              {
                icon: <Search className="w-8 h-8 text-fuchsia-400" />,
                title: 'SEO Naturel Avancé',
                desc: 'Code structuré pour plaire à Google et convertir vos visiteurs.'
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
                title: 'Sécurité Bancaire',
                desc: 'Protection totale contre les failles et attaques modernes.'
              },
              {
                icon: <Code2 className="w-8 h-8 text-cyan-400" />,
                title: 'Architecture Moderne',
                desc: 'Next.js, React et technologies headless de pointe.'
              },
              {
                icon: <Globe2 className="w-8 h-8 text-rose-400" />,
                title: 'Portée Nationale',
                desc: 'Adapté pour le marché français et scalable à l\'international.'
              }
            ].map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS (PILLS) */}
        <section className="py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Des Solutions par Secteur</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Professions Libérales', 'E-commerce', 'Artisans', 'Restauration', 'Agences Immobilières', 'Startups Tech', 'Santé & Beauté'].map((industry, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 cursor-default transition-all">
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* WORKFLOW / PROCESS */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Un Processus <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sans Faille</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Nous créons non simplement des pages web, mais des machines à convertir conçues pour votre succès.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Analyse Stratégique', desc: 'Audit de marché et définition de vos objectifs.' },
                  { title: 'Conception UI/UX', desc: 'Maquettes haute-fidélité axées sur la conversion.' },
                  { title: 'Développement Clean-Code', desc: 'Intégration pixel-perfect et animations fluides.' },
                  { title: 'Lancement & Croissance', desc: 'Mise en ligne, suivi SEO et maintenance continue.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-full border border-white/10 flex items-center justify-center bg-[#030014]/50 backdrop-blur-sm">
                <div className="w-1/2 h-1/2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(147,51,234,0.5)]">
                  <div className="text-center">
                    <div className="text-4xl font-bold">100%</div>
                    <div className="text-xs text-white/80">Made in France</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-24">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" />
            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Prêt à dominer votre secteur ?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Rejoignez les entreprises qui font confiance à notre agence pour leur transformation digitale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-bold transition-colors"
              >
                Parler à un expert <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
