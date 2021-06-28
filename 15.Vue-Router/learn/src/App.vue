<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <router-link to="/about">关于</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- 传递参数 -->
    <!-- <router-link :to="{path:'/profile',query:{name:'lee',age:18,height:1.88}}">档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- 保留组件状态 -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            userId: 'lee',
        };
    },
    methods: {
        // homeClick() {
        //     // 通过代码的方式修改路由 vue-router 不要用history
        //     // vue-router源码中给每个组件都加了$router属性,router就是router对象实例，所以可以通过this.$router拿到
        //     // push => pushState
        //     // this.$router.push('/home')
        //     // replace => replaceState
        //     // this.$router.replace('/home'),这样写点击两次同一个按钮会报错
        //     this.$router.replace({path:'/home'},onComplete=>{},onAbort =>{});
        //     console.log('homeClick');
        // },
        // aboutClick() {
        //     // this.$router.push('/about');
        //     this.$router.replace({path:'/about'},onComplete=>{},onAbort =>{});
        //     console.log('aboutClick');
        // },

        userClick() {
            this.$router.push('/user/' + this.userId);
        },
        profileClick() {
            this.$router.push({
                path: '/profile',
                query: {
                    name: 'qqq',
                    age: 22,
                    height: 1.7,
                },
            });
        },
    },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.router-link-active {
    color: aqua;
}
/* .active{
  color: red;
} */
</style>
