// 两种模块化：自己实现雏形，使用模块化规范
// 常见的模块化规范有 CommonJS、AMD、CMD、ES6的Modules
// node中用的commonjs
// 核心：导出和导入

// commonjs 导出
module.exports = {
  flag: true,
  test (a, b) {
    return a + b

  },
  demo (a, b) {
    return a * b
  }
}

// commonjs 导入
// let { test, demo, flag } = require('./aaa');
let { test, demo, flag } = require('moduleA');

// 等同于

let _mA = require('moduleA')
let test = _mA.test
let flag = _mA.flag
let demo = _mA.demo