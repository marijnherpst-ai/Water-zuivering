/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Legacy page still indexed by Google (currently 404s) — send it to
      // the closest matching current content instead of losing that traffic.
      {
        source: '/installatie-waterontharder',
        destination: '/kennisbank/waterontharder-vs-waterzuiveraar',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
