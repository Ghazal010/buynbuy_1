/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "cdn.sanity.io" },
        { protocol: "https", hostname: "lh3.googleusercontent.com" }
      ]
    },
    eslint: {
      // Ignore ESLint during builds on Vercel or locally
      ignoreDuringBuilds: true
    }
  };
  
  module.exports = nextConfig;
  