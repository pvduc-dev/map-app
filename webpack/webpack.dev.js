const {merge} = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 5001,
    historyApiFallback: true,
  },
})
