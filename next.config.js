// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]--[hash:base64:5]',
  },
  postcssLoaderOptions: {
    parser: true,
  },
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://iduk.github.io/js' : '',
})
