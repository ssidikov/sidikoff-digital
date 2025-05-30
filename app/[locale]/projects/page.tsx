'use client'

import { useEffect } from 'react'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredData from '@/components/StructuredData'

const locales = ['fr', 'en', 'ru']

export default function LocaleProjectsPage({ params }: { params: Promise<{ locale: string }> | { locale: string } }) {
  // Handle both Promise and direct params for Next.js 15+ compatibility
  const resolvedParams = React.use(
    typeof (params as any).then === 'function' 
      ? params as Promise<{ locale: string }> 
      : Promise.resolve(params as { locale: string })
  )
  
  const { locale } = resolvedParams
  const { setLanguage, t } = useLanguage()

  useEffect(() => {
    if (!locales.includes(locale)) {
      notFound()
    }
    setLanguage(locale as 'fr' | 'en' | 'ru')
  }, [locale, setLanguage])
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className='pt-20'>
        <div className='container mx-auto px-4 py-8'>
          <Breadcrumbs />
          <div className='mt-8'>
            <h1 className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-foreground dark:via-primary dark:to-primary/80 bg-clip-text text-transparent'>
              {t('portfolio.title')}
            </h1>
            <Portfolio />
          </div>
        </div>
      </main>
      <Footer />
      <StructuredData type='all' />
    </>
  )
}
