'use client'

/**
 * Chunk loading error handler for mobile devices
 * Retries failed chunk loads and provides fallback behavior
 */

let chunkRetryCount = 0
const MAX_RETRIES = 3
const RETRY_DELAY = 1000

export const handleChunkError = (error: Error) => {
  if (error.message.includes('Loading chunk')) {
    console.warn('Chunk loading error detected:', error.message)
    
    // Try to reload the page once
    if (chunkRetryCount < 1) {
      chunkRetryCount++
      if (typeof window !== 'undefined') {
        window.location.reload()
      }
      return true
    }
  }
  return false
}

export const preloadCriticalChunks = () => {
  if (typeof window === 'undefined') return
  
  // Preload critical chunks for admin dashboard
  const criticalChunks = [
    '/_next/static/chunks/pages/admin-',
    '/_next/static/chunks/admin-',
  ]
  
  criticalChunks.forEach(chunk => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = chunk
    document.head.appendChild(link)
  })
}

// Initialize chunk error handling on client side
if (typeof window !== 'undefined') {
  const handleError = (event: ErrorEvent) => {
    const isChunkError = 
      event.message?.includes('Loading chunk') ||
      event.message?.includes('ChunkLoadError') ||
      event.filename?.includes('_next/static/chunks/')

    if (isChunkError && chunkRetryCount < MAX_RETRIES) {
      console.warn(`Chunk loading failed, retrying... (${chunkRetryCount + 1}/${MAX_RETRIES})`)
      
      chunkRetryCount++
      
      // Retry after delay
      setTimeout(() => {
        window.location.reload()
      }, RETRY_DELAY * chunkRetryCount)
      
      event.preventDefault()
      return false
    }
    
    if (isChunkError && chunkRetryCount >= MAX_RETRIES) {
      console.error('Max chunk loading retries exceeded. Please refresh the page.')
      
      // Show user message instead of automatic refresh
      alert('Loading error detected. Please refresh the page manually.')
    }
  }

  window.addEventListener('error', handleError)

  // Reset retry count on successful navigation
  window.addEventListener('load', () => {
    chunkRetryCount = 0
  })
}
