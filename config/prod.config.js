const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].bundle.[chunkhash].js',
  },

  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      }
    })]
  },
  plugins: [
    // Extract imported CSS into own file
    new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      uglifyOptions: {
        minimize: true,
      }
    }),
  ],
});