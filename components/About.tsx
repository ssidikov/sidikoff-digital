'use client'

import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export default function About() {
  const { t } = useLanguage()

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const expertiseItems = [
    { key: 'item1', icon: '⚛️' },
    { key: 'item2', icon: '🎨' },
    { key: 'item3', icon: '🚀' },
    { key: 'item4', icon: '🛒' },
    { key: 'item5', icon: '🔧' },
    { key: 'item6', icon: '💡' },
  ]

  const advantages = [
    { key: 'advantage1', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
    { key: 'advantage2', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { key: 'advantage3', icon: '🤝', color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <section id='about' className='container mx-auto px-4 py-20 overflow-hidden'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <motion.div variants={itemVariants} className='text-center mb-20'>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='inline-block'>
            <span className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4'>
              {t('about.title')}
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent'>
            {t('about.sectionTitle')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
            {t('about.sectionSubtitle')}
          </motion.p>
        </motion.div>{' '}
        {/* Mission & Expertise Grid */}
        <div className='grid lg:grid-cols-2 gap-16 mb-24'>
          {/* Mission Section */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold'>{t('about.mission.title')}</h3>
            </div>
            <motion.div
              className='space-y-6 text-lg text-muted-foreground leading-relaxed'
              variants={containerVariants}>
              <motion.p
                variants={itemVariants}
                className='hover:text-foreground transition-colors duration-300'>
                {t('about.mission.p1')}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className='hover:text-foreground transition-colors duration-300'>
                {t('about.mission.p2')}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
                <span className='text-2xl'>🚀</span>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold'>{t('about.expertise.title')}</h3>
            </div>
            <motion.div className='space-y-4' variants={containerVariants}>
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className='flex items-start group cursor-default'>
                  <div className='flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mr-4 mt-0.5 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300'>
                    <span className='text-sm'>{item.icon}</span>
                  </div>
                  <span className='text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
                    {t(`about.expertise.${item.key}`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>{' '}
        {/* Why Choose Us Section */}
        <motion.div variants={itemVariants} className='mb-24'>
          <motion.div className='text-center mb-16'>
            <motion.h3 variants={itemVariants} className='text-3xl md:text-4xl font-bold mb-4'>
              {t('about.whyChoose.title')}
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className='w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full'
            />
          </motion.div>

          <motion.div className='grid md:grid-cols-3 gap-8' variants={containerVariants}>
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.key}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className='group relative'>
                <div className='relative bg-card border border-border/50 p-8 rounded-2xl h-full overflow-hidden hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5'>
                  {/* Background gradient effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className='relative z-10 text-center space-y-6'>
                    <motion.div
                      className='w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}>
                      <span className='text-3xl'>{advantage.icon}</span>
                    </motion.div>

                    <div className='space-y-3'>
                      <h4 className='text-xl font-semibold group-hover:text-primary transition-colors duration-300'>
                        {t(`about.whyChoose.${advantage.key}.title`)}
                      </h4>
                      <p className='text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed'>
                        {t(`about.whyChoose.${advantage.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>{' '}
        {/* Location & CTA Section */}
        <motion.div variants={itemVariants} className='text-center'>
          <motion.div className='relative max-w-4xl mx-auto'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl' />

            <div className='relative p-12 space-y-8'>
              <motion.div className='space-y-6'>
                {' '}
                <div className='flex items-center justify-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
                    <span className='text-2xl'></span>
                  </div>
                  <h3 className='text-3xl md:text-4xl font-bold'>{t('about.location.title')}</h3>
                </div>
                <motion.p
                  variants={itemVariants}
                  className='text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto'>
                  {t('about.location.description')}
                </motion.p>
              </motion.div>

              <motion.div
                className='flex flex-col sm:flex-row gap-6 justify-center items-center pt-8'
                variants={containerVariants}>
                <motion.a
                  variants={itemVariants}
                  href='#contact'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700' />
                  <span className='relative z-10'>{t('about.location.cta1')}</span>
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  href='#portfolio'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group relative border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg'>
                  <span className='relative z-10'>{t('about.location.cta2')}</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
