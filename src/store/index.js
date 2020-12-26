import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =new Vuex.Store({
  state: {
    token:'',
    cartArray:JSON.parse(localStorage.getItem("cartArray"))||[],//存储购物车商品的数组 {title,cartCount}
    //这么写，有数据就取前面的，没有数据的话就取空数组
  },
  mutations: {
    //设置vuex的token
    setToken(state,token){
      state.token=token;
    },
    //添加商品到购物车
    toCart(state,tag){
      let goods=state.cartArray.find(v=>v.title==tag.label);
      if(goods){
        goods.cartCount+=1;
      }else{
        state.cartArray.push({title:tag.label,cartCount:1});
      }
    },

    //购物车商品数量加一
    cartAdd(state,index){
      state.cartArray[index].cartCount++;
    },

    //购物车商品数量减一
    cartRemove(state,index){
      if(state.cartArray[index].cartCount>1){
        state.cartArray[index].cartCount--;
      }else{
        if(window.confirm("你真的要移除商品吗？")){
         state.cartArray.splice(index,1) 
        }
      }
    },

    //清空购物车
    clearCart(state){
      state.cartArray=[];
    }

  },
  actions: {
  },

  //相当于我们Vue的计算属性
  getters:{
    countSum:state=>{
      let num=0;
      state.cartArray.forEach(v=>{
        num+=v.cartCount;
      });
      return num;
    }
  },
  modules: {
  }
});

//监听每次调用mutations的时候，都会进入这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartArray',JSON.stringify(state.cartArray));
});

export default store;
