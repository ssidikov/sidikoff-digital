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
        // Только критические ресурсы для улучшения TTFB
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
        // Blog page resources (conditional loading)
        ...(typeof window !== 'undefined' && window.location.pathname.includes('/blog')
          ? [
              {
                href: '/opengraph-image.jpg',
                as: 'image',
                priority: 'medium' as const,
              },
            ]
          : []),
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

    // Предварительная загрузка следующих страниц (отключена для улучшения TTFB)
    const preloadNextPages = () => {
      if (
        isEcoMode ||
        networkInfo?.effectiveType === 'slow-2g' ||
        networkInfo?.effectiveType === '2g'
      ) {
        return // Отключаем на медленных соединениях
      }

      // Загружаем только после взаимодействия пользователя
      const handleUserInteraction = () => {
        const nextPages = ['/projects', '/#about', '/blog', '/mentions-legales']

        nextPages.forEach((page) => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.href = page
          document.head.appendChild(link)
        })

        // Удаляем слушатели после первого взаимодействия
        document.removeEventListener('mouseenter', handleUserInteraction)
        document.removeEventListener('touchstart', handleUserInteraction)
      }

      // Добавляем слушатели для взаимодействия пользователя
      document.addEventListener('mouseenter', handleUserInteraction, { once: true })
      document.addEventListener('touchstart', handleUserInteraction, { once: true })
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

    // Минимальная задержка для улучшения TTFB
    let delay = 0
    if (isEcoMode) delay = 5000
    else if (networkInfo?.effectiveType === 'slow-2g') delay = 8000
    else if (networkInfo?.effectiveType === '2g') delay = 3000
    else delay = 1000 // Небольшая задержка даже на быстрых соединениях

    const timer = setTimeout(() => {
      preloadResources()
      prefetchDNS()

      // Загружаем следующие страницы через дополнительную задержку
      setTimeout(preloadNextPages, 3000)
    }, delay)

    return () => clearTimeout(timer)
  }, [isEcoMode, networkInfo])

  return null
}
