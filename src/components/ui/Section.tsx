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
  variant?: 'default' | 'hero' | 'compact'
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
  hero: 'min-h-screen w-full flex flex-col items-center justify-center',
  compact: '',
} as const

const paddingStyles = {
  none: '',
  sm: 'px-4 sm:px-6 py-12',
  md: 'px-4 sm:px-4 lg:px-8 py-16',
  lg: 'px-4 sm:px-4 lg:px-24 py-20',
  xl: 'px-4 sm:px-4 lg:px-16 py-24',
  hero: 'pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8',
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

      {/* Optional hero gradient overlay */}
      {variant === 'hero' && !backgroundImage && (
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5' />
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
      className={clsx('text-center mb-16', className)}>
      <h2 id={titleId} className={sectionStyles.title}>
        {title}
        {subtitle && <span className={clsx('block mt-2', sectionStyles.subtitle)}>{subtitle}</span>}
      </h2>
      {description && <p className={clsx('max-w-4xl', sectionStyles.description)}>{description}</p>}
    </motion.div>
  )
}
