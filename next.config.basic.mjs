/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration without Turbopack
  experimental: {
    turbo: false, // Disable Turbopack completely
  },
  
  // Simple transpilation for Sanity
  transpilePackages: ['@sanity/client'],
  
  // Webpack configuration with minimal polyfills
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'self': 'globalThis'
        })
      )
    }
    
    return config
  },
  
  // Basic redirects
  async redirects() {
    return []
  },
  
  // Disable source maps for faster builds
  productionBrowserSourceMaps: false,
}

export default nextConfig
