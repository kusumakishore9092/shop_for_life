const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'client/javascript/index.js'),
    path.resolve(__dirname, 'client/styles/main.scss')
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    alias: {
      app: path.resolve(__dirname, 'app'),
      client: path.resolve(__dirname, 'client'),
      tests: path.resolve(__dirname, 'tests')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        }),
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'client', 'styles')]
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
