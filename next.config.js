/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Optimization settings for Vercel, Heroku, Cloudflare, and other platforms */
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep error and warn logs in production
    } : false,
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
    // Cloudflare Images optimization
    unoptimized: process.env.CLOUDFLARE ? true : false,
  },
  experimental: {
    optimizeCss: true, // Simplified CSS optimization setting
    optimizePackageImports: ['framer-motion', 'react-icons'], // Optimize large package imports
  },
  // String array for allowedDevOrigins
  allowedDevOrigins: ['hema.asiabio.link'], 
  
  // Platform-specific optimizations
  // Heroku: Use standalone output
  // Cloudflare: Compatible with Workers
  // Vercel: Default Next.js behavior
  output: process.env.HEROKU ? 'standalone' : undefined,
  
  // Cloudflare Workers compatibility
  // Workers don't support all Node.js APIs, but our app is compatible
  webpack: (config, { isServer }) => {
    // Ensure compatibility with Cloudflare Workers
    if (process.env.CLOUDFLARE) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig; 