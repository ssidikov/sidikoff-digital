'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { CheckCircle, MessageCircle, Lightbulb, Handshake, Brain, ArrowRight } from 'lucide-react'

const About: React.FC = () => {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  // Mouse tracking for founder card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Mouse tracking for CTA section
  const ctaMouseX = useMotionValue(0)
  const ctaMouseY = useMotionValue(0)

  // Mouse tracking for company card
  const companyMouseX = useMotionValue(0)
  const companyMouseY = useMotionValue(0)

  // Mouse tracking for experience card
  const experienceMouseX = useMotionValue(0)
  const experienceMouseY = useMotionValue(0)

  // Mouse tracking for education card
  const educationMouseX = useMotionValue(0)
  const educationMouseY = useMotionValue(0)

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
      },
    },
  }
  // Values/principles data
  const principles = [
    {
      icon: Lightbulb,
      titleKey: 'about.creativity.title',
      descriptionKey: 'about.creativity.description',
    },
    {
      icon: Handshake,
      titleKey: 'about.approach.title',
      descriptionKey: 'about.approach.description',
    },
    {
      icon: Brain,
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
        <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950' />
        <div className='absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4'>
        {/* 1. Section Title */}
        <motion.div
          className='text-center mb-16'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.h2
            className='text-[clamp(2rem,_4vw_+_1rem,_5rem)] font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'
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
          {/* Three-column layout: Company info, credentials, founder */}
          <div className='grid lg:grid-cols-3 gap-8 w-full mx-auto'>
            {/* Company About Card - Left side */}
            <motion.div
              className='group relative rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 lg:p-10 cursor-pointer overflow-hidden h-full flex items-center'
              variants={itemVariants}
              onMouseMove={({
                currentTarget,
                clientX,
                clientY,
              }: ReactMouseEvent<HTMLDivElement>) => {
                const { left, top } = currentTarget.getBoundingClientRect()
                companyMouseX.set(clientX - left)
                companyMouseY.set(clientY - top)
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
              {/* Gradient overlay */}
              <motion.div
                className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
                style={{
                  background: useMotionTemplate`radial-gradient(400px circle at ${companyMouseX}px ${companyMouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              {/* Border glow effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              <div className='relative z-10 text-left w-full'>
                <h3 className='text-center md:text-left text-[clamp(1.5rem,_2vw_+_1rem,_3.5rem)] leading-[1.1] font-bold text-gray-900 dark:text-white mb-2 md:mb-4'>
                  {t('about.intro.title')}
                </h3>
                <p className='text-[clamp(0.9rem,_1.5vw_+_0.5rem,_1.5rem)] text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t('about.intro.description')}
                </p>
              </div>
            </motion.div>

            {/* Experience and Education cards - Middle */}
            <div className='grid grid-rows-2 gap-6 h-full'>
              {/* Experience Card */}
              <motion.div
                className='group relative rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm cursor-pointer h-full flex flex-col justify-between outline-none overflow-hidden'
                variants={itemVariants}
                onMouseMove={({
                  currentTarget,
                  clientX,
                  clientY,
                }: ReactMouseEvent<HTMLDivElement>) => {
                  const { left, top } = currentTarget.getBoundingClientRect()
                  experienceMouseX.set(clientX - left)
                  experienceMouseY.set(clientY - top)
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
                {/* Gradient overlay */}
                <motion.div
                  className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
                  style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${experienceMouseX}px ${experienceMouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Border glow effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                {/* Text at top */}
                <div className='relative z-10 text-center pt-10 px-8'>
                  <p className='text-[clamp(1rem,_2vw_+_0.5rem,_1.5rem)] font-bold text-gray-900 dark:text-white'>
                    {t('about.founder.experienceYears')}
                  </p>
                </div>

                {/* Experience image at bottom with no margin */}
                <div className='w-full z-10 flex justify-center items-end -mb-4'>
                  <motion.div
                    className='w-full'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                    <Image
                      src='/images/experience.webp'
                      alt='Experience'
                      width={256}
                      height={256}
                      sizes='(max-width: 768px) 192px, 256px'
                      quality={70}
                      loading='lazy'
                      className='w-full h-48 object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300'
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                className='group relative rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm cursor-pointer h-full flex flex-col justify-between outline-none overflow-hidden'
                variants={itemVariants}
                onMouseMove={({
                  currentTarget,
                  clientX,
                  clientY,
                }: ReactMouseEvent<HTMLDivElement>) => {
                  const { left, top } = currentTarget.getBoundingClientRect()
                  educationMouseX.set(clientX - left)
                  educationMouseY.set(clientY - top)
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
                {/* Gradient overlay */}
                <motion.div
                  className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
                  style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${educationMouseX}px ${educationMouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Border glow effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Text at top */}
                <div className='relative z-10 text-center pt-10 px-8'>
                  <p className='text-[clamp(1rem,_2vw_+_0.5rem,_1.5rem)] font-bold text-gray-900 dark:text-white'>
                    {t('about.founder.educationDegrees')}
                  </p>
                </div>

                {/* Master image at bottom with no margin */}
                <div className='w-full z-10 flex justify-center items-end -mb-4'>
                  <motion.div
                    className='w-full'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                    <Image
                      src='/images/master.webp'
                      alt='Master Degree'
                      width={256}
                      height={256}
                      sizes='(max-width: 768px) 192px, 256px'
                      quality={70}
                      loading='lazy'
                      className='w-full h-48 object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300'
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Founder Card - Right side */}
            <motion.div
              className='group relative rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 lg:p-10 cursor-pointer overflow-hidden h-full flex items-center'
              variants={itemVariants}
              onMouseMove={({
                currentTarget,
                clientX,
                clientY,
              }: ReactMouseEvent<HTMLDivElement>) => {
                const { left, top } = currentTarget.getBoundingClientRect()
                mouseX.set(clientX - left)
                mouseY.set(clientY - top)
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
              {/* Gradient overlay */}
              <motion.div
                className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
                style={{
                  background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              {/* Border glow effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              <div className='relative z-10 text-center w-full'>
                {/* Avatar */}
                <motion.div className='relative mb-6' transition={{ duration: 0.3 }}>
                  <div className='relative w-32 h-32 md:w-72 md:h-72 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 shadow-lg shadow-indigo-500/25 overflow-hidden flex items-center justify-center'>
                    <Image
                      src='/founder.webp'
                      alt='Founder'
                      fill
                      sizes='(max-width: 768px) 128px, (max-width: 1024px) 256px, 288px'
                      quality={75}
                      style={{ objectFit: 'cover' }}
                      className='rounded-full'
                      priority
                    />
                  </div>
                </motion.div>

                {/* Name and Title */}
                <div className='text-center'>
                  <h3 className='text-[clamp(1.2rem,_2.5vw_+_0.5rem,_2.5rem)] font-bold text-gray-900 dark:text-white mb-2'>
                    {t('about.founder.name')}
                  </h3>
                  <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-[clamp(0.75rem,_1.5vw_+_0.25rem,_1rem)] font-semibold'>
                    <CheckCircle className='w-4 h-4 mr-2' />
                    {t('about.founder.title')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* 3. What defines us */}
        <motion.div
          className='mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.h3
            className='text-[clamp(1.5rem,_3vw_+_1rem,_3rem)] font-bold text-center mb-16 text-gray-900 dark:text-white'
            variants={itemVariants}>
            {t('about.defining.title')}
          </motion.h3>
          <div className='grid md:grid-cols-3 gap-8'>
            {principles.map((principle, index) => {
              const PrincipleCard = ({
                principle,
                index,
              }: {
                principle: {
                  icon: React.ComponentType<{ className?: string }>
                  titleKey: string
                  descriptionKey: string
                }
                index: number
              }) => {
                const mouseX = useMotionValue(0)
                const mouseY = useMotionValue(0)

                function handleMouseMove({
                  currentTarget,
                  clientX,
                  clientY,
                }: ReactMouseEvent<HTMLDivElement>) {
                  const { left, top } = currentTarget.getBoundingClientRect()
                  mouseX.set(clientX - left)
                  mouseY.set(clientY - top)
                }

                const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`

                return (
                  <motion.div key={index} className='group' variants={itemVariants}>
                    <motion.div
                      className='group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 cursor-pointer overflow-hidden'
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

                      {/* Icon and Title Section */}
                      <div className='relative z-10 flex items-center gap-4 mb-6'>
                        <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-primary dark:to-primary/80 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-indigo-500/25 dark:group-hover:shadow-primary/25'>
                          <principle.icon className='w-6 h-6 text-white' />
                        </div>
                        <h4 className='text-[clamp(1rem,_2vw_+_0.5rem,_1.5rem)] font-bold text-gray-900 dark:text-white flex-1'>
                          {t(principle.titleKey)}
                        </h4>
                      </div>
                      {/* Description */}
                      <p className='relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed max-w-readable'>
                        {t(principle.descriptionKey)}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              }

              return <PrincipleCard key={index} principle={principle} index={index} />
            })}
          </div>
        </motion.div>
        {/* 4. Stats Section */}
        <motion.div
          className='mb-20'
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}>
          <motion.h3
            className='text-[clamp(1.5rem,_3vw_+_1rem,_3rem)] font-bold text-center mb-16 text-gray-900 dark:text-white'
            variants={itemVariants}>
            {t('about.stats.title')}
          </motion.h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {stats.map((stat, index) => {
              const StatsCard = ({
                stat,
                index,
              }: {
                stat: {
                  valueKey: string
                  labelKey: string
                }
                index: number
              }) => {
                const mouseX = useMotionValue(0)
                const mouseY = useMotionValue(0)

                function handleMouseMove({
                  currentTarget,
                  clientX,
                  clientY,
                }: ReactMouseEvent<HTMLDivElement>) {
                  const { left, top } = currentTarget.getBoundingClientRect()
                  mouseX.set(clientX - left)
                  mouseY.set(clientY - top)
                }

                const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`

                return (
                  <motion.div
                    key={index}
                    className='group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 text-center cursor-pointer overflow-hidden'
                    variants={itemVariants}
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
                      <div className='text-[clamp(2rem,_5vw_+_1rem,_4rem)] font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 transition-transform duration-300'>
                        {t(stat.valueKey)}
                      </div>
                      <div className='text-[clamp(0.9rem,_1.2vw_+_0.5rem,_1.2rem)] text-gray-600 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300'>
                        {t(stat.labelKey)}
                      </div>
                    </div>
                  </motion.div>
                )
              }

              return <StatsCard key={index} stat={stat} index={index} />
            })}
          </div>
        </motion.div>
        {/* 5. CTA Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-center mt-16'>
          <motion.div
            className='group relative max-w-4xl mx-auto rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm p-8 lg:p-12 cursor-pointer overflow-hidden'
            onMouseMove={({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) => {
              const { left, top } = currentTarget.getBoundingClientRect()
              ctaMouseX.set(clientX - left)
              ctaMouseY.set(clientY - top)
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            {/* Gradient overlay */}
            <motion.div
              className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
              style={{
                background: useMotionTemplate`radial-gradient(600px circle at ${ctaMouseX}px ${ctaMouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Border glow effect */}
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            <div className='relative z-10'>
              <motion.h3 className='text-[clamp(1.3rem,_2.5vw_+_0.5rem,_2.5rem)] font-bold text-gray-900 dark:text-white mb-4'>
                {t('about.cta.title')}
              </motion.h3>
              <motion.p className='text-[clamp(1rem,_1.5vw_+_0.5rem,_1.5rem)] text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
                {t('about.cta.description')}
              </motion.p>
              <motion.div className='relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed flex flex-col sm:flex-row gap-4 justify-center max-w-readable'>
                <motion.a
                  href='#contact-form'
                  className='group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-button-lg shadow-lg shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden border border-transparent hover:border-white/20'
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.96 }}>
                  {/* Animated background overlay */}
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  {/* Pulse effect on hover */}
                  <div className='absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse' />

                  {/* Button content */}
                  <span className='relative z-10 flex items-center gap-3'>
                    <MessageCircle className='w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12' />
                    <span className='text-fluid-base transition-all duration-300 group-hover:tracking-wide text-left'>
                      {t('about.cta.button')}
                    </span>
                    <ArrowRight className='w-5 h-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110' />
                  </span>

                  {/* Enhanced shine effect */}
                  <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12' />

                  {/* Glow effect */}
                  <div className='absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-70 blur transition-opacity duration-300 -z-10' />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
