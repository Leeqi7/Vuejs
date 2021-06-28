import axios from 'axios'

export default {
  name: 'app',
  // 生命周期函数
  created () {
    // 创建对应的axios实例
    const instance1 = axios.create({
      baseURL = '123.207.32.32:8000',
      timeout = 1000
    })
    instance1({
      url: '/home/multidata'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    instance1({
      url: '/home/data',
      params: {
        type: 'sell',
        page: 5
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    // 2. 创建又一个实例
    const instance1 = axios.create({
      baseURL = '222.111.33.33:8000',
      timeout = 10000,
      headers: {}
    })
    instance1({
      url: '/home/multidata'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    instance1({
      url: '/home/data',
      params: {
        type: 'sell',
        page: 5
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}