let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

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
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', '@vercel/analytics'],
  },
  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    resolveAlias: {
      'framer-motion': 'framer-motion',
    },
  },
  // Enhanced image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Fix chunk loading issues for mobile
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize chunk splitting for better performance
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          minSize: 10000,
          maxSize: 120000, // Smaller chunks for faster loading
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              maxSize: 120000,
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              maxSize: 120000,
              priority: 5,
              enforce: true,
            },
            admin: {
              test: /[\\/](admin|components\/admin)[\\/]/,
              name: 'admin',
              chunks: 'all',
              maxSize: 120000,
              priority: 20,
            },
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              maxSize: 80000,
              priority: 15,
            },
          },
        },
        // Minimize bundle size
        usedExports: true,
        sideEffects: false,
      }

      // Add retry logic for chunk loading
      config.output = {
        ...config.output,
        crossOriginLoading: 'anonymous',
      }

      // Tree shaking optimization
      config.resolve.alias = {
        ...config.resolve.alias,
        'framer-motion': 'framer-motion',
      }

      // Ignore specific warnings
      config.ignoreWarnings = [
        {
          module: /node_modules\/@supabase\/realtime-js/,
          message: /Critical dependency: the request of a dependency is an expression/,
        },
      ]
    }

    return config
  },
  // Add headers for better caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(png|jpg|jpeg|gif|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(woff|woff2|eot|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(robots\\.txt|sitemap\\.xml|favicon\\.ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=3600',
          },
        ],
      },
    ]
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
