const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: './index.html'
})

module.exports = {
  mode: "development", // "production" | "development"
  entry:  './js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:6].js'
  },
  plugins: [htmlWebpackPlugin],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false,
          name: '[name]-[hash:6].[ext]'
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(ttf|woff|woff2|svg|eot)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[name]-[hash:6].css', 'less-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      
    ]
  }
}