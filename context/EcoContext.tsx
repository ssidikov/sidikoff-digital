'use client'

import { createContext, useContext, useEffect, ReactNode } from 'react'
import { useEcoMode, registerEcoServiceWorker } from '@/lib/eco-utils'

const EcoContext = createContext<ReturnType<typeof useEcoMode> | null>(null)

export function EcoProvider({ children }: { children: ReactNode }) {
  const ecoState = useEcoMode()

  useEffect(() => {
    // Register eco service worker
    registerEcoServiceWorker()

    // Send eco mode state to service worker
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'ECO_MODE_TOGGLE',
        enabled: ecoState.isEcoMode,
      })
    }

    // Add eco mode indicator to document
    if (ecoState.isEcoMode) {
      document.documentElement.setAttribute('data-eco-mode', 'true')

      // Add eco mode notification
      if (!sessionStorage.getItem('eco-mode-notified')) {
        console.log('🌱 Mode éco activé - Consommation réduite pour un web plus durable')
        sessionStorage.setItem('eco-mode-notified', 'true')
      }
    } else {
      document.documentElement.removeAttribute('data-eco-mode')
    }
  }, [ecoState.isEcoMode])

  return (
    <EcoContext.Provider value={ecoState}>
      {children}
    </EcoContext.Provider>
  )
}

export function useEco() {
  const context = useContext(EcoContext)
  if (!context) {
    throw new Error('useEco must be used within an EcoProvider')
  }
  return context
}
