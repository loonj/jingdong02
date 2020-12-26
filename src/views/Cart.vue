<template>
    <div>
        <div class="goods" v-for="(item,index) in cartArr" :key="index">
            {{item.title}}
            <div class="goodsRight">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button style="margin:10px 0;">下单</cube-button>
        <cube-button @click="clearCart">清空购物车</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            //cartArr:[] 因为计算属性里已经有了，所以这里就不用定义了
        };
    },
    computed:{
        ...mapState({
            cartArr:state=>state.cartArray
            })
    },
    methods:{
        removeCart(index){
            this.$store.commit('cartRemove',index);
        },
        addCart(index){
            this.$store.commit('cartAdd',index);
        },
        clearCart(){
            this.$store.commit('clearCart');
        }
    }
    
    
}
</script>

<style lang="stylus" scoped>
 .goods
        padding 10px
        text-align left 
        font-size 18px
        .goodsRight
            float  right
            i 
                font-size 18px
</style>
