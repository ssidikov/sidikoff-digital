'use client'

import { useEffect } from 'react'
import { useEcoMode } from '@/lib/eco-utils'

interface MetricsData {
  name?: string
  entryType?: string
  [key: string]: unknown
}

export default function ServiceWorkerInit() {
  const { isEcoMode } = useEcoMode()

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    const registerSW = async () => {
      try {
        // Выбираем соответствующий Service Worker
        const swPath = isEcoMode ? '/eco-sw.js' : '/performance-sw.js'

        const registration = await navigator.serviceWorker.register(swPath, {
          scope: '/',
          updateViaCache: 'none',
        })

        console.log('🚀 Service Worker registered:', registration)

        // Обработка обновлений
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Новая версия доступна
                console.log('🔄 New service worker version available')

                // Можно показать уведомление пользователю
                if (window.confirm('Доступна новая версия приложения. Обновить?')) {
                  window.location.reload()
                }
              }
            })
          }
        })

        // Отправка метрик производительности в Service Worker
        const sendMetricsToSW = (metrics: MetricsData) => {
          if (registration.active) {
            registration.active.postMessage({
              type: 'PERFORMANCE_METRICS',
              metrics,
            })
          }
        }

        // Отправляем метрики при загрузке страницы
        if (typeof window !== 'undefined' && 'performance' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              sendMetricsToSW({
                name: entry.name,
                entryType: entry.entryType,
                startTime: entry.startTime,
                duration: entry.duration,
                timestamp: Date.now(),
              })
            }
          })

          observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] })
        }
      } catch (error) {
        console.error('Service Worker registration failed:', error)
      }
    }

    // Регистрируем Service Worker с задержкой для улучшения LCP
    const timer = setTimeout(registerSW, 1000)

    return () => clearTimeout(timer)
  }, [isEcoMode])

  return null
}
