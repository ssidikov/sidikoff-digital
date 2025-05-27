'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Values/principles data
  const principles = [
    {
      emoji: '💡',
      titleKey: 'about.creativity.title',
      descriptionKey: 'about.creativity.description',
    },
    {
      emoji: '🤝',
      titleKey: 'about.approach.title',
      descriptionKey: 'about.approach.description',
    },
    {
      emoji: '🧠',
      titleKey: 'about.expertise.title',
      descriptionKey: 'about.expertise.description',
    },
  ]

  const stats = [
    { valueKey: 'about.stats.projects', labelKey: 'about.stats.projectsLabel' },
    { valueKey: 'about.stats.satisfaction', labelKey: 'about.stats.satisfactionLabel' },
    { valueKey: 'about.stats.experience', labelKey: 'about.stats.experienceLabel' },
  ]

  return (
    <section id='about' className='relative py-20 lg:py-32 overflow-hidden' ref={ref}>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/10' />
        <div className='absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* 1. Section Title */}
        <motion.div
          className='text-center mb-16'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.h2
            className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'
            variants={itemVariants}>
            {t('about.title')}
          </motion.h2>
        </motion.div>

        {/* 2. Intro Block */}
        <motion.div
          className='text-center mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.div className='max-w-4xl mx-auto mb-12' variants={itemVariants}>
            <p className='text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
              {t('about.intro.description')}
            </p>
          </motion.div>          {/* Founder intro card */}
          <motion.div
            className='max-w-2xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/10'
            variants={itemVariants}>
            <div className='flex items-center justify-center gap-6 mb-6'>
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center'>
                <span className='text-white text-xl font-bold'>SS</span>
              </div>
              <div className='text-left'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  {t('about.founder.name')}
                </h3>
                <p className='text-indigo-600 dark:text-indigo-400 font-semibold'>
                  {t('about.founder.title')}
                </p>
              </div>
            </div>
              {/* Experience and Education */}
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center'>
                  <svg className='w-4 h-4 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <p className='text-gray-700 dark:text-gray-300 text-sm font-medium'>
                  {t('about.founder.experienceYears')}
                </p>
              </div>
              
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center'>
                  <svg className='w-4 h-4 text-purple-600 dark:text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  </svg>
                </div>
                <p className='text-gray-700 dark:text-gray-300 text-sm font-medium'>
                  {t('about.founder.educationDegrees')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3. What defines us */}
        <motion.div
          className='mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.h3
            className='text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white'
            variants={itemVariants}>
            {t('about.defining.title')}
          </motion.h3>

          <div className='grid md:grid-cols-3 gap-8'>
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className='group cursor-pointer'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <div className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 text-center h-full hover:shadow-xl transition-all duration-300'>
                  <div className='text-5xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                    {principle.emoji}
                  </div>

                  <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>
                    {t(principle.titleKey)}
                  </h4>

                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {t(principle.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Stats Section */}
        <motion.div
          className='mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.h3
            className='text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white'
            variants={itemVariants}>
            {t('about.stats.title')}
          </motion.h3>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className='text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/10'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <div className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3'>
                  {t(stat.valueKey)}
                </div>
                <div className='text-gray-600 dark:text-gray-400 font-medium'>
                  {t(stat.labelKey)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. CTA Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50'>
          <motion.h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            {t('about.cta.title')}
          </motion.h3>
          <motion.p className='text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            {t('about.cta.description')}
          </motion.p>
          <motion.div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <motion.a
              href='#contact'
              className='inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {t('about.cta.button')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
