const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module {
  	rules: [
	  	{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
	  	}
  	]
  }
};
