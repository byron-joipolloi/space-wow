const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = withPWA(nextConfig)
