'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { language } = useLanguage()

  useEffect(() => {
    // Обновляем lang атрибут в HTML элементе
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  return <>{children}</>
}
