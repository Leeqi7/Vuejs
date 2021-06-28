import Vue from 'vue'
import App from './App'
// 导入的是一个目录的时候，会直接找这个目录下的inde文件，所以router/index这里可以省略index
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})