'use strict'

let baseConfig = require('./base')
let defaultSettings = require('./defaults')

let config = Object.assign({}, baseConfig, {
  entry: [
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  module: defaultSettings.getDefaultModules()
})

module.exports = config
