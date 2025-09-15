import type { NextConfig } from 'next'

// Security headers configuration
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
]

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

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
  },

  // Internationalization
  trailingSlash: false,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com'],
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

  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Redirects to handle www vs non-www and other canonical URLs
  async redirects() {
    return [
      // Redirect HTTP to HTTPS for non-www
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'sidikoff.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.sidikoff.com/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS for www
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.sidikoff.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.sidikoff.com/:path*',
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'sidikoff.com',
          },
        ],
        destination: 'https://www.sidikoff.com/:path*',
        permanent: true,
      },
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
    ]
  },
}

export default nextConfig
