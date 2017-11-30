const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app:'./src/components/app.js',
  },

  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    // publicPath:'./'
  },

  devtool:'cheap-source-map',

  module: {
    rules: [
      {
        test:/\.scss$/,
        exclude:/node_modules/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
          publicPath:'/dist/'
        })
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
          'file-loader?name=[name].[ext]&outputPath=images/&publicPath=./',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(ttf|woff|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]&outputPath=style/&publicPath=./'
      }
    ]
  },//end module

  devServer:{
    contentBase:path.join(__dirname,'dist'),
    // publicPath:'./',
    compress:true,
    // port:8080,
    // stats: 'errors-only',
    hot: false,
    // hotOnly: true
    // open:true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title:'Alexander',
      minify: {
        collapseWhitespace:true
      },
      hash: true,
      // filename:'./../index.html',
      // excludeChunks:['contact'],
      template: './src/index.ejs',
      // favicon: 'path/to/favicon.png'
    }),
    new ExtractTextPlugin({
      filename:'app.css',
      disable:false,
      allChunks:true
    }),
  ]//end plugins
};
