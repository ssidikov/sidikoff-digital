'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumLegalTemplateProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  children: ReactNode
}

/**
 * PremiumLegalTemplate
 * An editorial, luxury-styled layout wrapper specifically designed for long-form legal documents.
 */
export function PremiumLegalTemplate({
  title,
  subtitle,
  lastUpdated,
  children,
}: PremiumLegalTemplateProps) {
  return (
    <div className='min-h-screen bg-[#FCFBFE] text-[#112D4E] selection:bg-[#3377FF] selection:text-white'>
      {/* Header Section */}
      <header className='relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-32 border-b border-[#112D4E]/10'>
        <div className='mx-auto max-w-4xl px-6 md:px-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='space-y-6'>
            {lastUpdated && (
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#112D4E]/40'>
                {lastUpdated}
              </p>
            )}

            <h1 className='text-5xl md:text-7xl font-light tracking-tight leading-[1.1]'>
              {title}
            </h1>

            {subtitle && (
              <p className='text-xl md:text-2xl font-light text-[#112D4E]/60 max-w-2xl leading-relaxed'>
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Decorative Watermark */}
        <div
          className='absolute -top-12 -right-24 text-[clamp(8rem,15vw,20rem)] font-bold tracking-tighter leading-none text-[#112D4E]/2 select-none pointer-events-none'
          aria-hidden='true'>
          LEGAL
        </div>
      </header>

      {/* Content Section */}
      <main className='mx-auto max-w-4xl px-6 md:px-12 py-20 md:py-32'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className='prose prose-lg prose-[#112D4E] max-w-none
                     prose-headings:font-light prose-headings:tracking-tight prose-headings:text-[#112D4E]
                     prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-[#112D4E]/10
                     prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-4
                     prose-p:text-[#112D4E]/70 prose-p:leading-relaxed prose-p:font-light
                     prose-li:text-[#112D4E]/70
                     prose-a:text-[#3377FF] prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:opacity-80
                     prose-strong:font-semibold prose-strong:text-[#112D4E]'>
          {children}
        </motion.div>
      </main>
    </div>
  )
}
