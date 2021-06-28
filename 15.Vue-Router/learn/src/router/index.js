// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 全部加载
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载 动态导入，一个懒加载对应一个文件
const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const User = () => import('../components/User.vue')
const About = () => import('../components/About.vue')
const Profile = () => import('../components/Profile.vue')

// 1. 通过Vue.use(插件)，安装插件，使用Vue先导入vue
Vue.use(VueRouter)

// 2.创建VueRouter对象

// 配置映射关系 routes ，component，拼写必须是这样
const routes = [
  // 默认路径，将根路径重定向到/home的路径下
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
// 3. 创建router实例
const router = new VueRouter({
  // 配置路由和组件之间的应用关系，routes属性
  routes,
  // 默认是hash值，使用history模式，url中没有#
  // mode:history,这种写法报错
  RouterMode: history,
  // 全局配置router-link 的样式
  linkActiveClass: 'active'
})

// 前置守卫（guard）路由守卫，监听跳转，跳转之前执行
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  // console.log(to);
  console.log('跳转 之前');
  next()
})

// 后置钩子（hook）
router.afterEach(route => {
  //these hooks do not get a next function and cannot affect the navigation}
  console.log('跳转之后');
})

// 4. 将router对象传到Vue实例，导出
export default router
