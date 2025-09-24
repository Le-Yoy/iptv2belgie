// next.config.js
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compress: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'iptv2belgie.be' }],
        destination: 'https://www.iptv2belgie.be/:path*',
        permanent: true,
      },
    ];
  },
};
