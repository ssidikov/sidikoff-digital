'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import Image from 'next/image'

import common from '@/locales/fr/common.json'
import CTAButton from '@/components/ui/CTAButton'
import { generatePersonSchema } from '@/lib/seo-utils'

const dict = common.about

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const STAGGER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const personSchema = generatePersonSchema({
    name: dict.author_name,
    jobTitle: dict.author_role,
    url: 'https://www.sidikoff.com',
    sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    image: 'https://cdn.sidikoff.com/images/sidikov-web.png',
  })

  return (
    <section
      id='about'
      ref={ref}
      className='relative overflow-hidden bg-[#F9F7F7] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#112D4E]/8 text-[#112D4E]'
      aria-label='À propos'
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* ── Top Header: Eyebrow + Title (Placed First) ── */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={STAGGER}
          className='max-w-3xl mb-12 sm:mb-16'
        >
          {/* Eyebrow Status Badge */}
          <motion.div variants={FADE_UP} className='mb-4'>
            <div className='inline-flex items-center gap-2 rounded-full border border-[#112D4E]/10 bg-white px-4 py-1.5 shadow-2xs'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#3377FF]' aria-hidden='true' />
              <span className='font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#112D4E]/80'>
                {dict.eyebrow}
              </span>
            </div>
          </motion.div>

          {/* Section Headline */}
          <motion.h2
            variants={FADE_UP}
            style={{ fontFamily: 'var(--font-grotesk), Space Grotesk, sans-serif' }}
            className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.08] text-[#112D4E]'
          >
            Agence web &amp;{' '}
            <span className='text-[#3377FF]'>développeur sur-mesure</span>{' '}
            basé à Lyon et Villeurbanne
          </motion.h2>

          {/* Section Description */}
          <motion.p
            variants={FADE_UP}
            className='text-xl text-accent mb-6 font-semibold mt-4'
          >
            Développeur Full-Stack &amp; Expert Next.js à Lyon
          </motion.p>
        </motion.div>

        {/* ── Below Title: Image + Content Grid (Image directly after the title) ── */}
        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20'>
          {/* ── Photo Column (Placed directly after the title) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className='lg:col-span-5 flex justify-center lg:justify-start'
          >
            <div className='relative w-full max-w-[380px] lg:max-w-none'>
              {/* Ambient Glow */}
              <div className='absolute -inset-4 rounded-3xl bg-[#3377FF]/[0.08] blur-2xl' />

              {/* Photo Frame Container */}
              <div className='relative overflow-hidden rounded-3xl border border-[#112D4E]/10 bg-white p-2 shadow-[0_20px_50px_rgba(17,45,78,0.08)]'>
                <div className='relative h-[440px] sm:h-[500px] lg:h-[540px] w-full overflow-hidden rounded-2xl bg-[#EBF2FF]'>
                  <Image
                    src='https://cdn.sidikoff.com/images/sidikov-web.png'
                    alt={dict.image_alt}
                    fill
                    priority={false}
                    className='object-cover object-top'
                    sizes='(max-width: 640px) 340px, (max-width: 1024px) 380px, 480px'
                  />
                </div>

                {/* Expertise badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className='absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-full bg-[#112D4E] px-4 py-2 text-white shadow-[0_4px_16px_rgba(17,45,78,0.3)] whitespace-nowrap'
                >
                  <span className='h-2 w-2 rounded-full bg-[#3377FF] animate-pulse' />
                  <span className='font-mono text-xs font-semibold tracking-wide'>
                    {dict.expertise_badge}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── Content Column ── */}
          <motion.div
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={STAGGER}
            className='lg:col-span-7 space-y-6'
          >
            {/* Paragraphs */}
            <motion.p
              variants={FADE_UP}
              className='text-base sm:text-lg leading-relaxed text-[#112D4E]/80 font-normal'
            >
              {dict.p1}
            </motion.p>
            <motion.p
              variants={FADE_UP}
              className='text-sm sm:text-base leading-relaxed text-[#112D4E]/65 font-normal'
            >
              {dict.p2}
            </motion.p>

            {/* Author signature */}
            <motion.div
              variants={FADE_UP}
              className='inline-flex items-center gap-3 rounded-2xl border border-[#112D4E]/10 bg-white px-4 py-3 shadow-2xs'
            >
              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#112D4E] text-white'>
                <span className='font-mono text-sm font-bold tracking-tight'>SS</span>
              </div>
              <div className='h-7 w-px bg-[#112D4E]/10' />
              <div>
                <p className='text-sm font-bold leading-tight text-[#112D4E]'>
                  {dict.author_name}
                </p>
                <p className='font-mono text-[11px] text-[#112D4E]/50 mt-0.5'>{dict.author_role}</p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div variants={FADE_UP} className='grid grid-cols-3 gap-3 sm:gap-4 pt-2'>
              {dict.stats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-2xl border border-[#112D4E]/10 bg-white p-4 text-center shadow-2xs transition-all duration-300 hover:border-[#3377FF]/30 hover:shadow-xs'
                >
                  <div
                    style={{ fontFamily: 'var(--font-grotesk), Space Grotesk, sans-serif' }}
                    className='text-2xl sm:text-3xl font-extrabold text-[#3377FF]'
                  >
                    {stat.value}
                  </div>
                  <div className='mt-1 text-[11px] sm:text-xs leading-tight text-[#112D4E]/60 font-medium'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.ul
              variants={FADE_UP}
              className='flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5 pt-2'
            >
              {dict.trust_badges.map((badge) => (
                <li key={badge} className='flex items-center gap-2 text-xs sm:text-sm font-medium text-[#112D4E]/75'>
                  <svg
                    className='h-4 w-4 shrink-0 text-[#3377FF]'
                    viewBox='0 0 16 16'
                    fill='none'
                    aria-hidden='true'
                  >
                    <path
                      d='M3 8l3.5 3.5L13 5'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  {badge}
                </li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div variants={FADE_UP} className='pt-4'>
              <CTAButton
                href='/#contact'
                variant='primary'
                size='md'
                trackingAction='about_cta_click'
                trackingCategory='About'
              >
                {dict.cta}
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className='mt-20 sm:mt-24 h-px w-full bg-gradient-to-r from-transparent via-[#112D4E]/10 to-transparent' />
    </section>
  )
}
