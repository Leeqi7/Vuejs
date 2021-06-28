<!--  -->
<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息</p>
    <!-- $route当前哪个路由处于活跃状态拿到的就是哪个路由 -->
    <h2> {{userId}} </h2>
    <h2> {{$route.params.userId}} </h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
    name: 'User',
    props: [''],
    data() {
        return {};
    },
    components: {},
    computed: {
        userId() {
            // 谁处于活跃就拿到哪个对象，userId是配置映射关系中的userId
            return this.$route.params.userId;
        },
    },
    beforeMount() {},
    mounted() {},
    methods: {
      btnClick(){
        // 所有的组件都继承自Vue的原型
        console.log(this.$router);
        console.log(this.$route);
      }
    },
    watch: {},
};
</script>

<style lang='' scoped>
</style>