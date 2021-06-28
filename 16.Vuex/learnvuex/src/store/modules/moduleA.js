export default  {
  state: {
    name: 'zhao',
    age: 22
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    },
    updateAge (state, payload) {
      state.age = payload
    }
  },
  actions: {
    aUpdateName (context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000);
    },
    // 对象的结构 ES6 context对象中包括很多内容，可以打印查看
    aUpdateage ({ state, commit }) {
      setTimeout(() => {
        commit('updateAge', 56)
      }, 1000);
    }
  },
  getters: {
    fullname (state) {
      return state.name + '11'
    },
    fullname2 (state, getters) {
      return getters.fullname + '22'
    },
    fullname3 (state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}