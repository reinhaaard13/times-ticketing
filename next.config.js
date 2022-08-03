/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "rei-aws.s3.ap-southeast-1.amazonaws.com", "04ef-103-52-46-164.ap.ngrok.io"],
  }
}

module.exports = nextConfig
