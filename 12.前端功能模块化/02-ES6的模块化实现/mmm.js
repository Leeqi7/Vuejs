// 直接使用浏览器打开会有跨域问题，vscode安装插件 Live Server，右键通过live server开html文件即可
// 省略.js会报错

// 1. 导入的对象{}中定义的变量
import { flag, sum } from "./aaa.js"
if (flag) {
  console.log("小明是天才");
}

// 2. 直接导入export 定义的变量
import { num1, height } from './aaa.js'
console.log(num1, height);

// 3. 导入export的function
import { mul, Person } from './aaa.js'
console.log(mul(20, 30));

const person = new Person()
console.log(person.age, person.name);
person.run()

// 4.export default
import aa from './aaa.js'
aa('aa是export default 导出的函数')

// 5. 统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.Person);
console.log('统一导入的');
aaa.aa('5555558')