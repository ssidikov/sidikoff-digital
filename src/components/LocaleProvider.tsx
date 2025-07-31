'use client'

import { useEffect } from 'react'

import { Locale } from '@/lib/i18n'




interface LocaleProviderProps {
  locale: Locale
  children: React.ReactNode
}

export default function LocaleProvider({ locale, children }: LocaleProviderProps) {
  useEffect(() => {
    // Update the HTML lang attribute dynamically
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  return <>{children}</>
}
