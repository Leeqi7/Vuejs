var name = '小明'
var age = 18
var flag = true

function sum (x, y) {
  return x + y
}
if (flag) {
  console.log(sum(10, 20));
}

// 1. 导出方式一：
export { flag, sum }

// 2. 导出方式二：
export var num1 = 1000
export var height = 1.88

// 3. 导出函数和类
// 也可以定义了统一导出
// function name(params) {

// }
// class Person{ }
// export {name,Person}
export function mul (num1, num2) {
  return num1 * num2
}
export class Person {
  name = 'lee'
  age = 23
  run () {
    console.log('running');
  }

}



// 4. exports default 导出的时候可以不命名，导入的时候可以重命名 不需要{} 有且只能有一个default
// const address = '北京'
// export default address

export default function (str) {
  console.log(str);
}

// 5. *别名导入的时候要先导出函数
export function aa (str) {
  console.log(str);
}