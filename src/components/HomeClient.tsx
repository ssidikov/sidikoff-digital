'use client'

import { useRouter } from 'next/router'

import { Locale } from '@/lib/i18n'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero, Services, Pricing, Portfolio, FAQ, Contact } from '@/sections'
import LocaleProvider from '@/components/LocaleProvider'
import { Dictionary } from '@/lib/dictionaries'

interface HomeClientProps {
  dictionary: Dictionary
}

export function HomeClient({ dictionary }: HomeClientProps) {
  const router = useRouter()
  const locale = (router.locale as Locale) || 'fr'

  return (
    <LocaleProvider locale={locale}>
      <div className='min-h-screen flex flex-col'>
        <Header locale={locale} dictionary={dictionary} />
        <main className='flex-1'>
          <Hero dict={dictionary.hero} common={dictionary.common} locale={locale} />
          <Services dictionary={dictionary.services} locale={locale} />
          <Portfolio dictionary={dictionary.portfolio} locale={locale} />
          <Pricing locale={locale} />
          <FAQ dictionary={dictionary.faq} />
          <Contact dictionary={dictionary.contact} locale={locale} />
        </main>
        <Footer dictionary={dictionary} locale={locale} />
      </div>
    </LocaleProvider>
  )
}
