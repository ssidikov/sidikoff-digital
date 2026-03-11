'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Star,
  ArrowRight,
  CheckCircle,
  Smartphone,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Users,
  Search,
  TrendingUp,
  Shield,
  CreditCard,
  Package,
  Globe,
  Zap,
  BarChart3,
  Award,
  Target,
  Palette,
  FileText,
} from 'lucide-react'

import common from '@/locales/fr/common.json'
import Pricing from '@/sections/Pricing'

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

interface ProcessStep {
  title: string
  description: string
}

interface EcommerceProject {
  name: string
  type: string
  image: string
  results: string[]
}

interface Review {
  name: string
  position: string
  company: string
  location: string
  content: string
  rating: number
  image?: string
}


interface FAQ {
  question: string
  answer: string
}

const iconMap = {
  'trending-up': TrendingUp,
  users: Users,
  shield: Shield,
  search: Search,
  'shopping-cart': ShoppingCart,
  'credit-card': CreditCard,
  package: Package,
  smartphone: Smartphone,
  star: Star,
  award: Award,
  'file-text': FileText,
  globe: Globe,
  zap: Zap,
  'bar-chart-3': BarChart3,
  target: Target,
  palette: Palette,
}

export default function EcommerceLandingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = common.ecommerce_landing

  const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? <IconComponent className={className} /> : null
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='relative pt-24 md:pt-32 pb-24 bg-linear-to-br from-blue-50 via-white to-indigo-50 overflow-hidden'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233b82f6" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'>
              <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
                <ShoppingCart className='w-4 h-4 mr-2' />
                {t.hero.badge}
              </div>

              <div>
                <h1 className='text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
                  {t.hero.title}
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed mb-8'>{t.hero.description}</p>

                <div className='space-y-4 mb-8'>
                  {t.hero.benefits?.map((benefit: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className='flex items-center space-x-3'>
                      <CheckCircle className='w-5 h-5 text-blue-600 flex-shrink-0' />
                      <span className='text-gray-700'>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href={`/contact`}
                  className='inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
                  <ShoppingCart className='w-5 h-5 mr-2' />
                  {t.hero.cta_primary}
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
                <Link
                  href='#portfolio'
                  className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors'>
                  {t.hero.cta_secondary}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'>
              <div className='relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/services/ecommerce/ecommerce-hero.webp'
                  alt={t.hero.image_alt}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
              <div className='absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg'>
                <ShoppingCart className='w-10 h-10 text-white' />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.problems.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.problems.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.problems.pain_points?.map((point: PainPoint, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                <div className='w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6'>
                  {renderIcon(point.icon, 'w-8 h-8 text-red-600')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{point.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.solution.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.solution.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.solution.features?.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-blue-50 p-8 rounded-xl hover:bg-blue-100 transition-colors'>
                <div className='w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6'>
                  {renderIcon(feature.icon, 'w-8 h-8 text-white')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>{t.process.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps?.map((step: ProcessStep, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='text-center'>
                <div className='w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6'>
                  {index + 1}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{step.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.portfolio.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.portfolio.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.portfolio.projects?.map((project: EcommerceProject, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='relative h-64'>
                  <Image
                    src={`/images/services/ecommerce/${project.image}`}
                    alt={project.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='text-sm text-blue-600 font-medium mb-2'>{project.type}</div>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>{project.name}</h3>
                  <div className='space-y-2'>
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className='flex items-center text-gray-600'>
                        <CheckCircle className='w-4 h-4 text-blue-500 mr-2 flex-shrink-0' />
                        <span className='text-sm'>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-24 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
              {t.testimonials.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.testimonials.reviews?.map((review: Review, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-xl shadow-lg'>
                <div className='flex items-center mb-6'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-600 mb-6 leading-relaxed'>&ldquo;{review.content}&rdquo;</p>
                <div>
                  <div className='font-semibold text-gray-900'>{review.name}</div>
                  <div className='text-sm text-gray-600'>
                    {review.position}, {review.company}
                  </div>
                  <div className='text-sm text-gray-500'>{review.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* FAQ Section */}
      <section className='py-24 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>{t.faq.title}</h2>
            <p className='text-xl text-gray-600'>{t.faq.description}</p>
          </motion.div>

          <div className='space-y-6'>
            {t.faq.questions?.map((item: FAQ, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <button
                  className='w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <h3 className='text-lg font-semibold text-gray-900 pr-4'>{item.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  )}
                </button>
                {openFaq === index && (
                  <div className='px-8 pb-6'>
                    <p className='text-gray-600 leading-relaxed'>{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-linear-to-r from-blue-600 to-indigo-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>{t.cta.title}</h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>{t.cta.description}</p>
            <Link
              href={`/contact`}
              className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors'>
              <ShoppingCart className='w-5 h-5 mr-2' />
              {t.cta.button}
              <ArrowRight className='w-5 h-5 ml-2' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
