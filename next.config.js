/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.kym-cdn.com"],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
