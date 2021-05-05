const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // 设置环境
  mode:'production',
  // 用于追踪代码报错信息，将编译后的代码映射到源代码
  devtool:'inline-source-map',
  // 入口文件
  entry:{
    // index:'./src/index.js',
    // print:'./src/print.js',
    app:'./src/index.js',
    another:'./src/another-module.js'
  },
  // 出口文件配置
  output:{
    // 打包后的文件
    filename:'[name].[contenthash].bundle.js',
    // 打包后的路径
    path:path.resolve(__dirname,'dist'),
    // 资源模块输出的文件
    assetModuleFilename:'images/[hash][ext]',
    // 每次构建都清理文件
    clean:true,
    // 配置路径
    publicPath:'/',
    // 代码分割
    chunkFilename:'[name].bundle.js'
  },
  // 热更新
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  // loader配置
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        type:'asset',
        parser:{
          dataUrlCondition:{
            // 设置资源小于4kb的文件为asset/inline类型，大于4kb为asset/resource类型
            maxSize:4 * 1024 * 1000
          }
        }
      },
      {
        test:/\.txt$/i,
        type:'asset/source'
      }
    ]
  },
  // 插件
  plugins:[
    new htmlWebpackPlugin({title:'development'}),
    // 按模块热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization:{
    // 缓存hash
    moduleIds: 'deterministic',
    // 代码分离
    runtimeChunk:'single',
    splitChunks:{
      cacheGroups:{
        vendor:{
          test:/[\\/]node_modules[\\/]/,
          name:'vendors',
          chunks:'all'
        }
      },
    }
  }
}