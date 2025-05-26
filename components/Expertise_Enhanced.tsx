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
    { value: '50+', label: 'Projets réalisés' },
    { value: '98%', label: 'Satisfaction client' },
    { value: '24/7', label: 'Support technique' },
  ]

  return (
    <section className='relative py-20 lg:py-32 overflow-hidden' ref={ref}>
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
          </motion.p>

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
      scale: 1.15,
      rotate: 10,
      y: -4,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const shimmerVariants = {
    rest: { x: '-100%' },
    hover: {
      x: '100%',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }

  const connectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      className='group relative flex flex-col h-full z-10'
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onHoverStart={() => {
        setIsHovered(true)
        onHover(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        onHover(false)
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      }}
      animate={isConnected ? 'visible' : 'hidden'}
      variants={connectionVariants}>
      {/* Enhanced Card Background */}
      <div className='relative h-full rounded-3xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500'>
        {/* Enhanced Hover Background Effect */}
        <motion.div
          className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100'
          style={{ background }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Enhanced Shimmer Effect */}
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100'
            variants={shimmerVariants}
            initial='rest'
            animate={isHovered ? 'hover' : 'rest'}
          />
        </div>

        {/* Floating particles effect */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60'
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={
                isHovered
                  ? {
                      y: [-20, -40, -20],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Card Content */}
        <div className='relative z-10 p-8 lg:p-10 h-full flex flex-col'>
          {/* Enhanced Icon Container */}
          <motion.div
            className='relative mb-8'
            variants={iconVariants}
            initial='rest'
            animate={isHovered ? 'hover' : 'rest'}>
            <div className='relative'>
              {/* Enhanced Icon Background Glow */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500'
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }
                    : {}
                }
                transition={{
                  duration: 3,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear',
                }}
              />

              {/* Enhanced Icon Background */}
              <motion.div
                className='relative w-20 h-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40 rounded-2xl flex items-center justify-center border-2 border-indigo-100 dark:border-indigo-800 group-hover:border-indigo-300 dark:group-hover:border-indigo-600 transition-colors duration-500'
                whileHover={{
                  borderColor: ['#6366f1', '#8b5cf6', '#ec4899', '#6366f1'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}>
                <Image
                  src={item.icon}
                  alt={t(item.titleKey)}
                  priority
                  sizes='(max-width: 768px) 40px, 40px'
                  width={40}
                  height={40}
                  className='object-contain w-10 h-10 dark:invert group-hover:scale-110 transition-transform duration-500'
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h4
            className='font-bold text-xl lg:text-2xl text-gray-900 dark:text-white mb-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-500 leading-tight'
            initial={{ opacity: 0.8 }}
            whileHover={{
              opacity: 1,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}>
            {t(item.titleKey)}
          </motion.h4>

          {/* Enhanced Description */}
          <motion.p
            className='text-gray-600 dark:text-gray-300 leading-relaxed flex-grow text-base lg:text-lg font-light'
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}>
            {t(item.descriptionKey)}
          </motion.p>

          {/* Enhanced Learn More Link */}
          <motion.div
            className='mt-8 flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-base opacity-0 group-hover:opacity-100 transition-all duration-500'
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            animate={isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}>
            <span>{t('expertise.learnMore') || 'En savoir plus'}</span>
            <motion.div
              animate={
                isHovered
                  ? {
                      x: [0, 5, 0],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: 'easeInOut',
              }}>
              <ChevronRightIcon className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Border Gradient */}
        <motion.div
          className='absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
          style={{ padding: '2px' }}
          animate={
            isHovered
              ? {
                  background: [
                    'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
                    'linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(99, 102, 241, 0.3))',
                    'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
                    'linear-gradient(45deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))',
                  ],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: isHovered ? Infinity : 0,
            ease: 'linear',
          }}>
          <div className='h-full w-full rounded-3xl bg-white dark:bg-gray-800' />
        </motion.div>
      </div>

      {/* Enhanced Card Shadow */}
      <motion.div
        className='absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10'
        animate={
          isHovered
            ? {
                scale: [1, 1.1, 1],
                opacity: [0, 0.3, 0.1],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
