/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/times',
  reactStrictMode: false,
  images: {
    domains: ["localhost", "rei-aws.s3.ap-southeast-1.amazonaws.com", "04ef-103-52-46-164.ap.ngrok.io"],
    unoptimized: true
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
  output: "standalone"
}

module.exports = nextConfig
