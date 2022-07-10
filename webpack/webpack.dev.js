const {merge} = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common');
const path = require("path");

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:5001/',
    hashFunction: 'xxhash64',
  },
  devServer: {
    port: 5001,
    historyApiFallback: true,
  },
})
