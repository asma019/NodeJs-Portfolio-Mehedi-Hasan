/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Vercel optimization settings */
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
    optimizeCss: {
      // Configure CSS optimization with a specific critters mode
      cssModules: true,
      inlineFonts: true,
      minify: true
    },
    optimizePackageImports: ['framer-motion', 'react-icons'], // Optimize large package imports
  },
  // Allow cross-origin requests during development
  allowedDevOrigins: [/.*/], // Add this for development ease, restrict in production
};

module.exports = nextConfig; 
