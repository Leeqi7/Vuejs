import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 解决双击导航报错，重复路由
//获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
const Category = () => import(/* webpackChunkName: "category" */ '../views/category/Category.vue')
const Cart = () => import(/* webpackChunkName: "cart" */ '../views/cart/Cart.vue')
const Profile = () => import(/* webpackChunkName: "profile" */ '../views/profile/Profile.vue')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
