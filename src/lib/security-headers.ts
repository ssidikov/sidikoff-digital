export const SECURITY_HEADERS_MAP = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()',
} as const

/** Flat array format used by next.config.ts headers() */
export const SECURITY_HEADERS_ARRAY = Object.entries(SECURITY_HEADERS_MAP).map(
  ([key, value]) => ({ key, value }),
)
