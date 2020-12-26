import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import md5 from 'js-md5'
import setaxios from './setaxios'

//因为暴露的是一个方法
setaxios();

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$md5=md5

//路由守卫
router.beforeEach((to,from,next)=>{
  //无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
  store.commit('setToken',sessionStorage.getItem('token'))
  if(to.meta.requireAuth){
    if(store.state.token){
      next();
    }else{
      next({
        path:'/login',
        query: { redirect: to.fullPath }
      });
    }
  }else{
    next()
  }
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
