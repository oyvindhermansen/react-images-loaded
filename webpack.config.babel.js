import webpack from 'webpack';
import path from 'path';
import HotModuleReplacementPlugin from 'webpack-hot-middleware';

module.exports = {
	entry: './demo/demo.js',
	module: {
		rules: [{
			test: /\.js?$/,
			loaders: ['babel-loader'],
			include: [
				path.resolve(__dirname, "src"),
        path.resolve(__dirname, "demo")
			]
		}]
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '/'),
		publicPath: '/',
	},
  devServer: {
    contentBase: "./demo",
    noInfo: true,
    hot: true,
    inline: true
  }
};
