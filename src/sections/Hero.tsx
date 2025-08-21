'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ArrowIcon, PlayIcon } from '@/components/ui/icons'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import CTAButton from '@/components/ui/CTAButton'
import Section from '@/components/ui/Section'
import { ViewportHeightProvider } from '@/components/ViewportHeightProvider'

interface HeroProps {
  dict: Dictionary['hero']
  locale: Locale
}

export function Hero({ dict, locale }: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <ViewportHeightProvider>
      <Section id='hero' variant='hero' background='transparent' padding='none' contentWidth='wide'>
        <div ref={ref} className='relative z-10 hero-height flex items-center md:pt-24 lg:pt-0'>
          <div className='w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8'>
            {/* Left Column - Content */}
            <div className='space-y-6 md:space-y-8 lg:pr-8 max-w-[800px] order-1 lg:order-1'>
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-3xl xl:text-5xl font-black text-black leading-[1.1] tracking-tight drop-shadow-xl'>
                <span className=''>{dict.title}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-lg xl:text-2xl text-black/85 leading-[1.4] font-light drop-shadow-lg max-w-2xl'>
                {dict.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='flex flex-col xl:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2'>
                <CTAButton
                  variant='primary'
                  size='md'
                  href={locale === 'fr' ? '/#contact' : `/${locale}#contact`}
                  className='w-full sm:w-auto flex-1 sm:flex-initial min-w-0 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base xl:text-lg'>
                  <span className='mr-2 truncate'>{dict.cta_primary}</span>
                  <ArrowIcon />
                </CTAButton>

                <CTAButton
                  variant='secondary'
                  size='md'
                  href={locale === 'fr' ? '/#portfolio' : `/${locale}#portfolio`}
                  className='w-full sm:w-auto flex-1 sm:flex-initial min-w-0 text-sm sm:text-base lg:text-lg'>
                  <PlayIcon />
                  <span className='ml-2 truncate'>{dict.cta_secondary}</span>
                </CTAButton>
              </motion.div>
            </div>

            {/* Right Column - Hero Illustration */}
            <div className='relative lg:pl-8 order-2 lg:order-2'>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='relative w-full h-[200px] md:h-[250px] xl:h-[700px]'>
                <Image
                  src='/hero-illustration.svg'
                  alt='Hero Illustration'
                  fill
                  className='object-contain drop-shadow-2xl bg-transparent'
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </ViewportHeightProvider>
  )
}
