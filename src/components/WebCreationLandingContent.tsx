'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle, Star, Globe, Users, Zap, TrendingUp, ArrowRight, Shield } from 'lucide-react'
import { Dictionary } from '@/lib/dictionaries'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Breadcrumbs {
  items: BreadcrumbItem[]
}

interface StatItem {
  number: string
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
}

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface WebCreationLandingContentProps {
  dictionary: Dictionary
  locale: string
  breadcrumbs: Breadcrumbs
}

export default function WebCreationLandingContent({
  dictionary,
  locale,
  breadcrumbs,
}: WebCreationLandingContentProps) {
  const t = dictionary.web_creation_landing

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
                    <Link href={item.href} className='hover:text-[var(--accent)] transition-colors'>
                      {item.label}
                    </Link>
                  ) : (
                    <span className='text-[var(--accent)] font-medium'>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Hero Content */}
            <motion.div
              className='text-center lg:text-left'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              <motion.div
                className='inline-flex items-center gap-2 bg-[var(--accent-alpha-10)] text-[var(--accent)] px-4 py-2 rounded-full text-sm font-medium mb-6'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <Star className='w-4 h-4' />
                {t.hero.badge}
              </motion.div>

              <motion.h1
                className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                {t.hero.title}
              </motion.h1>

              <motion.p
                className='text-lg md:text-xl text-gray-600 mb-8 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                {t.hero.description}
              </motion.p>

              {/* Benefits List */}
              <motion.ul
                className='space-y-3 mb-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}>
                {t.hero.benefits.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    className='flex items-center space-x-3'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}>
                    <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                    <span className='text-gray-700'>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 pt-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}>
                <Link
                  href={`/${locale}/contact`}
                  className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-dark)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                  {t.hero.cta_primary}
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <div className='relative z-10'>
                <Image
                  src='/images/services/website.png'
                  alt={t.hero.title}
                  width={800}
                  height={600}
                  className='w-full h-auto'
                />
              </div>
              <div className='absolute -inset-4 bg-gradient-to-r from-[var(--accent-alpha-20)] to-[var(--accent-alpha-10)] rounded-2xl blur-3xl opacity-70'></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            {t.stats.map((stat: StatItem, index: number) => (
              <motion.div
                key={index}
                className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='text-4xl md:text-5xl font-bold text-white mb-3'>{stat.number}</div>
                <h3 className='text-xl font-semibold text-white mb-2'>{stat.title}</h3>
                <p className='text-white/80 text-sm leading-relaxed'>{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>{t.process.title}</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps.map((step: ProcessStep, index: number) => (
              <motion.div
                key={index}
                className='relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='absolute -top-4 left-8'>
                  <div className='w-8 h-8 bg-[var(--accent)] text-white rounded-full flex items-center justify-center font-bold text-sm'>
                    {index + 1}
                  </div>
                </div>
                <div className='pt-4'>
                  <h3 className='text-xl font-semibold mb-3 text-gray-900'>{step.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
              {t.features.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.features.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.features.items.map((feature: FeatureItem, index: number) => {
              const IconComponent =
                feature.icon === 'Globe'
                  ? Globe
                  : feature.icon === 'Shield'
                    ? Shield
                    : feature.icon === 'Zap'
                      ? Zap
                      : feature.icon === 'Users'
                        ? Users
                        : feature.icon === 'TrendingUp'
                          ? TrendingUp
                          : Star

              return (
                <motion.div
                  key={index}
                  className='bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <div className='w-12 h-12 bg-[var(--accent-alpha-10)] rounded-lg flex items-center justify-center mb-6'>
                    <IconComponent className='w-6 h-6 text-[var(--accent)]' />
                  </div>
                  <h3 className='text-xl font-semibold mb-3 text-gray-900'>{feature.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t.cta.title}</h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>{t.cta.description}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={`/${locale}/contact`}
                className='bg-white text-[var(--accent)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'>
                {t.cta.primary_button}
                <ArrowRight className='w-5 h-5' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
