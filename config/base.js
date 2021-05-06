// 语法基础：CommonJS语法，它必须运行在Node环境
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer
const HappyPack = require('happypack')

function resolve(arg) {
	return path.resolve(__dirname, '..', arg)
}

module.exports = {
	// 入口（必须要有）
	// entry: './src/main.js',
	// entry: path.resolve(__dirname, './src/main.js'),
	entry: {
		// 这里的key名，是给 [name] 这个变量使用的
		app: path.resolve(__dirname, '../src/main.js')
	},
	// 出口（必须要有）
	output: {
		// filename: 'bundle.js', // bundle 一束、一捆
		// [chunkhash] 是为了解决“代浏览器缓存”导致用户端代码不更新的问题
		filename: '[name].[chunkhash].js',
		// 只能使用绝对路径
		path: resolve('dist'),

		// publicPath: '/'
		// publicPath: 'https://cdn.com/qf/h5'
		// publicPath: './',

		// Webpack（5.20.0+）的写法，用于自动清除 dist 目录
		clean: true,
		chunkFilename: '[name].[chunkhash].js'
	},
	// loaders
	// 用于定义模块编译的规则
	module: {
		// 在这里定义一条一条编译规则
		rules: [
			// 当Webpack进行编译打包时，如果检测到文件模块是以.js后缀结尾的，我就使用babel-loader进行加载
			// 进一步使用 @babel/core, @babel/preset-env 进行编译、转译
			{
				test:/\.(js|jsx)$/,
				use: [{
					loader: 'happypack/loader',
					// 对babel-loader进行缓存，提升二次构建时的速度
					options: {
						cacheDirectory: true
					}
				}],
				exclude: /node_modules/
				// include: resolve('src')
		 	},
			// sass-loader，用于加载.scss文件，交给sass编译器进行编译
			// sass编译器会把.scss文件编译成.css文件
			// css-loader 加载.css文件
			// style-loader，是把css样式添加DOM树中
			// 当use多个loader时，有先后顺序，先起作用的loader要写在后面
			// MiniCssExtractPlugin.loader作用是把css代码抽离出来，放在独立的css文件中
			{ test:/\.(css|scss)$/, use: [MiniCssExtractPlugin.loader,  'sass-loader']},
			// less-loader，加载.less文件，交给 less编译器进行编译
			{
				test:/\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								modifyVars: {
	          			'primary-color': '#1DA57A',
	           			'link-color': '#1DA57A',
	          			'border-radius-base': '2px',
	         			},
	         			javascriptEnabled: true
							}							
						}
					}
				]
			},
			// 下面这个file-loader在最新的webpack 5已经废弃
			// file-loader的作用，用于文件、图片等，返回文件图片的路径
			// { test: /\.(png|jpe?g|gif|svg)$/, use: ['file-loader'] }
			{ test: /\.(png|jpe?g|gif|svg)$/, type: 'asset/resource'},
			// 自定义loaders来处理.txt文件
			{
				test: /\.txt$/,
				use: [
					{
						loader: path.resolve(__dirname, './loaders/custom-loader.js')
					}
				]
			}
		]
	},
	// plugins
	plugins: [
		// 作用：用于把打包后的js文件自动插入到index.html中
		new HtmlWebpackPlugin({
			template: resolve('public/index.html'),
			title: 'Hello',
			filename: 'index.html',
			minify: false
		}),
		// 把.js文件中import的样式文件抽离出来
		new MiniCssExtractPlugin({
      attributes: {
        id: 'target',
        'data-target': 'example',
      },
			filename: '[name].[chunkhash].css'
    }),
		// 在控制台上显示编译进度
		new webpack.ProgressPlugin(),
		// 一个很好用的打包分析工具
		new BundleAnalyzerPlugin({
			analyzerPort: 8888,
			openAnalyzer: false
		}),
		// 开启多线程babel编译构建
		new HappyPack({
    	loaders: [ 'babel-loader' ],
			threads: 3
  	})
	],
	resolve: {
		alias: {
			'@': resolve('src')
		},
		// 关于省略后缀，只考JavaScript文件
		extensions: ['.js', '.jsx', '.ts', '.json', '.vue']
	}
}
