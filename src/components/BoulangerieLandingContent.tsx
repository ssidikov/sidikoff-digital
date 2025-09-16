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
  ShoppingBag,
  MapPin,
  Share2,
  Zap,
  ChevronDown,
  ChevronUp,
  Croissant,
  Clock,
  Users,
  Search,
} from 'lucide-react'

import { Dictionary } from '@/lib/dictionaries'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface Breadcrumbs {
  items: BreadcrumbItem[]
}

interface BoulangerieLandingContentProps {
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

interface Boulangerie {
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
  boulangerie: string
  location: string
  content: string
  rating: number
  image: string
}

interface FAQ {
  question: string
  answer: string
}

export default function BoulangerieLandingContent({
  dictionary,
  locale,
  breadcrumbs,
}: BoulangerieLandingContentProps) {
  const t = dictionary.boulangerie_landing
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
      case 'shopping_bag':
        return <ShoppingBag className={className} />
      case 'map':
        return <MapPin className={className} />
      case 'share':
        return <Share2 className={className} />
      case 'zap':
        return <Zap className={className} />
      case 'croissant':
        return <Croissant className={className} />
      case 'clock':
        return <Clock className={className} />
      case 'users':
        return <Users className={className} />
      case 'search':
        return <Search className={className} />
      default:
        return <Star className={className} />
    }
  }

  const contactUrl = locale === 'fr' ? '/contact' : `/${locale}/contact`

  return (
    <div className='min-h-screen bg-gradient-to-b from-amber-50 to-white'>
      {/* Breadcrumbs */}
      <nav className='bg-white/80 backdrop-blur-sm border-b border-amber-100 mt-16 md:mt-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3'>
          <ol className='flex items-center space-x-2 text-sm'>
            {breadcrumbs.items.map((item, index) => (
              <li key={index} className='flex items-center'>
                {index > 0 && <ArrowRight className='w-4 h-4 mx-2 text-amber-400' />}
                {item.href ? (
                  <Link
                    href={item.href}
                    className='text-amber-600 hover:text-amber-800 transition-colors'>
                    {item.label}
                  </Link>
                ) : (
                  <span className='text-amber-800 font-medium'>{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative pt-16 pb-24 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 opacity-60'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'>
              <div className='inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium'>
                <Croissant className='w-4 h-4 mr-2' />
                {t.hero.badge}
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                {t.hero.title}
              </h1>

              <p className='text-xl text-gray-600 leading-relaxed'>{t.hero.description}</p>

              <div className='grid sm:grid-cols-2 gap-4'>
                {t.hero.benefits?.map((benefit: string, index: number) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <CheckCircle className='w-5 h-5 text-amber-500 flex-shrink-0' />
                    <span className='text-gray-700'>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href={contactUrl}
                  className='inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg'>
                  {t.hero.cta_primary}
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
                <Link
                  href={`/${locale}/projects`}
                  className='inline-flex items-center justify-center px-8 py-4 border-2 border-amber-600 text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors'>
                  {t.hero.cta_secondary}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='relative'>
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/services/boulangerie-hero.webp'
                  alt={t.hero.image_alt}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              {t.problems.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.problems.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.problems.pain_points?.map((point: PainPoint, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-red-50 p-6 rounded-xl border border-red-100'>
                <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4'>
                  {getIconComponent(point.icon, 'w-6 h-6 text-red-600')}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{point.title}</h3>
                <p className='text-gray-600'>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-16 bg-gradient-to-br from-amber-50 to-orange-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              {t.solution.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.solution.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.solution.features?.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4'>
                  {getIconComponent(feature.icon, 'w-6 h-6 text-amber-600')}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{t.process.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.process.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {t.process.steps?.map((step: ProcessStep, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                    {index + 1}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>{step.title}</h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>
                {index < 3 && (
                  <div className='hidden lg:block absolute top-8 left-full w-full h-0.5 bg-amber-200 transform -translate-y-1/2'></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              {t.portfolio.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.portfolio.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.portfolio.projects?.map((project: Boulangerie, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                <div className='aspect-[4/3] relative'>
                  <Image
                    src={`/images/portfolio/boulangeries/${project.image}`}
                    alt={project.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>{project.name}</h3>
                    <span className='text-sm text-amber-600 font-medium'>{project.type}</span>
                  </div>
                  <div className='space-y-2'>
                    {project.results?.map((result: string, resultIndex: number) => (
                      <div key={resultIndex} className='flex items-center text-sm text-gray-600'>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                        {result}
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
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              {t.testimonials.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.testimonials.reviews?.map((testimonial: Testimonial, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-50 p-6 rounded-xl'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4'>
                    <Croissant className='w-6 h-6 text-amber-600' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>{testimonial.name}</h4>
                    <p className='text-sm text-gray-600'>{testimonial.boulangerie}</p>
                    <p className='text-sm text-amber-600'>{testimonial.location}</p>
                  </div>
                </div>
                <div className='flex items-center mb-3'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-700 italic'>{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-16 bg-gradient-to-br from-amber-50 to-orange-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{t.pricing.title}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.pricing.description}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.pricing.packages?.map((pkg: Package, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-xl shadow-md ${pkg.is_popular ? 'ring-2 ring-amber-500' : ''}`}>
                {pkg.is_popular && (
                  <div className='bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4'>
                    Le plus populaire
                  </div>
                )}
                <h3 className='text-xl font-bold text-gray-900 mb-2'>{pkg.name}</h3>
                <div className='text-3xl font-bold text-amber-600 mb-2'>
                  {pkg.price}€<span className='text-lg text-gray-600'>/{pkg.period}</span>
                </div>
                <p className='text-gray-600 mb-6'>{pkg.description}</p>
                <ul className='space-y-3 mb-8'>
                  {pkg.features?.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className='flex items-center'>
                      <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={contactUrl}
                  className='block w-full bg-amber-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors'>
                  Choisir ce forfait
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{t.faq.title}</h2>
            <p className='text-xl text-gray-600'>{t.faq.subtitle}</p>
          </motion.div>

          <div className='space-y-4'>
            {t.faq.questions?.map((faq: FAQ, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-50 rounded-lg'>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors rounded-lg'>
                  <span className='font-semibold text-gray-900'>{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className='w-5 h-5 text-amber-600' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-amber-600' />
                  )}
                </button>
                {openFAQ === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-gray-700'>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-amber-600 to-orange-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>{t.cta.title}</h2>
            <p className='text-xl text-amber-100 max-w-2xl mx-auto'>{t.cta.description}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={contactUrl}
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg'>
                {t.cta.primary_button}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className='inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors'>
                {t.cta.secondary_button}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
