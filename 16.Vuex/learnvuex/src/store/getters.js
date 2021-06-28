export default {
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
}