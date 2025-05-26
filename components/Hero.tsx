'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDownIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
      },
    },
  }
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <motion.section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
      initial='hidden'
      animate='visible'
      variants={containerVariants}>
      {' '}
      {/* Background Elements */}
      <div className='absolute'>
        {/* Gradient Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20' />

        {/* Animated Particles */}
        <div className='absolute inset-0'>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-indigo-400/20 rounded-full'
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]' />
      </div>{' '}
      {/* Main Content */}
      <div className='container mx-auto  px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10'>
        {/* Left Column - Content */}
        <motion.div className='space-y-8 text-center lg:text-left' variants={itemVariants}>
          {/* Badge */}
          <motion.div
            className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800'
            whileTap={{ scale: 0.95 }}>
            <SparklesIcon className='w-4 h-4' />
            {t('hero.badge') || 'Agence Web Premium'}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
            variants={itemVariants}>
            <motion.span
              className='bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'
              style={{
                transform: `translateX(${mousePosition.x * 0.5}px) translateY(${
                  mousePosition.y * 0.3
                }px)`,
              }}>
              {t('hero.title1')}
            </motion.span>
            <motion.span
              className='text-gray-900 dark:text-white'
              style={{
                transform: `translateX(${mousePosition.x * -0.3}px) translateY(${
                  mousePosition.y * 0.2
                }px)`,
              }}>
              {t('hero.title2')}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.div className='space-y-4 max-w-2xl mx-auto lg:mx-0' variants={itemVariants}>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
              {t('hero.description')}
            </p>
            <p className='text-base sm:text-lg text-indigo-600 dark:text-indigo-400 font-medium'>
              {t('hero.slogan')}
            </p>
          </motion.div>

          {/* Mobile Logo */}
          <motion.div
            className='lg:hidden relative flex items-center justify-center py-8'
            variants={logoVariants}>
            <motion.div
              className='relative w-64 h-64 mx-auto'
              variants={floatingVariants}
              animate='animate'
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                transform: `translateX(${mousePosition.x * 0.5}px) translateY(${
                  mousePosition.y * 0.5
                }px)`,
              }}>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse' />
              <Image
                src='/logo-sidikoff.svg'
                alt='SIDIKOFF DIGITAL - Agence Web'
                width={256}
                height={256}
                className='object-contain w-full h-full transition-all duration-500 dark:invert relative z-10'
                priority
              />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center'
            variants={itemVariants}>
            <motion.a
              href='/#contact'
              onClick={(e) => handleNavClick(e, 'contact')}
              className='group relative overflow-hidden'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl' />
              <div className='relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2'>
                <RocketLaunchIcon className='w-5 h-5' />
                {t('hero.contact')}
                <motion.div
                  className='absolute inset-0 bg-white/20 rounded-xl'
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>

            <motion.a
              href='/#portfolio'
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className='group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <div className='px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl font-semibold text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 flex items-center gap-2'>
                {t('hero.viewWork')}
                <motion.span animate={{ x: [0, 4, 0] }}>→</motion.span>
              </div>
            </motion.a>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            className='grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700'
            variants={itemVariants}>
            {[
              { number: '50+', label: t('hero.stat1') || 'Projets' },
              { number: '100%', label: t('hero.stat2') || 'Satisfaction' },
              { number: '24/7', label: t('hero.stat3') || 'Support' },
            ].map((stat, index) => (
              <motion.div key={index} className='text-center'>
                <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>
                  {stat.number}
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-400'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Logo/Visual */}
        <motion.div
          className='hidden lg:flex items-center justify-center relative'
          variants={logoVariants}>
          <motion.div
            className='relative w-full max-w-lg aspect-square'
            variants={floatingVariants}
            animate='animate'
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            }}>
            {/* Glowing background */}
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse' />
            {/* Logo */}
            <div className='relative z-10 w-full h-full flex items-center justify-center'>
              <Image
                src='/logo-sidikoff.svg'
                alt='SIDIKOFF DIGITAL - Votre Agence Web de Confiance'
                width={480}
                height={480}
                className='object-contain w-full h-full transition-all duration-500 dark:invert'
                priority
              />
            </div>
            {/* Floating Elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-8 h-8 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-60'
                style={{
                  top: `${20 + i * 25}%`,
                  right: `${10 + i * 15}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.7,
                }}
              />
            ))}{' '}
          </motion.div>{' '}
        </motion.div>
      </div>{' '}
      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <motion.button
          onClick={() => scrollToSection('expertise')}
          className='flex flex-col items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 sm:p-3 rounded-full'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <span className='text-xs sm:text-sm font-medium hidden sm:block'>
            {t('hero.scroll') || 'Découvrir'}
          </span>
          <ChevronDownIcon className='w-4 h-4 sm:w-5 sm:h-5' />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
