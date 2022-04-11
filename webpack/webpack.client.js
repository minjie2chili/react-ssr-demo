const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
  },
  externals: [nodeExternals()]
}

module.exports = merge(baseConfig, clientConfig);
