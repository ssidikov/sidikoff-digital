'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

import { sectionStyles } from '@/utils/styles'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'transparent'
  backgroundImage?: string
  'aria-labelledby'?: string
  variant?:
    | 'default'
    | 'hero'
    | 'services'
    | 'portfolio'
    | 'testimonials'
    | 'contact'
    | 'faq'
    | 'pricing'
    | 'blog'
    | 'project-detail'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  contentWidth?: 'narrow' | 'normal' | 'wide' | 'full'
}

const BACKGROUND_STYLES = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  transparent: 'bg-transparent',
} as const

const VARIANT_STYLES = {
  default: '',
  hero: 'hero-height w-full flex flex-col items-center justify-center',
  services: 'py-4',
  portfolio: 'py-4',
  testimonials: 'py-4',
  contact: 'py-4',
  faq: 'py-4',
  pricing: 'py-4',
  blog: '',
  'project-detail': 'min-h-screen-stable py-4',
} as const

// Professional gradient system for different sections
const GRADIENT_STYLES = {
  hero: {
    backgroundImage: 'linear-gradient(235deg, #FFFAE6 3%, #EBF2FF 42%, #FFFAE6 98%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  services: {
    backgroundImage: 'linear-gradient(155deg, #F0F9FF 8%, #FFFAE6 35%, #F0F9FF 92%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  portfolio: {
    backgroundImage: 'linear-gradient(315deg, #FAFAFA 5%, #EBF2FF 28%, #F8FAFC 65%, #FFFAE6 95%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  contact: {
    backgroundImage: 'linear-gradient(125deg, #EBF2FF 12%, #E0E7FF 40%, #FFFAE6 88%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  faq: {
    backgroundImage: 'linear-gradient(45deg, #FAFAFA 15%, #FFFAE6 45%, #F0F9FF 85%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  pricing: {
    backgroundImage: 'linear-gradient(225deg, #FDF2F8 10%, #EBF2FF 35%, #FFFAE6 70%, #F0F9FF 95%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  blog: {
    backgroundImage: 'linear-gradient(165deg, #F8FAFC 18%, #EBF2FF 50%, #FFFAE6 82%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  'project-detail': {
    backgroundImage:
      'linear-gradient(135deg, #EBF2FF 0%, #F0F9FF 25%, #FFFAE6 50%, #F8FAFC 75%, #EBF2FF 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
} as const

const PADDING_STYLES = {
  none: '',
  sm: 'px-4 py-12 sm:px-6',
  md: 'px-4 py-8 sm:px-4 lg:py-12 xl:px-8',
  lg: 'px-4 py-8 sm:px-4 lg:py-12 xl:px-24',
  xl: 'px-4 py-8 sm:px-4 lg:py-12 xl:px-16',
  hero: 'pt-28 lg:px-8 xl:pt-0',
} as const

const CONTENT_STYLES = {
  narrow: 'mx-auto max-w-4xl',
  normal: 'mx-auto max-w-6xl',
  wide: 'mx-auto max-w-8xl',
  full: 'w-full',
} as const

/**
 * Section component with built-in styling variants and gradient backgrounds
 * Supports responsive padding, content width control, and accessibility features
 */
export default function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  background = 'white',
  backgroundImage,
  variant = 'default',
  padding = 'md',
  contentWidth = 'wide',
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  const sectionClasses = clsx(
    VARIANT_STYLES[variant],
    BACKGROUND_STYLES[background],
    'relative overflow-hidden',
    className
  )

  const containerClasses = clsx(
    CONTENT_STYLES[contentWidth],
    variant === 'hero' ? PADDING_STYLES.hero : PADDING_STYLES[padding],
    'relative z-10',
    containerClassName
  )

  const hasGradient = !backgroundImage && variant && variant in GRADIENT_STYLES

  return (
    <section id={id} className={sectionClasses} aria-labelledby={ariaLabelledBy}>
      {/* Background image */}
      {backgroundImage && (
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Gradient overlays for different sections */}
      {hasGradient && (
        <div
          className='absolute inset-0'
          style={GRADIENT_STYLES[variant as keyof typeof GRADIENT_STYLES]}
        />
      )}

      <div className={containerClasses}>{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  titleId?: string
}

/**
 * SectionHeader component for consistent section title styling
 * Includes optional subtitle and description with motion animations
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  className = '',
  titleId,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={clsx('mb-16', className)}>
      <h2 id={titleId} className={sectionStyles.title}>
        {title}
        {subtitle && <span className={clsx('mt-2 block', sectionStyles.subtitle)}>{subtitle}</span>}
      </h2>
      {description && <p className={clsx('max-w-4xl', sectionStyles.description)}>{description}</p>}
    </motion.div>
  )
}
