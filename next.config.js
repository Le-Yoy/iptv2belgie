// next.config.js
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compress: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
  },
};
