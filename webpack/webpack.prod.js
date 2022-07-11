const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

const commonWebpackConfig = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    // filename: `js/[name].[contenthash:8].bundle.js`,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      chunkFilename: 'css/index.[contenthash:8].css',
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         filename: 'js/[name].[contenthash:8].vendor.js',
  //         priority: -10,
  //         reuseExistingChunk: true,
  //       },
  //       default: {
  //         filename: 'js/[name].[contenthash:8].chunk.js',
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
})
