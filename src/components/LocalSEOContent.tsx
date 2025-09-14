'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Users,
  TrendingUp,
  Award,
  Clock,
  Smartphone,
  Globe,
  Search,
  Star,
  ArrowRight,
  ShoppingBag,
  Shield,
} from 'lucide-react'

import { SEOLocation } from '@/lib/seo-utils'
import { Locale } from '@/lib/i18n'
import { Dictionary } from '@/lib/dictionaries'
import { Portfolio } from '@/sections'

interface LocalData {
  statistics: {
    label: string
    value: string
    icon: React.ElementType
  }[]
}

interface LocalSEOContentProps {
  location: SEOLocation
  locale: Locale
  dictionary: Dictionary
}

// Données simplifiées pour toutes les localisations
const getLocalData = (dictionary: Dictionary): LocalData => {
  return {
    statistics: [
      { label: dictionary.seo_local.statistics.websites_created, value: '20+', icon: Globe },
      { label: dictionary.seo_local.statistics.satisfied_clients, value: '95%', icon: Star },
      { label: dictionary.seo_local.statistics.average_delivery, value: '3 semaines', icon: Clock },
      { label: dictionary.seo_local.statistics.support_included, value: '24/7', icon: Shield },
    ],
  }
}

export default function LocalSEOContent({ location, locale, dictionary }: LocalSEOContentProps) {
  const localData = getLocalData(dictionary)

  // Helper function to replace placeholders in text
  const replacePlaceholders = (text: string, city: string): string => {
    return text.replace(/{city}/g, city)
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section - Création de sites web */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 pt-32 pb-16'>
        <div className='absolute inset-0 bg-black/20' />

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center text-white'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              {replacePlaceholders(dictionary.seo_local.hero.title, location.city)}
            </h1>

            <p className='text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed'>
              {replacePlaceholders(dictionary.seo_local.hero.description, location.city)}
            </p>

            {/* Boutons d'action */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl'>
                {dictionary.seo_local.hero.cta_primary}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
              <Link
                href='tel:+33626932734'
                className='inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-200'>
                {dictionary.seo_local.hero.cta_secondary}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>

            {/* Statistiques services */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
              {localData.statistics.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
                    <IconComponent className='w-6 h-6 mx-auto mb-2' />
                    <div className='text-2xl font-bold'>{stat.value}</div>
                    <div className='text-sm opacity-90'>{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services de création de sites web */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
              {dictionary.seo_local.services.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              {replacePlaceholders(dictionary.seo_local.services.description, location.city)}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: Globe,
                title: dictionary.seo_local.services.showcase.title,
                description: dictionary.seo_local.services.showcase.description,
                price: dictionary.seo_local.services.showcase.price,
              },
              {
                icon: ShoppingBag,
                title: dictionary.seo_local.services.ecommerce.title,
                description: dictionary.seo_local.services.ecommerce.description,
                price: dictionary.seo_local.services.ecommerce.price,
              },
              {
                icon: Smartphone,
                title: dictionary.seo_local.services.webapp.title,
                description: dictionary.seo_local.services.webapp.description,
                price: dictionary.seo_local.services.webapp.price,
              },
              {
                icon: Search,
                title: dictionary.seo_local.services.seo.title,
                description: replacePlaceholders(
                  dictionary.seo_local.services.seo.description,
                  location.city
                ),
                price: dictionary.seo_local.services.seo.price,
              },
              {
                icon: TrendingUp,
                title: dictionary.seo_local.services.redesign.title,
                description: dictionary.seo_local.services.redesign.description,
                price: dictionary.seo_local.services.redesign.price,
              },
              {
                icon: Shield,
                title: dictionary.seo_local.services.maintenance.title,
                description: dictionary.seo_local.services.maintenance.description,
                price: dictionary.seo_local.services.maintenance.price,
              },
            ].map(
              (
                service: {
                  icon: React.ElementType
                  title: string
                  description: string
                  price: string
                },
                index
              ) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group'>
                    <div className='bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                      <IconComponent className='w-8 h-8 text-white' />
                    </div>

                    <h3 className='text-xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                    <p className='text-gray-600 leading-relaxed mb-6'>{service.description}</p>

                    <div className='flex items-center justify-between'>
                      <div className='text-2xl font-bold text-blue-600'>{service.price}</div>
                      <ArrowRight className='w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300' />
                    </div>

                    {/* Effet hover */}
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </motion.div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* Pourquoi me choisir */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
              {dictionary.seo_local.advantages.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              {dictionary.seo_local.advantages.description}
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: Clock,
                title: dictionary.seo_local.advantages.fast_delivery.title,
                description: dictionary.seo_local.advantages.fast_delivery.description,
              },
              {
                icon: Award,
                title: dictionary.seo_local.advantages.guaranteed_quality.title,
                description: dictionary.seo_local.advantages.guaranteed_quality.description,
              },
              {
                icon: Users,
                title: dictionary.seo_local.advantages.complete_support.title,
                description: dictionary.seo_local.advantages.complete_support.description,
              },
            ].map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-white rounded-2xl p-8 shadow-lg text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                    <IconComponent className='w-8 h-8 text-blue-600' />
                  </div>

                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{advantage.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{advantage.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Chiffres clés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='mt-16 bg-white rounded-3xl p-8 shadow-xl'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              {localData.statistics.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className='space-y-3'>
                    <IconComponent className='w-12 h-12 text-blue-600 mx-auto' />
                    <div className='text-3xl font-bold text-gray-900'>{stat.value}</div>
                    <div className='text-sm text-gray-600 font-medium'>{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio - Mes réalisations */}
      <section className='py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
              {dictionary.seo_local.portfolio.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              {dictionary.seo_local.portfolio.description}
            </p>
          </motion.div>

          {/* Portfolio existant */}
          <Portfolio dictionary={dictionary.portfolio} locale={locale} />
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              {dictionary.seo_local.cta.title}
            </h2>
            <p className='text-xl mb-8 opacity-90'>{dictionary.seo_local.cta.description}</p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-50 transition-colors duration-200'>
                {dictionary.seo_local.cta.primary_button}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
              <Link
                href='tel:+33626932734'
                className='inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-colors duration-200'>
                {dictionary.seo_local.cta.secondary_button}
                <ArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
