const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	entry: './src/lib/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
    	umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /.less$/,
				use: ['style-loader','css-loader', 'less-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}
