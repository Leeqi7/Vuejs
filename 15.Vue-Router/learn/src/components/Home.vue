<!--  -->
<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2> {{message}} </h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
    name: 'Home',
    props: [''],
    data() {
        return {
            message: '你好啊',
            // 第一次进来时路由
            path: '/home/news',
        };
    },
    components: {},
    computed: {},
    methods: {
        btnClick() {
            this.message += '1';
            console.log(this.message);
            return this.message;
        },
    },
    watch: {},
    beforeMount() {},
    created() {
        // 组件被创建的时候会来到这个生命周期函数中
        console.log('home created');
    },
    // mounted() {
    //     // 组件声明周期，挂载的到实例上 回调mounted
    //     console.log('mounted');
    // },
    // updated() {
    //     // 数据更新时回调updated
    //     console.log('updated');
    // },
    destroyed() {
        console.log('home destroyed');
    },
    activated() {
        // 组件活跃状态
        console.log('activated');
    },
    deactivated() {
        // 组件活跃状态
        console.log('deactivated');
    },
    // beforeRouteLeave(to, from, next) {
    //     //has access to `this` component instance}
    //     console.log(this.$route.path);
    //     this.path = this.$route.path;
    //     next();
    // },
};
</script>

<style lang='' scoped>
</style>