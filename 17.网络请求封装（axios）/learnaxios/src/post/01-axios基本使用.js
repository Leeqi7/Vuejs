import axios from 'axios'

export default {
  name: 'app',
  // 生命周期函数
  created () {
    // httpbin.org/ 这个网站可以用来测试封装网络请求
    // axios可以返回一个promise
    axios({
      url: 'http://123.207.32.32:8000/home/category',
      methods: 'post'
    }).then(res => {
      console.log(res);
      console.log('111 最普通写法 post请求成功');
    }).catch(err => {
      console.log(err);
    })

    axios.get('http://123.207.32.32:8000/home/multidata')
      .then(res => {
        console.log(res);
        console.log('222 .get没参数请求成功');
      }).catch(err => {
        console.log(err);
      })

    axios.get('http://123.207.32.32:8000/home/data', {
      params: {
        type: 'sell',
        page: 1
      }
    }).then(res => {
      console.log(res);
      console.log('222 .get有参数请求成功');
    }).catch(err => {
      console.log(err);
    })

    axios({
      url: 'http://123.207.32.32:8000/home/data?type=sell&page=1'
    }).then(res => {
      console.log(res);
      console.log('333 url后面直接跟参数请求成功');
    }).catch(err => {
      console.log(err);
    })

    // 也可以把参数单独写出来
    axios({
      url: 'http://123.207.32.32:8000/home/data',
      params: {
        type: 'sell',
        page: 1
      }
    }).then(res => {
      console.log(res);
      console.log('444 参数单独写请求成功');
    }).catch(err => {
      console.log(err);
    })

  }
}