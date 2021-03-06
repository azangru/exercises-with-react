const webpack = require('webpack');
const path = require('path');

const devConfig = {
  target: 'web', // that's default actually
  entry: {
    client: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '../client/index.js')
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../'),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(), // displays relative path of the module during HMR
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
};

module.exports = devConfig;
