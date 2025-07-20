/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },

  // Заголовки безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Comprehensive fix for browser globals in server environment
    if (isServer) {
      // Server-side polyfills
      config.plugins.push(
        new webpack.DefinePlugin({
          'self': 'globalThis',
          'window': 'undefined',
          'document': 'undefined',
          'navigator': 'undefined',
          'location': 'undefined',
        })
      )
      
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        path: false,
        stream: false,
        url: false,
        buffer: false,
        util: false,
      }
    } else {
      // Client-side environment
      config.plugins.push(
        new webpack.DefinePlugin({
          'global': 'globalThis',
        })
      )
    }

    // Handle .mjs files properly  
    config.module.rules.push({
      test: /\.mjs$/,
      type: 'javascript/auto',
    })

    // Ignore problematic modules and warnings
    config.ignoreWarnings = [
      {
        module: /node_modules\/sanity/,
      },
      {
        module: /node_modules\/@sanity/,
      },
      {
        module: /node_modules\/next-sanity/,
      },
      {
        module: /node_modules\/@supabase/,
      },
    ]

    // Optimization
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
    }

    return config
  },
}

export default nextConfig
