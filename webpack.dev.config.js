const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
        test: /\.png$/,
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
}
