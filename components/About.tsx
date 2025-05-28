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
          </motion.div>{' '}          {/* Founder intro card */}
          <motion.div
            className='max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-indigo-500/10'
            variants={itemVariants}
            transition={{ duration: 0.3 }}>
            {/* Header Section */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-8'>
              {/* Avatar */}              <motion.div
                className='relative'
                transition={{ duration: 0.3 }}>
                <div className='w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25'>
                  <span className='text-white text-2xl lg:text-3xl font-bold'>SS</span>
                </div>
                {/* Status dot */}
                <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center'>
                  <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                </div>
              </motion.div>

              {/* Name and Title */}
              <div className='text-center lg:text-left flex-1'>
                <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                  {t('about.founder.name')}
                </h3>
                <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-4'>
                  <svg
                    className='w-4 h-4 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  {t('about.founder.title')}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className='mb-8'>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left'>
                {t('about.founder.description')}
              </p>
            </div>

            {/* Experience and Education Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              {/* Experience */}              <motion.div
                className='flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl border border-indigo-200/50 dark:border-indigo-700/30'
                transition={{ duration: 0.2 }}>
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>{' '}
                <div>
                  <p className='text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-1'>
                    {t('about.founder.experienceLabel')}
                  </p>
                  <p className='text-gray-900 dark:text-white font-semibold'>
                    {t('about.founder.experienceYears')}
                  </p>
                </div>
              </motion.div>

              {/* Education */}              <motion.div
                className='flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-purple-200/50 dark:border-purple-700/30'
                transition={{ duration: 0.2 }}>
                <div className='w-16 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 14l9-5-9-5-9 5 9 5z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                    />
                  </svg>
                </div>
                <div>
                  <p className='text-sm text-purple-600 dark:text-purple-400 font-medium mb-1'>
                    {t('about.founder.educationLabel')}
                  </p>
                  <p className='text-gray-900 dark:text-white font-semibold'>
                    {t('about.founder.educationDegrees')}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact CTA */}
            <div className='mt-8 text-center'>              <motion.a
                href='#contact'
                className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-medium hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600'
                whileTap={{ scale: 0.95 }}>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                  />
                </svg>
                {t('about.founder.contactCta')}
              </motion.a>
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
            {principles.map((principle, index) => (              <motion.div
                key={index}
                className='group cursor-pointer'
                variants={itemVariants}
                transition={{ duration: 0.3 }}>                <div className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/10 text-center h-full hover:shadow-xl transition-all duration-300'>
                  <div className='text-5xl mb-6 transition-transform duration-300'>
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
            {stats.map((stat, index) => (              <motion.div
                key={index}
                className='text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/10'
                variants={itemVariants}
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
          <motion.div className='flex flex-col sm:flex-row gap-4 justify-center'>            <motion.a
              href='#contact'
              className='inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group'
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
