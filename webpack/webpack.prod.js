const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {NormalModuleReplacementPlugin} = require('webpack');
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonWebpackConfig = require('./webpack.common');

module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: `js/[name].[contenthash:8].bundle.js`,
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
      chunkFilename: 'css/[name].[chunkhash:8].css',
    }),
    new NormalModuleReplacementPlugin(
      /@\/environment\/environment/,
      '@/environment/environment.prod'
    ),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/index.html',
              '**/favicon.ico'
            ],
          }
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false
      }),
      new CssMinimizerPlugin(),
    ],
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
