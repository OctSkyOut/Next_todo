const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  reactStrictMode: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
};
