const path = require("path");
module.exports = {
  webpackConfig: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
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
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ]
    }
  },
  pagePerSection: true,
  defaultExample: true,
  require: [
    path.join(__dirname, 'src/style/index.css')
  ],
}
