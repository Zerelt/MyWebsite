const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/components/app.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    // publicPath:'http://localhost:8080/',
    publicPath:'/',
    filename: '[name].bundle.js',
  },

  devtool:'inline-source-map',

  module: {
    rules: [
      {
        test:/\.scss$/,
        exclude:/node_modules/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      {
        test:/\.(jpe?g|png|svg|gif)$/i,
        exclude:/node_modules/,
        use:[
          'file-loader?name=[name].[ext]&outputPath=./&publicPath=./',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  devServer:{
    contentBase:path.join(__dirname,'dist'),
    publicPath:'/',
    // publicPath: 'http://localhost:8080',
    compress:true,
    inline:true,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:'My custom project title',
      minify: {
        collapseWhitespace:true
      },
      hash: true,
      template: './src/index.ejs',
      favicon: './src/images/favicon.png'
    }),
    new ExtractTextPlugin({
      filename:'app.css',
      disable:true,
      allChunks:true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};
