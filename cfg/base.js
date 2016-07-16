'use strict'
var path = require('path');
var defaultSettings = require('./defaults');

module.exports = {
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {},
  postcss: function () {
    return [
      require('autoprefixer')
    ]
  }
};
