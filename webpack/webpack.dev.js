const {merge} = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:5001/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  devServer: {
    port: 5001,
    historyApiFallback: true,
  },
})
