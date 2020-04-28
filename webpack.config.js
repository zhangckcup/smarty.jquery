const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Smarty.ink',
  filename: 'index.html',
  template: './index.html'
})

module.exports = {
  mode: "development", // "production" | "development"
  entry: {
    index: './js/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:6].js'
  },
  plugins: [htmlWebpackPlugin],
  module: {
    rules: [{
        test: /\.(html)$/,
        use: [{
          loader: "html-loader",
        }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:6].[ext]',
          outputPath: 'img/',
          publicPath: '/src/img',
        },
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      
    ]
  }
}