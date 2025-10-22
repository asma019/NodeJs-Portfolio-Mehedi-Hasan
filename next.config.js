/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Optimization settings for Vercel, Heroku, and other platforms */
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Modern image formats for better performance
    minimumCacheTTL: 60, // Add cache control for images (60 seconds)
  },
  experimental: {
    optimizeCss: true, // Simplified CSS optimization setting
    optimizePackageImports: ['framer-motion', 'react-icons'], // Optimize large package imports
  },
  // String array for allowedDevOrigins
  allowedDevOrigins: ['hema.asiabio.link'], 
  
  // Heroku-specific optimizations
  output: process.env.HEROKU ? 'standalone' : undefined,
  
  // Handle dynamic port assignment (for Heroku)
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
};

module.exports = nextConfig; 