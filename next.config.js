// next.config.js
const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const autoprefixer = require('autoprefixer')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const debug = process.env.NODE_ENV !== 'production'

// modules
module.exports = withBundleAnalyzer()
module.exports = withFonts()
module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js'],
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/index': { page: '/index' },
      '/page1': { page: '/page1' },
      '/page2': { page: '/page2' },
      '/page3': { page: '/page3' },
    }
  },
  assetPrefix: !debug ? 'https://iduk.github.io/js/' : '',
}
module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]--[local]__[hash:base64:5]',
    },
    postcssLoaderOptions: {
      'postcss-preset-env': {
        autoprefixer: {
          grid: true,
        },
      },
      parser: true,
    },
    // loader
    loader: {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    },
  }),
  withImages({
    webpack(config, options) {
      return config
    },
  })
)
