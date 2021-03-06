const path = require('path');
const htmlWebpckPlugin = require('html-webpack-plugin');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports ={
  mode: isDevelopment ? 'development': 'production',
  devtool:isDevelopment ? 'eval-source-map': 'source-map',
  entry:path.resolve(__dirname, 'src', 'index.tsx'),
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  resolve:{
    extensions:[
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins:[
   isDevelopment &&  new reactRefreshWebpackPlugin(),
    new htmlWebpckPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean),
  module:{
    //como a aplicação vai se portar quando eu tiver cada tipo de arquivo.
    rules:[
      {
        test:/\.(j|t)sx$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            plugins:[
              isDevelopment && require.resolve('react-Refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test:/\.scss$/,
        exclude: /node_modules/,
        use:['style-loader', 'css-loader','sass-loader']
      }
    ]
  }
};