<!--  -->
<template>
    <div>
        <h2>我是profile标题</h2>
        <p>我是profile内容</p>
        <h2> {{$route.query.name}} </h2>
        <h2> {{$route.query.age}} </h2>
        <h2> {{$route.query.height}} </h2>
    </div>
</template>

<script>
    export default {
        name:'Profile',
        props:[''],
        data () {
            return {

            };
        },
        components: {},
        computed: {},
        beforeMount() {},
        mounted() {},
        methods: {},
        watch: {}

    }

</script>

<style lang='' scoped>

</style>