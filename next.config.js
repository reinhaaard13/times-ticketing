/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "rei-aws.s3.ap-southeast-1.amazonaws.com", "04ef-103-52-46-164.ap.ngrok.io"],
  },
  output: "standalone"
}

module.exports = nextConfig
