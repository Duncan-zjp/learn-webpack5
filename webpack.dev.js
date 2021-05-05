const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge.merge(common,{
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins:[
      // 配置环境变量
      new webpack.DefinePlugin({
        'process.env.NODE_ENV':JSON.stringify('development')
      })
    ]
  }
)