const path = require('path');

module.exports = {
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
   */
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['@src'] = path.join(__dirname, 'src');
    return config;
  },
};
