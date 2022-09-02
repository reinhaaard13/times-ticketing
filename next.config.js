/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/times',
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
    unoptimized: true
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
  output: "standalone",
  // trailingSlash: true,
}

module.exports = nextConfig
