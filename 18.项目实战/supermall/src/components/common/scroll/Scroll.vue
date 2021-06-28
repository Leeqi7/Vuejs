<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll';
import BScroll from '@better-scroll/core';
// import Pullup from '@better-scroll/pull-up';
// // 使用上拉插件
// BScroll.use(Pullup);

export default {
    name: 'Scroll',
    props: [''],
    data() {
        return {
            scroll: null,
        };
    },
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {
        // 选择元素，给元素绑定ref属性
        // ref如果绑定在组件上，那么通过this.$refs.refname获取到的是一个组件对象
        // ref如果绑定在元素上，那么通过this.$refs.refname获取到的是一个元素对象
        // this.scroll=new BScroll(this.$refs.wrapper,{
        //   observeDOM:true,
        //   observeImage:true
        // })
    },
    updated() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: 3,
            observeDOM: true, //允许控制DOM元素
            observeImage: true, //等待图片加载完毕
            click: true, //允许点击
        });
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      }
    },
    watch: {},
};
</script>

<style scoped>
</style>