const path = require('path');
// const withPlugins = require('next-compose-plugins');

module.exports = {
  reactStrictMode: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
};
