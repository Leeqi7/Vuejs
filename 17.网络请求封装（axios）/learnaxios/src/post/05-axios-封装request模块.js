// request.js
import axios from "axios";

// 方式四：axios实例本来就返回一个Promise
export function request (config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2.发送真正的网络请求
  // 直接返回
  return instance(config)
}

// 方式一：回调函数，三个参数
// export function request (config, success, failture) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })

// 2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//     success(res)
//     })
//     .catch(err => {
//     failture(err)
//   })
// }

// 方式二：回调函数，一个参数
// export function request (config) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })

//   // 2.发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failture(err)
//     })
// }

// 方式三：Promise 但是axios实例本来就返回一个Promise
// export function request (config) {
//   return new Promise((resolve, reject) => {
//     // 1. 创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })

//     // 2.发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
// })
// }

// main.js中
import { request } from "../network/request";

// 方式一：
request({
  url:'/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})

// 方式二：
request({
  baseConfig: {
    url: '/home/multidata'
  },
  success: function (res) {
    console.log(res);
  },
  failture: function (err) {
    console.log(err);
  }
})

// 方式三：
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// 方式四：
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


