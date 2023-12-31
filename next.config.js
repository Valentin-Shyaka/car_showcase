/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "images.unsplash.com",
        "cdn.imagin.studio",
        'https://cars-by-api-ninjas.p.rapidapi.com'
        
      ],
    },
    experimental: {
      appDir: true
    }
  };
  
  module.exports = nextConfig;
  