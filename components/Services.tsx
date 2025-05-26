'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      emoji: '🌐',
      titleKey: 'services.showcase.title',
      descriptionKey: 'services.showcase.description',
      features: [
        'services.showcase.feature1',
        'services.showcase.feature2',
        'services.showcase.feature3',
        'services.showcase.feature4',
      ],
    },
    {
      emoji: '🛒',
      titleKey: 'services.ecommerce.title',
      descriptionKey: 'services.ecommerce.description',
      features: [
        'services.ecommerce.feature1',
        'services.ecommerce.feature2',
        'services.ecommerce.feature3',
        'services.ecommerce.feature4',
      ],
    },
    {
      emoji: '⚡',
      titleKey: 'services.webapp.title',
      descriptionKey: 'services.webapp.description',
      features: [
        'services.webapp.feature1',
        'services.webapp.feature2',
        'services.webapp.feature3',
        'services.webapp.feature4',
      ],
    },
  ]

  return (
    <section id='services' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <AnimatedSection>
          <div className='max-w-4xl mx-auto text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t('services.title')}</h2>
            <p className='text-xl text-muted-foreground'>{t('services.subtitle')}</p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <ServiceCard service={service} t={t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  t,
}: {
  service: {
    emoji: string
    titleKey: string
    descriptionKey: string
    features: string[]
  }
  t: (key: string) => string
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`

  return (
    <motion.div
      className='group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 min-h-[320px] cursor-pointer overflow-hidden'
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Subtle border glow */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Card content */}
      <div className='relative z-10 flex flex-col h-full'>
        {/* Icon container with improved styling */}
        <motion.div
          className='flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 mb-6 group-hover:scale-110 transition-transform duration-300'
          whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}>
          <span className='text-3xl filter drop-shadow-sm'>{service.emoji}</span>
        </motion.div>
        {/* Title with better typography */}
        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
          {t(service.titleKey)}
        </h3>
        {/* Description with improved spacing */}
        <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow'>
          {t(service.descriptionKey)}
        </p>
        {/* Features list with enhanced styling */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide'>
            {t('services.features')}
          </h4>
          <ul className='space-y-2'>
            {service.features.map((featureKey, index) => (
              <motion.li
                key={index}
                className='flex items-start text-sm text-gray-600 dark:text-gray-300'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}>
                <motion.span
                  className='flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 mr-3'
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                />
                <span className='leading-relaxed'>{t(featureKey)}</span>
              </motion.li>
            ))}
          </ul>
        </div>{' '}
        {/* Call to action hint */}
        <div className='mt-6 pt-4 border-t border-gray-100 dark:border-gray-800'>
          <div className='flex items-center text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span className='mr-2'>{t('services.learnMore')}</span>
            <motion.svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
