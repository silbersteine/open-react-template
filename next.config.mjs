const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your Next.js config here
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withNextIntl(nextConfig);
