const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: ['web', 'es5'],
  mode: 'production',
  entry: {
    perspectives: path.join(process.cwd(), 'src/app/perspectives.jsx'),
    towers: path.join(process.cwd(), 'src/app/scenes/towers/towers.js')
  },
  output: {
    path: path.join(process.cwd(), 'dist', 'public'),
    filename: '[name]Bundle.[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /ResourcePaths\.jsx?$/,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            { search: 'src/', replace: '', strict: true }
          ]
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules(?!\/prop-types\/)|server)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              targets: {
                chrome: "58"
              }
            }], '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components', '@babel/plugin-transform-arrow-functions']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/app/errors', to: 'errors' },
        { from: 'src/lib', to: 'lib' }
      ],
    }),
    new HtmlWebpackPlugin({
      chunks: ['perspectives'],
      filename: 'perspectives.html',
      template: './src/app/perspectives.html',
      minify: {
        collapseWhitespace: false,
        removeComments: false 
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['towers'],
      filename: 'towers.html',
      template: './src/app/scenes/towers/towers.html',
      minify: {
        collapseWhitespace: false,
        removeComments: false 
      }
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: /<\s*script[^>]*>(.*?)<\s*\/\s*script>/,
        replacement: ''
      },
      {
        pattern: 'src/app/scenes/towers/',
        replacement: ''
      }
    ])
  ]
};