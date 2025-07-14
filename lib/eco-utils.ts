'use client'

import { useEffect, useState, useCallback } from 'react'

interface EcoSettings {
  enableReducedMotion: boolean
  enableDarkMode: boolean
  reduceDataUsage: boolean
  optimizeImages: boolean
  deferNonCritical: boolean
}

interface NetworkInfo {
  effectiveType: string
  saveData: boolean
  downlink: number
  rtt: number
}

interface ExtendedNavigator extends Navigator {
  connection?: {
    effectiveType?: string
    saveData?: boolean
    downlink?: number
    rtt?: number
  }
  deviceMemory?: number
  getBattery?: () => Promise<{
    level: number
    charging: boolean
  }>
}

export function useEcoMode() {
  const [ecoSettings, setEcoSettings] = useState<EcoSettings>({
    enableReducedMotion: false,
    enableDarkMode: false,
    reduceDataUsage: false,
    optimizeImages: true,
    deferNonCritical: false,
  })

  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null)
  const [batterySaver, setBatterySaver] = useState(false)

  const detectEcoConditions = useCallback(() => {
    if (typeof window === 'undefined') return

    // Network conditions
    const extendedNavigator = navigator as ExtendedNavigator
    const connection = extendedNavigator.connection
    if (connection) {
      setNetworkInfo({
        effectiveType: connection.effectiveType || '4g',
        saveData: connection.saveData || false,
        downlink: connection.downlink || 10,
        rtt: connection.rtt || 50,
      })
    }

    // User preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Battery status (if available)
    if (extendedNavigator.getBattery) {
      extendedNavigator.getBattery().then((battery) => {
        setBatterySaver(battery.level < 0.2 || battery.charging === false)
      })
    }

    // Auto eco settings based on conditions
    const isSlowConnection =
      connection &&
      (connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.saveData === true)

    setEcoSettings((prev) => ({
      ...prev,
      enableReducedMotion: prefersReducedMotion || !!isSlowConnection,
      enableDarkMode: prefersDarkMode,
      reduceDataUsage: !!isSlowConnection || (connection?.saveData ?? false),
      deferNonCritical: !!isSlowConnection || batterySaver,
    }))
  }, [batterySaver])

  useEffect(() => {
    detectEcoConditions()

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', detectEcoConditions)
    darkModeQuery.addEventListener('change', detectEcoConditions)

    return () => {
      mediaQuery.removeEventListener('change', detectEcoConditions)
      darkModeQuery.removeEventListener('change', detectEcoConditions)
    }
  }, [detectEcoConditions])

  return {
    ecoSettings,
    networkInfo,
    batterySaver,
    isEcoMode: ecoSettings.reduceDataUsage || ecoSettings.deferNonCritical,
    setEcoSettings,
  }
}

// Eco-friendly animation hook
export function useEcoAnimation() {
  const { ecoSettings } = useEcoMode()

  return {
    shouldAnimate: !ecoSettings.enableReducedMotion,
    animationDuration: ecoSettings.enableReducedMotion ? 0 : undefined,
    getAnimationProps: (
      normalProps: Record<string, unknown>,
      reducedProps: Record<string, unknown> = {}
    ) => (ecoSettings.enableReducedMotion ? reducedProps : normalProps),
  }
}

// Carbon footprint tracking
export function trackCarbonFootprint(action: string, data?: Record<string, unknown>) {
  // In production, you could integrate with services like:
  // - Website Carbon Calculator API
  // - Green Web Foundation API
  // - Carbon.txt file tracking

  if (process.env.NODE_ENV === 'development') {
    console.log(`🌱 Carbon tracking: ${action}`, data)
  }
}

// Eco-friendly data fetching
export function useEcoFetch() {
  const { ecoSettings, networkInfo } = useEcoMode()

  const ecoFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      // Add compression headers
      const headers: Record<string, string> = {
        'Accept-Encoding': 'gzip, deflate, br',
        Accept: 'application/json',
        ...((options.headers as Record<string, string>) || {}),
      }

      // On slow connections, add cache headers
      if (ecoSettings.reduceDataUsage) {
        headers['Cache-Control'] = 'max-age=3600' // 1 hour cache
      }

      const response = await fetch(url, {
        ...options,
        headers,
      })

      // Track data usage
      const contentLength = response.headers.get('content-length')
      if (contentLength) {
        trackCarbonFootprint('data_transfer', {
          bytes: parseInt(contentLength),
          url,
          network: networkInfo?.effectiveType,
        })
      }

      return response
    },
    [ecoSettings.reduceDataUsage, networkInfo]
  )

  return { ecoFetch }
}

// Get optimal image quality based on network conditions
export function getOptimalImageQuality(baseQuality: number = 75): number {
  if (typeof window === 'undefined') return baseQuality

  const extendedNavigator = navigator as ExtendedNavigator
  const connection = extendedNavigator.connection
  if (!connection) return baseQuality

  if (connection.effectiveType === 'slow-2g') return 30
  if (connection.effectiveType === '2g') return 40
  if (connection.effectiveType === '3g') return 60
  if (connection.saveData) return Math.min(baseQuality, 50)

  return baseQuality
}

// Check if user is in eco mode
export function isEcoMode(): boolean {
  if (typeof window === 'undefined') return false

  const extendedNavigator = navigator as ExtendedNavigator
  const connection = extendedNavigator.connection
  const isSlowConnection =
    connection &&
    (connection.effectiveType === 'slow-2g' ||
      connection.effectiveType === '2g' ||
      connection.saveData === true)

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return !!isSlowConnection || prefersReducedMotion
}
