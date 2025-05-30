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
// import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const locales = ['fr', 'en', 'ru']

export default function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}) {
  // Handle both Promise and direct params for Next.js 15+ compatibility
  const resolvedParams = React.use(
    typeof (params as any).then === 'function'
      ? (params as Promise<{ locale: string }>)
      : Promise.resolve(params as { locale: string })
  )

  const { locale } = resolvedParams
  const { setLanguage } = useLanguage()

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
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Prices />
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
      <StructuredData type='all' />
    </>
  )
}
