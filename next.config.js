// next.config.js
const path = require("path")
const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
const withFonts = require("next-fonts")
const withImages = require("next-images")
const withPlugins = require("next-compose-plugins")
const debug = process.env.NODE_ENV !== "production"

// analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
module.exports = withBundleAnalyzer()

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  crossOrigin: "anonymous",
  pageExtensions: ["mdx", "jsx", "js"],
  assetPrefix: !debug ? "http://openfloor.io/" : "",
  exportTrailingSlash: true,
}

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./components/styles/global.scss"`,
  },
  cssModules: true,
}

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: "css-loader" },
        { loader: "emit-raw-loader?output=/styles/[name].css" },
        { loader: "sass-loader" },
      ],
    })
    return config
  },
}

// Modules
module.exports = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      })
      return config
    },
  }),
  withImages({
    name: "[name].[hash:base64:5].[ext]",
    webpack(config, options) {
      return config
    },
  }),
  withFonts({
    name: "[name].[hash:base64:5].[ext]",
    webpack(config, options) {
      return config
    },
  })
)
