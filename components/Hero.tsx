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
        {/* Simplified Gradient Background */}
        <div className='absolute inset-0' />
        {/* Simple decorative elements */}
        <div className='absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl' />
      </div>
      {/* Main Content */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8 sm:py-12 lg:py-0'>
        {/* Left Column - Content */}
        <div className='space-y-6 sm:space-y-8 text-center lg:text-left'>
          {/* Badge */}
          <motion.div
            className='inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800'
            whileTap={{ scale: 0.95 }}>
            <Sparkles className='w-4 h-4' />
            {t('hero.badge') || 'Agence Web Premium'}
          </motion.div>
          {/* Main Title - Critical LCP element */}
          <h1
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'
            style={{
              // Critical inline styles for faster LCP
              fontSize: 'clamp(1.875rem, 8vw, 4.5rem)',
              lineHeight: '1.1',
              fontWeight: '700',
              marginBottom: '1.5rem',
            }}>
            <span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
              {t('hero.title1')}
            </span>
            <span className='text-gray-900 dark:text-white'>{t('hero.title2')}</span>
          </h1>
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
            className='lg:hidden relative flex items-center justify-center p-0 m-0'
            variants={logoVariants}>
            <div className='relative w-48 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto'>
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

          {/* Compact Direct Contact Links */}
          <motion.div className='pt-6 sm:pt-8 mx-4 sm:mx-0' variants={itemVariants}>
            <div className='text-center lg:text-left mb-4 border-t border-gray-200 dark:border-gray-700 mx-4 sm:mx-0 pt-4 sm:pt-6'>
              <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>
                {t('hero.directContact')}
              </p>

              <div className='flex flex-wrap justify-center lg:justify-start gap-3'>
                <a
                  href='https://wa.me/33626932734?text=Bonjour%2C%20j%27ai%20une%20question%20concernant%20vos%20services%20web.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800/80 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 shadow-sm hover:shadow-md'>
                  <div className='w-8 h-8 flex items-center justify-center'>
                    <svg
                      viewBox='0 0 24 24'
                      className='w-5 h-5 fill-current text-green-600 dark:text-green-400'>
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.566' />
                    </svg>
                  </div>
                  <span className='text-sm font-medium text-gray-900 dark:text-white'>
                    WhatsApp
                  </span>
                </a>

                <a
                  href='https://t.me/sardorbek_sidikov'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800/80 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-sm hover:shadow-md'>
                  <div className='w-8 h-8 flex items-center justify-center'>
                    <svg
                      viewBox='0 0 24 24'
                      className='w-5 h-5 fill-current text-blue-600 dark:text-blue-400'>
                      <path d='m9.417 15.181-.397-.131-.964-2.946 7.966-4.729-.84 3.976-5.765 3.83Z' />
                      <path d='M20.693 3.831 2.529 11.342c-.49.199-.49.656-.49.656s.13.32.524.474l4.631 1.714 1.748 5.656c.173.547.527.547.527.547s.271.062.546-.235l2.053-2.053 4.274 3.156c.395.235.77.131.77.131s.31-.135.411-.621L20.693 3.831Z' />
                    </svg>
                  </div>
                  <span className='text-sm font-medium text-gray-900 dark:text-white'>
                    Telegram
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
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
      <motion.div className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <motion.button
          onClick={() => scrollToSection('services')}
          className='flex flex-col items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 sm:p-3 rounded-full'>
          <span className='text-xs sm:text-sm font-medium hidden sm:block'>
            {t('hero.scroll') || 'Découvrir'}
          </span>
          <ChevronDown className='w-4 h-4 sm:w-5 sm:h-5' />
        </motion.button>
      </motion.div>
    </section>
  )
}
