// next.config.js
const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const debug = process.env.NODE_ENV !== 'production'



// analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer()



module.exports = {
	crossOrigin: 'anonymous',
	pageExtensions: ['mdx', 'jsx', 'js'],
	assetPrefix: !debug ? 'https://github.com/iduk/js' : '',
	
	exportPathMap: function() {
		return {
			'/': { page: '/' },
			'/page1': { page: '/page1' },
			'/page2': { page: '/page2' },
			'/page3': { page: '/page3' },
		}
	},
}



module.exports = {
	webpack: (config, { dev }) => {
		config.module.rules.push(
			{
				test: /\.scss$/,
				use: [
					{ loader: 'css-loader' },
					{ loader: 'emit-raw-loader?output=/styles/[name].css' },
					{ loader: 'sass-loader' },
				]
			},
		)
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
					loader: 'url-loader',
					options: {
						limit: 100000,
					},
				},
			})
			return config
		},
	}),
	withImages({
		webpack(config, options) {
			return config
		},
	}),
	withFonts({
		webpack(config, options) {
			return config
		},
	})
)