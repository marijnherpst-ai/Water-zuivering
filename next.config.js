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
      // Misspelled URL that shows up as a 404 in Search Console
      {
        source: '/waterzuivering-for-thuis',
        destination: '/waterzuivering-voor-thuis',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
