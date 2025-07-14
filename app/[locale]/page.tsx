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

const locales = ['fr', 'en', 'ru']

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = React.use(params)

  const { locale } = resolvedParams
  const { setLanguage } = useLanguage()

  const faqStructuredData = getFAQData(locale as SupportedLocale)

  const breadcrumbsByLocale = {
    fr: [{ name: 'Accueil', url: `https://www.sidikoff.com/${locale}` }],
    en: [{ name: 'Home', url: `https://www.sidikoff.com/${locale}` }],
    ru: [{ name: 'Главная', url: `https://www.sidikoff.com/${locale}` }],
  } as Record<SupportedLocale, Array<{ name: string; url: string }>>
  useEffect(() => {
    if (!locales.includes(locale)) {
      notFound()
    }
    setLanguage(locale as 'fr' | 'en' | 'ru')
  }, [locale, setLanguage])

  // Restore scroll position after language switch
  useEffect(() => {
    const restorePosition = () => {
      const savedData = sessionStorage.getItem('languageSwitch')
      if (savedData) {
        try {
          const { scrollY, hash, section, timestamp } = JSON.parse(savedData)

          // Only restore if the switch was recent (within 5 seconds)
          if (Date.now() - timestamp < 5000) {
            if (hash && hash.startsWith('#')) {
              // If we have a hash, scroll to that element
              const element = document.querySelector(hash)
              if (element) {
                setTimeout(() => {
                  element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }
            } else if (section) {
              // If we have a section, scroll to that section
              const element = document.getElementById(section)
              if (element) {
                setTimeout(() => {
                  element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }
            } else if (scrollY > 0) {
              // Otherwise restore exact scroll position
              setTimeout(() => {
                window.scrollTo({ top: scrollY, behavior: 'smooth' })
              }, 100)
            }
          }

          // Clean up the saved data
          sessionStorage.removeItem('languageSwitch')
        } catch (error) {
          console.error('Error restoring scroll position:', error)
          sessionStorage.removeItem('languageSwitch')
        }
      }
    }

    // Small delay to ensure page is rendered
    const timer = setTimeout(restorePosition, 50)
    return () => clearTimeout(timer)
  }, [locale])

  if (!locales.includes(locale)) {
    notFound()
  }
  return (
    <div className='scroll-smooth min-h-screen antialiased'>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Prices />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StructuredData
        type='all'
        breadcrumbs={breadcrumbsByLocale[locale as SupportedLocale] || breadcrumbsByLocale.fr}
        faqs={faqStructuredData}
      />
    </div>
  )
}
