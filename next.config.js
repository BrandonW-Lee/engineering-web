/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imagedelivery.net', 'images.prismic.io'],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
