const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './client/src/index.js'
  },
  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true, //Hot module replacement
    writeToDisk:true,
    port: 3003,
    watchContentBase: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, 'client/src/assets/index.html'),
      inject: 'body'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};