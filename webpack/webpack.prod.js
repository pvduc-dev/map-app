const { merge } = require('webpack-merge');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const dotenv = require('dotenv');

dotenv.config()

const common = require('./webpack.common');
const { dependencies } = require('../package.json')
const path = require("path");

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].[chunkhash].bundle.js',
    publicPath: `${process.env.URL}/`,
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'map',
      filename: 'js/remoteEntry.js',
      exposes: {
        './Routes': './src/components/routes',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        },
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[name].[chunkhash].vendor.js',
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          filename: 'js/[name].[chunkhash].chunk.js',
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
})
