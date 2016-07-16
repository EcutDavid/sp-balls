'use strict'
var path = require('path');
var srcPath = path.join(__dirname, '/../src');

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
  getDefaultModules: getDefaultModules
};
