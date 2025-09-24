'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button, Heading, Text } from '@/design-system'
import { SectionProps } from '../types'

export function CTASection({ dictionary, locale, industryConfig }: SectionProps) {
  const t = (dictionary as unknown as Record<string, Record<string, unknown>>)
  const ctaData = t.cta || {} as Record<string, unknown>
  
  if (!ctaData.title) {
    return null
  }

  // Generate contact URL based on locale
  const contactUrl = locale === 'fr' ? '/contact' : `/${locale}/contact`

  return (
    <section 
      className='py-20 relative overflow-hidden'
      style={{
        background: `linear-gradient(135deg, ${industryConfig.colors.gradient.from}, ${industryConfig.colors.gradient.to})`
      }}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-32 -translate-y-32' />
        <div className='absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-16 translate-y-16' />
      </div>

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='space-y-8'
        >
          <Heading level="h2" className='text-white text-3xl lg:text-4xl'>
            {ctaData.title as string}
          </Heading>

          {typeof ctaData.description === 'string' && ctaData.description && (
            <Text size="xl" className='text-white/90 max-w-2xl mx-auto leading-relaxed'>
              {ctaData.description}
            </Text>
          )}

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link href={contactUrl}>
              <Button 
                size="lg" 
                variant="secondary"
                className='bg-white text-gray-900 hover:bg-gray-100 group px-8 py-4'
              >
                {typeof ctaData.primary === 'string' ? ctaData.primary : 'Commencer mon projet'}
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Button>
            </Link>

            {typeof ctaData.phone === 'string' && ctaData.phone && (
              <Link href={`tel:${ctaData.phone}`}>
                <Button 
                  size="lg" 
                  variant="ghost"
                  className='text-white border-white hover:bg-white/10 px-8 py-4'
                >
                  <Phone className='mr-2 w-5 h-5' />
                  {ctaData.phone}
                </Button>
              </Link>
            )}
          </div>

          {/* Additional Info */}
          {typeof ctaData.note === 'string' && ctaData.note && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='pt-8 border-t border-white/20'
            >
              <Text className='text-white/80 text-sm'>
                {ctaData.note}
              </Text>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}