const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const {dependencies} = require("../package.json");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 5001,
    historyApiFallback: true,
    // compress: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'map',
      filename: 'js/remoteEntry.js',
      exposes: {
        './Routes': './src/components/routes',
      },
      shared: {
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
  ]
})
