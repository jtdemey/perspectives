const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    path.join(process.cwd(), 'src/app', 'perspectives.jsx')
  ],
  target: 'web',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/', 
    filename: 'perspectives.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: {
      index: 'src/app/perspectives.html'
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
};