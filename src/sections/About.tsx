'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

import common from '@/locales/fr/common.json'
import CTAButton from '@/components/ui/CTAButton'

const dict = common.about

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

// Hoisted to avoid new object reference on every render
const SECTION_STYLE = {
  backgroundImage: 'linear-gradient(155deg, #EBF2FF 8%, #F9F7F7 42%, #F0F4FF 78%, #FFFAE6 98%)',
} as const

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id='about'
      ref={ref}
      className='relative overflow-hidden'
      style={SECTION_STYLE}
      aria-label='À propos'>
      <div className='relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20'>
          {/* ── LEFT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='flex justify-center lg:justify-start'>
            <div className='relative'>
              {/* Glow */}
              <div className='absolute -inset-4 rounded-3xl bg-[rgba(51,119,255,0.12)] blur-2xl' />
              {/* Accent border ring */}
              <div className='absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-accent to-primary' />
              {/* Photo */}
              <div className='relative h-[460px] w-[340px] overflow-hidden rounded-2xl sm:h-[540px] sm:w-[390px] lg:h-[600px] lg:w-[440px]'>
                <Image
                  src='/images/sidikov-web.png'
                  alt={dict.image_alt}
                  fill
                  className='object-cover object-top'
                  sizes='(max-width: 640px) 340px, (max-width: 1024px) 390px, 440px'
                />
              </div>
              {/* Expertise badge — left */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.4, ease: 'easeOut' }}
                className='absolute -bottom-3 left-2 z-10 flex items-center gap-2 rounded-full bg-accent px-4 py-2 shadow-[0_4px_16px_rgba(51,119,255,0.4)] sm:left-3 lg:left-4'>
                <span className='text-sm font-medium text-white'>{dict.expertise_badge}</span>
              </motion.div>
              {/* Disponible badge — right */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.4, ease: 'easeOut' }}
                className='absolute -bottom-3 right-2 z-10 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 shadow-[0_4px_16px_rgba(16,185,129,0.45)] sm:right-3 lg:right-4'>
                <span className='h-2 w-2 rounded-full bg-white' />
                <span className='text-sm font-medium text-white'>{dict.available_label}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={STAGGER}>
            {/* Eyebrow */}
            <motion.div variants={FADE_UP}>
              <span className='inline-flex items-center gap-2 rounded-full border border-[rgba(51,119,255,0.3)] bg-[rgba(51,119,255,0.08)] px-4 py-1.5 text-sm font-medium text-accent'>
                <span className='h-1.5 w-1.5 rounded-full bg-accent' aria-hidden='true' />
                {dict.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={FADE_UP}
              className='mt-5 text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-4xl'>
              {dict.headline}
            </motion.h2>

            {/* Paragraphs */}
            <motion.p
              variants={FADE_UP}
              className='mt-5 text-base leading-relaxed text-foreground/75'>
              {dict.p1}
            </motion.p>
            <motion.p
              variants={FADE_UP}
              className='mt-3 text-base leading-relaxed text-foreground/60'>
              {dict.p2}
            </motion.p>

            {/* Author signature */}
            <motion.div variants={FADE_UP} className='mt-6 inline-flex items-center gap-3'>
              {/* Initials avatar */}
              <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary shadow-[0_2px_12px_rgba(51,119,255,0.3)]'>
                <span className='text-sm font-bold tracking-tight'>SS</span>
              </div>
              {/* Vertical separator */}
              <div className='h-8 w-px bg-gradient-to-b from-transparent via-border to-transparent' />
              {/* Name + role */}
              <div>
                <p className='text-sm font-semibold leading-tight text-foreground'>
                  {dict.author_name}
                </p>
                <p className='mt-0.5 text-xs text-foreground/50'>{dict.author_role}</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={FADE_UP} className='mt-8 grid grid-cols-3 gap-3'>
              {dict.stats.map((stat) => (
                <div
                  key={stat.label}
                  className='group relative overflow-hidden rounded-2xl border border-white/70 bg-white/30 px-3 py-5 text-center shadow-[0_4px_24px_rgba(51,119,255,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md transition-all duration-300 hover:bg-white/50 hover:shadow-[0_8px_32px_rgba(51,119,255,0.13),inset_0_1px_0_rgba(255,255,255,0.95)]'>
                  {/* Gloss line */}
                  <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent' />
                  <div className='text-xl font-bold text-accent sm:text-2xl'>{stat.value}</div>
                  <div className='mt-1 text-[11px] leading-tight text-foreground/50 sm:text-xs'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              variants={FADE_UP}
              className='mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2'>
              {dict.trust_badges.map((badge) => (
                <li key={badge} className='flex items-center gap-2 text-sm text-foreground/65'>
                  <svg
                    className='h-4 w-4 shrink-0 text-accent'
                    viewBox='0 0 16 16'
                    fill='none'
                    aria-hidden='true'>
                    <path
                      d='M3 8l3.5 3.5L13 5'
                      stroke='currentColor'
                      strokeWidth='1.75'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  {badge}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={FADE_UP} className='mt-8'>
              <CTAButton
                href='/#contact'
                variant='primary'
                size='md'
                trackingAction='about_cta_click'
                trackingCategory='About'>
                {dict.cta}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className='h-px w-full bg-gradient-to-r from-transparent via-[rgba(17,45,78,0.1)] to-transparent' />
    </section>
  )
}
