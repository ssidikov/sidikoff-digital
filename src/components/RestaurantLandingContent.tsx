'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  TrendingDown,
  Smartphone,
  Calendar,
  Menu,
  ShoppingBag,
  MapPin,
  Share2,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

import { Dictionary } from '@/lib/dictionaries'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Breadcrumbs {
  items: BreadcrumbItem[]
}

interface RestaurantLandingContentProps {
  dictionary: Dictionary
  locale: string
  breadcrumbs: Breadcrumbs
}

interface PainPoint {
  icon: string
  title: string
  description: string
}

interface Feature {
  icon: string
  title: string
  description: string
}

interface Package {
  name: string
  price: string
  currency?: string
  period: string
  description: string
  delivery_time?: string
  features: string[]
  options?: string[]
  is_popular?: boolean
  popular?: boolean
}

interface SupportPlan {
  name: string
  price: string
  period: string
  features: string[]
}

interface Restaurant {
  name: string
  type: string
  image: string
  results: string[]
}

interface ProcessStep {
  title: string
  description: string
}

interface Testimonial {
  name: string
  position: string
  restaurant: string
  location: string
  content: string
  rating: number
  image: string
}

interface FAQ {
  question: string
  answer: string
}

export default function RestaurantLandingContent({
  dictionary,
  locale,
  breadcrumbs,
}: RestaurantLandingContentProps) {
  const t = dictionary.restaurant_landing
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const getIconComponent = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'phone':
        return <Phone className={className} />
      case 'trending_down':
        return <TrendingDown className={className} />
      case 'smartphone':
        return <Smartphone className={className} />
      case 'star':
        return <Star className={className} />
      case 'calendar':
        return <Calendar className={className} />
      case 'menu':
        return <Menu className={className} />
      case 'shopping_bag':
        return <ShoppingBag className={className} />
      case 'map':
        return <MapPin className={className} />
      case 'share':
        return <Share2 className={className} />
      case 'zap':
        return <Zap className={className} />
      default:
        return <Star className={className} />
    }
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
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
                className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
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
                <Link
                  href={`/${locale}/projects`}
                  className='inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--accent)] bg-white border-2 border-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-white transition-all duration-300'>
                  {t.hero.cta_secondary}
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className='relative h-[500px]'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <div className='relative z-10 h-full'>
                <Image
                  src='/images/services/restaurant-hero.jpg'
                  alt={t.hero.image_alt}
                  width={800}
                  height={600}
                  className='w-full h-full object-cover rounded-2xl'
                />
              </div>
              <div className='absolute -inset-4 bg-gradient-to-r from-[var(--accent-alpha-20)] to-[var(--accent-alpha-10)] rounded-2xl blur-3xl opacity-70'></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className='py-16 bg-slate-50 dark:bg-slate-900'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold mb-4 text-slate-900 dark:text-white'>
              {t.problems.title}
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              {t.problems.subtitle}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {t.problems.pain_points.map((problem: PainPoint, index: number) => {
              const icons = ['📞', '🌐', '📱', '📋']
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className='bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-lg'>
                        {icons[index]}
                      </div>
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold mb-3 text-slate-900 dark:text-white'>
                        {problem.title}
                      </h3>
                      <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
              {t.solution.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.solution.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.solution.features.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                className='bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='w-12 h-12 bg-[var(--accent-alpha-10)] rounded-lg flex items-center justify-center mb-6'>
                  {getIconComponent(feature.icon, 'w-6 h-6 text-[var(--accent)]')}
                </div>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>{t.pricing.title}</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.pricing.description}</p>
          </motion.div>

          {/* Website Packages */}
          <div className='grid md:grid-cols-3 gap-8 mb-20'>
            {t.pricing.packages.map((pkg: Package, index: number) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                  pkg.is_popular || pkg.popular ? 'ring-2 ring-[var(--accent)] scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                {(pkg.is_popular || pkg.popular) && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-medium'>
                      Populaire
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>{pkg.name}</h3>
                  <div className='flex items-center justify-center mb-2'>
                    <span className='text-4xl font-bold text-[var(--accent)]'>
                      {pkg.currency || '€'}
                      {pkg.price}
                    </span>
                    <span className='text-gray-600 ml-2'>
                      / {pkg.period === 'one-time' ? 'projet' : pkg.period}
                    </span>
                  </div>
                  <p className='text-gray-600'>{pkg.description}</p>
                  {pkg.delivery_time && (
                    <p className='text-sm text-gray-500 mt-1'>Délai: {pkg.delivery_time}</p>
                  )}
                </div>

                <ul className='space-y-4 mb-8'>
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-700 text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.options && pkg.options.length > 0 && (
                  <div className='mb-6'>
                    <ul className='space-y-2'>
                      {pkg.options.map((option: string, optionIndex: number) => (
                        <li key={optionIndex} className='flex items-start space-x-3'>
                          <span className='w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 text-sm'>
                            💡
                          </span>
                          <span className='text-gray-600 text-sm'>{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href={`/${locale}/contact`}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.is_popular || pkg.popular
                      ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)]'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                  Choisir ce Pack
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Support Plans */}
          <motion.div
            className='text-center mb-12'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h3 className='text-2xl md:text-3xl font-bold mb-4 text-gray-900'>
              {t.pricing.support_plans.title}
            </h3>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              {t.pricing.support_plans.subtitle}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.pricing.support_plans.plans.map((plan: SupportPlan, index: number) => (
              <motion.div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='text-center mb-8'>
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>{plan.name}</h4>
                  <div className='flex items-center justify-center mb-2'>
                    <span className='text-3xl font-bold text-[var(--accent)]'>€{plan.price}</span>
                    <span className='text-gray-600 ml-2'>/ {plan.period}</span>
                  </div>
                </div>

                <ul className='space-y-3 mb-8'>
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className='flex items-start space-x-3'>
                      <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0 mt-1' />
                      <span className='text-sm text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/contact`}
                  className='block w-full text-center py-3 px-6 rounded-lg font-semibold bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300'>
                  Choisir ce Support
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
              {t.portfolio.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.portfolio.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.portfolio.projects.map((restaurant: Restaurant, index: number) => (
              <motion.div
                key={index}
                className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='relative h-48'>
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    width={400}
                    height={300}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    {restaurant.results[0]}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{restaurant.name}</h3>
                  <p className='text-[var(--accent)] font-medium mb-2'>{restaurant.type}</p>
                  <ul className='space-y-1 text-sm text-gray-600'>
                    {restaurant.results.map((result, idx) => (
                      <li key={idx} className='flex items-center'>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16 md:py-24 bg-white'>
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
                className='relative bg-gray-50 rounded-xl p-8 text-center'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
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

      {/* Testimonials Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>{t.testimonials.title}</h2>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.testimonials.reviews.map((testimonial: Testimonial, index: number) => (
              <motion.div
                key={index}
                className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className='w-5 h-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <blockquote className='text-white/90 mb-6 italic'>
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <div className='font-semibold text-white'>{testimonial.name}</div>
                      <div className='text-white/70 text-sm'>
                        {testimonial.position}, {testimonial.restaurant}
                      </div>
                      <div className='text-white/60 text-sm'>{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>{t.faq.title}</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>{t.faq.subtitle}</p>
          </motion.div>

          <div className='space-y-4'>
            {t.faq.questions.map((faq: FAQ, index: number) => (
              <motion.div
                key={index}
                className='bg-white rounded-xl shadow-lg overflow-hidden'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200'>
                  <h3 className='text-lg font-semibold text-gray-900 pr-8'>{faq.question}</h3>
                  <div className='flex-shrink-0'>
                    {openFAQ === index ? (
                      <ChevronUp className='w-5 h-5 text-[var(--accent)] transition-transform duration-200' />
                    ) : (
                      <ChevronDown className='w-5 h-5 text-gray-400 transition-transform duration-200' />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'>
                  <div className='px-8 pb-6'>
                    <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t.cta.title}</h2>
            <p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>{t.cta.description}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-6'>
              <Link
                href={`/${locale}/contact`}
                className='bg-white text-[var(--accent)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2'>
                {t.cta.primary_button}
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className='border-2 border-white text-white hover:bg-white hover:text-[var(--accent)] px-8 py-4 rounded-lg font-semibold transition-all duration-300'>
                {t.cta.secondary_button}
              </Link>
            </div>
            <p className='text-white/80 text-sm'>{t.cta.guarantee}</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
