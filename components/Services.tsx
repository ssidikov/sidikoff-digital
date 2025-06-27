'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { Eye, MessageCircle } from 'lucide-react'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      emoji: '🌐',
      titleKey: 'services.creation.title',
      descriptionKey: 'services.creation.description',
    },
    {
      emoji: '🎨',
      titleKey: 'services.redesign.title',
      descriptionKey: 'services.redesign.description',
    },
    {
      emoji: '🔍',
      titleKey: 'services.seo.title',
      descriptionKey: 'services.seo.description',
    },
    {
      emoji: '🛠️',
      titleKey: 'services.maintenance.title',
      descriptionKey: 'services.maintenance.description',
    },
  ]

  return (
    <section id='services' className='md:py-20 bg-background'>
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
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <ServiceCard service={service} t={t} />
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='relative flex items-center gap-2'>
                  <MessageCircle className='w-5 h-5' />
                  <span>{t('services.cta.quote')}</span>
                </div>
              </motion.a>
              
              <motion.a
                href='#prices'
                className='group px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 flex items-center justify-center gap-2'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
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
}: {
  service: {
    emoji: string
    titleKey: string
    descriptionKey: string
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
      className='group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 min-h-[220px] cursor-pointer overflow-hidden'
      onMouseMove={handleMouseMove}
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
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Card content */}
      <div className='relative z-10 flex flex-col h-full'>
        {/* Icon container */}
        <div className='flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 mb-6 transition-transform duration-300'>
          <span className='text-3xl'>{service.emoji}</span>
        </div>
        {/* Title */}
        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>
          {t(service.titleKey)}
        </h3>
        {/* Description */}
        <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow'>
          {t(service.descriptionKey)}
        </p>
      </div>
    </motion.div>
  )
}
