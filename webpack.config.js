const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
  },
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      filename: 'index.html', // output file
    }),
  ],
}