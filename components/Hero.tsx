'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <section
      id='home'
      className='py-20 pt-20 md:pt-32 md:pb-0 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center'>
      {/* Left part - text and CTA*/}
      <AnimatedSection className='space-y-8'>
        <h1 className='text-4xl xl:text-6xl font-extrabold leading-tight tracking-tight'>
          <span className='gradient-text'>{t('hero.title1')}</span>
          <span className='text-gray-900 dark:text-white'>{t('hero.title2')}</span>
        </h1>{' '}
        <div className='md:hidden relative flex items-center justify-center w-full h-auto'>
          <div className='relative w-full max-w-[320px] aspect-square mx-auto'>
            <Image
              src='/logo-sidikoff.svg'
              alt='SIDIKOFF DIGITAL - Web Agency'
              width={320}
              height={320}
              className='object-contain w-full h-full transition-all duration-300 dark:invert'
              priority
            />
          </div>
        </div>
        <h2 className='sm:text-lg md:text-xl text-muted-foreground max-w-xl'>
          {t('hero.description')}
          <span className='block'>{t('hero.slogan')}</span>
        </h2>{' '}
        <div className='flex flex-row gap-4 justify-between md:justify-normal items-center'>
          <a
            href='/#contact'
            className='w-1/2 md:w-48'
            onClick={(e) => handleNavClick(e, 'contact')}>
            <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center mx-auto'>
              {t('hero.contact')}
            </button>
          </a>

          <a
            href='/#portfolio'
            className='w-1/2 md:w-48'
            onClick={(e) => handleNavClick(e, 'portfolio')}>
            <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium border border-indigo-500 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors flex items-center justify-center mx-auto'>
              {t('hero.viewWork')}
            </button>
          </a>
        </div>
      </AnimatedSection>
      {/* The right part is the image */}{' '}
      <AnimatedSection className='hidden md:w-full md:flex md:justify-center md:items-center'>
        <div className='relative w-full max-w-[420px] aspect-square mx-auto'>
          <Image
            src='/logo-sidikoff.svg'
            alt='SIDIKOFF DIGITAL - Votre Agence Web de Confiance'
            width={420}
            height={420}
            className='object-contain w-full h-full transition-all duration-300 dark:invert'
            priority
          />
        </div>
      </AnimatedSection>
    </section>
  )
}
