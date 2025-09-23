import type { NextConfig } from 'next'

// ИСПРАВЛЕНО: Улучшенные security headers с CSP и БЕЗ кеширования
const SECURITY_HEADERS = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Отключение кеширования для обновленного контента
  {
    key: 'Cache-Control',
    value: 'no-cache, no-store, must-revalidate, max-age=0',
  },
  {
    key: 'Pragma',
    value: 'no-cache',
  },
  {
    key: 'Expires',
    value: '0',
  },
  {
    key: 'Last-Modified',
    value: new Date().toUTCString(),
  },
  {
    key: 'ETag',
    value: `"${Date.now()}"`,
  },
  // ИСПРАВЛЕНО: Добавлен Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com *.googletagmanager.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' data: blob: https://images.unsplash.com https://cdn.sanity.io;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.vercel-insights.com *.sanity.io;
      frame-src 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
    `
      .replace(/\s+/g, ' ')
      .trim(),
  },
  // ИСПРАВЛЕНО: Добавлен Permissions Policy
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()',
  },
  // ИСПРАВЛЕНО: Убраны ненужные preload для шрифтов - Next.js делает это автоматически
  {
    key: 'Link',
    value:
      '<https://images.unsplash.com>; rel=preconnect; crossorigin, <https://cdn.sanity.io>; rel=preconnect; crossorigin',
  },
]

const nextConfig: NextConfig = {
  // ИСПРАВЛЕНО: Добавлена оптимизация пакетов
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    webVitalsAttribution: ['CLS', 'FCP', 'FID', 'LCP', 'TTFB'],
    // optimizeCss: true, // Отключено временно из-за проблем с critters
  },

  // ИСПРАВЛЕНО: Moved serverComponentsExternalPackages to serverExternalPackages
  serverExternalPackages: ['@sanity/client'],

  // Development server settings
  ...(process.env.NODE_ENV === 'development' && {
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        }
      }
      return config
    },
  }),

  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },

  // Modern JavaScript transpilation
  transpilePackages: ['framer-motion', 'lucide-react'],

  // Internationalization
  trailingSlash: false,

  // ИСПРАВЛЕНО: Безопасная настройка изображений БЕЗ кеширования
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 0, // Отключено кеширование
    dangerouslyAllowSVG: false, // ИСПРАВЛЕНО: убрана уязвимость
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],

    // ИСПРАВЛЕНО: Убран deprecated параметр domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false, // ОТКЛЮЧЕНО: убрано кеширование

  // Bundle analyzer (only in development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
        }
      }
      return config
    },
  }),

  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Redirects to handle old project URLs and legacy paths
  async redirects() {
    return [
      // Redirect old project URLs to new structure if they exist
      {
        source: '/projects/booki',
        destination: '/projects/11',
        permanent: true,
      },
      {
        source: '/projects/euclid',
        destination: '/projects/14',
        permanent: true,
      },
      {
        source: '/projects/cookies',
        destination: '/projects/6',
        permanent: true,
      },
      {
        source: '/projects/billed',
        destination: '/projects/10',
        permanent: true,
      },
      // Additional old project slug redirects
      {
        source: '/projects/fisheye',
        destination: '/projects/7',
        permanent: true,
      },
      {
        source: '/projects/ohmyfood',
        destination: '/projects/9',
        permanent: true,
      },
      {
        source: '/projects/learn-home',
        destination: '/projects/13',
        permanent: true,
      },
      {
        source: '/projects/kasa',
        destination: '/projects/1',
        permanent: true,
      },
      // Locale-specific old project redirects
      {
        source: '/:locale(en|fr|ru)/projects/ohmyfood',
        destination: '/:locale/projects/9',
        permanent: true,
      },
      {
        source: '/:locale(en|fr|ru)/projects/fisheye',
        destination: '/:locale/projects/7',
        permanent: true,
      },
      {
        source: '/:locale(en|fr|ru)/projects/learn-home',
        destination: '/:locale/projects/13',
        permanent: true,
      },
      {
        source: '/:locale(en|fr|ru)/projects/kasa',
        destination: '/:locale/projects/1',
        permanent: true,
      },
      {
        source: '/:locale(en|fr|ru)/projects/billed',
        destination: '/:locale/projects/10',
        permanent: true,
      },
      // Handle OpenGraph image redirects
      {
        source: '/opengraph-image',
        destination: '/images/og-homepage.jpg',
        permanent: true,
      },
      {
        source: '/twitter-image',
        destination: '/images/og-homepage.jpg',
        permanent: true,
      },
      // Service page redirects
      {
        source: '/services/fullstack',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/frontend',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/backend',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/consultation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/optimization',
        destination: '/services/optimisation-seo',
        permanent: true,
      },
      // Locale-specific service redirects
      {
        source: '/:locale(en|ru)/services/fullstack',
        destination: '/:locale/services',
        permanent: true,
      },
      {
        source: '/:locale(en|ru)/services/frontend',
        destination: '/:locale/services',
        permanent: true,
      },
      {
        source: '/:locale(en|ru)/services/backend',
        destination: '/:locale/services',
        permanent: true,
      },
      {
        source: '/:locale(en|ru)/services/consultation',
        destination: '/:locale/services',
        permanent: true,
      },
      {
        source: '/:locale(en|ru)/services/optimization',
        destination: '/:locale/services/optimisation-seo',
        permanent: true,
      },
      // Portfolio redirects
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/:locale(en|ru)/portfolio',
        destination: '/:locale/projects',
        permanent: true,
      },
    ]
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: SECURITY_HEADERS,
      },
      // Static assets БЕЗ кеширования
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      // ОТКЛЮЧЕНО: Кеширование изображений убрано
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      // ИСПРАВЛЕНО: Убраны headers для шрифтов - Next.js управляет этим автоматически
    ]
  },
}

export default nextConfig
