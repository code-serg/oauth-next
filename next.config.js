/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com', // for google
      'avatars.githubusercontent.com', // for github
    ],
  },
}

module.exports = nextConfig
