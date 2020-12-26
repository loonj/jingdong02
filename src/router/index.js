import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'  //刚开始不写后面的时候重定向到login
  },
  {
    path: '/register',
    name: 'register',
    component: Register  //上面引入了 import Register from '../views/Register.vue'
  },
  {
    path: '/home',
    name: 'home',
    component: Home  
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 懒加载
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/botnav',
    name: 'Botnav',
    component: () => import('../views/Botnav.vue'),
    children:[
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        meta:{
          requireAuth:true
        },
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'Mine',
        meta:{
          requireAuth:true
        },
        component: () => import('../views/Mine.vue')
      }
    ]
  }
]

//如果不加下面的，因为vue-router某些版本bug，当由一个不需要登录的页面跳转到需要登录页面时会出现下面的报错
//Error: Redirected when going from "/botnav/search" to "/botnav/cart" via a navigation guard.
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
