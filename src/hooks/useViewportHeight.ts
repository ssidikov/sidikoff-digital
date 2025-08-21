import { useEffect } from 'react'

/**
 * Hook для управления viewport height на мобильных устройствах
 * Обновляет CSS переменную --vh для исправления проблем с панелями браузера
 */
export function useViewportHeight() {
  useEffect(() => {
    // Функция для обновления viewport height
    const updateVH = () => {
      // Получаем реальную высоту viewport
      const vh = window.innerHeight * 0.01
      // Устанавливаем CSS переменную
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Устанавливаем начальное значение
    updateVH()

    // Обновляем при изменении размера окна
    const handleResize = () => {
      updateVH()
    }

    // Обновляем при изменении orientation на мобильных
    const handleOrientationChange = () => {
      // Небольшая задержка для корректной работы на iOS
      setTimeout(updateVH, 100)
    }

    // Добавляем обработчики событий
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    // Дополнительная проверка для iOS Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (isSafari) {
      // Visual viewport API для более точного отслеживания
      if (window.visualViewport) {
        const handleVisualViewportChange = () => {
          const vh = window.visualViewport!.height * 0.01
          document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        window.visualViewport.addEventListener('resize', handleVisualViewportChange)

        return () => {
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('orientationchange', handleOrientationChange)
          window.visualViewport?.removeEventListener('resize', handleVisualViewportChange)
        }
      }
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])
}

/**
 * Hook для проверки поддержки новых viewport units
 */
export function useViewportSupport() {
  const supportsNewViewportUnits = () => {
    if (typeof window === 'undefined') return false

    // Проверяем поддержку svh
    const testEl = document.createElement('div')
    testEl.style.height = '100svh'
    return testEl.style.height !== ''
  }

  return {
    supportsNewViewportUnits: supportsNewViewportUnits(),
  }
}
