// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		inline: true,
    	hot: true
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[path][name].[hash].[ext]",
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist', {}),
		new MiniCssExtractPlugin({
			filename: isHot ? '[name].css' : '[name].[contenthash].css',
   			chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/static',
				to: './'
			}
		]),
		new WebpackMd5Hash()
	]
};
