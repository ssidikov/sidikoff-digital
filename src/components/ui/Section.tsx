'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import { sectionStyles } from '@/utils/styles'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  transform?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'transparent'
  backgroundImage?: string
  'aria-labelledby'?: string
  variant?:
    | 'default'
    | 'hero'
    | 'services'
    | 'portfolio'
    | 'contact'
    | 'faq'
    | 'pricing'
    | 'blog'
    | 'project-detail'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  contentWidth?: 'narrow' | 'normal' | 'wide' | 'full'
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  transparent: 'bg-transparent',
} as const

const variantStyles = {
  default: '',
  hero: 'hero-height w-full flex flex-col items-center justify-center',
  services: 'py-4',
  portfolio: 'py-4',
  contact: 'py-4',
  faq: 'py-4',
  pricing: 'py-4',
  blog: '',
  'project-detail': 'min-h-screen-stable py-4',
} as const

// Профессиональная система градиентов
const gradientStyles = {
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

const paddingStyles = {
  none: '',
  sm: 'px-4 sm:px-6 py-12',
  md: 'px-4 sm:px-4 xl:px-8 py-8 lg:py-12',
  lg: 'px-4 sm:px-4 xl:px-24 py-8 lg:py-12',
  xl: 'px-4 sm:px-4 xl:px-16 py-8 lg:py-12',
  hero: 'pt-28 xl:pt-0 lg:px-8',
} as const

const contentStyles = {
  narrow: 'max-w-4xl mx-auto',
  normal: 'max-w-6xl mx-auto',
  wide: 'max-w-8xl mx-auto',
  full: 'w-full',
} as const

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
    variantStyles[variant],
    backgroundStyles[background],
    className,
    'relative overflow-hidden'
  )

  const containerClasses = clsx(
    contentStyles[contentWidth],
    variant === 'hero' ? paddingStyles.hero : paddingStyles[padding],
    containerClassName,
    'relative z-10'
  )

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
      {!backgroundImage && variant && variant in gradientStyles && (
        <div
          className='absolute inset-0'
          style={gradientStyles[variant as keyof typeof gradientStyles]}
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
        {subtitle && <span className={clsx('block mt-2', sectionStyles.subtitle)}>{subtitle}</span>}
      </h2>
      {description && <p className={clsx('max-w-4xl', sectionStyles.description)}>{description}</p>}
    </motion.div>
  )
}
