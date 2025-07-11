'use client'

import { useEffect, useState } from 'react'
import { useEcoMode } from '@/lib/eco-utils'

interface WebVitalsMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  entries: PerformanceEntry[]
  id: string
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'back-forward-cache' | 'prerender' | 'restore'
}

interface PerformanceMetrics {
  lcp?: number
  inp?: number // INP заменил FID
  cls?: number
  fcp?: number
  ttfb?: number
  score?: number
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  showDebugInfo?: boolean
}

export default function PerformanceMonitor({
  onMetricsUpdate,
  showDebugInfo = false,
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})
  const [showStats, setShowStats] = useState(false)
  const { isEcoMode } = useEcoMode()

  useEffect(() => {
    if (typeof window === 'undefined') return

    let webVitalsLoaded = false

    const loadWebVitals = async () => {
      if (webVitalsLoaded) return
      webVitalsLoaded = true

      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals')

        const updateMetrics = (metric: WebVitalsMetric) => {
          setMetrics((prev) => {
            const newMetrics = { ...prev, [metric.name.toLowerCase()]: metric.value }

            // Вычисляем общий балл производительности
            const score = calculatePerformanceScore(newMetrics)
            newMetrics.score = score

            onMetricsUpdate?.(newMetrics)
            return newMetrics
          })
        }

        onCLS(updateMetrics)
        onINP(updateMetrics) // INP заменил FID в web-vitals v3
        onFCP(updateMetrics)
        onLCP(updateMetrics)
        onTTFB(updateMetrics)
      } catch (error) {
        console.error('Failed to load web-vitals:', error)
      }
    }

    // В eco-режиме загружаем метрики позже
    const delay = isEcoMode ? 5000 : 2000
    const timer = setTimeout(loadWebVitals, delay)

    return () => clearTimeout(timer)
  }, [isEcoMode, onMetricsUpdate])

  // Хоткей для показа статистики (Ctrl+Shift+P)
  useEffect(() => {
    if (!showDebugInfo) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        setShowStats((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showDebugInfo])

  const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
    let score = 0
    let count = 0

    // LCP (Largest Contentful Paint)
    if (metrics.lcp) {
      if (metrics.lcp <= 2500) score += 100
      else if (metrics.lcp <= 4000) score += 50
      else score += 0
      count++
    }

    // INP (Interaction to Next Paint) - заменил FID
    if (metrics.inp) {
      if (metrics.inp <= 200) score += 100
      else if (metrics.inp <= 500) score += 50
      else score += 0
      count++
    }

    // CLS (Cumulative Layout Shift)
    if (metrics.cls) {
      if (metrics.cls <= 0.1) score += 100
      else if (metrics.cls <= 0.25) score += 50
      else score += 0
      count++
    }

    // FCP (First Contentful Paint)
    if (metrics.fcp) {
      if (metrics.fcp <= 1800) score += 100
      else if (metrics.fcp <= 3000) score += 50
      else score += 0
      count++
    }

    // TTFB (Time to First Byte)
    if (metrics.ttfb) {
      if (metrics.ttfb <= 800) score += 100
      else if (metrics.ttfb <= 1800) score += 50
      else score += 0
      count++
    }

    return count > 0 ? Math.round(score / count) : 0
  }

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatMetric = (value: number, unit: string): string => {
    return `${Math.round(value)}${unit}`
  }

  if (!showStats || !showDebugInfo) return null

  return (
    <div className='fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm font-mono z-50 backdrop-blur-sm'>
      <div className='flex items-center justify-between mb-2'>
        <h3 className='font-bold'>Performance Stats</h3>
        <button onClick={() => setShowStats(false)} className='text-gray-300 hover:text-white ml-4'>
          ×
        </button>
      </div>

      <div className='grid grid-cols-2 gap-2 min-w-[200px]'>
        {metrics.score && (
          <div className='col-span-2 text-center mb-2'>
            <div className={`text-lg font-bold ${getScoreColor(metrics.score)}`}>
              Score: {metrics.score}
            </div>
          </div>
        )}

        {metrics.lcp && (
          <div>
            <div className='text-gray-400'>LCP</div>
            <div className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}>
              {formatMetric(metrics.lcp, 'ms')}
            </div>
          </div>
        )}

        {metrics.inp && (
          <div>
            <div className='text-gray-400'>INP</div>
            <div className={metrics.inp <= 200 ? 'text-green-400' : 'text-red-400'}>
              {formatMetric(metrics.inp, 'ms')}
            </div>
          </div>
        )}

        {metrics.cls !== undefined && (
          <div>
            <div className='text-gray-400'>CLS</div>
            <div className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
              {metrics.cls.toFixed(3)}
            </div>
          </div>
        )}

        {metrics.fcp && (
          <div>
            <div className='text-gray-400'>FCP</div>
            <div className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-red-400'}>
              {formatMetric(metrics.fcp, 'ms')}
            </div>
          </div>
        )}

        {metrics.ttfb && (
          <div>
            <div className='text-gray-400'>TTFB</div>
            <div className={metrics.ttfb <= 800 ? 'text-green-400' : 'text-red-400'}>
              {formatMetric(metrics.ttfb, 'ms')}
            </div>
          </div>
        )}
      </div>

      <div className='mt-2 text-xs text-gray-400'>
        Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}
