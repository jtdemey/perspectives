const path = require('path');
const webpack = require('webpack');

const getWdsConfig = (entryPath, outputFile, apiFallback) => ({
  mode: 'development',
  entry: [
    entryPath
  ],
  target: 'web',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/', 
    filename: outputFile 
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: {
      index: apiFallback 
    },
    open: true,
    port: 8000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
});

module.exports = getWdsConfig;