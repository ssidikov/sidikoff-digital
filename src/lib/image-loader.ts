/**
 * Smart image loader for Next.js
 * Bypasses optimization for pre-optimized CDN assets, uses edge optimization for Unsplash, and defaults to Next.js for relative files.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const q = quality || 75

  // 1. Pre-optimized CDN assets: return original URL directly
  if (src.includes('cdn.sidikoff.com')) {
    return src
  }

  // 2. Unsplash: leverage native URL API for edge compression & resizing
  if (src.includes('images.unsplash.com')) {
    try {
      const url = new URL(src)
      url.searchParams.set('w', width.toString())
      url.searchParams.set('q', q.toString())
      url.searchParams.set('auto', 'format')
      return url.toString()
    } catch {
      return src
    }
  }

  // 3. Fallback: local relative assets are served directly as-is since Next.js disables /_next/image endpoint under custom loaders
  return src
}
