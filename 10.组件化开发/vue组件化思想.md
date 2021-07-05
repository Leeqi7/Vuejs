### vue 组件化思想

#### 组件化是 vue.js 中的重要思想

- 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用
- 任何的应用都会被抽象成一棵[组件树](https://v3.cn.vuejs.org/guide/component-basics.html#%E7%BB%84%E4%BB%B6%E7%9A%84%E7%BB%84%E7%BB%87) 自顶向下

#### 组件化思想的应用

- 有了组件化的思想，在之后的开发中药充分的利用
- 尽可能的将页面拆分成一个个小的可复用的组件 \*这样代码更方便组织和管理，并且扩展性也更强

### 注册组件步骤

#### 创建组件构造器

- 调用 Vue.extend()方法 创建组件构造器

#### 注册组件

- 调用 Vue.component()方法 注册组件

#### 使用组件

在 Vue 实例的作用范围内 使用组件

```javascript
<div id="app">
    <!-- 3.使用组件 -->
    <my-cpn></my-cpn>
</div>
<script>
    // 1.创建组件构造器
    const myComponent = Vue.extend({
        template:
        <div>
            <h2>组件标题</h2>
            <p>组件中的一个段落</p>
        </div>
    });

    // 2.注册组件
    Vue.component('my-cpn',myComponent)


    let app = new Vue({
        el:'#app'
    })
</script>

```

## 组件不能访问 Vue 实例的数据

### 组件是一个功能模块的封装

- 这个模块有属于自己的 HTML 模板，也应该有属于自己的数据 data

* vue 组件内部有自己的地方保存数据 data 属性
* 这个 data 属性必须是一个函数
* 而且这个函数返回一个对象，对象内部保存着数据
