/**
 * Custom hook for handling swipe gestures on touch devices
 * Provides enhanced touch support with momentum scrolling and device-specific optimizations
 */

import { useRef, useState, useCallback } from 'react'

interface SwipeGestureConfig {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeStart?: () => void
  onSwipeEnd?: () => void
  minDistance?: number
  threshold?: number
  enableMomentum?: boolean
  deviceType?: 'mobile' | 'tablet' | 'desktop'
}

interface SwipeState {
  isDragging: boolean
  dragOffset: number
  isScrolling: boolean
}

export const useSwipeGestures = (config: SwipeGestureConfig) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeStart,
    onSwipeEnd,
    enableMomentum = true,
    deviceType = 'mobile'
  } = config

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [touchStartTime, setTouchStartTime] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const animationRef = useRef<number | null>(null)

  const easeOutQuart = useCallback((t: number): number => {
    return 1 - Math.pow(1 - t, 4)
  }, [])

  const animateSwipe = useCallback((startOffset: number, targetOffset: number, duration: number = 300) => {
    const startTime = Date.now()
    const offsetDifference = targetOffset - startOffset

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      
      const currentOffset = startOffset + (offsetDifference * easedProgress)
      setDragOffset(currentOffset)
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDragOffset(0)
        setIsScrolling(false)
        onSwipeEnd?.()
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [easeOutQuart, onSwipeEnd])

  const getMinDistance = useCallback((velocity: number) => {
    if (deviceType === 'mobile') {
      return velocity > 0.3 ? 25 : 40
    } else if (deviceType === 'tablet') {
      return velocity > 0.4 ? 35 : 55
    } else {
      return velocity > 0.5 ? 40 : 60
    }
  }, [deviceType])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0]?.clientX ?? null)
    setTouchStartTime(Date.now())
    setIsScrolling(false)
    setDragOffset(0)
    setIsDragging(true)
    
    onSwipeStart?.()
    
    if (e.touches.length === 1 && deviceType !== 'desktop') {
      e.preventDefault()
    }
  }, [deviceType, onSwipeStart])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart || !touchStartTime) return
    
    const currentX = e.targetTouches[0]?.clientX ?? null
    const currentY = e.targetTouches[0]?.clientY ?? null
    if (!currentX || !currentY) return
    
    setTouchEnd(currentX)
    const distanceX = touchStart - currentX
    const distanceY = (e.touches[0]?.clientY ?? 0) - (touchStartTime ? touchStartTime : 0)
    
    const threshold = deviceType === 'mobile' ? 5 : 10
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > threshold
    
    if (e.touches.length === 1 && isHorizontalSwipe && deviceType !== 'desktop') {
      setIsScrolling(true)
      setDragOffset(distanceX)
      e.preventDefault()
    }
  }, [touchStart, touchStartTime, deviceType])

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !touchStartTime) {
      setIsDragging(false)
      return
    }

    const distance = touchStart - touchEnd
    const touchDuration = Date.now() - touchStartTime
    const velocity = Math.abs(distance) / touchDuration
    
    const minDistance = getMinDistance(velocity)
    const isLeftSwipe = distance > minDistance
    const isRightSwipe = distance < -minDistance

    if (isLeftSwipe || isRightSwipe) {
      if (enableMomentum) {
        const momentumDistance = Math.min(velocity * 100, 150)
        const totalDistance = distance + (distance > 0 ? momentumDistance : -momentumDistance)
        animateSwipe(dragOffset, totalDistance)
      }
      
      setTimeout(() => {
        if (isLeftSwipe) {
          onSwipeLeft?.()
        } else {
          onSwipeRight?.()
        }
      }, enableMomentum ? 200 : 0)
    } else {
      if (Math.abs(dragOffset) > 0) {
        animateSwipe(dragOffset, 0)
      } else {
        onSwipeEnd?.()
      }
    }
    
    setTouchStart(null)
    setTouchEnd(null)
    setTouchStartTime(null)
    setIsDragging(false)
  }, [touchStart, touchEnd, touchStartTime, dragOffset, enableMomentum, getMinDistance, animateSwipe, onSwipeLeft, onSwipeRight, onSwipeEnd])

  const cleanup = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const swipeState: SwipeState = {
    isDragging,
    dragOffset,
    isScrolling
  }

  const swipeHandlers = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  }

  return {
    swipeState,
    swipeHandlers,
    cleanup
  }
}

export default useSwipeGestures
