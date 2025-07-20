'use client'

import { useEffect } from 'react'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Prices from '@/components/Prices'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getFAQData, SupportedLocale } from '@/lib/seo'
import StructuredData from '@/components/StructuredData'
import DynamicHreflang from '@/components/DynamicHreflang'

const locales = ['en', 'ru'] // Only non-default locales

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params)

  const { locale } = resolvedParams
  const { setLanguage } = useLanguage()

  const faqStructuredData = getFAQData(locale as SupportedLocale)

  const breadcrumbsByLocale = {
    en: [{ name: 'Home', url: `https://sidikoff.com/en` }],
    ru: [{ name: 'Главная', url: `https://sidikoff.com/ru` }],
  } as Record<'en' | 'ru', Array<{ name: string; url: string }>>
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
    <div className='scroll-smooth min-h-screen antialiased'>
      <DynamicHreflang currentLocale={locale as 'en' | 'ru'} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Prices />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StructuredData
        type='all'
        breadcrumbs={breadcrumbsByLocale[locale as 'en' | 'ru'] || breadcrumbsByLocale.en}
        faqs={faqStructuredData}
      />
    </div>
  )
}
