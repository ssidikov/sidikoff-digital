'use client'

import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    // Функция для выполнения прокрутки
    const performScroll = () => {
      const element = document.getElementById(sectionId.replace('#', ''))
      if (element) {
        // Адаптивная высота хедера в зависимости от размера экрана
        const isMobile = window.innerWidth < 768
        const headerHeight = isMobile ? 70 : 100

        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        return true
      }
      return false
    }

    // Попытка немедленной прокрутки
    if (performScroll()) {
      return
    }

    // Если элемент не найден, ждем загрузки DOM с увеличенным таймаутом
    const observer = new MutationObserver(() => {
      if (performScroll()) {
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Дополнительная проверка через интервалы для надежности
    let retries = 0
    const maxRetries = 10
    const retryInterval = setInterval(() => {
      retries++
      if (performScroll() || retries >= maxRetries) {
        clearInterval(retryInterval)
        observer.disconnect()
      }
    }, 200)

    // Таймаут для отключения observer через 5 секунд
    setTimeout(() => {
      observer.disconnect()
      clearInterval(retryInterval)
    }, 5000)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return { scrollToSection, scrollToTop }
}
