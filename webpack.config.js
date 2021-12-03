const path = require('path');
const htmlWebpckPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports ={
  mode: isDevelopment ? 'development': 'production',
  devtool:isDevelopment ? 'eval-source-map': 'source-map',
  entry:path.resolve(__dirname, 'src', 'index.jsx'),
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  resolve:{
    extensions:[
      '.js',
      '.jsx'
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins:[
    new htmlWebpckPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  module:{
    //como a aplicação vai se portar quando eu tiver cada tipo de arquivo.
    rules:[
      {
        test:/\.jsx$/,
        exclude: /node_modules/,
        use:'babel-loader',
      },
      {
        test:/\.scss$/,
        exclude: /node_modules/,
        use:['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
};