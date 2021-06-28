<!--  -->
<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item" :key="item.id"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
    name: 'GoodsList',
    props: {
        goods: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    components: {
        GoodsListItem,
    },
};
</script>

<style scoped>
.goods {
    display: flex;
    /* 根据宽度决定一行中显示多少 */
    flex-wrap: wrap;
    /* 均等分 */
    justify-content: space-evenly;
}
</style>