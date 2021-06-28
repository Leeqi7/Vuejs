module.exports = {
  configureWebpack: {
    resolve: {
      alias: { //配置别名,修改后需要重新编译才能生效
        // src别名根据情况添加
        'src': '@',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}