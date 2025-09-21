'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

import { type Dictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import { ArrowIcon, PlayIcon } from '@/components/ui/icons'
import CTAButton from '@/components/ui/CTAButton'
import Section from '@/components/ui/Section'
import { ViewportHeightProvider } from '@/components/ViewportHeightProvider'

interface HeroProps {
  dict: Dictionary['hero']
  locale: Locale
}

// Animation configurations for consistent timing
const ANIMATION_CONFIG = {
  title: { duration: 0.8, delay: 0.2 },
  subtitle: { duration: 0.8, delay: 0.4 },
  buttons: { duration: 0.8, delay: 0.6 },
  image: { duration: 1, delay: 0.4 },
} as const

const HERO_IMAGE = {
  src: '/images/hero-illustration.svg',
  alt: 'Hero Illustration',
} as const

/**
 * Generates CTA button href based on locale
 * @param section - The section to link to
 * @param locale - Current locale
 * @returns Localized section URL
 */
function getCTAHref(section: string, locale: Locale): string {
  return locale === 'fr' ? `/#${section}` : `/${locale}#${section}`
}

/**
 * Hero section with animated content and responsive design
 * Features dual CTA buttons and hero illustration
 */
export function Hero({ dict, locale }: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const primaryCTAHref = getCTAHref('contact', locale)
  const secondaryCTAHref = getCTAHref('portfolio', locale)

  return (
    <ViewportHeightProvider>
      <Section id='hero' variant='hero' background='transparent' padding='none' contentWidth='wide'>
        <div ref={ref} className='relative z-10 hero-height flex items-center md:pt-24 lg:pt-0'>
          <div className='w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8'>
            {/* Content Column */}
            <div className='order-1 max-w-[800px] space-y-6 md:space-y-8 lg:pr-8'>
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={ANIMATION_CONFIG.title}
                className='text-3xl xl:text-5xl font-black text-black leading-[1.1] tracking-tight drop-shadow-xl'>
                <span>{dict.title}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={ANIMATION_CONFIG.subtitle}
                className='max-w-2xl text-lg xl:text-2xl text-black/85 leading-[1.4] font-light drop-shadow-lg'>
                {dict.subtitle}
              </motion.p>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...ANIMATION_CONFIG.subtitle, delay: 0.2 }}
                className='flex flex-wrap items-center gap-4 text-sm font-medium text-black/70'>
                {dict.trust_indicators?.map((indicator: string, index: number) => (
                  <span key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                    {indicator}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={ANIMATION_CONFIG.buttons}
                className='flex flex-col xl:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2'>
                <CTAButton
                  variant='primary'
                  size='md'
                  href={primaryCTAHref}
                  className='w-full sm:w-auto flex-1 sm:flex-initial min-w-0 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base xl:text-lg'
                  trackingAction='click_primary_cta'
                  trackingCategory='hero'>
                  <span className='mr-2 truncate'>{dict.cta_primary}</span>
                  <ArrowIcon />
                </CTAButton>

                <CTAButton
                  variant='secondary'
                  size='md'
                  href={secondaryCTAHref}
                  className='w-full sm:w-auto flex-1 sm:flex-initial min-w-0 text-sm sm:text-base lg:text-lg'
                  trackingAction='click_secondary_cta'
                  trackingCategory='hero'>
                  <PlayIcon />
                  <span className='ml-2 truncate'>{dict.cta_secondary}</span>
                </CTAButton>
              </motion.div>
            </div>

            {/* Hero Illustration */}
            <div className='relative order-2 lg:pl-8'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={ANIMATION_CONFIG.image}
                className='relative w-full h-[200px] md:h-[250px] xl:h-[700px]'>
                <Image
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  fill
                  className='object-contain drop-shadow-2xl bg-transparent'
                  priority
                  loading='eager'
                  fetchPriority='high'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
                  quality={95}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </ViewportHeightProvider>
  )
}
