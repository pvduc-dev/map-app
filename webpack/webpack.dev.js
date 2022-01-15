const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const {dependencies} = require("../package.json");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { DefinePlugin } = require('webpack');

dotenv.config()

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 5001,
    historyApiFallback: true,
  },
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new ModuleFederationPlugin({
      name: 'app_shell',
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
