<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true, //允许控制DOM元素
      observeImage:true, //等待图片加载完毕
      click: true, //允许点击
      probeType: this.probeType, //定义类型
      pullUpLoad:this.pullUpLoad //是否允许上拉到底部
    });
    // 2.监听滚动的位置
    this.scroll.on("scroll",(position)=>{
      this.$emit("myscroll",position)
    })
    //3.监听scroll滚动到底部
    if(this.pullUpLoad){
      this.scroll.on("pullingUp",()=>{
        this.$emit("myPullingUp")
      })
    }
  },
  methods: {
    //返回顶部
    myScrollTo(x, y, time = 300) {
       this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //页面到达底部
    myFinishPullUp(){
       this.scroll &&this.scroll.finishPullUp()
    },
    //重新加载数据
    myRefresh(){
      this.scroll &&  this.scroll.refresh()
    }
  }
};
</script>

<style></style>

  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true, //允许控制DOM元素
      observeImage:true, //等待图片加载完毕
      click: true, //允许点击
      probeType: this.probeType, //定义类型
      pullUpLoad:this.pullUpLoad //是否允许上拉到底部
    });
    // 2.监听滚动的位置
    this.scroll.on("scroll",(position)=>{
      this.$emit("myscroll",position)
    })
    //3.监听scroll滚动到底部
    if(this.pullUpLoad){
      this.scroll.on("pullingUp",()=>{
        this.$emit("myPullingUp")