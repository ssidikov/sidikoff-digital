'use client'

import { useEffect } from 'react'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const locales = ['fr', 'en', 'ru']

export default function LocaleProjectsPage({
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
  const { setLanguage, t } = useLanguage()
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
          const { scrollY, timestamp } = JSON.parse(savedData)
          
          // Only restore if the switch was recent (within 5 seconds)
          if (Date.now() - timestamp < 5000 && scrollY > 0) {
            setTimeout(() => {
              window.scrollTo({ top: scrollY, behavior: 'smooth' })
            }, 100)
          }
          
          // Clean up the saved data
          sessionStorage.removeItem('languageSwitch')
        } catch (error) {
          console.error('Error restoring scroll position:', error)
          sessionStorage.removeItem('languageSwitch')
        }
      }
    }

    const timer = setTimeout(restorePosition, 50)
    return () => clearTimeout(timer)
  }, [locale])
  if (!locales.includes(locale)) {
    notFound()
  }  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container mx-auto py-20 pt-24 md:pt-32'>
        <Portfolio showAllProjects />
      </main>
      <Footer />
      <StructuredData type='all' />
    </div>
  )
}
