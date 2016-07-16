'use strict'

var baseConfig = require('./base');
var defaultSettings = require('./defaults');

var config = Object.assign({}, baseConfig, {
  entry: [
    './src/index'
  ],
  cache: true,
  devtool: 'source-map',
  module: defaultSettings.getDefaultModules()
});

module.exports = config;
