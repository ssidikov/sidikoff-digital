'use client'

import { motion } from 'framer-motion'
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
}

const variantStyles = {
  default: '', // Убираем py-20 отсюда
  hero: 'min-h-screen w-full flex flex-col items-center justify-center',
  compact: '', // Убираем py-12 отсюда
}

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
  // Определяем отступы для hero секции
  const getPaddingClass = () => {
    if (variant === 'hero') {
      return 'pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8'
    }
    return sectionStyles.padding[padding]
  }

  const sectionClass = `
    ${variantStyles[variant]} 
    ${backgroundStyles[background]} 
    ${className} 
    relative overflow-hidden
  `.trim()

  return (
    <section id={id} className={sectionClass} aria-labelledby={ariaLabelledBy}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Dark overlay for better text readability */}
          {/* <div className='absolute inset-0 bg-black/10' /> */}
        </>
      )}

      {/* Gradient Overlay for Hero (only if no background image) */}
      {variant === 'hero' && !backgroundImage && (
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5' />
      )}

      <div
        className={`${sectionStyles.content[contentWidth]} ${getPaddingClass()} ${containerClassName} relative z-10`}>
        {children}
      </div>
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
      className={`text-center mb-16 ${className}`}>
      <h2 id={titleId} className={sectionStyles.title}>
        {title}
        {subtitle && <span className={`block ${sectionStyles.subtitle} mt-2`}>{subtitle}</span>}
      </h2>
      {description && <p className={`${sectionStyles.description} max-w-3xl`}>{description}</p>}
    </motion.div>
  )
}
