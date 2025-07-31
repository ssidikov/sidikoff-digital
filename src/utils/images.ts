export interface ImageConfig {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  priority?: boolean
}

export const generateSrcSet = (src: string, widths: number[]): string => {
  return widths
    .map(width => `${src}?w=${width} ${width}w`)
    .join(', ')
}

export const generateSizes = (breakpoints: Record<string, string>): string => {
  return Object.entries(breakpoints)
    .map(([screen, size]) => `(${screen}) ${size}`)
    .join(', ')
}

export const getOptimizedImageProps = (config: ImageConfig) => {
  const { src, alt, width, height, quality = 85, priority = false } = config

  return {
    src,
    alt,
    width,
    height,
    quality,
    priority,
    sizes: generateSizes({
      'max-width: 768px': '100vw',
      'max-width: 1200px': '50vw',
      'default': '33vw'
    })
  }
}

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export const preloadImages = async (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage))
}

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      })
    }
    img.onerror = reject
    img.src = src
  })
}

export const generateBlurDataURL = (width: number, height: number): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6"/>
          <stop offset="100%" style="stop-color:#e5e7eb"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)"/>
    </svg>
  `
  
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

export const createImagePlaceholder = (width: number, height: number, text?: string): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      ${text ? `<text x="50%" y="50%" font-family="Arial" font-size="14" text-anchor="middle" dy=".3em" fill="#9ca3af">${text}</text>` : ''}
    </svg>
  `
  
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

export const isWebPSupported = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

export const getOptimalImageFormat = (originalSrc: string): string => {
  if (typeof window === 'undefined') return originalSrc
  
  if (isWebPSupported() && !originalSrc.endsWith('.gif')) {
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  }
  
  return originalSrc
}