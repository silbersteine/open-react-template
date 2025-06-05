import withNextIntl from 'next-intl/plugin.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withNextIntl(nextConfig);
