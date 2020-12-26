<template>
    <div class="panelsBox">
        <cube-scroll class="leftPanels">
            <ul>
                <li v-for="(list,index) in tabsLabel" :key="index" :class="list.active?'active':''" @click="selectList(index)">
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>

        <cube-scroll class="rightPanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <i class="cubeic-add" style="color:#ff0000" @click="addToCart($event,tag)"></i></p>
                </li>
            </ul>
        </cube-scroll>
        <div class="ball-wrap">
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
            >
                <div class="ball" v-if="ball.show">
                    <div class="inner">
                        <i class="cubeic-add"></i>
                    </div>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            ball:{
                show:false,
                el:''
            },
            tags:[],
            tabsLabel:[
                {
                    label:'热门推荐',
                    active:true
                },
                {
                    label:'电脑产品',
                    active:false
                },
                {
                    label:'手机产品',
                    active:false
                },
                {
                    label:'服务器类',
                    active:false
                },
                {
                    label:'儿童玩具',
                    active:false
                },
                {
                    label:'男士服装',
                    active:false
                },
                {
                    label:'女士服装',
                    active:false
                },
                {
                    label:'进口产品',
                    active:false
                },
                {
                    label:'巧克力等',
                    active:false
                },
                {
                    label:'蔬菜水果',
                    active:false
                },
                                {
                    label:'情趣用品',
                    active:false
                },
                                {
                    label:'饮料酒水',
                    active:false
                },
                                {
                    label:'啤酒花生',
                    active:false
                },                 {
                    label:'鼠标用品',
                    active:false
                },                 {
                    label:'袜子用品',
                    active:false
                },                 {
                    label:'瓶子用品',
                    active:false
                },                 {
                    label:'茶杯用品',
                    active:false
                },                 {
                    label:'衣柜用品',
                    active:false
                },                 {
                    label:'被子用品',
                    active:false
                },
            ]
        }
    },
    methods:{
        //点击左侧分离
        selectList(index){
            this.tabsLabel.forEach((item,ind)=>{
                if(index==ind){
                    item.active=true;
                }else{
                    item.active=false;
                }
            });
            this.getClassify(index);
        },

        async getClassify(index){
            const result=await this.$http.get('/api2/classify',{params:{type:index}});
            this.tags=result.data.data;
        },
        //添加商品到购物车
        addToCart(e,tag){
            this.$store.commit('toCart',tag);
            //让小球显示出来
            this.ball.show=true;
            //获取点击元素
            //console.log("event:",e.target);  <i data-v-20863650="" class="cubeic-add" style="color: rgb(255, 0, 0);"></i>
            this.ball.el=e.target;  //获取dom
        },
        beforeEnter(el){
            //让小球移动到点击的位置
            //获取点击位置
            const dom=this.ball.el;
            //console.log(dom); // 是上面那个i 
            //console.log(el); //div class="ball"
            const rect=dom.getBoundingClientRect();//获取点击dom的位置
            const x=rect.left-window.innerWidth*0.7;
            const y=-(window.innerHeight-rect.top);
            console.log(x,y);
            el.style.display='block';
            el.style.transform=`translate3d(0,${y}px,0)`;
            const inner=el.querySelector('.inner');
            inner.style.transform=`translate3d(${x}px,0,0)`;
        },
        enter(el,done){
            //触发重绘
            document.body.offsetHeight;
            //小球移动到原点，就是购物车的位置
            el.style.transform=`translate3d(0,0,0)`;
            const inner=el.querySelector('.inner');
            inner.style.transform=`translate3d(0,0,0)`;
            //过度完成后执行的事件
            el.addEventListener('transitionend',done);

        },
        afterEnter(el){
            //结束隐藏小球
            this.ball.show=false;
            //const inner=el.querySelector('.inner');
            //inner.style.display='none';
            el.style.display='none';
        },

    },
    created(){
        //获取默认的分类数据
        this.getClassify(0);
    },
    mounted(){
        //dom加载完了就会执行这里
        //设置滚动盒子的高度
        const leftPanels=document.querySelector(".leftPanels");
        const rightPanels=document.querySelector(".rightPanels");
        const bodyHeight=document.documentElement.clientHeight;
        leftPanels.style.height=bodyHeight-57+'px';
        rightPanels.style.height=bodyHeight-57+'px';

    }
}
</script>

<style lang="stylus" scoped>
    .ball-wrap
        .ball
            position fixed
            left 70%
            bottom 10px
            z-index 1003
            color red
            transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
            .inner
                width 16px
                height 16px
                transition all 1s linear
    .panelsBox
        display flex
        .leftPanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #ffffff
                color #333
                background #f8f8f8
                font-size 14px
            .active
                background #ffffff
                color #e93b3d
        .rightPanels
            width 70%
            ul
                display flex
                flex-wrap wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img 
                        width 80px
                        height 80px
                    .cubeic-add
                        font-size 18px
</style>

