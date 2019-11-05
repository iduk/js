// next.config.js
const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const autoprefixer = require('autoprefixer')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const reactCssModules = require('babel-plugin-react-css-modules')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// modules
module.exports = withBundleAnalyzer()
module.exports = withFonts()
module.exports = {
  target: 'serverless',
  pageExtensions: ['mdx', 'jsx', 'js'],
  exportPathMap: async function(defaultPathMap) {
    return {
      '/auth/index.html': { page: '/auth' },
    }
  },
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
      config: {
        ctx: {
          theme: JSON.stringify(process.env.REACT_APP_THEME),
        },
      },
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
    exclude: path.resolve(__dirname, 'public/img'),
    webpack(config, options) {
      return config
    },
  })
)
