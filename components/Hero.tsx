'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Rocket } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollToSection } = useSmoothScroll()

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
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
      },
    },
  }
  return (
    <motion.section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-0 lg:pb-0'
      initial='hidden'
      animate='visible'
      variants={containerVariants}>
      {/* Background Elements */}
      <div className='absolute inset-0 -z-10'>
        {/* Simplified Gradient Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20' />
        {/* Simple decorative elements */}
        <div className='absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl' />
      </div>
      {/* Main Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8 sm:py-12 lg:py-0'>
        {/* Left Column - Content */}
        <motion.div
          className='space-y-6 sm:space-y-8 text-center lg:text-left'
          variants={itemVariants}>
          {/* Badge */}
          <motion.div
            className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800'
            whileTap={{ scale: 0.95 }}>
            <Sparkles className='w-4 h-4' />
            {t('hero.badge') || 'Agence Web Premium'}
          </motion.div>
          {/* Main Title */}
          <motion.h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
            variants={itemVariants}>
            <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
              {t('hero.title1')}
            </span>
            <br />
            <span className='text-gray-900 dark:text-white'>{t('hero.title2')}</span>
          </motion.h1>
          {/* Description */}
          <motion.div
            className='space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0'
            variants={itemVariants}>
            <p className='text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed px-2 sm:px-0'>
              {t('hero.description')}
            </p>
            <p className='text-sm sm:text-base md:text-lg text-indigo-600 dark:text-indigo-400 font-medium px-2 sm:px-0'>
              {t('hero.slogan')}
            </p>
          </motion.div>
          {/* Mobile Logo */}
          <motion.div
            className='lg:hidden relative flex items-center justify-center py-4 sm:py-6'
            variants={logoVariants}>
            <div className='relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto'>
              <div className='absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full blur-2xl opacity-20' />
              <Image
                src='/logo-sidikoff.svg'
                alt='SIDIKOFF DIGITAL - Agence Web'
                width={256}
                height={256}
                className='object-contain w-full h-full transition-all duration-500 dark:invert relative z-10'
                priority
              />
            </div>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center px-4 sm:px-0'
            variants={itemVariants}>
            <motion.a
              href='/#contact-form'
              className='group relative overflow-hidden w-full sm:w-auto'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              <div className='relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]'>
                <Rocket className='w-5 h-5' />
                {t('hero.contact')}
              </div>
            </motion.a>
            <motion.a
              href='/#portfolio'
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className='group w-full sm:w-auto'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              <div className='px-6 sm:px-8 py-3 sm:py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl font-semibold text-base sm:text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]'>
                {t('hero.viewWork')}
                <span className='group-hover:translate-x-1 transition-transform duration-200'>
                  →
                </span>
              </div>
            </motion.a>
          </motion.div>
          {/* Stats or Features */}
          <motion.div
            className='grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700 mx-4 sm:mx-0'
            variants={itemVariants}>
            {[
              { number: '50+', label: t('hero.stat1') || 'Projets' },
              { number: '100%', label: t('hero.stat2') || 'Satisfaction' },
              { number: '24/7', label: t('hero.stat3') || 'Support' },
            ].map((stat, index) => (
              <motion.div key={index} className='text-center'>
                <div className='text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400'>
                  {stat.number}
                </div>
                <div className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Right Column - Logo/Visual */}
        <motion.div
          className='hidden lg:flex items-center justify-center relative'
          variants={logoVariants}>
          <div className='relative w-full max-w-lg aspect-square'>
            {/* Simplified glowing background */}
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 rounded-full blur-3xl opacity-20' />
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
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>
        <motion.button
          onClick={() => scrollToSection('services')}
          className='flex flex-col items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 sm:p-3 rounded-full'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <span className='text-xs sm:text-sm font-medium hidden sm:block'>
            {t('hero.scroll') || 'Découvrir'}
          </span>
          <ChevronDown className='w-4 h-4 sm:w-5 sm:h-5' />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
