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
    domains: ['www.mos.ru', 'icdn.lenta.ru']
  }
};

export default nextConfig;
