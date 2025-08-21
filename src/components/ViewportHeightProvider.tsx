'use client'

import { useViewportHeight } from '@/hooks/useViewportHeight'

interface ViewportHeightProviderProps {
  children: React.ReactNode
}

/**
 * Компонент-провайдер для управления viewport height на мобильных устройствах
 * Должен быть размещен в корне приложения
 */
export function ViewportHeightProvider({ children }: ViewportHeightProviderProps) {
  // Инициализируем hook для управления viewport height
  useViewportHeight()

  return <>{children}</>
}
