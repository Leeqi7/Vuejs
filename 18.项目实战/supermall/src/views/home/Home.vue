<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
// 导入的公共组件
import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import BackTop from 'components/common/backTop/BackTop.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';

// 导入的子组件
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';

// 导入的方法
import { getHomeMultidata, getHomeGoods } from 'network/home';

export default {
    name: 'Home',
    components: {
        NavBar,
        Scroll,
        BackTop,
        TabControl,
        GoodsList,

        HomeSwiper,
        RecommendView,
        FeatureView,
    },
    data() {
        return {
            // result:null
            banners: [],
            recommends: [],
            goods: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] },
            },
            currentType: 'pop',
        };
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        },
    },
    created() {
        // 1. 请求多个数据
        this.getHomeMultidata();

        // 2. 请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
    },
    methods: {
        /**
         * 事件监听相关的方法
         */
        tabClick(index) {
            // console.log(index);
            // 方法一：
            this.currentType = Object.keys(this.goods)[index];
            // console.log(this.currentType);
            // 方法二：
            // switch (index) {
            //     case 0:
            //         this.currentType = 'pop';
            //         break;
            //     case 1:
            //         this.currentType = 'new';
            //         break;
            //     case 2:
            //         this.currentType = 'sell';
            //         break;
            // }
        },
        backClick(){
            console.log('返回顶部组价点击');
            this.$refs.scroll.scrollTo(0,0,500)
        },
        /**
         * 网络请求相关方法
         */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                // console.log(res);
                // this.result = res
                this.banners = res.data.banner.list;
                // console.log(this.banners);
                this.recommends = res.data.recommend.list;
                // console.log(this.recommends);
            });
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                // console.log(res, type);
                // 把请求到的数据放进数组里
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1;
            });
        },
    },
};
</script>

<style scoped>
#home {
    padding-top: 44px;
    /* 为了显示完整的图片 */
    /* padding-bottom: 49px; */
    /* 视口高度 viewport height */
    height:100vh;
    position: relative;
}
.home-nav {
    background-color: var(--color-tint);
    color: white;

    /* 固定顶部导航栏 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
}
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>