let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
let { EsbuildPlugin } = require('esbuild-loader');

module.exports = (env) => {
	let isDevelopment = Boolean(env.WEBPACK_SERVE);

	return {
		mode: isDevelopment ? 'development' : 'production',
		devtool: isDevelopment ? 'inline-source-map' : false,
		entry: path.resolve(__dirname, 'index.js'),
		output: {
			path: path.resolve(__dirname, 'dist/'),
			filename: isDevelopment ? 'assets/[name].js' : 'assets/[contenthash].[name].js',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'esbuild-loader',
					options: {
						loader: 'jsx',
						target: 'es2015',
					},
				},
				{
					test: /\.css$/,
					use: [
						{ loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader },
						{ loader: 'css-loader', options: { sourceMap: true } },
					],
				},
				{
					test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
					type: 'asset/resource',
					generator: {
						filename: 'assets/fonts/[name][ext]',
					},
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					type: 'asset/resource',
					generator: {
						filename: 'assets/images/[name][ext]',
					},
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.DEV': isDevelopment,
				'process.env.PRODUCTION': !isDevelopment,
			}),
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'assets/[contenthash].[name].css',
				chunkFilename: 'assets/[contenthash].[name].css',
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'index.html'),
				filename: 'index.html',
				inject: 'body',
			}),
			...(
				isDevelopment
					? [new ReactRefreshWebpackPlugin()]
					: []
			),
		],
		optimization: {
			...(
				isDevelopment
					? {}
					: {
						emitOnErrors: true,
						minimizer: [
							new EsbuildPlugin({
								target: 'es2015',
								css: true,
							}),
						],
					}
			),
		},
		...(
			isDevelopment
				? {
					watchOptions: {
						ignored: /node_modules/,
					},
					devServer: {
						port: '8017',
						host: '0.0.0.0',
						hot: true,
						allowedHosts: 'all',
						historyApiFallback: true,
						devMiddleware: {
							publicPath: '/',
						},
						client: {
							logging: 'none',
							overlay: false,
						},
						static: {
							directory: path.join(__dirname, 'dist'),
							watch: true,
						},
					},
				}
				: {}
		),
	};
};
