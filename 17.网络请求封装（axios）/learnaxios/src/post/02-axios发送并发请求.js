import axios from 'axios'

export default {
  name: 'app',
  // 生命周期函数
  created () {
    // axios发送并发请求
    axios.all([
      axios({
        url: 'http://123.207.32.32:8000/home/multidata'
      }),
      axios({
        url: 'http://123.207.32.32:8000/home/data',
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
    // 展开结果
    axios.all([
      axios({
        url: 'http://123.207.32.32:8000/home/multidata'
      }),
      axios({
        url: 'http://123.207.32.32:8000/home/data',
        params: {
          type: 'sell',
          page: 5
        }
      })
    ]).then(axios.spread((res1, res2) => {
      console.log(res1);
      console.log(res2);
    })).catch(err => {
      console.log(err);
    })
  }
}