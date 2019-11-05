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
const isProd = process.env.NODE_ENV === 'production'

// modules
module.exports = withBundleAnalyzer()
module.exports = withFonts()
module.exports = {
  target: 'serverless',
  pageExtensions: ['mdx', 'jsx', 'js'],
  assetPrefix: isProd ? 'https://iduk.github.io/js' : '',
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
      sourceMap: true,
    },
    // astroturf
    webpack: config => {
      config.module.rules.push({
        test: /\.js$/,
        use: ['astroturf/loader'],
      })
      return config
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
