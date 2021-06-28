
const WebpackMerge = require('webpack-merge')
const common = require('./common.config')

module.exports = WebpackMerge.merge(common, {
  //生产环境下回自动压缩js代码
  mode: 'production',
  plugins: [

  ],
})