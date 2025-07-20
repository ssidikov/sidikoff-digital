'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Rocket } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
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
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pb-0'>
      {/* Background Elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0' />
        <div className='absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl' />
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8 sm:py-12 lg:py-0'>
        {/* Left Column - Content */}
        <div className='space-y-6 sm:space-y-8 text-center lg:text-left'>
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800'>
            <Sparkles className='w-4 h-4' />
            {t('hero.badge') || 'Agence Web Premium'}
          </motion.div>

          {/* Main Title - SEO Optimized H1 */}
          <motion.h1
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
            style={{
              fontSize: 'clamp(1.875rem, 8vw, 4.5rem)',
              lineHeight: '1.1',
            }}>
            <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent'>
              {t('hero.title.part1') || 'Création de Sites Web'}
            </span>
            <br />
            <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
              {t('hero.title.part2') || 'Performants & SEO'}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            className='text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
            {t('hero.description') || 
            'Agence web parisienne spécialisée en développement Next.js, React et optimisation SEO. Transformez votre vision en réalité digitale performante.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className='group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-base sm:text-lg'>
              <Rocket className='w-5 h-5 mr-2 group-hover:animate-pulse' />
              {t('hero.cta.primary') || 'Démarrer mon projet'}
            </button>
            
            <button
              onClick={(e) => handleNavClick(e, 'services')}
              className='inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 text-base sm:text-lg'>
              {t('hero.cta.secondary') || 'Nos services'}
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            initial='hidden'
            animate='visible'
            className='flex items-center justify-center lg:justify-start gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
              <span>{t('hero.trust.available') || 'Disponible'}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span>⚡</span>
              <span>{t('hero.trust.fast') || 'Livraison rapide'}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span>🏆</span>
              <span>{t('hero.trust.quality') || 'Qualité premium'}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Visual */}
        <div className='relative flex items-center justify-center lg:justify-end'>
          <motion.div
            variants={logoVariants}
            initial='hidden'
            animate='visible'
            className='relative'>
            {/* Profile Image with optimized loading */}
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
              <Image
                src='/founder.webp'
                alt='Sardorbek SIDIKOV - Fondateur SIDIKOFF DIGITAL'
                fill
                priority
                sizes='(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px'
                className='rounded-full object-cover shadow-2xl'
                style={{
                  objectPosition: 'center',
                }}
              />
              
              {/* Decorative ring */}
              <div className='absolute inset-0 rounded-full border-4 border-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20'></div>
              
              {/* Floating elements */}
              <motion.div
                className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg'
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg'
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}>
        <button
          onClick={(e) => handleNavClick(e, 'about')}
          className='flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group'
          aria-label='Scroll to about section'>
          <span className='text-sm font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
            {t('hero.scroll') || 'Découvrir'}
          </span>
          <ChevronDown className='w-5 h-5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors' />
        </button>
      </motion.div>
    </section>
  )
}
