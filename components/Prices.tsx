'use client'

import React, { useState, useRef, MouseEvent as ReactMouseEvent } from 'react'
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion'
import {
  Check,
  Star,
  Crown,
  Zap,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Users,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useTariff } from '@/context/TariffContext'

export default function Prices() {
  const { t } = useLanguage()
  const { setSelectedTariff } = useTariff()
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const handleTariffSelect = (tariffName: string) => {
    setSelectedTariff(tariffName)
    setTimeout(() => {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  const pricingTiers = [
    {
      name: t('prices.tier1.name'),
      price: t('prices.tier1.price'),
      description: t('prices.tier1.audience'),
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      includesTitle: t('prices.tier1.includes.title'),
      features: [
        t('prices.tier1.includes.1'),
        t('prices.tier1.includes.2'),
        t('prices.tier1.includes.3'),
        t('prices.tier1.includes.4'),
        t('prices.tier1.includes.5'),
      ],
      cta: t('prices.tier1.cta'),
      badge: null,
    },
    {
      name: t('prices.tier2.name'),
      price: t('prices.tier2.price'),
      description: t('prices.tier2.audience'),
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      includesTitle: t('prices.tier2.includes.title'),
      features: [
        t('prices.tier2.includes.1'),
        t('prices.tier2.includes.2'),
        t('prices.tier2.includes.3'),
        t('prices.tier2.includes.4'),
        t('prices.tier2.includes.5'),
      ],
      cta: t('prices.tier2.cta'),
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: t('prices.tier3.name'),
      price: t('prices.tier3.price'),
      description: t('prices.tier3.audience'),
      icon: Star,
      color: 'from-orange-500 to-red-500',
      includesTitle: t('prices.tier3.includes.title'),
      features: [
        t('prices.tier3.includes.1'),
        t('prices.tier3.includes.2'),
        t('prices.tier3.includes.3'),
        t('prices.tier3.includes.4'),
        t('prices.tier3.includes.5'),
      ],
      cta: t('prices.tier3.cta'),
      badge: 'Enterprise',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id='prices'
      className='py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-background dark:via-background/95 dark:to-primary/5 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]' />
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/20 dark:bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-secondary/5 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative'>
        {/* Header Section */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='text-center mb-16'>
          <motion.div
            variants={cardVariants}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-primary/10 border border-indigo-200 dark:border-primary/20 mb-6 backdrop-blur-sm'>
            <TrendingUp className='w-4 h-4 text-indigo-600 dark:text-primary animate-pulse' />
            <span className='text-sm font-medium text-indigo-600 dark:text-primary'>
              {t('prices.title')}
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'>
            {t('prices.subtitle')}
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className='text-lg md:text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed'>
            {t('prices.description')}
          </motion.p>
        </motion.div>{' '}
        {/* Pricing Cards Grid */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto'>
          {' '}
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            const isPopular = tier.highlighted
            const mouseX = useMotionValue(0)
            const mouseY = useMotionValue(0)

            const handleMouseMove = ({
              currentTarget,
              clientX,
              clientY,
            }: ReactMouseEvent<HTMLDivElement>) => {
              const { left, top } = currentTarget.getBoundingClientRect()
              mouseX.set(clientX - left)
              mouseY.set(clientY - top)
            }

            const background = useMotionTemplate`
              radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 80%)
            `

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className='group relative cursor-pointer h-full rounded-3xl'
                onMouseEnter={() => setHoveredTier(index)}
                onMouseLeave={() => setHoveredTier(null)}
                onMouseMove={handleMouseMove}
                style={{ background }}
                whileTap={{ scale: 0.98 }}>
                <div className='relative rounded-3xl transition-all duration-500 h-full bg-card/90 backdrop-blur-sm border shadow-lg flex flex-col min-h-[540px]'>
                  {/* Gradient overlay */}
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 rounded-3xl'
                    style={{ background }}
                  />

                  {/* Border glow effect */}
                  <motion.div
                    className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                    style={{
                      background: useMotionTemplate`
                        radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 70%)
                      `,
                    }}
                  />

                  {/* Popular badge */}
                  {isPopular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-20'>
                      <div className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2'>
                        <Crown className='w-4 h-4' />
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  {/* Card content */}
                  <div className='relative z-10 p-6 lg:p-8 h-full flex flex-col flex-1'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-transparent`}>
                        <div className='w-full h-full flex items-center justify-center'>
                          <Icon className='w-8 h-8 text-indigo-600 dark:text-primary' />
                        </div>
                      </div>
                      {/* Name */}
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-foreground mb-2'>
                        {tier.name}
                      </h3>{' '}
                      {/* Price */}
                      <div className='mb-4'>
                        <span className='text-4xl font-bold text-indigo-600 dark:text-primary'>
                          {tier.price}
                        </span>
                      </div>
                      {/* Description */}
                      <p className='text-gray-600 dark:text-muted-foreground leading-relaxed md:min-h-28'>
                        {tier.description}
                      </p>
                    </div>{' '}
                    {/* Features */}
                    <div className='flex-grow mb-8 flex flex-col'>
                      <ul className='space-y-4 min-h-[220px]'>
                        {tier.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className='flex items-start gap-3'
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              hoveredTier === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                            }
                            transition={{ delay: featureIndex * 0.1 }}>
                            <div className='flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mt-0.5'>
                              <Check className='w-3.5 h-3.5 text-white' />
                            </div>
                            <span className='text-gray-700 dark:text-foreground text-sm leading-relaxed'>
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>{' '}
                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleTariffSelect(tier.name)}
                      className={`group relative w-full px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 overflow-hidden ${
                        isPopular
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40'
                          : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}>
                      {/* Background gradient overlay */}
                      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                      {/* Button content */}
                      <span className='relative z-10 flex items-center justify-center gap-3'>
                        <span className='transition-all duration-300 group-hover:tracking-wide'>
                          {tier.cta}
                        </span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                          <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
                        </motion.div>
                      </span>{' '}
                      {/* Shine effect */}
                      <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12' />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8 }}
          className='mt-16 lg:mt-20 text-center'>
          <div className='group relative max-w-2xl mx-auto p-8 bg-white dark:bg-card/80 backdrop-blur-sm border border-gray-200 dark:border-border/50 rounded-3xl hover:border-indigo-300 dark:hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-primary/5 transition-all duration-500'>
            {/* Animated border glow */}
            <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />

            <div className='relative z-10'>
              <div className='flex items-center justify-center gap-4 mb-6'>
                <div className='p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500'>
                  <Users className='w-6 h-6 text-white' />
                </div>
                <div className='text-left'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    {t('prices.custom')}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-muted-foreground'>
                    {t('prices.customDescription')}
                  </p>
                </div>
              </div>
              <div className='grid md:grid-cols-3 gap-4 mb-8'>
                <div className='flex items-center gap-3'>
                  <Shield className='w-5 h-5 text-indigo-600 dark:text-primary' />
                  <span className='text-sm text-gray-700 dark:text-foreground'>
                    {t('prices.features.enterpriseSecurity')}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <Clock className='w-5 h-5 text-indigo-600 dark:text-primary' />
                  <span className='text-sm text-gray-700 dark:text-foreground'>
                    {t('prices.features.prioritySupport')}
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <Sparkles className='w-5 h-5 text-indigo-600 dark:text-primary' />
                  <span className='text-sm text-gray-700 dark:text-foreground'>
                    {t('prices.features.customFeatures')}
                  </span>
                </div>
              </div>{' '}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => handleTariffSelect('')}
                className='group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:shadow-xl overflow-hidden'
                whileTap={{ scale: 0.98 }}>
                {/* Background gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                {/* Button content */}
                <span className='relative z-10 flex items-center justify-center gap-3'>
                  <span className='transition-all duration-300'>{t('prices.quote')}</span>
                  <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
                </span>
                {/* Shine effect */}
                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12' />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
