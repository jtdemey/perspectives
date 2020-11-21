const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    perspectives: path.join(process.cwd(), 'src/app/perspectives.jsx')
  },
  output: {
    path: path.join(process.cwd(), 'dist', 'public'),
    filename: 'perspectives.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|server)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              forceAllTransforms: true,
              targets: {
                chrome: "58",
                ie: "11"
              }
            }], '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['perspectives'],
      filename: 'perspectives.html',
      template: './src/app/perspectives.html'
    })
  ]
};