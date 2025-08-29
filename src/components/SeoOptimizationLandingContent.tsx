'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dictionary } from '@/lib/dictionaries'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Breadcrumbs {
  items: BreadcrumbItem[]
}

interface SeoOptimizationLandingContentProps {
  dictionary: Dictionary
  locale: string
  breadcrumbs: Breadcrumbs
}

export default function SeoOptimizationLandingContent({
  dictionary,
  locale,
  breadcrumbs,
}: SeoOptimizationLandingContentProps) {
  const t = dictionary.seo_optimization_landing

  return (
    <div className='min-h-screen'>
      {/* Hero Section - Full Screen */}
      <section className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-[var(--bg-accent-light)] to-[var(--accent-alpha-10)] pt-[120px] md:pt-[160px] pb-8 md:pb-16'>
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-[var(--accent-alpha-10)] rounded-full opacity-60 animate-pulse'></div>
          <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--accent-alpha-20)] rounded-full opacity-40 animate-pulse delay-700'></div>
        </div>

        <div className='relative w-full max-w-7xl mx-auto'>
          {/* Breadcrumbs */}
          <motion.nav
            className='mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <ol className='flex items-center space-x-2 text-sm text-gray-600'>
              {breadcrumbs.items.map((item, index: number) => (
                <li key={index} className='flex items-center'>
                  {index > 0 && <span className='mx-2 text-gray-400'>/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className='hover:text-[var(--accent)] transition-colors duration-200'>
                      {item.label}
                    </Link>
                  ) : (
                    <span className='text-[var(--accent)] font-medium'>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Content */}
            <motion.div
              className='space-y-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              {/* Badge */}
              <motion.div
                className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--accent-alpha-10)] text-[var(--accent)] border border-[var(--accent-alpha-20)]'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}>
                {t.hero.badge}
              </motion.div>

              {/* Title */}
              <motion.h1
                className='text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}>
                {t.hero.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                className='text-xl text-gray-600 leading-relaxed'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                {t.hero.description}
              </motion.p>

              {/* Benefits List */}
              <motion.ul
                className='space-y-3'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}>
                {t.hero.benefits.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    className='flex items-start space-x-3'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}>
                    <div className='w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-gray-700'>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 pt-4'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}>
                <Link
                  href={`/${locale}/contact`}
                  className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-dark)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                  {t.hero.cta_primary}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              <div className='relative w-full md:h-[500px] flex items-center justify-center'>
                <Image
                  src='/images/services/seo.png'
                  alt={t.hero.image_alt}
                  width={800}
                  height={600}
                  className='w-full h-full object-contain max-w-2xl mx-auto'
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='grid md:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {t.stats.map((stat, index: number) => (
              <motion.div
                key={index}
                className='text-center p-6 bg-gradient-to-br from-[var(--bg-accent-light)] to-[var(--accent-alpha-10)] rounded-xl border border-[var(--accent-alpha-20)]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className='text-4xl font-bold text-[var(--accent)] mb-2'>{stat.number}</div>
                <div className='text-lg font-semibold text-[var(--foreground)] mb-1'>
                  {stat.title}
                </div>
                <div className='text-gray-600'>{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-[var(--bg-primary)]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>{t.process.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps.map((step, index: number) => (
              <motion.div
                key={index}
                className='relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className='absolute -top-4 left-6 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  {index + 1}
                </div>
                <h3 className='text-lg font-bold text-[var(--foreground)] mb-3 mt-4'>
                  {step.title}
                </h3>
                <p className='text-gray-600'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-[var(--foreground)] mb-4'>{t.features.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.features.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.features.items.map((feature, index: number) => (
              <motion.div
                key={index}
                className='p-6 bg-gradient-to-br from-[var(--bg-primary)] to-white rounded-xl border border-gray-100 hover:border-[var(--accent-alpha-20)] hover:shadow-lg transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className='w-12 h-12 bg-[var(--accent)] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-[var(--foreground)] mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-20 bg-[var(--accent)]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-white'>{t.cta.title}</h2>
            <p className='text-xl text-white/90 max-w-2xl mx-auto'>{t.cta.description}</p>
            <Link
              href={`/${locale}/contact`}
              className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[var(--accent)] bg-white rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
              {t.cta.primary_button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
