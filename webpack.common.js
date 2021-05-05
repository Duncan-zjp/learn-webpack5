const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
    app:'./src/index.js'
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new cleanWebpackPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'Production'
    })
  ]
}