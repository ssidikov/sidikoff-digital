'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
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
    <Section id='hero' variant='hero' background='transparent' padding='none' contentWidth='wide'>
      <div ref={ref} className='relative z-10 min-h-screen flex items-center'>
        <div className='w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8'>
          {/* Left Column - Content */}
          <div className='space-y-8 lg:pr-8'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className='inline-flex items-center px-4 py-2 rounded-full text-[12px] md:text-sm font-medium border border-gray-400/50 transition-all duration-300'
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                backdropFilter: 'blur(12px) saturate(110%)',
                boxShadow:
                  'rgba(255, 255, 255, 0.2) 0px 4px 16px, inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              }}>
              <span className='w-2 h-2 bg-green-400/50 rounded-full mr-3' />
              {dict.badge}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight drop-shadow-lg'>
              <span className=''>{dict.title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-lg md:text-xl lg:text-2xl text-black/90 leading-relaxed drop-shadow-md max-w-2xl'>
              {dict.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 lg:gap-6'>
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
              className='flex flex-wrap gap-4 lg:gap-6'>
              {badges.map((badge, index) => {
                const IconComponent = badge.icon
                return (
                  <div
                    key={index}
                    className='flex items-center space-x-3 rounded-full px-4 py-2 border border-gray-400/50 transition-all duration-300'
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                      backdropFilter: 'blur(12px) saturate(110%)',
                      boxShadow:
                        'rgba(255, 255, 255, 0.2) 0px 4px 16px, inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                    }}>
                    <span className='w-6 h-6 text-black inline-flex items-center justify-center'>
                      <IconComponent />
                    </span>
                    <span className='text-sm font-medium text-black'>{badge.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right Column - Hero Illustration */}
          <div className='relative lg:pl-8'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]'>
              <Image
                src='/hero-1.svg'
                alt='Hero Illustration'
                fill
                className='object-contain drop-shadow-2xl bg-transparent'
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
