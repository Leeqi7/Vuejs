export default {
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
}