/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add domains for Image component as needed
  },
  // Enable experimental features as needed
  experimental: {
    // Add experimental features here
  },
}

module.exports = nextConfig
