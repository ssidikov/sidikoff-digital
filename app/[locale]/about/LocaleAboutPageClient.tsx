'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

interface LocaleAboutPageClientProps {
  locale: string
}

export default function LocaleAboutPageClient({ locale }: LocaleAboutPageClientProps) {
  const { setLanguage } = useLanguage()

  useEffect(() => {
    setLanguage(locale as 'fr' | 'en' | 'ru')
  }, [locale, setLanguage])

  return (
    <div className='min-h-screen bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <Breadcrumbs />
      <main className='pt-20'>
        <About />
      </main>
      <Footer />
    </div>
  )
}
