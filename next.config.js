/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'rci-learn.s3.amazonaws.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
