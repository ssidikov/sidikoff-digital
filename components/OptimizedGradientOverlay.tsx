'use client'

import { MouseEvent as ReactMouseEvent, useCallback, useMemo } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

interface OptimizedGradientOverlayProps {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientOpacity?: number
  disabled?: boolean // Опция отключения на слабых устройствах
}

export function OptimizedGradientOverlay({
  children,
  className = '',
  gradientSize = 400,
  gradientOpacity = 0.08,
  disabled = false,
}: OptimizedGradientOverlayProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Throttled mouse move handler для снижения частоты обновлений
  const handleMouseMove = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (disabled) return
      
      const { currentTarget, clientX, clientY } = event
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    },
    [mouseX, mouseY, disabled]
  )

  // Memoized gradient template
  const gradientBackground = useMemo(() => {
    if (disabled) return undefined
    
    return useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, ${gradientOpacity}), transparent 60%)`
  }, [mouseX, mouseY, gradientSize, gradientOpacity, disabled])

  return (
    <motion.div
      className={`group relative ${className}`}
      onMouseMove={handleMouseMove}
      // Добавляем will-change для оптимизации GPU
      style={{ willChange: disabled ? 'auto' : 'transform' }}>
      {!disabled && (
        <motion.div
          className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
          style={{
            background: gradientBackground,
            // Принудительное создание композитного слоя
            transform: 'translateZ(0)',
          }}
          transition={{ 
            duration: 0.3, 
            ease: [0.25, 0.1, 0.25, 1],
            // Оптимизация для лучшей производительности
            type: 'tween'
          }}
        />
      )}
      
      <div className='relative z-10'>
        {children}
      </div>
    </motion.div>
  )
}

// Hook для определения слабых устройств
export function useDevicePerformance() {
  const isLowPerformance = useMemo(() => {
    if (typeof window === 'undefined') return false
    
    // Определяем слабые устройства
    const navigator = window.navigator
    const hardwareConcurrency = navigator.hardwareConcurrency || 1
    const deviceMemory = (navigator as { deviceMemory?: number }).deviceMemory || 2
    
    // Отключаем эффекты на слабых устройствах
    return hardwareConcurrency < 4 || deviceMemory < 4
  }, [])
  
  return { isLowPerformance }
}

// Компонент с автоматической оптимизацией
export function SmartGradientCard({ 
  children, 
  className = '', 
  forceEnable = false 
}: {
  children: React.ReactNode
  className?: string
  forceEnable?: boolean
}) {
  const { isLowPerformance } = useDevicePerformance()
  
  return (
    <OptimizedGradientOverlay
      className={className}
      disabled={!forceEnable && isLowPerformance}>
      {children}
    </OptimizedGradientOverlay>
  )
}
