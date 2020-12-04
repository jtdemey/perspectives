const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: {
    views: path.join(process.cwd(), 'src/server/index.js')
  },
  output: {
    path: path.join(process.cwd(), 'dist', 'server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};