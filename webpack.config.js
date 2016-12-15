var path = require('path');

var config = {
  context: path.join("/Users/joaoferreira/Documents/Atom/react/my-project", 'src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join("/Users/joaoferreira/Documents/Atom/react/my-project", 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join("/Users/joaoferreira/Documents/Atom/react/my-project", 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join("/Users/joaoferreira/Documents/Atom/react/my-project", 'node_modules'),
    ],
  },
};
module.exports = config;
