// More info at: https://github.com/webpack/docs/wiki/configuration
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'none', see on package.json script to enable mode
  entry: {
    app: './src/index.js'
    // vendor: 'src/vendor.js', if multifile needed
  },
  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    // config Info at: https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
