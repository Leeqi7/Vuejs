<template>
  <div class="wrapper">
    <div class="content">
      <button @click="btnClick">按钮</button>
      <ul>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
        <li>
          <h2>分类</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
export default {
    name: 'Category',
    data() {
        return {
            scroll: null,
        };
    },
    // 组件创建完调用
    mounted () {
        this.scroll = new BScroll('.wrapper', {
          // 实时监听滚动位置
          probeType:3,
          // 上拉加载更多
          pullUpLoad:true,
          // click:true
        });
        this.scroll.on('scroll',(position)=>{
          // console.log(position);
        })
        this.scroll.on('pullingUp',()=>{
          console.log('上拉加载更多');
        })
    },
    methods: {
      btnClick(){
        console.log('btnClick');
      }
    }
};
</script>

<style scoped>
.wrapper {
    height: 150px;
    background-color: pink;

    /* 隐藏子容器超过父容器的部分 */
    /* overflow: hidden; */
}
</style>