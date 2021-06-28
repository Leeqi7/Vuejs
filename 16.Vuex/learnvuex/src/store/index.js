import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'
// 1.安装插件
Vue.use(Vuex)

// 2. 创建导出对象

const state ={
    counter: 100,
    students: [
      { id: 110, name: 'lily', age: 17 },
      { id: 111, name: 'kobr', age: 18 },
      { id: 112, name: 'james', age: 22 },
      { id: 113, name: 'tom', age: 30 },
    ],
    info: {
      id: 11,
      name: 'tomas',
      age: 23,
      height: 1.78
    }
  }
export default new Vuex.Store({
  // 保存状态
  state,
  // 相当于组件的计算属性
  getters,
  // Vuex的store状态的唯一更新方式：提交mutation
  mutations,
  // 执行异步操作
  actions,
  // 划分模块
  modules: {
    a: moduleA
    // b: moduleB
  }
})
