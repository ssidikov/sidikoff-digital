'use client'

import { useEffect } from 'react'
import { useEcoMode } from '@/lib/eco-utils'

export default function FontOptimizer() {
  const { isEcoMode } = useEcoMode()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Предварительная загрузка шрифтов - дополнительная оптимизация
    const preloadFonts = () => {
      // Проверяем, не загружены ли уже шрифты Next.js
      const existingNextFonts = document.querySelector('link[data-next-font]')
      if (existingNextFonts) {
        console.log('📝 Next.js fonts already loaded, skipping manual preload')
        return
      }

      // Fallback для случаев, когда Next.js font optimization не сработал
      const preloadLink = document.createElement('link')
      preloadLink.rel = 'preload'
      preloadLink.as = 'style'
      preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
      document.head.appendChild(preloadLink)

      // Асинхронная загрузка стилей
      const fontLink = document.createElement('link')
      fontLink.rel = 'stylesheet'
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
      fontLink.media = 'print'
      fontLink.onload = () => {
        fontLink.media = 'all'
      }
      document.head.appendChild(fontLink)
    }

    // Оптимизация загрузки шрифтов
    const optimizeFontLoading = () => {
      // Проверяем поддержку font-display
      if (!CSS.supports('font-display', 'swap')) {
        return
      }

      // Добавляем оптимизированные fallback шрифты
      const style = document.createElement('style')
      style.textContent = `
        /* Fallback шрифт с оптимизированными метриками для Inter */
        @font-face {
          font-family: 'Inter-fallback';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Arial'), local('Helvetica'), local('sans-serif');
          size-adjust: 107%;
          ascent-override: 90%;
          descent-override: 22%;
          line-gap-override: 0%;
        }
        
        /* Основной стек шрифтов */
        body, html {
          font-family: 'Inter', 'Inter-fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 1, 'tnum' 0, 'onum' 1, 'lnum' 0, 'dlig' 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Оптимизация для eco-режима */
        ${isEcoMode ? `
        * {
          font-synthesis: none;
          text-rendering: optimizeSpeed;
        }
        ` : `
        * {
          text-rendering: optimizeLegibility;
        }
        `}
      `
      document.head.appendChild(style)
    }

    // Мониторинг загрузки шрифтов
    const monitorFontLoading = () => {
      if (!document.fonts) return

      document.fonts.ready.then(() => {
        console.log('🎨 All fonts loaded successfully')

        // Отправляем метрику загрузки шрифтов
        if ('performance' in window) {
          const fontLoadTime = performance.now()

          // Отправляем в аналитику
          if (window.gtag) {
            window.gtag('event', 'font_load_time', {
              custom_parameter: fontLoadTime,
            })
          }
        }
      })

      // Отслеживаем отдельные шрифты
      document.fonts.addEventListener('loadingdone', (event) => {
        event.fontfaces.forEach((fontface) => {
          console.log(`✅ Font loaded: ${fontface.family} ${fontface.weight}`)
        })
      })

      document.fonts.addEventListener('loadingerror', (event) => {
        event.fontfaces.forEach((fontface) => {
          console.warn(`❌ Font failed to load: ${fontface.family} ${fontface.weight}`)
        })
      })
    }

    // Задержка загрузки шрифтов в eco-режиме
    const delay = isEcoMode ? 2000 : 0

    const timer = setTimeout(() => {
      preloadFonts()
      optimizeFontLoading()
      monitorFontLoading()
    }, delay)

    return () => clearTimeout(timer)
  }, [isEcoMode])

  return null
}
