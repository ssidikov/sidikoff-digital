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
  h1Suffix?: string
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

export default function VilleurbanneLandingContent({
  content: c,
  faqs,
  structuredData,
  locale,
}: Props) {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true, margin: '-80px' })

  return (
    <main className='relative bg-slate-50 selection:bg-blue-100 selection:text-blue-900'>
      {/* Global Background Gradient Mesh */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-[120vh] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(219,234,254,0.5),rgba(255,255,255,0))]' />
        <div className='absolute top-[20%] right-0 w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-3xl opacity-60 mix-blend-multiply filter' />
        <div className='absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-slate-100/60 rounded-full blur-3xl opacity-60 mix-blend-multiply filter' />
      </div>
      {/* JSON-LD */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ═══ HERO — Asymmetric Composition ═══ */}
      <section
        ref={heroRef}
        className='relative z-10 min-h-screen flex items-center py-24 md:py-32 overflow-hidden'>
        {/* Hero Specific Background Overlay */}
        <div className='absolute inset-0 bg-linear-to-b from-white/80 via-white/50 to-transparent pointer-events-none' />

        <div className='relative mx-auto max-w-6xl px-6 md:px-8'>
          <div className='grid grid-cols-12 gap-12 lg:gap-16'>
            {/* Content Column — 7 cols */}
            <div className='col-span-12 lg:col-span-7'>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600'>
                <div className='h-1.5 w-1.5 rounded-full bg-blue-600' />
                {c.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className='mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-7xl'>
                {c.h1Start}
                <span className='relative inline-block'>
                  <span className='relative z-10 text-blue-600'>{c.h1City}</span>
                  <div className='absolute -bottom-2 left-0 h-3 w-full bg-blue-600/10 -rotate-1' />
                </span>
                {c.h1Suffix && (
                  <span className='mt-3 block bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-2xl font-semibold leading-tight text-transparent md:text-3xl lg:text-4xl'>
                    {c.h1Suffix}
                  </span>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className='mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg lg:text-xl'>
                {c.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className='flex flex-col gap-4 sm:flex-row'>
                <CTAButton
                  href='/contact'
                  size='lg'
                  className='border-0 bg-blue-600 font-semibold text-white shadow-soft-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-soft-lg'>
                  {c.cta1}
                </CTAButton>
                <CTAButton
                  href='#services'
                  size='lg'
                  variant='outline'
                  className='border-slate-200 font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50'>
                  {c.cta2}
                </CTAButton>
              </motion.div>
            </div>

            {/* Visual Column — 5 cols */}
            <div className='col-span-12 lg:col-span-5'>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
                className='relative'>
                {/* Stats Grid */}
                <div className='space-y-3 md:space-y-4'>
                  {[
                    { value: c.stat1, label: c.stat1Label },
                    { value: c.stat2, label: c.stat2Label },
                    { value: c.stat3, label: c.stat3Label },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className='group rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-soft-md transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-blue-100/50'>
                      <div className='mb-2 text-3xl md:text-4xl font-bold text-slate-900'>
                        {stat.value}
                      </div>
                      <div className='text-sm font-medium text-slate-600'>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUE PROPOSITION — Varied Density ═══ */}
      <section className='relative z-10 py-20 md:py-32'>
        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='mb-12 md:mb-16 max-w-2xl'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl'>
              Pourquoi choisir un développeur local à Villeurbanne
            </h2>
            <p className='text-lg leading-relaxed text-slate-600'>
              Expertise technique, connaissance du marché lyonnais et proximité géographique pour
              vos projets web.
            </p>
          </div>

          <div className='grid grid-cols-12 gap-8'>
            {/* Large Feature — 8 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className='col-span-12 lg:col-span-8'>
              <div className='group relative h-full overflow-hidden rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 p-8 md:p-10 lg:p-12 shadow-soft-md transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-blue-100'>
                {/* Subtle decorative gradient */}
                <div className='pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-linear-to-br from-blue-100/30 to-transparent blur-3xl' />

                <div className='relative mb-6 inline-flex rounded-xl bg-blue-50 p-3 md:p-4 text-blue-600'>
                  <svg
                    className='h-6 w-6 md:h-8 md:w-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1.5}
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='relative mb-4 text-2xl md:text-3xl font-bold text-slate-900'>
                  Développement sur-mesure
                </h3>
                <p className='relative leading-relaxed text-slate-600'>
                  Chaque projet est unique. Je conçois des solutions web adaptées à vos besoins
                  spécifiques, sans template générique. Performance, SEO et design soignés sont au
                  cœur de chaque livraison.
                </p>
              </div>
            </motion.div>

            {/* Smaller Feature — 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='col-span-12 lg:col-span-4'>
              <div className='group h-full rounded-xl md:rounded-2xl bg-linear-to-br from-blue-50/50 to-slate-50/50 backdrop-blur-sm border border-white/60 p-6 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md'>
                <div className='mb-4 text-3xl md:text-4xl font-bold text-blue-600'>24h</div>
                <h3 className='mb-3 text-xl font-semibold text-slate-900'>Réactivité garantie</h3>
                <p className='text-sm leading-relaxed text-slate-600'>
                  Réponse rapide, proximité géographique et disponibilité pour vos projets urgents.
                </p>
              </div>
            </motion.div>

            {/* Medium Feature — 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className='col-span-12 md:col-span-6 lg:col-span-4'>
              <div className='group h-full rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md hover:border-blue-50'>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20'>
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <h3 className='mb-3 text-xl font-semibold text-slate-900'>SEO local Lyon</h3>
                <p className='text-sm leading-relaxed text-slate-600'>
                  Expertise en référencement local pour dominer les recherches à Villeurbanne et
                  Lyon.
                </p>
              </div>
            </motion.div>

            {/* Medium Feature — 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='col-span-12 md:col-span-6 lg:col-span-4'>
              <div className='group h-full rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md hover:border-blue-50'>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20'>
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='mb-3 text-xl font-semibold text-slate-900'>Performance optimale</h3>
                <p className='text-sm leading-relaxed text-slate-600'>
                  Temps de chargement ultra-rapides et expérience utilisateur fluide garantie.
                </p>
              </div>
            </motion.div>

            {/* Medium Feature — 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className='col-span-12 md:col-span-6 lg:col-span-4'>
              <div className='group h-full rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md hover:border-blue-50'>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20'>
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                    />
                  </svg>
                </div>
                <h3 className='mb-3 text-xl font-semibold text-slate-900'>Code maintenable</h3>
                <p className='text-sm leading-relaxed text-slate-600'>
                  Solutions scalables et documentation claire pour faciliter les évolutions futures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — 2x2 Grid ═══ */}
      <section id='services' className='relative z-10 py-20 md:py-32'>
        <div className='absolute inset-0 bg-linear-to-b from-slate-50/50 to-white/50 -z-10' />
        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='mb-12 md:mb-20 max-w-2xl'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl'>
              {c.servicesTitle}
            </h2>
            <p className='text-lg leading-relaxed text-slate-600'>{c.servicesSubtitle}</p>
          </div>

          <div className='grid grid-cols-12 gap-6 md:gap-8 lg:gap-12'>
            {c.services.slice(0, 4).map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='col-span-12 md:col-span-6'>
                <div className='group h-full rounded-xl md:rounded-2xl bg-white p-6 md:p-8 lg:p-10 shadow-soft-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-blue-100'>
                  <h3 className='mb-4 text-xl md:text-2xl font-semibold text-slate-900'>
                    {svc.title}
                  </h3>
                  <p className='mb-6 leading-relaxed text-slate-600'>{svc.desc}</p>
                  <Link
                    href={svc.link}
                    className='inline-flex items-center gap-2 font-medium text-blue-600 transition-all duration-200 hover:gap-3 hover:text-blue-700'>
                    {c.learnMore}
                    <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — Vertical Timeline ═══ */}
      <section className='relative z-10 py-20 md:py-32'>
        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='mb-12 md:mb-20 max-w-2xl'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl'>
              {c.processTitle}
            </h2>
            <p className='text-lg leading-relaxed text-slate-600'>{c.processSubtitle}</p>
          </div>

          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-6 top-0 h-full w-px bg-slate-200 md:left-8' />

            <div className='space-y-12'>
              {c.processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className='relative flex items-start gap-8'>
                  {/* Number Circle */}
                  <div className='relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/25 ring-4 ring-white md:h-16 md:w-16 md:text-lg'>
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className='flex-1 pb-4 pt-2'>
                    <h3 className='mb-3 text-2xl font-semibold text-slate-900'>{step.title}</h3>
                    <p className='max-w-2xl leading-relaxed text-slate-600'>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCAL AUTHORITY — Villeurbanne ═══ */}
      <section className='relative z-10 py-20 md:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-t from-blue-50/30 to-slate-50/50 -z-10' />
        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='grid grid-cols-12 gap-8 md:gap-12 lg:gap-16'>
            <div className='col-span-12 lg:col-span-8'>
              <h2 className='mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl'>
                Expert web local à Villeurbanne et Lyon Métropole
              </h2>
              <div className='space-y-6 text-lg leading-relaxed text-slate-600'>
                <p>
                  Basé à <strong className='font-semibold text-slate-900'>Villeurbanne</strong>, je
                  connais parfaitement le tissu économique local et les enjeux des entreprises de la
                  métropole lyonnaise. Cette proximité géographique me permet d'offrir un service
                  réactif et personnalisé.
                </p>
                <p>
                  Que vous soyez dans les quartiers de{' '}
                  <strong className='font-semibold text-slate-900'>Gratte-Ciel</strong>,{' '}
                  <strong className='font-semibold text-slate-900'>Charpennes</strong> ou{' '}
                  <strong className='font-semibold text-slate-900'>Cusset</strong>, je me déplace
                  facilement pour des rencontres en présentiel et comprendre vos besoins
                  spécifiques.
                </p>
                <p>
                  Mon expertise technique combinée à une connaissance approfondie du marché local
                  fait de moi le partenaire idéal pour votre transformation digitale dans le Grand
                  Lyon.
                </p>
              </div>

              <div className='mt-8 flex flex-wrap gap-3'>
                {['Villeurbanne', 'Lyon 3', 'Lyon 6', 'Bron', 'Vaulx-en-Velin'].map((quartier) => (
                  <span
                    key={quartier}
                    className='rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600'>
                    {quartier}
                  </span>
                ))}
              </div>
            </div>

            <div className='col-span-12 lg:col-span-4'>
              <div className='rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-soft-md border border-white/60'>
                <h3 className='mb-6 text-xl font-semibold text-slate-900'>Zone d'intervention</h3>
                <div className='space-y-4'>
                  {[
                    { area: 'Villeurbanne', distance: 'Sur place' },
                    { area: 'Lyon Métropole', distance: '< 15 min' },
                    { area: 'Rhône-Alpes', distance: 'Sur demande' },
                  ].map((zone, i) => (
                    <div
                      key={i}
                      className='flex items-center justify-between border-b border-slate-100 pb-4 last:border-0'>
                      <span className='font-medium text-slate-900'>{zone.area}</span>
                      <span className='text-sm text-slate-600'>{zone.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className='relative z-10 py-20 md:py-32'>
        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='mb-12 md:mb-20 text-center'>
            <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl'>
              {c.pricingTitle}
            </h2>
            <p className='mx-auto max-w-2xl text-lg leading-relaxed text-slate-600'>
              {c.pricingSubtitle}
            </p>
          </div>

          <div className='grid grid-cols-12 gap-8'>
            {c.pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='col-span-12 md:col-span-6 lg:col-span-4'>
                <div
                  className={`relative h-full rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 ${
                    tier.featured
                      ? 'scale-105 bg-linear-to-br from-blue-600 to-blue-700 shadow-xl shadow-blue-500/20 text-white'
                      : 'bg-white shadow-soft-md hover:-translate-y-1 hover:shadow-soft-lg border border-slate-100 hover:border-blue-100'
                  }`}>
                  {tier.featured && (
                    <div className='mb-4 inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white'>
                      {c.pricingPopular}
                    </div>
                  )}

                  <h3
                    className={`mb-2 text-2xl font-bold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                    {tier.name}
                  </h3>

                  <div
                    className={`mb-1 text-5xl font-bold ${tier.featured ? 'text-white' : 'text-slate-900'}`}>
                    {tier.price}
                  </div>

                  <p
                    className={`mb-8 text-sm ${tier.featured ? 'text-blue-100' : 'text-slate-600'}`}>
                    {tier.timeline}
                  </p>

                  <ul className='mb-8 space-y-3'>
                    {tier.features.map((feature, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-3 text-sm ${tier.featured ? 'text-white' : 'text-slate-600'}`}>
                        <svg
                          className={`mt-0.5 h-5 w-5 shrink-0 ${tier.featured ? 'text-white' : 'text-blue-600'}`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <CTAButton
                    href='/contact'
                    className={`w-full font-semibold transition-all duration-200 ${
                      tier.featured
                        ? 'border-0 bg-white text-blue-600 hover:bg-blue-50'
                        : 'border-0 bg-blue-600 text-white hover:-translate-y-0.5 hover:bg-blue-700'
                    }`}>
                    {c.pricingCta}
                  </CTAButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className='relative z-10 py-20 md:py-32'>
        <div className='absolute inset-0 bg-linear-to-b from-slate-50/80 to-white/50 -z-10' />
        <div className='mx-auto max-w-3xl px-6 md:px-8'>
          <h2 className='mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl'>
            Questions fréquentes
          </h2>

          <div className='space-y-4'>
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className='group overflow-hidden rounded-2xl bg-white shadow-soft border border-slate-100/50 hover:border-blue-100 transition-colors duration-300'>
                <summary className='flex cursor-pointer items-center justify-between px-6 md:px-8 py-5 md:py-6 font-semibold text-slate-900 transition-colors hover:bg-slate-50/50'>
                  <span>{faq.question}</span>
                  <svg
                    className='h-5 w-5 shrink-0 text-slate-600 transition-transform group-open:rotate-180'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </summary>
                <div className='px-6 md:px-8 pb-6 leading-relaxed text-slate-600'>{faq.answer}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA — Calm & Clean ═══ */}
      <section className='relative z-10 py-20 md:py-32'>
        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='overflow-hidden rounded-2xl md:rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 px-8 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 text-center shadow-2xl shadow-slate-900/10'>
            <h2 className='mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
              {c.ctaTitle}
            </h2>
            <p className='mx-auto mb-8 md:mb-10 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-300'>
              {c.ctaSubtitle}
            </p>

            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
              <CTAButton
                href='/contact'
                size='lg'
                className='border-0 bg-white font-semibold text-slate-900 shadow-soft-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-lg'>
                {c.ctaBtn1}
              </CTAButton>
              <CTAButton
                href={`/${locale}`}
                size='lg'
                variant='outline'
                className='border-slate-600 font-semibold text-white transition-all duration-200 hover:border-slate-500 hover:bg-white/5'>
                {c.ctaBtn2}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
