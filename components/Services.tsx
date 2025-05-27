'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'
import { EyeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function Services() {
  const { t } = useLanguage()
  const services = [
    {
      emoji: '🌐',
      titleKey: 'services.showcase.title',
      descriptionKey: 'services.showcase.description',
      features: [
        'Design responsive',
        'Optimisation SEO',
        'Formulaire de contact',
        'Hébergement inclus',
      ],
    },
    {
      emoji: '🛒',
      titleKey: 'services.ecommerce.title',
      descriptionKey: 'services.ecommerce.description',
      features: [
        'Gestion des commandes',
        'Paiement sécurisé',
        'Gestion des stocks',
        'Analytics avancées',
      ],
    },
    {
      emoji: '⚡',
      titleKey: 'services.webapp.title',
      descriptionKey: 'services.webapp.description',
      features: [
        'Développement sur mesure',
        'Interface intuitive',
        'Base de données',
        'API & intégrations',
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
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Card content */}
      <div className='relative z-10 flex flex-col h-full'>
        {/* Icon container */}
        <div className='flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 mb-6 group-hover:scale-105 transition-transform duration-300'>
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
        {/* Features list */}
        <div className='space-y-3'>
          <h4 className='text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide'>
            Fonctionnalités
          </h4>
          <ul className='space-y-2'>
            {service.features.map((feature, index) => (
              <li key={index} className='flex items-start text-sm text-gray-600 dark:text-gray-300'>
                <span className='flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 mr-3' />
                <span className='leading-relaxed'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>{' '}
        {/* CTA Buttons */}
        <div className='mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3'>
          {/* Primary CTA - Découvrir */}
          <motion.a
            href='#prices'
            className='group relative w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl overflow-hidden'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            {/* Animated background effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            <div className='relative flex items-center gap-2'>
              <EyeIcon className='w-4 h-4 group-hover:scale-110 transition-transform duration-200' />
              <span>Découvrir les tarifs</span>
              <motion.svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                animate={{ x: [0, 2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </motion.svg>
            </div>
          </motion.a>

          {/* Secondary CTA - Demander un devis */}
          <motion.a
            href='#contact'
            className='group w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold backdrop-blur-sm'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <ChatBubbleLeftRightIcon className='w-4 h-4 group-hover:scale-110 transition-transform duration-200' />
            <span>Demander un devis</span>
            <motion.div
              className='w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
