'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Button, Heading, Text } from '@/design-system'
import { SectionProps } from '../types'

// Icon mapping for dynamic icon rendering
const iconMap = {
  star: Star,
  'check-circle': CheckCircle,
  'arrow-right': ArrowRight,
} as const

function getIcon(iconName: string, className?: string) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Star
  return <IconComponent className={className} />
}

interface HeroSectionProps extends SectionProps {
  breadcrumbs?: {
    items: Array<{ label: string; href?: string }>
  }
}

// Type guards for safe property access
function isStringProperty(obj: Record<string, unknown>, key: string): obj is Record<string, string> {
  return typeof obj[key] === 'string'
}

function isArrayProperty(obj: Record<string, unknown>, key: string): obj is Record<string, unknown[]> {
  return Array.isArray(obj[key])
}

export function HeroSection({ dictionary, locale, industryConfig, breadcrumbs }: HeroSectionProps) {
  // Access restaurant landing data from dictionary - using safe property access
  const restaurantData = (dictionary as unknown as Record<string, unknown>).restaurant_landing as Record<string, unknown> || {}
  const heroData = (restaurantData.hero as Record<string, unknown>) || {}
  
  // Generate contact URL based on locale
  const contactUrl = locale === 'fr' ? '/contact' : `/${locale}/contact`
  const portfolioUrl = locale === 'fr' ? '/portfolio' : `/${locale}/portfolio`

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br ${industryConfig.hero.backgroundPattern} pt-[120px] md:pt-[160px] pb-8 md:pb-16`}
      style={{
        background: `linear-gradient(135deg, ${industryConfig.colors.gradient.from}10, ${industryConfig.colors.gradient.to}10)`
      }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div 
          className='absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-60 animate-pulse'
          style={{ backgroundColor: `${industryConfig.colors.primary}20` }}
        />
        <div 
          className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-40 animate-pulse delay-700'
          style={{ backgroundColor: `${industryConfig.colors.secondary}30` }}
        />
      </div>

      <div className='relative w-full max-w-7xl mx-auto'>
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            className='mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ol className='flex items-center space-x-2 text-sm text-gray-600'>
              {breadcrumbs.items.map((item, index: number) => (
                <li key={index} className='flex items-center'>
                  {index > 0 && <span className='mx-2 text-gray-400'>/</span>}
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className='hover:text-accent transition-colors'
                      style={{ '--accent': industryConfig.colors.accent } as React.CSSProperties}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span 
                      className='font-medium'
                      style={{ color: industryConfig.colors.accent }}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Hero Content */}
          <motion.div
            className='text-center lg:text-left'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            {isStringProperty(heroData, 'badge') && (
              <motion.div
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6'
                style={{
                  backgroundColor: `${industryConfig.colors.primary}15`,
                  color: industryConfig.colors.primary
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {getIcon(industryConfig.icons.badge, 'w-4 h-4')}
                {heroData.badge}
              </motion.div>
            )}

            {/* Title */}
            {isStringProperty(heroData, 'title') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='mb-6'
              >
                <Heading 
                  level="h1" 
                  variant="gradient"
                  className='text-4xl md:text-5xl lg:text-6xl'
                >
                  {heroData.title}
                </Heading>
              </motion.div>
            )}

            {/* Description */}
            {isStringProperty(heroData, 'description') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mb-8'
              >
                <Text size="lg" variant="muted" className='leading-relaxed'>
                  {heroData.description}
                </Text>
              </motion.div>
            )}

            {/* Benefits List */}
            {isArrayProperty(heroData, 'benefits') && heroData.benefits && (
              <motion.ul
                className='space-y-3 mb-8'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {heroData.benefits.map((benefit: unknown, index: number) => (
                  <motion.li
                    key={index}
                    className='flex items-center space-x-3'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle 
                      className='w-5 h-5 flex-shrink-0' 
                      style={{ color: industryConfig.colors.accent }}
                    />
                    <Text>{typeof benefit === 'string' ? benefit : String(benefit)}</Text>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* CTA Buttons */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href={contactUrl}>
                <Button size="lg" className='group'>
                  {isStringProperty(heroData, 'cta_primary') ? heroData.cta_primary : 'Contact Us'}
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              
              <Link href={portfolioUrl}>
                <Button variant="outline" size="lg">
                  {isStringProperty(heroData, 'cta_secondary') ? heroData.cta_secondary : 'View Portfolio'}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src={industryConfig.hero.image}
                alt={industryConfig.hero.imageAlt}
                fill
                className='object-cover'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
                quality={95}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}