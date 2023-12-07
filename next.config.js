/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add basePath
  basePath: '/hildy',
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
