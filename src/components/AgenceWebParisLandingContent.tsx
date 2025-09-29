'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Rocket,
  Award,
  MapPin,
  Briefcase,
} from 'lucide-react'

import { Dictionary } from '@/lib/dictionaries'
import Portfolio from '@/sections/Portfolio'

interface AgenceWebParisLandingContentProps {
  dictionary: Dictionary
  locale: string
}

const AgenceWebParisLandingContent: React.FC<AgenceWebParisLandingContentProps> = ({
  dictionary,
  locale,
}) => {
  const content = dictionary.agence_web_paris_landing

  // Icon mapping for services
  const getServiceIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      '⚛️': <span className='text-4xl'>⚛️</span>,
      '🌐': <Globe className='h-8 w-8 text-blue-600' />,
      '🚀': <Rocket className='h-8 w-8 text-blue-600' />,
    }
    return iconMap[iconName] || <Zap className='h-8 w-8 text-blue-600' />
  }

  // Icon mapping for about section  
  const getAboutIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      '🏆': <Award className='h-8 w-8 text-blue-600' />,
      '📍': <MapPin className='h-8 w-8 text-blue-600' />,
      '💼': <Briefcase className='h-8 w-8 text-blue-600' />,
    }
    return iconMap[iconName] || <CheckCircle className='h-8 w-8 text-blue-600' />
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden text-gray-800 pt-20 md:pt-24' style={{
        backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'
      }}>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center lg:text-left'>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center bg-gray-800/10 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                <Star className='w-4 h-4 mr-2' />
                {content.hero.badge}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900'>
                {content.hero.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-xl text-gray-700 mb-8 leading-relaxed'>
                {content.hero.description}
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='flex flex-wrap gap-4 mb-8'>
                {content.hero.trust_indicators.map((indicator: string, index: number) => (
                  <div key={index} className='flex items-center bg-gray-800/10 backdrop-blur-sm px-3 py-2 rounded-lg'>
                    <CheckCircle className='w-4 h-4 mr-2 text-green-600' />
                    <span className='text-sm font-medium text-gray-800'>{indicator}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href={locale === 'fr' ? '/contact' : `/${locale}/contact`}
                  className='inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
                  {content.hero.cta_primary}
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
                <Link
                  href={locale === 'fr' ? '/projects' : `/${locale}/projects`}
                  className='inline-flex items-center px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-lg transition-all duration-300'>
                  {content.hero.cta_secondary}
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='relative'>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center'
                  alt='Équipe développeurs agence web Paris travaillant sur Next.js et React'
                  width={600}
                  height={400}
                  quality={95}
                  className='rounded-2xl shadow-2xl object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl'></div>
                
                {/* Floating badges */}
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2'>
                  <div className='flex items-center space-x-2'>
                    <span className='text-blue-600 font-bold'>Next.js</span>
                    <span className='text-gray-400'>•</span>
                    <span className='text-purple-600 font-bold'>React</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 bg-white relative overflow-hidden'>
        {/* Background decoration */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-32 translate-x-32'></div>
        <div className='absolute bottom-0 left-0 w-48 h-48 bg-purple-50 rounded-full translate-y-24 -translate-x-24'></div>
        
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.services.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {content.services.subtitle}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {content.services.items.map((service: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-blue-200 hover:-translate-y-2'>
                
                {/* Service Image */}
                <div className='mb-6 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50'>
                  <Image
                    src={index === 0 
                      ? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' 
                      : index === 1 
                      ? 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=300&fit=crop'
                      : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
                    }
                    alt={service.title}
                    width={400}
                    height={300}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                
                <div className='mb-6'>
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  {service.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden'>
        {/* Background image with overlay */}
        <div className='absolute inset-0 opacity-10'>
          <Image
            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop'
            alt='Équipe agence web Paris'
            fill
            className='object-cover'
            quality={70}
          />
        </div>
        
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.about.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              {content.about.subtitle}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {content.about.items.map((item: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50'>
                <div className='flex justify-center mb-6'>
                  {getAboutIcon(item.icon)}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white relative overflow-hidden'>
        {/* Background pattern */}
        <div className='absolute inset-0 opacity-5'>
          <Image
            src='https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
            alt='Processus développement web agence Paris'
            fill
            className='object-cover'
            quality={70}
          />
        </div>
        
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              {content.process.title}
            </h2>
          </motion.div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full'></div>
            
            <div className='space-y-12 md:space-y-16'>
              {content.process.steps.map((step: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>
                        {step.title}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Step number */}
                  <div className='relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg my-4 md:my-0'>
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className='hidden md:block md:w-5/12'></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Using existing Portfolio component */}
      <Portfolio 
        locale={locale as 'fr' | 'en' | 'ru'} 
        dictionary={{
          title: content.portfolio_teaser.title,
          subtitle: content.portfolio_teaser.description,
          filter: {
            all: locale === 'fr' ? 'Tous' : locale === 'en' ? 'All' : 'Все',
            web: locale === 'fr' ? 'Web' : locale === 'en' ? 'Web' : 'Веб',
            mobile: locale === 'fr' ? 'Mobile' : locale === 'en' ? 'Mobile' : 'Мобильные',
            design: locale === 'fr' ? 'Design' : locale === 'en' ? 'Design' : 'Дизайн'
          },
          projects: {},
          view_project: content.portfolio_teaser.cta,
          live_demo: locale === 'fr' ? 'Démo' : locale === 'en' ? 'Demo' : 'Демо',
          github: locale === 'fr' ? 'Code source' : locale === 'en' ? 'Source Code' : 'Исходный код'
        }} 
        className='py-20 bg-gradient-to-br from-gray-50 to-blue-50' 
      />

      {/* Final CTA Section */}
      <section className='py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden'>
        {/* Background image with overlay */}
        <div className='absolute inset-0'>
          <Image
            src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
            alt='Skyline Paris Tour Eiffel agence web'
            fill
            className='object-cover opacity-20'
            quality={70}
          />
          <div className='absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-600/80'></div>
        </div>
        
        <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
              {content.cta.title}
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              {content.cta.description}
            </p>
            
            <Link
              href={locale === 'fr' ? '/contact' : `/${locale}/contact`}
              className='inline-flex items-center px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
              {content.cta.button}
              <ArrowRight className='ml-3 h-6 w-6' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AgenceWebParisLandingContent