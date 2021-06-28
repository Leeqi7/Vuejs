const { resolve } = require('path')
const {merge} = require('webpack-merge')
const common = require('./common.config')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'dist'), // 另一种写法 './dist'
    // inline: true, // 页面实时刷新实时监听
    compress: true, //启动gzip压缩
    port: 3000,
    open: true,
    // historyApiFallback  //在SPA页面中，依赖HTML5的history模式
  },
  devtool: 'inline-source-map'
})