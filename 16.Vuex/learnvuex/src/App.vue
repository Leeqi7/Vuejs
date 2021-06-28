<template>
  <div id="app">
    <h2>--------APP内容：modules中的内容----------</h2>
    <h2>姓名： {{$store.state.a.name}} </h2>
    <button @click="updateName">修改名字</button>
    <h2>年龄： {{$store.state.a.age}} </h2>
    <button @click="updateAge">修改年龄</button>
    <h2> {{$store.getters.fullname}} </h2>
    <h2> {{$store.getters.fullname2}} </h2>
    <h2> {{$store.getters.fullname3}} </h2>
    <button @click="asycUpdateName">异步修改名字</button>

    <h2>--------APP内容：info对象是否是响应式----------</h2>
    <h2> {{$store.state.info}} </h2>
    <button @click="updateInfo">修改信息</button>

    <h2>--------APP内容----------</h2>
    <h2> {{message}} </h2>
    <h2> {{$store.state.counter}} </h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="subCount(10)">-10</button>
    <button @click="addStudent">添加学生</button>

    <h2>--------APP内容：getters相关信息----------</h2>
    <h2> {{$store.getters.powerCounter}} </h2>
    <h2> 年龄大于20的学生：{{$store.getters.more20stu}} </h2>
    <h2> 年龄大于20的学生个数：{{$store.getters.more20stuLength}} </h2>
    <h2> 年龄大于15的学生：{{$store.getters.moreAgeatu(15)}} </h2>
    <h2>通过id查找学生(id=110)： {{$store.getters.stuById (110)}} </h2>
    <h2>--------Hello Vuex内容----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>
<script>
import HelloVuex from './components/HelloVuex.vue';
export default {
    name: 'App',
    data() {
        return {
            message: '我是App组件',
        };
    },
    components: {
        HelloVuex,
    },
    methods: {
        addition() {
            this.$store.commit('increment');
        },
        addCount(count) {
            this.$store.commit('incrementCount', count);
        },
        subtraction() {
            this.$store.commit('decrement');
        },
        subCount(count) {
            // 1.普通的提交封装
            this.$store.commit('decrementCount', count);
            // 2. 特殊的提交封装
            this.$store.commit({
                type: 'incrementCount',
                count, //这里的count是一个对象
            });
        },
        addStudent() {
            const stu = { id: 114, name: 'lee', age: 25 };
            this.$store.commit('addStudent', stu);
        },
        updateInfo() {
            // this.$store.commit('updateInfo')
            // this.$store.dispatch('aUpdateInfo',{
            //     message:'我是携带信息',
            //     success:()=>{
            //         console.log('任务完成');
            //     }
            // })
            this.$store
                .dispatch('aUpdateInfo', '我是payload携带信息')
                .then(res => {
                    console.log('更新任务完成');
                    console.log(res);
                });
        },
        updateName() {
            this.$store.commit('updateName', 'zhou');
        },
        asycUpdateName() {
            this.$store.dispatch('aUpdateName');
        },
        updateAge() {
            this.$store.commit('updateAge', 36);
        },
    },
};
</script>
<style>
</style>
