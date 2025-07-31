import type { Metadata } from 'next'

import { fallbackDictionary } from '@/lib/fallback-dictionary'

import { Footer } from '@/components/Footer'
import { getDictionary } from '@/lib/dictionaries'
import { Header } from '@/components/Header'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'),
    title: 'Web Agency - Professional Web Development',
    description: 'Professional web development services for modern businesses',
    other: {
      'google-site-verification': 'your-verification-code',
    },
  }
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params

  try {
    const dict = await getDictionary(locale)

    // Ensure dict is an object and navigation exists, provide fallback if needed
    if (typeof dict !== 'object' || dict === null) {
      return (
        <LocaleProvider locale={locale}>
          <div className='min-h-screen'>
            <Header locale={locale} dictionary={fallbackDictionary} />
            <main className='m-0 p-0'>
              <div className='p-4'>
                <h1>Loading Error</h1>
                <p>There was an error loading the page. Please refresh.</p>
              </div>
            </main>
            <Footer dictionary={fallbackDictionary} locale={locale} />
          </div>
        </LocaleProvider>
      )
    }

    if (!('navigation' in dict)) {
      // Add navigation object to dictionary with proper typing
      Object.assign(dict, {
        navigation: {
          home: 'Home',
          services: 'Services',
          portfolio: 'Portfolio',
          faq: 'FAQ',
          contact: 'Contact',
          language: 'Language',
        },
      })
    }

    return (
      <LocaleProvider locale={locale}>
        <div className='min-h-screen'>
          <Header locale={locale} dictionary={dict} />
          <main className='m-0 p-0'>{children}</main>
          <Footer dictionary={dict} locale={locale} />
        </div>
      </LocaleProvider>
    )
  } catch {
    return (
      <LocaleProvider locale={locale}>
        <div className='min-h-screen'>
          <Header locale={locale} dictionary={fallbackDictionary} />
          <main className='m-0 p-0'>
            <div className='p-4'>
              <h1>Loading Error</h1>
              <p>There was an error loading the page. Please refresh.</p>
            </div>
          </main>
          <Footer dictionary={fallbackDictionary} locale={locale} />
        </div>
      </LocaleProvider>
    )
  }
}
