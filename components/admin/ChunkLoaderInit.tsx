'use client'

import { useEffect } from 'react'

/**
 * Initialize chunk loading error handling on the client side
 * This component should be mounted once in the admin layout
 */
export default function ChunkLoaderInit() {
  useEffect(() => {
    let chunkRetryCount = 0
    const MAX_RETRIES = 3
    const RETRY_DELAY = 1000

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
        console.error('Max chunk loading retries exceeded.')
        // Let the error boundary handle this
      }
    }

    const handleLoad = () => {
      chunkRetryCount = 0
    }

    window.addEventListener('error', handleError)
    window.addEventListener('load', handleLoad)

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  // This component doesn't render anything
  return null
}
