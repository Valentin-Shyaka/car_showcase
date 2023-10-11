/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "images.unsplash.com",
        "cdn.imagin.studio"
        
      ],
    },
    experimental: {
      appDir: true
    }
  };
  
  module.exports = nextConfig;
  