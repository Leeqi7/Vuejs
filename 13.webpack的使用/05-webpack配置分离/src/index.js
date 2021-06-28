// 执行命令：webpack --mode=development

// 1. 使用commonjs的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(10, 20));
console.log(mul(10, 20));

// 2. 使用ES6的模块化规范
import { name, age, height } from './js/info.js'
console.log(name);
console.log(age);
console.log(height);

// 3. 依赖css文件
require('./css/normal.css')

// 4. 依赖less文件
require('./css/special.less')
// document.writeln('<h2>啦啦啦啦</h2>')

// 使用vue进行开发
import Vue from 'vue'

// const app = new Vue({}) 可以省略不用赋值给app
/**
 * html模板在之后开发中不希望被频繁手动修改
 * 定义template属性
 * el属性对div进行绑定，定义了template属性之后，el挂载的位置会被template的内容替换
 * 把App抽成一个组件，在template中用这个组件，
 * 然后把App作为单独的模块导入
 * 创建vue文件，然后通过vue-loader 和vue-template-compiler 来处理.vue文件
 */
// import App from './vue/app.js'
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})


