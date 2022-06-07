const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {DefinePlugin} = require('webpack');

const commonWebpackConfig = require('./webpack.common');
const path = require("path");

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: `js/[name].[contenthash:8].bundle.js`,
    publicPath: process.env.PUBLIC_PATH ?? '/',
  },
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[name].[contenthash:8].vendor.js',
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          filename: 'js/[name].[contenthash:8].chunk.js',
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
