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
  default: 'py-20',
  hero: 'min-h-screen w-full flex flex-col items-center justify-center',
  compact: 'py-12',
}

export default function Section({
  children,
  id,
  className = '',
  containerClassName = '',
  background = 'white',
  variant = 'default',
  padding = 'md',
  contentWidth = 'wide',
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  const sectionClass = `
    ${variantStyles[variant]} 
    ${backgroundStyles[background]} 
    ${className} 
    relative overflow-hidden
  `.trim()

  return (
    <section id={id} className={sectionClass} aria-labelledby={ariaLabelledBy}>
      <div
        className={`${sectionStyles.content[contentWidth]} ${sectionStyles.padding[padding]} ${containerClassName} relative z-10`}>
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
