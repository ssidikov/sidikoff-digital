'use client'

import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id='about' className='container mx-auto px-4 py-12'>
      <AnimatedSection>
        <h2 className='text-lg text-primary mb-2'>{t('about.title')}</h2>
        <h3 className='text-3xl font-bold mb-6'>{t('about.subtitle')}</h3>
      </AnimatedSection>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <AnimatedSection className='md:hidden relative h-[100px]'>
          <Image src='/logo.svg' alt='About illustration' fill className='object-contain' />
        </AnimatedSection>
        <AnimatedSection className='space-y-4'>
          <p className='text-muted-foreground'>{t('about.p1')}</p>
          <p className='text-muted-foreground'>{t('about.p2')}</p>
        </AnimatedSection>
        <AnimatedSection className='hidden md:block relative h-[300px]'>
          <Image src='/logo.svg' alt='About illustration' fill className='object-contain' />
        </AnimatedSection>
      </div>
    </section>
  )
}
