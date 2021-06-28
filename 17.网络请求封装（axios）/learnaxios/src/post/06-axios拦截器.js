// request.js
import axios from "axios";

export function request (config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 2. axios拦截器
  // axios.interceptors //全局

  // 实例
  // 2.1请求拦截，两个参数，一个成功失败
  instance.interceptors.request.use(config => {
    console.log(config);
    // 请求拦截的作用
    // 1. config中的一些信息不符合服务器要求，在这里做些处理

    // 2. 每次发送网络请求时，希望在界面中显示一个请求的图标

    // 3. 某些网络请求(例如登录(token))，需要携带一些特殊的信息

    // 拦截之后要进行返回，否则请求会失败
    return config
  }, err => {
    console.log(err);
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })


  // 3.发送真正的网络请求
  // 直接返回
  return instance(config)
}

// main.js
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})