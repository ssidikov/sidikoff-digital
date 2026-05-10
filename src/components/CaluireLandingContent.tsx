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
  structuredData: unknown[]
}

// ─── Component ──────────────────────────────────────────────────────────────────

export default function CaluireLandingContent({ content: c, faqs, structuredData }: Props) {
  const heroRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-10%' })

  return (
    <main className='relative w-full overflow-x-hidden bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900'>
      {/* Subtle ambient light gradients */}
      <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0 bg-white' />
        <div className='absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_70%)] blur-[100px]' />
        <div className='absolute top-[40%] -right-[20%] w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)] blur-[120px]' />
        <div className='absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_70%)] blur-[90px]' />
      </div>

      {/* JSON-LD Structured Data */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className='relative z-10 flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24'>
        <div className='mx-auto max-w-[1400px] w-full'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium tracking-wide text-blue-700'>
            <span className='flex h-2 w-2 relative'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            {c.badge}
            <span className='h-3 w-px bg-blue-200' />
            <span className='text-slate-400'>2026</span>
          </motion.div>

          {/* Headline */}
          <div className='relative mb-12 max-w-5xl'>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className='text-4xl font-semibold leading-[0.95] tracking-tighter text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl'>
              {c.h1Start}
              <br />
              <span className='bg-linear-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent'>
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
              <p className='max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl lg:text-2xl font-light'>
                {c.subtitle}
              </p>

              <div className='flex flex-wrap gap-4'>
                <CTAButton
                  href='/contact'
                  size='lg'
                  className='group relative overflow-hidden border-0 bg-slate-900 px-8 py-4 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(15,23,42,0.2)]'>
                  <span className='relative z-10 font-bold tracking-tight'>{c.cta1}</span>
                  <div className='absolute inset-0 -translate-x-full bg-linear-to-r from-blue-700 to-transparent opacity-30 transition-transform duration-500 group-hover:translate-x-full' />
                </CTAButton>

                <CTAButton
                  href='#services'
                  size='lg'
                  variant='outline'
                  className='border-slate-300 bg-transparent px-8 py-4 text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50'>
                  {c.cta2}
                </CTAButton>
              </div>
            </motion.div>

            {/* Stat Cards */}
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
                  className='group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-blue-200 hover:shadow-md'>
                  <div className='mb-1 text-4xl font-light tracking-tighter text-slate-900 md:text-5xl'>
                    {s.val}
                  </div>
                  <div className='text-sm font-medium uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors'>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION ────────────────────────────────────────────── */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <div className='mb-24 md:w-3/4 lg:w-2/3'>
            <h2 className='text-4xl font-medium tracking-tighter text-slate-900 md:text-6xl'>
              Une approche <span className='text-blue-600'>sur-mesure</span> pour votre présence
              digitale.
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {/* Feature 1 */}
            <div className='group relative flex flex-col justify-between rounded-4xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5'>
              <div className='mb-12 h-16 w-16 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-200' />
              <div>
                <h3 className='mb-4 text-2xl font-semibold text-slate-900'>
                  Développement Premium
                </h3>
                <p className='text-lg leading-relaxed text-slate-600'>
                  Pas de templates génériques. Une architecture sur-mesure optimisée pour votre
                  croissance.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='group relative flex flex-col justify-between rounded-4xl border border-blue-200 bg-linear-to-b from-blue-50 to-slate-50 p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 md:col-span-2 lg:col-span-1'>
              <div className='mb-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-2xl font-bold text-slate-900'>
                24h
              </div>
              <div>
                <h3 className='mb-4 text-2xl font-semibold text-slate-900'>Réactivité Locale</h3>
                <p className='text-lg leading-relaxed text-slate-600'>
                  Un partenaire disponible à Caluire et Lyon. Vos urgences traitées en priorité
                  absolue.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='group relative flex flex-col justify-between rounded-4xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5'>
              <div className='mb-12 h-16 w-16 rounded-2xl bg-linear-to-br from-slate-200 to-slate-300 shadow-sm' />
              <div>
                <h3 className='mb-4 text-2xl font-semibold text-slate-900'>SEO & Performance</h3>
                <p className='text-lg leading-relaxed text-slate-600'>
                  Des sites ultra-rapides conçus pour dominer les résultats de recherche locaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────────── */}
      <section id='services' className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <div className='mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end'>
            <h2 className='text-4xl font-medium tracking-tighter text-slate-900 md:text-6xl'>
              Services
            </h2>
            <p className='max-w-md text-lg text-slate-600'>{c.servicesSubtitle}</p>
          </div>

          <div className='divide-y divide-slate-200 border-t border-slate-200'>
            {c.services.slice(0, 4).map((svc, i) => (
              <div
                key={i}
                className='group grid gap-8 py-12 transition-colors duration-500 hover:bg-slate-50 md:grid-cols-12 md:gap-12'>
                <div className='md:col-span-4'>
                  <h3 className='text-2xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors'>
                    {svc.title}
                  </h3>
                </div>
                <div className='md:col-span-6'>
                  <p className='text-lg leading-relaxed text-slate-600'>{svc.desc}</p>
                </div>
                <div className='flex items-center justify-end md:col-span-2'>
                  <Link
                    href={svc.link}
                    className='rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900'>
                    Découvrir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────────── */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <h2 className='mb-24 text-4xl font-medium tracking-tighter text-slate-900 md:text-6xl'>
            Méthodologie
          </h2>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {c.processSteps.map((step, i) => (
              <div key={i} className='group relative pt-8'>
                <div className='absolute top-0 left-0 w-full h-px bg-slate-200 group-hover:bg-blue-500 transition-colors duration-500' />
                <div className='mb-6 text-sm font-mono text-blue-600'>0{i + 1}</div>
                <h3 className='mb-4 text-2xl font-semibold text-slate-900'>{step.title}</h3>
                <p className='text-slate-600 leading-relaxed font-light'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24'>
          <h2 className='mb-6 text-center text-4xl font-medium tracking-tighter text-slate-900 md:text-6xl'>
            Tarification Transparente
          </h2>
          <p className='mx-auto mb-24 max-w-2xl text-center text-xl text-slate-600'>
            {c.pricingSubtitle}
          </p>

          <div className='grid gap-8 md:grid-cols-3'>
            {c.pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-4xl border p-10 transition-transform duration-500 hover:-translate-y-2 ${
                  tier.featured
                    ? 'border-blue-400 bg-blue-50 shadow-xl shadow-blue-100'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}>
                {tier.featured && (
                  <span className='absolute top-6 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-200'>
                    Populaire
                  </span>
                )}

                <h3
                  className={`mb-2 text-xl font-medium ${tier.featured ? 'text-blue-600' : 'text-slate-800'}`}>
                  {tier.name}
                </h3>
                <div className='mb-8 flex items-baseline gap-1'>
                  <span className='text-4xl font-bold tracking-tight text-slate-900'>
                    {tier.price}
                  </span>
                </div>

                <ul className='mb-10 flex-1 space-y-4'>
                  {tier.features.map((f, j) => (
                    <li key={j} className='flex items-start gap-3 text-slate-600'>
                      <svg
                        className={`h-5 w-5 shrink-0 ${tier.featured ? 'text-blue-500' : 'text-slate-400'}`}
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
                      ? 'border-0 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}>
                  {c.pricingCta}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className='relative z-10 py-32'>
        <div className='mx-auto max-w-3xl px-6'>
          <h2 className='mb-12 text-3xl font-medium tracking-tight text-slate-900 md:text-5xl'>
            Questions fréquentes
          </h2>
          <div className='divide-y divide-slate-200'>
            {faqs.map((faq, i) => (
              <details key={i} className='group py-6'>
                <summary className='flex cursor-pointer list-none items-center justify-between text-lg font-medium text-slate-800 transition-colors group-hover:text-blue-600'>
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
                <div className='mt-4 text-slate-600 leading-relaxed font-light'>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className='relative z-10 py-40'>
        <div className='mx-auto max-w-[1400px] px-6 text-center'>
          <h2 className='mb-8 text-5xl font-semibold tracking-tighter text-slate-900 md:text-8xl'>
            Prêt à{' '}
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600'>
              décoller
            </span>{' '}
            ?
          </h2>
          <p className='mx-auto mb-16 max-w-2xl text-xl font-light text-slate-600'>
            {c.ctaSubtitle}
          </p>
          <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
            <Link
              href='/contact'
              className='rounded-full bg-slate-900 px-10 py-5 text-lg font-bold text-white transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(15,23,42,0.2)]'>
              {c.ctaBtn1}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
