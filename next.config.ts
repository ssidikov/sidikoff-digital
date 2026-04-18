import type { NextConfig } from 'next'

// ИСПРАВЛЕНО: Улучшенные security headers с строгим anti-cache для development
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
  // Строгие anti-cache настройки для development
  ...(process.env.NODE_ENV === 'development'
    ? [
        {
          key: 'Cache-Control',
          value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
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
          key: 'Surrogate-Control',
          value: 'no-store',
        },
      ]
    : []),
  // ИСПРАВЛЕНО: Добавлен Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com *.googletagmanager.com;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com;
      img-src 'self' data: blob: https://images.unsplash.com https://cdn.sanity.io;
      font-src 'self' fonts.gstatic.com;
      connect-src 'self' *.vercel-insights.com *.sanity.io *.googletagmanager.com;
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
  // ДОБАВЛЕНО: Resource hints для внешних доменов (для мобильной производительности)
  {
    key: 'Link',
    value:
      '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://images.unsplash.com>; rel=preconnect; crossorigin, <https://cdn.sanity.io>; rel=preconnect; crossorigin, </.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="service-desc", </llms.txt>; rel="service-doc", </.well-known/mcp/server-card.json>; rel="describedby"',
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

  // ИСПРАВЛЕНО: Рациональные настройки изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: process.env.NODE_ENV === 'development' ? 0 : 31536000, // Без кеша в dev, 1 год в prod
    dangerouslyAllowSVG: false, // ИСПРАВЛЕНО: убрана уязвимость
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1536, 2048],
    qualities: [75, 90, 95, 100], // Next.js 16: explicitly define allowed quality values

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
  generateEtags: true, // Включаем ETags для правильного кэширования

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

  // Rewrites: map /.well-known/* → /well-known/* (App Router can't use dot-prefixed folders)
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/well-known/:path*',
      },
    ]
  },

  // Redirects to handle EN/RU → FR migration and legacy paths
  async redirects() {
    return [
      // ── 1. EN/RU → clean French URL (no /fr/ prefix)
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/ru/:path*',
        destination: '/:path*',
        permanent: true,
      },

      // ── 2. Old /seo/* deleted pages → SEO services page
      {
        source: '/seo/:city',
        destination: '/services/optimisation-seo',
        permanent: true,
      },
      // Keep this explicit to avoid extra redirect hop via middleware
      {
        source: '/fr/seo/:city',
        destination: '/services/optimisation-seo',
        permanent: true,
      },

      // ── 3. Old project slugs → numeric IDs
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

      // ── 4. Old service slugs (no locale prefix)
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

      // ── 5. Portfolio
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true,
      },

      // ── 6. OpenGraph (static files — no rewrite needed)
      {
        source: '/opengraph-image',
        destination: '/images/opengraph-fr.png',
        permanent: true,
      },
      {
        source: '/twitter-image',
        destination: '/images/opengraph-fr.png',
        permanent: true,
      },

      // ── 7. URL garbage from 404 log
      {
        source: '/ru/ru/:path*',
        destination: '/:path*',
        permanent: true,
      },

      // ── 8. /fr/ prefix → clean URL (FR is default, no locale prefix)
      {
        source: '/fr',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fr/:path+',
        destination: '/:path+',
        permanent: true,
      },

      // ── 9. Broken URLs found by Googlebot (missing slash between locale+path)
      {
        source: '/enservices',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/ruservices',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/frservices',
        destination: '/services',
        permanent: true,
      },

      // ── 10. /en/en/ duplicate found in GSC (www.sidikoff.com/en/en)
      {
        source: '/en/en/:path*',
        destination: '/:path*',
        permanent: true,
      },

      // ── 11. Blog article slug update: 2025 → 2026 (update slug in Sanity first!)
      // Uncomment when ready to update the slug in Sanity CMS:
      // ── 12. Consolidate Villeurbanne pages (Redirect legacy to new target)
      {
        source: '/services/creation-site-web-villeurbanne',
        destination: '/services/agence-web-villeurbanne',
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
      // Строгое отключение кэширования для development
      {
        source: '/_next/static/:path*',
        headers:
          process.env.NODE_ENV === 'development'
            ? [
                {
                  key: 'Cache-Control',
                  value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                },
                {
                  key: 'Pragma',
                  value: 'no-cache',
                },
                {
                  key: 'Expires',
                  value: '0',
                },
              ]
            : [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=31536000, immutable',
                },
              ],
      },
      // Кэширование изображений
      {
        source: '/images/:path*',
        headers:
          process.env.NODE_ENV === 'development'
            ? [
                {
                  key: 'Cache-Control',
                  value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                },
                {
                  key: 'Pragma',
                  value: 'no-cache',
                },
                {
                  key: 'Expires',
                  value: '0',
                },
              ]
            : [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=86400',
                },
              ],
      },
      // Отключение кэширования для HTML страниц в development
      ...(process.env.NODE_ENV === 'development'
        ? [
            {
              source: '/((?!_next|api|favicon|robots.txt|sitemap.xml|manifest.json).*)',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
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
          ]
        : []),
      // ИСПРАВЛЕНО: Убраны headers для шрифтов - Next.js управляет этим автоматически
    ]
  },
}

export default nextConfig
