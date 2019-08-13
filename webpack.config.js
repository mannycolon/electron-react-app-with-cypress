const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'react-hot-loader/patch',
    // 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [['es2015', { modules: false }], 'react'],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread',
              // 'react-hot-loader/babel'
            ]
          }
        }
      }
    ]
  },
  // node:{
  //   "fs": "empty",
  //   "child_process": "empty"
  // },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/',
    filename: 'main.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
