<template>
  <div>
    <transition :name="transitionName">
        <router-view class="router"/> <!--路由的容器，把内容显示出来 App.vue里也有-->
    </transition>
    <cube-tab-bar class="botnav"
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
    </cube-tab-bar>
    <span class="countSum">{{countSum}}</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      //countSum:10,
      transitionName:'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },

  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
        case '首页':
            this.$router.push({path:'/botnav/index'}).catch(err=>{
                            console.log(err);
                        });
            break;
        case '分类':
            this.$router.push({path:'/botnav/list'}).catch(err=>{
                            console.log(err);
                        });
            break;
        case '搜索':
            this.$router.push({path:'/botnav/search'}).catch(err=>{
                            console.log(err);
                        });
            break;
        case '购物车':
            this.$router.push({path:'/botnav/cart'}).catch(err=>{
                            console.log(err);
                        });
            break;
        case '我的':
            this.$router.push({path:'/botnav/mine'}).catch(err=>{
                            console.log(err);
                        });
            break;
      }
    }
  },

  computed:{
    ...mapGetters({
      countSum:'countSum'
    })
  },

  created(){
    console.log("路径: " +this.$route.path);
    switch(this.$route.path){
      case '/botnav/index':
      this.selectedLabelDefault='首页';
      break;
      case '/botnav/list':
      this.selectedLabelDefault='分类';
      break;
      case '/botnav/search':
      this.selectedLabelDefault='搜索';
      break;
      case '/botnav/cart':
      this.selectedLabelDefault='购物车';
      break;
      case '/botnav/mine':
      this.selectedLabelDefault='我的';
      break;
    }
  }
}
</script>

<style lang="stylus">

    .cube-tab-bar.botnav
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        background #fff
        .cube-tab div
            font-size 14px
            padding-top 3px
        i
            font-size 14px
    .router
        position absolute
        width 100%
        transition all 0.8s ease
    .silde-left-enter,.slide-right-leave-active
        apacity 0
        -webkit-transform translate(-100%,0)
        transform translate(-100%,0)
    .countSum
      position fixed
      bottom 33px
      right 23%
      z-index 1001
      width 18px
      height 18px
      line-height 18px
      border-radius 50%
      background red
      color #fff
      font-size 12px


</style>