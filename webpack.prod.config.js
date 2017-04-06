const path = require('path');
const webpack = require('webpack')

var config = {
  devtool: 'source-map',

  context: path.join(__dirname, 'src'),

  entry: [
    './index.js',
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.jpg$/,
        loader: 'file'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ],
  },

  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },

  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  }
};
module.exports = config;
