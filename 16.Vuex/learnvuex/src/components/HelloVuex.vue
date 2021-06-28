<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h2> {{$store.getters.powerCounter}} </h2>
    <h2> 年龄大于20的学生：{{$store.getters.more20stu}} </h2>
  </div>
</template>

<script>
export default {
    name: 'HelloVuex',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
