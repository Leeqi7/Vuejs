import axios from 'axios'

export default {
  name: 'app',
  // 生命周期函数
  created () {
    // 设置全局配置
    axios.defaults.baseURL = '123.207.32.32:8000'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded'
    axios.defaults.timeout = 1000 //请求服务器超时

    // axios发送并发请求
    axios.all([
      axios({
        url: '/home/multidata'
      }),
      axios({
        url: '/home/data',
        params: {
          type: 'sell',
          page: 5
        }
      })
    ]).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}