// next.config.js
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path')
const withImages = require('next-images')

module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]__[local]--[hash:base64:5]',
    },
    postcssLoaderOptions: {
      parser: true,
    },

    assetPrefix: process.env.NODE_ENV === 'production' ? '/js' : '/',

    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      })
      return config
    },
  })
)
