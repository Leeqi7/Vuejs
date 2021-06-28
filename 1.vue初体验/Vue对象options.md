### vm.$el

> 类型：string | HTMLElement
> 作用：决定之后 Vue 实例会管理哪个 DOM 即 Vue 实例使用 的根 DOM 元素。

### data

> 类型：Object | Function （组件中 data 必须是一个函数）
> 作用：Vue 实例对应的数据对象

### methods

> 类型：{[key:string]:Function}
> 作用：定义属于 Vue 的一些方法，可以在其他地方调用，也可以在指令中使用

## 方法/函数

- 方法：method ，定义在类中，方法和实例对象挂钩，面向对象
- 函数：function ，定义在全局

# vue 的生命周期

- 生命周期：事物从诞生到消亡的过程
- Vue 生命周期：new Vue()对象诞生
- 在 github 下载 vue 代码，选择分支，tag 中的最新版 或者 npm 安装
- 执行到某一步的时候 生命周期会回调对应的函数，告诉我们执行到这一步了，created 函数，和 mounted 函数，自动回调
- calhook 回调函数，钩子函数，官方提供的生命周期函数，绿色是 vue 自动完成的，红色部分是我们需要实现的函数，在每个重要节点做标记（回调函数）
