'use client'

import { useRef } from 'react'
import Image from 'next/image'

import common from '@/locales/fr/common.json'
import { ArrowIcon, PlayIcon } from '@/components/ui/icons'
import CTAButton from '@/components/ui/CTAButton'
import Section from '@/components/ui/Section'
import { ViewportHeightProvider } from '@/components/ViewportHeightProvider'

const dict = common.hero



const HERO_IMAGE = {
  src: '/images/hero-illustration.svg',
  alt: 'Hero Illustration',
} as const

/**
 * Generates CTA button href for a section
 * @param section - The section to link to
 * @returns Section URL
 */
function getCTAHref(section: string): string {
  return `/#${section}`
}

/**
 * Hero section with animated content and responsive design
 * Features dual CTA buttons and hero illustration
 */
export function Hero() {
  const ref = useRef(null)

  const primaryCTAHref = getCTAHref('contact')
  const secondaryCTAHref = getCTAHref('portfolio')

  return (
    <ViewportHeightProvider>
      <Section id='hero' variant='hero' background='transparent' padding='none' contentWidth='wide'>
        <div ref={ref} className='relative z-10 hero-height flex items-center'>
          <div className='w-full grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8'>
            {/* Content Column */}
            <div className='order-1 max-w-[800px] space-y-6 md:space-y-8 lg:pr-8'>
              {/* Main Heading */}
              <h1
                className='animate-fadeInUp text-3xl xl:text-5xl font-black text-black leading-[1.1] tracking-tight drop-shadow-xl'
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <span>{dict.title}</span>
              </h1>

              {/* Subtitle */}
              <p
                className='animate-fadeInUp max-w-2xl text-lg xl:text-2xl text-black/85 leading-[1.4] font-light drop-shadow-lg'
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                {dict.subtitle}
              </p>

              {/* Trust indicators */}
              <div
                className='animate-fadeInUp flex flex-wrap items-center gap-4 text-sm font-medium text-black/70'
                style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                {dict.trust_indicators?.map((indicator: string, index: number) => (
                  <span key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                    {indicator}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className='animate-fadeInUp flex flex-col xl:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2'
                style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
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
              </div>
            </div>

            {/* Hero Illustration */}
            <div className='relative order-2 lg:pl-8'>
              <div
                className='animate-slideIn relative w-full h-[200px] md:h-[250px] xl:h-[700px]'
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
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
              </div>
            </div>
          </div>
        </div>
      </Section>
    </ViewportHeightProvider>
  )
}
