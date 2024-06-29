/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config, options) {

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mos.ru',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'icdn.lenta.ru',
        port: '',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
