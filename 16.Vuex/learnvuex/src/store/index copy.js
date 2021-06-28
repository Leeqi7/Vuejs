import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2. 创建导出对象

const moduleA = {
  state: {
    name: 'zhao',
    age:22
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    },
    updateAge (state, payload) {
      state.age=payload
    }
  },
  actions: {
    aUpdateName (context) {
      setTimeout(() => {
        context.commit('updateName','wangwu')
      }, 1000);
    },
    // 对象的结构 ES6 context对象中包括很多内容，可以打印查看
    aUpdateage ({state,commit}) {
      setTimeout(() => {
        commit('updateAge', 56)
      }, 1000);
    }
  },
  getters: {
    fullname (state) {
      return state.name + '11'
    },
    fullname2 (state,getters) {
      return getters.fullname + '22'
    },
    fullname3 (state, getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

export default new Vuex.Store({
  // 保存状态
  state: {
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
  },
  // 
  getters: {
    // 计数平方
    powerCounter (state) {
      return state.counter * state.counter
    },
    // 获取年龄大于20的学生
    more20stu (state) {
      return state.students.filter(s => s.age > 20)
    },
    // 获取年龄大于20的学生个数
    more20stuLength (state, getters) {
      return getters.more20stu.length
    },
    // 获取年龄大于传入参数的学生个数
    moreAgeatu (state) {
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    },
    // 通过id获取用户信息
    stuById (state) {
      return id => {
        return state.students.find(s => s.id === id)
      }
    }
  },
  // Vuex的store状态的唯一更新方式：提交mutation
  mutations: {
    // 方法 默认有state参数
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementCount (state, count) {
      state.counter += count
    },

    // 1. 普通提交
    // decrementCount (state, count) {
    //   state.counter -= count
    // },
    // 2. 特殊提交
    decrementCount (state, payload) {
      state.counter -= payload.count
    },

    addStudent (state, stu) {
      state.students.push(stu)
    },
    updateInfo (state) {
      state.info.name = 'will'
      // state.info['address']='长安', // 非响应式的
      // Vue.set(state.info,'address','长安')
      // delete state.info.age //该方式做不到响应式
      // Vue.delete(state.info,'age')
    }
  },
  // 
  actions: {
    // context 上下文
    // aUpdateInfo (context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000);
    // }
    aUpdateInfo (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('异步执行返回数据111')
        }, 1000)
      })
    }
  },
  // 划分模块
  modules: {
    a: moduleA,
    // b: moduleB
  }
})
