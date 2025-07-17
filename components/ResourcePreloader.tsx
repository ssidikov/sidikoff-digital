'use client'

import { useEffect } from 'react'
import { useEcoMode } from '@/lib/eco-utils'

interface PreloadResource {
  href: string
  as: string
  type?: string
  crossOrigin?: string
  priority?: 'high' | 'medium' | 'low'
}

export default function ResourcePreloader() {
  const { isEcoMode, networkInfo } = useEcoMode()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const preloadResources = () => {
      const resources: PreloadResource[] = [
        // Критические изображения
        {
          href: '/logo-sidikoff.svg',
          as: 'image',
          priority: 'high',
        },
        {
          href: '/favicon.svg',
          as: 'image',
          priority: 'high',
        },
        // Изображения услуг (defer offscreen images - load with low priority)
        {
          href: '/images/services/web-site.webp',
          as: 'image',
          priority: 'low',
        },
        {
          href: '/images/services/redesign.webp',
          as: 'image',
          priority: 'low',
        },
        {
          href: '/images/services/seo.webp',
          as: 'image',
          priority: 'low',
        },
        {
          href: '/images/services/support.webp',
          as: 'image',
          priority: 'low',
        },
      ]

      // Фильтруем ресурсы в зависимости от условий
      const filteredResources = resources.filter((resource) => {
        if (isEcoMode) {
          // В eco-режиме загружаем только критические ресурсы
          return resource.priority === 'high'
        }

        if (networkInfo?.effectiveType === 'slow-2g') {
          // На очень медленных соединениях только самое необходимое
          return resource.priority === 'high'
        }

        if (networkInfo?.effectiveType === '2g') {
          // На медленных соединениях исключаем низкоприоритетные ресурсы
          return resource.priority !== 'low'
        }

        return true
      })

      // Создаем link элементы для предварительной загрузки
      filteredResources.forEach((resource) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource.href
        link.as = resource.as

        if (resource.type) {
          link.type = resource.type
        }

        if (resource.crossOrigin) {
          link.crossOrigin = resource.crossOrigin
        }

        // Добавляем в head
        document.head.appendChild(link)
      })
    }

    // Предварительная загрузка следующих страниц
    const preloadNextPages = () => {
      if (isEcoMode) return // Отключаем в eco-режиме

      const nextPages = ['/projects', '/about', '/mentions-legales']

      nextPages.forEach((page) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
      })
    }

    // DNS prefetch для внешних ресурсов
    const prefetchDNS = () => {
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com',
        'www.googletagmanager.com',
      ]

      domains.forEach((domain) => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = `//${domain}`
        document.head.appendChild(link)
      })
    }

    // Задержка в зависимости от условий
    let delay = 0
    if (isEcoMode) delay = 3000
    else if (networkInfo?.effectiveType === 'slow-2g') delay = 5000
    else if (networkInfo?.effectiveType === '2g') delay = 2000

    const timer = setTimeout(() => {
      preloadResources()
      prefetchDNS()

      // Загружаем следующие страницы через дополнительную задержку
      setTimeout(preloadNextPages, 2000)
    }, delay)

    return () => clearTimeout(timer)
  }, [isEcoMode, networkInfo])

  return null
}
