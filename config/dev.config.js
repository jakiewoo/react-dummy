const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
var path = require('path');
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, '../build'),
    port: '3001',
    hot: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});