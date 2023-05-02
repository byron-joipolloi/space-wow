const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = withPWA(nextConfig)
