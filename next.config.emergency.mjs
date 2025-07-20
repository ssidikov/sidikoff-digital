/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Временно отключаем для сборки
  },
  typescript: {
    ignoreBuildErrors: true, // Временно отключаем для сборки
  },
  
  // Минимальная конфигурация
  compress: true,
  poweredByHeader: false,
  
  // Базовая оптимизация изображений
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },

  // Webpack конфигурация с фиксом для self
  webpack: (config, { isServer, webpack }) => {
    // Определяем глобальные переменные
    config.plugins.push(
      new webpack.DefinePlugin({
        'self': isServer ? 'undefined' : 'self',
        'window': isServer ? 'undefined' : 'window',
      })
    )

    // Fallback для сервера
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    // Игнорируем предупреждения
    config.ignoreWarnings = [
      { module: /node_modules\/sanity/ },
      { module: /node_modules\/@sanity/ },
    ]

    return config
  },
}

export default nextConfig
