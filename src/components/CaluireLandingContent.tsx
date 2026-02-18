'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import CTAButton from '@/components/ui/CTAButton'

// ─── Types ──────────────────────────────────────────────────────────────────────

interface ServiceItem {
  icon: string
  title: string
  desc: string
  link: string
}

interface ProcessStep {
  step: string
  title: string
  desc: string
}

interface PricingTier {
  name: string
  price: string
  timeline: string
  features: string[]
  featured?: boolean
}

interface FaqItem {
  question: string
  answer: string
}

export interface VilleurbannContent {
  badge: string
  h1Start: string
  h1City: string
  subtitle: string
  cta1: string
  cta2: string
  stat1: string
  stat1Label: string
  stat2: string
  stat2Label: string
  stat3: string
  stat3Label: string
  servicesTitle: string
  servicesSubtitle: string
  services: ServiceItem[]
  pricingTitle: string
  pricingSubtitle: string
  pricingTiers: PricingTier[]
  pricingCta: string
  pricingPopular: string
  processTitle: string
  processSubtitle: string
  processSteps: ProcessStep[]
  ctaTitle: string
  ctaSubtitle: string
  ctaBtn1: string
  ctaBtn2: string
  learnMore: string
}

interface Props {
  content: VilleurbannContent
  faqs: FaqItem[]
  structuredData: any[]
  locale: string
}

// ─── Component ──────────────────────────────────────────────────────────────────

export default function CaluireLandingContent({ content: c, faqs, structuredData, locale }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)

  // Trigger animations slightly earlier for a snappier feel
  const heroInView = useInView(heroRef, { once: true, margin: '-10%' })

  return (
    <main className='relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200'>
      {/* 
        ─── GLOBAL ATMOSPHERE (CSS-ONLY MESH) ──────────────────────────────
        Deep, rich background with moving gradient orbs using CSS.
      */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        {/* Base dark layer */}
        <div className='absolute inset-0 bg-slate-950' />

        {/* Ambient Gradient 1 (Top Left - Blue/Indigo) */}
        <div className='absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15),transparent_70%)] blur-[100px] opacity-80' />

        {/* Ambient Gradient 2 (Bottom Right - Violet/Slate) */}
        <div className='absolute top-[40%] -right-[20%] w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.1),transparent_70%)] blur-[120px] opacity-60' />

        {/* Ambient Gradient 3 (Bottom Left - subtle Cyan) */}
        <div className='absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_70%)] blur-[90px] opacity-50' />

        {/* Noise Texture Overlay (Optional for grit) */}
        <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-[0.03] mix-blend-overlay' />
      </div>

      {/* JSON-LD Structured Data */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 
        ─── HERO SECTION ───────────────────────────────────────────────────
        Swiss Style: Giant typography, tight tracking, grid alignment.
      */}
      <section
        ref={heroRef}
        className='relative z-10 flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24'>
        <div className='mx-auto max-w-[1400px] w-full'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-blue-200 backdrop-blur-md'>
            <span className='flex h-2 w-2 relative'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            {c.badge}
            <span className='h-3 w-px bg-white/20' />
            <span className='text-slate-400'>2026</span>
          </motion.div>

          {/* Headline - Massive Scale */}
          <div className='relative mb-12 max-w-5xl'>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className='text-4xl font-semibold leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl'>
              {c.h1Start}
              <br />
              <span className='bg-linear-to-r from-blue-400 via-indigo-400 to-white bg-clip-text text-transparent'>
                {c.h1City}.
              </span>
            </motion.h1>
          </div>

          <div className='grid gap-12 lg:grid-cols-12 lg:gap-24'>
            {/* Subtext & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className='lg:col-span-7 flex flex-col items-start gap-8'>
              <p className='max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl lg:text-2xl font-light'>
                {c.subtitle}
              </p>

              <div className='flex flex-wrap gap-4'>
                <CTAButton
                  href='/contact'
                  size='lg'
                  className='group relative overflow-hidden border-0 bg-white px-8 py-4 text-slate-950 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]'>
                  <span className='relative z-10 font-bold tracking-tight'>{c.cta1}</span>
                  <div className='absolute inset-0 -translate-x-full bg-linear-to-r from-blue-200 to-transparent opacity-50 transition-transform duration-500 group-hover:translate-x-full' />
                </CTAButton>

                <CTAButton
                  href='#services'
                  size='lg'
                  variant='outline'
                  className='border-white/20 bg-transparent px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/5'>
                  {c.cta2}
                </CTAButton>
              </div>
            </motion.div>

            {/* Abstract Stat Cards (Glass) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className='lg:col-span-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 content-end'>
              {[
                { val: c.stat1, label: c.stat1Label },
                { val: c.stat2, label: c.stat2Label },
              ].map((s, i) => (
                <div
                  key={i}
                  className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/10'>
                  <div className='mb-1 text-4xl font-light tracking-tighter text-white md:text-5xl'>
                    {s.val}
                  </div>
                  <div className='text-sm font-medium uppercase tracking-widest text-slate-500 group-hover:text-blue-400 transition-colors'>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ─── VALUE PROPOSITION ──────────────────────────────────────────────
        Minimal cards, heavy breathing room.
      */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          {/* Section Header */}
          <div className='mb-24 md:w-3/4 lg:w-2/3'>
            <h2 className='text-4xl font-medium tracking-tighter text-white md:text-6xl'>
              Une approche <span className='text-blue-500'>sur-mesure</span> pour votre présence
              digitale.
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {/* Feature 1 */}
            <div className='group relative flex flex-col justify-between rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10'>
              <div className='mb-12 h-16 w-16 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 opacity-80 shadow-lg shadow-blue-900/50' />
              <div>
                <h3 className='mb-4 text-2xl font-semibold text-white'>Développement Premium</h3>
                <p className='text-lg leading-relaxed text-slate-400'>
                  Pas de templates génériques. Une architecture sur-mesure optimisée pour votre
                  croissance.
                </p>
              </div>
            </div>

            {/* Feature 2 (Main) */}
            <div className='group relative flex flex-col justify-between rounded-4xl border border-white/10 bg-linear-to-b from-blue-900/20 to-slate-900/40 p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 md:col-span-2 lg:col-span-1'>
              <div className='mb-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-bold text-white'>
                24h
              </div>
              <div>
                <h3 className='mb-4 text-2xl font-semibold text-white'>Réactivité Locale</h3>
                <p className='text-lg leading-relaxed text-slate-400'>
                  Un partenaire disponible à Villeurbanne et Lyon. Vos urgences traitées en priorité
                  absolue.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='group relative flex flex-col justify-between rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10'>
              <div className='mb-12 h-16 w-16 rounded-2xl bg-linear-to-br from-slate-700 to-slate-800 opacity-80 shadow-lg' />
              <div>
                <h3 className='mb-4 text-2xl font-semibold text-white'>SEO & Performance</h3>
                <p className='text-lg leading-relaxed text-slate-400'>
                  Des sites ultra-rapides conçus pour dominer les résultats de recherche locaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ─── SERVICES ───────────────────────────────────────────────────────
        List layout style (Linear-esque)
      */}
      <section id='services' className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <div className='mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end'>
            <h2 className='text-4xl font-medium tracking-tighter text-white md:text-6xl'>
              Services
            </h2>
            <p className='max-w-md text-lg text-slate-400'>{c.servicesSubtitle}</p>
          </div>

          <div className='divide-y divide-white/10 border-t border-white/10'>
            {c.services.slice(0, 4).map((svc, i) => (
              <div
                key={i}
                className='group grid gap-8 py-12 transition-colors duration-500 hover:bg-white/2 md:grid-cols-12 md:gap-12'>
                <div className='md:col-span-4'>
                  <h3 className='text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors'>
                    {svc.title}
                  </h3>
                </div>
                <div className='md:col-span-6'>
                  <p className='text-lg leading-relaxed text-slate-400'>{svc.desc}</p>
                </div>
                <div className='flex items-center justify-end md:col-span-2'>
                  <Link
                    href={svc.link}
                    className='rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-white hover:text-slate-900'>
                    Découvrir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ─── PROCESS (Timeline) ─────────────────────────────────────────────
      */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <h2 className='mb-24 text-4xl font-medium tracking-tighter text-white md:text-6xl'>
            Méthodologie
          </h2>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {c.processSteps.map((step, i) => (
              <div key={i} className='group relative pt-8'>
                <div className='absolute top-0 left-0 w-full h-px bg-white/10 group-hover:bg-blue-500/50 transition-colors duration-500' />
                <div className='mb-6 text-sm font-mono text-blue-400'>0{i + 1}</div>
                <h3 className='mb-4 text-2xl font-semibold text-white'>{step.title}</h3>
                <p className='text-slate-400 leading-relaxed font-light'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ─── PRICING ────────────────────────────────────────────────────────
        Clean, elevated cards
      */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <h2 className='mb-6 text-center text-4xl font-medium tracking-tighter text-white md:text-6xl'>
            Tarification Transparente
          </h2>
          <p className='mx-auto mb-24 max-w-2xl text-center text-xl text-slate-400'>
            {c.pricingSubtitle}
          </p>

          <div className='grid gap-8 md:grid-cols-3'>
            {c.pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-4xl border p-10 transition-transform duration-500 hover:-translate-y-2 ${
                  tier.featured
                    ? 'border-blue-500/50 bg-blue-900/10 backdrop-blur-3xl'
                    : 'border-white/10 bg-white/5 backdrop-blur-xl'
                }`}>
                {tier.featured && (
                  <span className='absolute top-6 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/20'>
                    Populaire
                  </span>
                )}

                <h3
                  className={`mb-2 text-xl font-medium ${tier.featured ? 'text-blue-400' : 'text-slate-200'}`}>
                  {tier.name}
                </h3>
                <div className='mb-8 flex items-baseline gap-1'>
                  <span className='text-4xl font-bold tracking-tight text-white'>{tier.price}</span>
                </div>

                <ul className='mb-10 flex-1 space-y-4'>
                  {tier.features.map((f, j) => (
                    <li key={j} className='flex items-start gap-3 text-slate-400'>
                      <svg
                        className={`h-5 w-5 shrink-0 ${tier.featured ? 'text-blue-400' : 'text-slate-600'}`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span className='text-sm'>{f}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href='/contact'
                  className={`w-full justify-center py-4 font-semibold transition-all ${
                    tier.featured
                      ? 'border-0 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/40'
                      : 'border-white/20 bg-transparent text-white hover:bg-white/10'
                  }`}>
                  {c.pricingCta}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ─── FAQ ────────────────────────────────────────────────────────────
      */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-3xl px-6'>
          <h2 className='mb-12 text-3xl font-medium tracking-tight text-white md:text-5xl'>
            Questions fréquentes
          </h2>
          <div className='divide-y divide-white/10'>
            {faqs.map((faq, i) => (
              <details key={i} className='group py-6'>
                <summary className='flex cursor-pointer list-none items-center justify-between text-lg font-medium text-slate-200 transition-colors group-hover:text-blue-400'>
                  {faq.question}
                  <span className='transition-transform duration-300 group-open:rotate-180'>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </span>
                </summary>
                <div className='mt-4 text-slate-400 leading-relaxed font-light'>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ─── CTA ────────────────────────────────────────────────────────────
        Massive footer CTA
      */}
      <section className='relative z-10 py-40'>
        <div className='mx-auto max-w-[1400px] px-6 text-center'>
          <h2 className='mb-8 text-5xl font-semibold section-header tracking-tighter text-white md:text-8xl'>
            Prêt à{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500'>
              décoller
            </span>{' '}
            ?
          </h2>
          <p className='mx-auto mb-16 max-w-2xl text-xl font-light text-slate-400'>
            {c.ctaSubtitle}
          </p>
          <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
            <Link
              href='/contact'
              className='rounded-full bg-white px-10 py-5 text-lg font-bold text-slate-950 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]'>
              {c.ctaBtn1}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
