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
