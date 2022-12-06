const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	mode: 'development',
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
		clean: true,
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
		static: {
			directory: path.resolve(__dirname, 'dist'),
			watch: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { url: false },
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [['postcss-preset-env']],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									corejs: 3,
									useBuiltIns: 'usage',
								},
							],
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			inject: 'body',
			scriptLoading: 'blocking',
			alwaysWriteToDisk: true,
		}),
		new HtmlWebpackHarddiskPlugin({
			outputPath: path.resolve(__dirname, 'dist'),
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					context: './src',
					from: 'img/**/*.+(png|svg|jpg|jpeg|gif|ico|json)',
					to: path.resolve(__dirname, 'dist'),
				},
				{
					context: './src',
					from: 'icons/**/*.+(png|svg|jpg|jpeg|gif|ico|json)',
					to: path.resolve(__dirname, 'dist'),
				},
				// {
				//   from: './src/JSON/*.json',
				//   to: path.resolve(__dirname, 'dist')
				// },
				// {
				//   context: './src',
				//   from: 'fonts/*.+(woff|woff2|eot|ttf|otf)',
				//   to: path.resolve(__dirname, 'dist')
				// }
			],
		}),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin(),
			new CssMinimizerPlugin({
				test: /.css$/,
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
			new ImageMinimizerPlugin({
				test: /\.(jpe?g|png|gif|svg)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: ['imagemin-gifsicle', 'imagemin-mozjpeg', 'imagemin-optipng', 'imagemin-svgo'],
					},
				},
				loader: false,
			}),
		],
	},
};
