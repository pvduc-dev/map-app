const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  // devtool: 'source-map',
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
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
            }
          }
        ],
      },
      {
        test: /\.css$/i,
        include: /src/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentHashFunction: "xxhash64",
                localIdentHashDigestLength: 8,
                localIdentHashSalt: "map-app",
              },
            }
          }
        ],
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
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
}
