var webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.join(__dirname, '../../Content/dist');
var APP_DIR = path.join(__dirname, '../../app');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
		exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
module.exports = config;
