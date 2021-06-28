<template>
  <div class="wrapper">
    <div class="content">
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
export default {
    name: 'Category',
    data() {
        return {
            scroll: null,
        };
    },
    mounted () {
        this.scroll = new BScroll('.wrapper', {});
    },
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