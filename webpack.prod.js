const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge.merge(common,{
  devtool:'source-map',
  plugins:[
    // 用于追踪生产错误代码（映射源代码）
    new UglifyJSPlugin({
      sourceMap:true
    }),
    // 配置环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    })
  ]
})