'use client'

import React, { MouseEvent as ReactMouseEvent, useState, useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { expertiseItems } from '@/data/portfolio-data'
import { useLanguage } from '@/context/LanguageContext'
import {
  ChevronRightIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'

export default function Expertise() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Enhanced scroll-based animations
  const scrollY = useMotionValue(0)
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }
  const statsData = [
    { value: '50+', label: t('expertise.stats.projects') },
    { value: '100%', label: t('expertise.stats.satisfaction') },
    { value: '24/7', label: t('expertise.stats.support') },
  ]
  return (
    <section id="expertise" className='relative py-20 lg:py-32 overflow-hidden' ref={ref}>
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/10' />

        {/* Enhanced decorative elements with motion */}
        <motion.div
          className='absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl'
          style={{ y: y1 }}
        />
        <motion.div
          className='absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl'
          style={{ y: y2 }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated grid pattern */}
        <motion.div
          className='absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]'
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className='absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded rotate-45'
          variants={floatingVariants}
          animate='animate'
        />
        <motion.div
          className='absolute bottom-32 right-20 w-6 h-6 border-2 border-cyan-400 rounded-full'
          variants={floatingVariants}
          animate='animate'
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className='absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full'
          variants={floatingVariants}
          animate='animate'
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-16 lg:mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          {/* Enhanced Badge with glow effect */}
          <motion.div
            className='inline-flex items-center gap-2 px-6 py-3 mb-8 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800 shadow-lg'
            variants={headerVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
              transition: { duration: 0.3 },
            }}>
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}>
              <SparklesIcon className='w-5 h-5' />
            </motion.div>
            {t('expertise.title')}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}>
              <LightBulbIcon className='w-4 h-4' />
            </motion.div>
          </motion.div>
          {/* Enhanced Main Title with gradient text */}
          <motion.h2
            className='text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'
            variants={headerVariants}>
            {t('expertise.subtitle')}
          </motion.h2>
          {/* Enhanced Description with better typography */}
          <motion.p
            className='text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-light'
            variants={headerVariants}>
            {t('expertise.description') ||
              'Nous maîtrisons les technologies les plus avancées pour créer des expériences digitales exceptionnelles qui font grandir votre entreprise.'}
          </motion.p>{' '}
          {/* New stats section */}
          <motion.div className='flex justify-center gap-8 mb-8' variants={headerVariants}>
            {statsData.map((stat, index) => (
              <motion.div key={index} className='text-center' whileHover={{ scale: 1.1 }}>
                <motion.div
                  className='text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400'
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: 'easeInOut',
                  }}>
                  {stat.value}
                </motion.div>
                <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Cards Grid with hover interconnection */}
        <motion.div
          className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          {/* Connection lines between cards */}
          <svg
            className='absolute inset-0 w-full h-full pointer-events-none z-0'
            style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id='connectionGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='rgba(99, 102, 241, 0.2)' />
                <stop offset='100%' stopColor='rgba(139, 92, 246, 0.2)' />
              </linearGradient>
            </defs>
            {hoveredCard !== null && (
              <motion.line
                x1='25%'
                y1='25%'
                x2='75%'
                y2='75%'
                stroke='url(#connectionGradient)'
                strokeWidth='2'
                strokeDasharray='5,5'
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </svg>

          {expertiseItems.map((item, index) => (
            <Card
              key={index}
              item={item}
              t={t}
              index={index}
              isConnected={hoveredCard !== null && hoveredCard !== index}
              onHover={(isHovered) => setHoveredCard(isHovered ? index : null)}
            />
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA with more visual appeal */}
        <motion.div
          className='text-center mt-20 lg:mt-24'
          variants={headerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.div
            className='inline-block p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl'
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
            }}>
            <motion.a
              href='/#contact'
              className='group flex items-center gap-3 px-10 py-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-transparent hover:text-white transition-all duration-500'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}>
              <RocketLaunchIcon className='w-6 h-6 group-hover:rotate-12 transition-transform duration-300' />
              {t('expertise.cta') || 'Démarrer votre projet'}
              <motion.div
                className='flex items-center'
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}>
                <ArrowTopRightOnSquareIcon className='w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* About/Mission Section */}
        <motion.div
          className='container mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-32'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>

          {/* Mission Section */}
          <motion.div className='max-w-4xl mx-auto text-center mb-16' variants={headerVariants}>
            <motion.h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              {t('about.mission.title')}
            </motion.h3>
            <motion.p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
              {t('about.mission.p1')}
            </motion.p>
            <motion.p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              {t('about.mission.p2')}
            </motion.p>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto' variants={containerVariants}>
            {/*
              { key: 'advantage1', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
              { key: 'advantage2', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
              { key: 'advantage3', icon: '🤝', color: 'from-green-500 to-emerald-500' },
            */}
            {['advantage1', 'advantage2', 'advantage3'].map((key, index) => (
              <motion.div
                key={key}
                className='text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300'
                variants={headerVariants}
                whileHover={{ y: -5, scale: 1.02 }}>
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${key === 'advantage1' ? 'from-blue-500 to-cyan-500' : key === 'advantage2' ? 'from-yellow-500 to-orange-500' : 'from-green-500 to-emerald-500'} text-white text-2xl mb-4`}
                  whileHover={{ rotate: 5 }}>
                  {key === 'advantage1' && '🎯'}
                  {key === 'advantage2' && '⚡'}
                  {key === 'advantage3' && '🤝'}
                </motion.div>
                <motion.h4 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                  {t(`about.whyChoose.${key}.title`)}
                </motion.h4>
                <motion.p className='text-gray-600 dark:text-gray-300'>
                  {t(`about.whyChoose.${key}.description`)}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className='text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50'
            variants={headerVariants}>
            <motion.h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              {t('about.location.title')}
            </motion.h3>
            <motion.p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
              {t('about.location.description')}
            </motion.p>
            <motion.div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href='#contact'
                className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <RocketLaunchIcon className='w-5 h-5 mr-2' />
                {t('about.location.cta1')}
              </motion.a>
              <motion.a
                href='#portfolio'
                className='inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <ArrowTopRightOnSquareIcon className='w-5 h-5 mr-2' />
                {t('about.location.cta2')}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Card({
  item,
  t,
  index,
  isConnected,
  onHover,
}: {
  item: { titleKey: string; descriptionKey: string; icon: string }
  t: (key: string) => string
  index: number
  isConnected: boolean
  onHover: (isHovered: boolean) => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(350px circle at ${springX}px ${springY}px, rgba(99, 102, 241, 0.15), transparent 70%)`

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1,
      },
    },
  }

  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      y: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      y: -2,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const shimmerVariants = {
    rest: { x: '-100%' },
    hover: {
      x: '100%',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className='group relative flex flex-col h-full'
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}>
      {/* Card Background */}
      <div className='relative h-full rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm overflow-hidden'>
        {/* Hover Background Effect */}
        <motion.div
          className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100'
          style={{ background }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Shimmer Effect */}
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12'
            variants={shimmerVariants}
            initial='rest'
            animate={isHovered ? 'hover' : 'rest'}
          />
        </div>

        {/* Card Content */}
        <div className='relative z-10 p-6 lg:p-8 h-full flex flex-col'>
          {/* Icon Container */}
          <motion.div
            className='relative mb-6'
            variants={iconVariants}
            initial='rest'
            animate={isHovered ? 'hover' : 'rest'}>
            <div className='relative'>
              {/* Icon Background Glow */}
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300' />

              {/* Icon Background */}
              <div className='relative w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center border border-indigo-100 dark:border-indigo-800 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 transition-colors duration-300'>
                <Image
                  src={item.icon}
                  alt={t(item.titleKey)}
                  priority
                  sizes='(max-width: 768px) 32px, 32px'
                  width={32}
                  height={32}
                  className='object-contain w-8 h-8 dark:invert group-hover:scale-110 transition-transform duration-300'
                />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h4
            className='font-bold text-xl text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}>
            {t(item.titleKey)}
          </motion.h4>

          {/* Description */}
          <motion.p
            className='text-gray-600 dark:text-gray-300 leading-relaxed flex-grow'
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}>
            {t(item.descriptionKey)}
          </motion.p>

          {/* Learn More Link */}
          <motion.div
            className='mt-6 flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300'
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}>
            <span>{t('expertise.learnMore') || 'En savoir plus'}</span>
            <ChevronRightIcon className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300' />
          </motion.div>
        </div>

        {/* Border Gradient */}
        <div
          className='absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
          style={{ padding: '1px' }}>
          <div className='h-full w-full rounded-2xl bg-white dark:bg-gray-800' />
        </div>
      </div>

      {/* Card Shadow */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10' />
    </motion.div>
  )
}
