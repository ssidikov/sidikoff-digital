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
  Code,
  Clock,
  Users,
  Search,
  EyeOff,
  Briefcase,
  Monitor,
  Camera,
  PenTool,
  Palette,
  FileText,
} from 'lucide-react'

import { Dictionary } from '@/lib/dictionaries'

interface FreelanceLandingContentProps {
  dictionary: Dictionary
  locale: string
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

interface ProcessStep {
  title: string
  description: string
}

interface FreelanceProject {
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

interface Package {
  name: string
  price: string
  period: string
  description: string
  delivery_time?: string
  features: string[]
  is_popular?: boolean
}

interface FAQ {
  question: string
  answer: string
}

export default function FreelanceLandingContent({
  dictionary,
  locale,
}: FreelanceLandingContentProps) {
  const t = dictionary.freelance_landing
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const getIconComponent = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'phone':
        return <Phone className={className} />
      case 'eye-off':
        return <EyeOff className={className} />
      case 'users':
        return <Users className={className} />
      case 'clock':
        return <Clock className={className} />
      case 'search':
        return <Search className={className} />
      case 'shopping-cart':
        return <ShoppingBag className={className} />
      case 'briefcase':
        return <Briefcase className={className} />
      case 'map-pin':
        return <MapPin className={className} />
      case 'calendar':
        return <Calendar className={className} />
      case 'star':
        return <Star className={className} />
      case 'code':
        return <Code className={className} />
      case 'monitor':
        return <Monitor className={className} />
      case 'camera':
        return <Camera className={className} />
      case 'pen-tool':
        return <PenTool className={className} />
      case 'palette':
        return <Palette className={className} />
      case 'file-text':
        return <FileText className={className} />
      case 'smartphone':
        return <Smartphone className={className} />
      case 'share':
        return <Share2 className={className} />
      case 'zap':
        return <Zap className={className} />
      case 'trending-down':
        return <TrendingDown className={className} />
      default:
        return <CheckCircle className={className} />
    }
  }

  const contactUrl = locale === 'fr' ? '/contact' : `/${locale}/contact`

  return (
    <div className='min-h-screen bg-linear-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <section className='relative pt-24 md:pt-32 pb-24 overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-blue-100 via-indigo-50 to-purple-50 opacity-60'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'>
              <div className='space-y-6'>
                <div className='inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium'>
                  <Briefcase className='w-4 h-4 mr-2 text-blue-600' />
                  {t.hero.badge}
                </div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                  {t.hero.title}
                </h1>

                <p className='text-xl text-gray-600 leading-relaxed'>{t.hero.description}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {t.hero.benefits?.map((benefit: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className='flex items-center space-x-3'>
                      <CheckCircle className='w-5 h-5 text-blue-600 flex-shrink-0' />
                      <span className='text-gray-700'>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href={contactUrl}
                  className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200'>
                  {t.hero.cta_primary}
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
                <Link
                  href='#portfolio'
                  className='inline-flex items-center justify-center px-8 py-4 border-2 border-blue-300 text-blue-700 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-800 transition-colors'>
                  {t.hero.cta_secondary}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative'>
              <div className='aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/projects/freelance-hero.webp'
                  alt={t.hero.image_alt}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent'></div>
              </div>

              <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-blue-100'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                    <Star className='w-6 h-6 text-blue-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>+200 Freelances</p>
                    <p className='text-sm text-gray-600'>Sites créés avec succès</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {t.problems.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t.problems.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {t.problems.pain_points?.map((painPoint: PainPoint, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-8 bg-red-50 rounded-xl border border-red-100'>
                <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  {getIconComponent(painPoint.icon, 'w-8 h-8 text-red-600')}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>{painPoint.title}</h3>
                <p className='text-gray-600'>{painPoint.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className='py-24 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
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
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  {getIconComponent(feature.icon, 'w-6 h-6 text-blue-600')}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>{t.process.title}</h2>
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
                className='text-center'>
                <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold'>
                  {index + 1}
                </div>
                <h3 className='text-lg font-semibold text-gray-900 mb-3'>{step.title}</h3>
                <p className='text-gray-600'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className='py-24 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {t.portfolio.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.portfolio.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.portfolio.projects?.map((project: FreelanceProject, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                <div className='aspect-[4/3] relative'>
                  <Image
                    src={`/images/projects/${project.image}`}
                    alt={project.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900'>{project.name}</h3>
                    <span className='text-sm text-blue-600 font-medium'>{project.type}</span>
                  </div>
                  <div className='space-y-2'>
                    {project.results.map((result: string, idx: number) => (
                      <div key={idx} className='flex items-center text-sm text-gray-600'>
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
      <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {t.testimonials.title}
            </h2>
            <p className='text-xl text-gray-600'>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {t.testimonials.reviews?.map((review: Review, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-blue-50 p-6 rounded-xl border border-blue-100'>
                <div className='flex items-center space-x-1 mb-4'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-700 mb-6 italic'>&ldquo;{review.content}&rdquo;</p>
                <div>
                  <p className='font-semibold text-gray-900'>{review.name}</p>
                  <p className='text-sm text-gray-600'>
                    {review.position} - {review.company}
                  </p>
                  <p className='text-sm text-gray-500'>{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-24 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>{t.pricing.title}</h2>
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
                className={`bg-white rounded-xl shadow-md p-8 border-2 ${
                  pkg.is_popular ? 'border-blue-600 relative' : 'border-blue-100'
                } hover:shadow-lg transition-shadow`}>
                {pkg.is_popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium'>
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>{pkg.name}</h3>
                  <div className='text-4xl font-bold text-gray-900 mb-2'>{pkg.price}</div>
                  <p className='text-gray-600'>{pkg.period}</p>
                  {pkg.delivery_time && (
                    <p className='text-sm text-gray-500 mt-2'>Livraison en {pkg.delivery_time}</p>
                  )}
                </div>

                <p className='text-gray-600 mb-6 text-center'>{pkg.description}</p>

                <ul className='space-y-3 mb-8'>
                  {pkg.features.map((feature: string, idx: number) => (
                    <li key={idx} className='flex items-start space-x-3'>
                      <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={contactUrl}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.is_popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
                  }`}>
                  Choisir ce forfait
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>{t.faq.title}</h2>
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
                className='bg-blue-50 rounded-xl border border-blue-100'>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-100 rounded-xl transition-colors'>
                  <span className='font-semibold text-gray-900 pr-4'>{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-blue-600 flex-shrink-0' />
                  )}
                </button>
                {openFAQ === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-blue-600 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t.cta.title}</h2>
            <p className='text-xl text-blue-100 max-w-2xl mx-auto'>{t.cta.description}</p>

            <div className='grid md:grid-cols-3 gap-6 my-12'>
              {t.cta.features?.map((feature: string, index: number) => (
                <div key={index} className='flex items-center justify-center space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-400' />
                  <span className='text-blue-100'>{feature}</span>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href={contactUrl}
                className='inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200'>
                {t.cta.primary_button}
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
              <Link
                href={`tel:+33626932734`}
                className='inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors'>
                <Phone className='mr-2 w-5 h-5' />
                {t.cta.secondary_button}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
