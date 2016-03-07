var path = require('path')
var webpack = require('webpack');
var path_node_modules = path.resolve(__dirname, 'node_modules');


module.exports = {
  devtool: "source-map",
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      './static/index.jsx'
    ],
    vendors: ['react', 'react-dom', 'react-router', 'history',
      'react-addons-linked-state-mixin', 'react-addons-pure-render-mixin',
      'jquery', 'lodash', 'react-redux', 'redux', 'redux-simple-router',
      'redux-thunk', 'redux-undo','aja'
    ]
  },
  output: {
    path: path.resolve(__dirname, "/static-dist"),
    publicPath: "/",
    filename: '[name].js'
  },
  module: {
    loaders: [
      // {test: /\.js$|\.jsx$/,loaders: ['babel'],exclude: /(node_modules|bower_components)/},
      {test: /\.jsx?$/, loaders: ['babel'], exclude: /(node_modules|bower_components)/},
       {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      },
      // { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
    alias: [{
      reactDom: 'react-dom'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}