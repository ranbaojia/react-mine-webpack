// 为生产环境所配置的选项
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
	// 用于指定生产打包，还是启动开发环境
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			//压缩js和css
			new UglifyJsPlugin(),
			new CssMinimizerPlugin()
		]
	}
}
