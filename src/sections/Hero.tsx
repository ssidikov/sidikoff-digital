'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowIcon,
  PlayIcon,
  GuaranteeIcon,
  ResponseIcon,
  SupportIcon,
} from '@/components/ui/icons'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import CTAButton from '@/components/ui/CTAButton'
import Section from '@/components/ui/Section'

interface HeroProps {
  dict: Dictionary['hero']
  common: Dictionary['common']
  locale: Locale
}

export function Hero({ dict, common, locale }: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const badges = [
    { icon: GuaranteeIcon, text: common.badge_quality },
    { icon: ResponseIcon, text: common.badge_response },
    { icon: SupportIcon, text: common.badge_support },
  ]

  return (
    <Section
      id='hero'
      variant='hero'
      background='white'
      backgroundImage='/images/hero/hero-bg.jpg'
      padding='none'
      contentWidth='normal'>
      <div ref={ref} className='text-center relative z-10'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center px-4 py-2 rounded-full text-[12px] md:text-sm font-medium mb-8 bg-white/20 border border-white/30 backdrop-blur-sm mt-12 md:mt-24 '>
          <span className='w-2 h-2 bg-white/90 rounded-full mr-3' />
          {dict.badge}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight drop-shadow-lg'>
          <span className=''>{dict.title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-xl md:text-2xl text-black/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md'>
          {dict.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
          <CTAButton
            variant='primary'
            size='lg'
            href={locale === 'fr' ? '/#contact' : `/${locale}#contact`}
            className='inline-flex items-center justify-center'>
            <span className='mr-2'>{dict.cta_primary}</span>
            <ArrowIcon />
          </CTAButton>

          <CTAButton
            variant='secondary'
            size='lg'
            href={locale === 'fr' ? '/#portfolio' : `/${locale}#portfolio`}
            className='inline-flex items-center justify-center'>
            <PlayIcon />
            <span className='ml-2'>{dict.cta_secondary}</span>
          </CTAButton>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-wrap justify-center gap-8 mb-12'>
          {badges.map((badge, index) => {
            const IconComponent = badge.icon
            return (
              <div
                key={index}
                className='flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <span className='w-6 h-6 text-black inline-flex items-center justify-center'>
                  <IconComponent />
                </span>
                <span className='text-sm font-medium text-black'>{badge.text}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
