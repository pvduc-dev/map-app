const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
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
}
