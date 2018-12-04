const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');
const webpack = require("webpack");

module.exports = {
  mode: 'production',
  output: {
    filename: '[name]-[hash:6].js',
    path: resolve(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ]
};