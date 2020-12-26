<template>
    <div>
        <img class="headerimg" src="https://www.zhanx.cn/sfmyimages/banner/banner4.jpg" alt="" >
        <ul>
            <li v-for="item in mineArr" class="mineItem" :key="item.lable" @click="itemClick(item)">
                <span class="mineTitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mineArr:[
                {label:'商品收藏'},
                {label:'我的足迹'},
                {label:'店铺收藏'},
                {label:'我的订单'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemClick(item){
            if(item.type=='exit'){
                this.$store.commit('setToken','');
                sessionStorage.removeItem('token');
                this.$router.push({path:"/login"});
            }
        }

    }
}
</script>

<style lang="stylus" scoped>
    .mineItem
        font-size 14px
        text-align left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .mineTitle
            display inline-block
            width 90%
    .headerimg
        height 150px
        width 100%

</style>