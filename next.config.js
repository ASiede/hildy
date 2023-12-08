/** @type {import('next').NextConfig} */

const repo = 'hildy';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  output: 'export',
  // Add basePath
  assetPrefix: assetPrefix,
  basePath: '/hildy',

  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
