<!--  -->
<template>
    <div>
        <h2>我是cpn组件的标题</h2>
        <p>我是cpn组件的内容</p>
        <h2> {{name}} </h2>
    </div>
</template>

<script>
    export default {
        name:'Cpn',
        props:[''],
        data () {
            return {
                name:'Cpn组件的name'
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