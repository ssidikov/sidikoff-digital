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
      background='hero'
      padding='sm'
      contentWidth='normal'
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#f8fafc',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat',
        transform: 'scaleX(-1)',
      }}>
      <div ref={ref} className='text-center max-w-6xl mx-auto'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center px-4 py-2 rounded-full text-[12px] md:text-sm font-medium mb-8 bg-white/10 text-black/50 border border-black/20 backdrop-blur-sm mt-32 sm:mt-28 md:mt-32'>
          <span className='w-2 h-2 bg-black/50 rounded-full mr-3 animate-pulse' />
          {dict.badge}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a232b] mb-6 leading-tight'>
          <span className=''>{dict.title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-xl md:text-2xl text-[#3a4a5a] mb-12 max-w-3xl mx-auto leading-relaxed'>
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
              <div key={index} className='flex items-center space-x-3'>
                <span className='w-6 h-6 text-black inline-flex items-center justify-center'>
                  <IconComponent />
                </span>
                <span className='text-sm font-medium bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent'>
                  {badge.text}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
