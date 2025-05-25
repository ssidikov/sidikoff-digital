'use client'

import React, { MouseEvent as ReactMouseEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { expertiseItems } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Expertise() {
  const { t } = useLanguage()

  return (
    <section className='container mx-auto px-4 md:py-20 bg-card'>
      <AnimatedSection>
        <h2 className='text-2xl font-semibold mb-2 text-primary gradient-text'>
          {t('expertise.title')}
        </h2>
        <h3 className='text-3xl font-bold mb-12'>{t('expertise.subtitle')}</h3>
      </AnimatedSection>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {expertiseItems.map((item, index) => (
          <AnimatedSection key={index}>
            <Card key={index} item={item} t={t} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

function Card({
  item,
  t,
}: {
  item: { titleKey: string; descriptionKey: string; icon: string }
  t: (key: string) => string
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 70%)`

  return (
    <div
      className='group relative flex flex-col h-full rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900 p-6 min-h-[190px] md:min-h-[200px] smooth-animation'
      onMouseMove={handleMouseMove}>
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className='space-y-4'>
        <Image
          src={item.icon}
          alt={t(item.titleKey)}
          priority
          sizes='(max-width: 768px) 100px, 100px'
          width={100}
          height={100}
          className='object-cover w-10 h-10 dark:invert'
        />
        <h4 className='font-semibold text-gray-900 dark:text-white'>{t(item.titleKey)}</h4>
        <p className='text-sm text-gray-600 dark:text-gray-300 max-w-md'>
          {t(item.descriptionKey)}
        </p>
      </div>
    </div>
  )
}
