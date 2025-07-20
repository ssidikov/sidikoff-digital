'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const selectLanguage = (lang: 'fr' | 'en' | 'ru') => {
    if (lang === language) {
      setIsOpen(false)
      return // Don't do anything if same language
    }

    setIsOpen(false)

    // Update language context and localStorage - stay on current page
    setLanguage(lang)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const getLanguageName = (code: string) => {
    switch (code) {
      case 'fr':
        return 'Français'
      case 'en':
        return 'English'
      case 'ru':
        return 'Русский'
      default:
        return code.toUpperCase()
    }
  }
  return (
    <div className='relative language-transition' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='flex items-center space-x-1 px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 language-transition'
        aria-expanded={isOpen}
        aria-haspopup='true'>
        <Globe className='h-4 w-4 mr-1' />
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 z-10'>
          <div className='py-1' role='menu' aria-orientation='vertical'>
            {['fr', 'en', 'ru'].map((lang) => (
              <button
                key={lang}
                onClick={() => selectLanguage(lang as 'fr' | 'en' | 'ru')}
                className={`block px-4 py-2 text-sm w-full text-left transition-all duration-200 ${
                  language === lang
                    ? 'bg-gray-100 dark:bg-gray-800 text-indigo-500 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-500'
                }`}
                role='menuitem'>
                <span className='flex items-center'>
                  {language === lang && <span className='mr-2'>✓</span>}
                  {getLanguageName(lang)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
