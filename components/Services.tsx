'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { Eye, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useEcoAnimation, getOptimalImageQuality } from '@/lib/eco-utils'

export default function Services() {
  const { t } = useLanguage()
  const { shouldAnimate, getAnimationProps } = useEcoAnimation()

  const services = [
    {
      illustration: '/images/services/web-site.webp',
      titleKey: 'services.creation.title',
      descriptionKey: 'services.creation.description',
    },
    {
      illustration: '/images/services/redesign.webp',
      titleKey: 'services.redesign.title',
      descriptionKey: 'services.redesign.description',
    },
    {
      illustration: '/images/services/seo.webp',
      titleKey: 'services.seo.title',
      descriptionKey: 'services.seo.description',
    },
    {
      illustration: '/images/services/support.webp',
      titleKey: 'services.maintenance.title',
      descriptionKey: 'services.maintenance.description',
    },
  ]

  return (
    <section id='services' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <AnimatedSection>
          <div className='max-w-4xl mx-auto text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'>
              {t('services.title')}
            </h2>
            <p className='text-xl text-muted-foreground'>{t('services.subtitle')}</p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 mb-12'>
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <ServiceCard service={service} t={t} shouldAnimate={shouldAnimate} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection>
          <div className='max-w-2xl mx-auto text-center'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href='#contact-form'
                className='group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2'
                {...getAnimationProps(
                  { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } },
                  { whileHover: {}, whileTap: {} }
                )}>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative flex items-center gap-2'>
                  <MessageCircle className='w-5 h-5' />
                  <span>{t('services.cta.quote')}</span>
                </div>
              </motion.a>

              <motion.a
                href='#prices'
                className='group px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 flex items-center justify-center gap-2'
                {...getAnimationProps(
                  { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } },
                  { whileHover: {}, whileTap: {} }
                )}>
                <Eye className='w-5 h-5' />
                <span>{t('services.cta.pricing')}</span>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  t,
  shouldAnimate,
}: {
  service: {
    illustration: string
    titleKey: string
    descriptionKey: string
  }
  t: (key: string) => string
  shouldAnimate: boolean
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    if (!shouldAnimate) return // Skip mouse tracking in eco mode

    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`

  const animationProps = shouldAnimate
    ? {
        whileTap: { scale: 0.98 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }
    : {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      }

  return (
    <motion.div
      className='group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-10 min-h-[320px] cursor-pointer overflow-hidden'
      onMouseMove={shouldAnimate ? handleMouseMove : undefined}
      {...animationProps}>
      {/* Gradient overlay - only show if animations are enabled */}
      {shouldAnimate && (
        <motion.div
          className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
          style={{ background }}
          transition={{ duration: 0.3 }}
        />
      )}
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Card content */}
      <div className='relative z-10 flex flex-col h-full text-center'>
        {/* Title */}
        <h3 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
          {t(service.titleKey)}
        </h3>
        {/* Description */}
        <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow'>
          {t(service.descriptionKey)}
        </p>
        {/* Illustration with eco-optimized loading */}
        <div className='flex items-center justify-center mt-auto'>
          <div
            className={`relative w-48 h-48 md:w-64 md:h-64 ${
              shouldAnimate ? 'group-hover:scale-105' : ''
            } transition-transform duration-300`}>
            <Image
              src={service.illustration}
              alt={t(service.titleKey)}
              fill
              className='object-contain filter dark:brightness-90'
              sizes='(max-width: 768px) 192px, 256px'
              quality={getOptimalImageQuality(85)}
              priority={false}
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
