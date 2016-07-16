'use strict'
const path = require('path')
const srcPath = path.join(__dirname, '/../src')
const dfltPort = 8000
function getDefaultModules() {
  return {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [
          path.join(__dirname, '/../src')
        ]
      }
    ]
  }
}
module.exports = {
  srcPath: srcPath,
  publicPath: '/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
}
