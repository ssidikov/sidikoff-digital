'use client'

import React, { useRef, MouseEvent as ReactMouseEvent } from 'react'
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion'
import {
  Check,
  Star,
  Crown,
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useTariff } from '@/context/TariffContext'

// PricingTierCard component to avoid hooks in map
interface PricingTierCardProps {
  tier: {
    name: string
    price: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    features: string[]
    cta: string
    highlighted?: boolean
  }
  index: number
  t: (key: string) => string
  handleTariffSelect: (name: string) => void
}

function PricingTierCard({ tier, index, t, handleTariffSelect }: PricingTierCardProps) {
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

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } },
      }}
      className={`relative group rounded-3xl p-8 transition-all duration-300 overflow-visible flex flex-col h-full ${
        isPopular
          ? 'border-2 border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20'
          : 'border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80'
      } backdrop-blur-sm overflow-hidden`}
      onMouseMove={handleMouseMove}>
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Popular badge */}
      {isPopular && (
        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
          <div className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium'>
            {t('prices.popular')}
          </div>
        </div>
      )}

      <div className='relative z-10 flex flex-col h-full'>
        {/* Icon and title */}
        <div className='flex items-center gap-3 mb-6 min-h-28'>
          <div
            className={`p-3 rounded-2xl ${
              isPopular
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}>
            <Icon className='w-6 h-6' />
          </div>
          <div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{tier.name}</h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>{tier.description}</p>
          </div>
        </div>

        {/* Price */}
        <div className='mb-8'>
          <div className='flex items-baseline gap-2'>
            <span className='text-4xl font-bold text-gray-900 dark:text-white'>{tier.price}</span>
          </div>
        </div>

        {/* Features */}
        <ul className='space-y-4 mb-8 flex-grow'>
          {tier.features.map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
              <span className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          onClick={() => handleTariffSelect(tier.name)}
          className={`w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
            isPopular
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          {tier.cta}
          <ArrowRight className='w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Prices() {
  const { t } = useLanguage()
  const { setSelectedTariff } = useTariff()
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
            <TrendingUp className='w-4 h-4 text-indigo-600 dark:text-indigo-100' />
            <span className='text-base font-medium text-indigo-600 dark:text-indigo-100 '>
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
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch'>
          {pricingTiers.map((tier, index) => (
            <PricingTierCard
              key={index}
              tier={tier}
              index={index}
              t={t}
              handleTariffSelect={handleTariffSelect}
            />
          ))}
        </motion.div>

        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8 }}
          className='mt-16 lg:mt-20 text-center'>
          <CustomQuoteSection t={t} handleTariffSelect={handleTariffSelect} />
        </motion.div>
      </div>
    </section>
  )
}

// CustomQuoteSection component to avoid hooks in IIFE
function CustomQuoteSection({
  t,
  handleTariffSelect,
}: {
  t: (key: string) => string
  handleTariffSelect: (name: string) => void
}) {
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
    radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)
  `

  return (
    <motion.div
      className='group relative max-w-2xl mx-auto rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 cursor-pointer overflow-hidden'
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10'>
        <div className='flex items-center justify-center gap-4 mb-6'>
          <div className='p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500'>
            <Users className='w-6 h-6 text-white' />
          </div>
          <div className='text-left'>
            <h3 className='text-h5 font-heading text-text-primary'>{t('prices.maintenanceSupport.title')}</h3>
            <p className='text-body-sm text-text-secondary'>{t('prices.maintenanceSupport.billing')}</p>
          </div>
        </div>
        <div className='mb-8'>
          <ul className='space-y-2'>
            <li className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-indigo-600 dark:text-primary mt-1' />
              <span className='text-body-sm text-text-primary'>{t('prices.maintenanceSupport.1')}</span>
            </li>
            <li className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-indigo-600 dark:text-primary mt-1' />
              <span className='text-body-sm text-text-primary'>{t('prices.maintenanceSupport.2')}</span>
            </li>
            <li className='flex items-start gap-3'>
              <Check className='w-5 h-5 text-indigo-600 dark:text-primary mt-1' />
              <span className='text-body-sm text-text-primary'>{t('prices.maintenanceSupport.3')}</span>
            </li>
          </ul>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => handleTariffSelect(t('prices.maintenanceSupport.title'))}
          className='group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-button-lg transition-all duration-500 hover:shadow-xl overflow-hidden'
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
    </motion.div>
  )
}
