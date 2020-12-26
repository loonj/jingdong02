<template>
  <div id="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image" class="banner" />
        </a>
      </cube-slide-item>
    </cube-slide>

    <!--滚动分类-->
    <cube-slide ref="slideLists" :data="lists" :auto-play="false">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li class="listli" v-for="(item,index1) in list" :key="index1">
            <a :href="item.url">
              <img :src="item.image" alt />
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], //轮播图数组
      lists: [] //滚动分类数组
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  async created() {
    try {
      let result = await this.$http.get("/sfmyapi/Slide.api");
      if (result.data.error == 0) {
        result.data.data.forEach(element => {
          this.items.push({ image: element.image, url: element.img_url });
        });
      }

      //获取滚动分类数据
      result = await this.$http.get("/ymlapi/ZSGoods.api");
      if (result.data.error == 0) {
        let hash = {};
        const newArr = result.data.data.reduce((item, next) => {
          hash[next.category]
            ? ""
            : (hash[next.category] = true && item.push(next));
          return item;
        }, []); //[]后面是初始值
        console.log(hash); //{阿思孔霓系列红酒: 1, 礼品套装: 2, 潮品无线蓝牙耳机: 3}
        console.log(newArr);

        let arrGroup = new Array(Object.keys(hash).length); //分成几组
        for(var i=0;i<arrGroup.length;i++){
          arrGroup[i]=[];
        }

        Object.keys(hash).forEach((key,value) => {
          result.data.data.forEach(element => {
            if(key==element.category){
               arrGroup[value].push(
                 {
                   image: element.img_url, 
                   url: element.img_url ,
                   label:element.category,
                   name: element.name.substring(0,6)+"..."
                 }
               );
            }
          });
        });

        this.lists=arrGroup;
      }
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="stylus" scoped>

#index a .banner{
  display :block;
  width :100%;
  height: 155px;
}

#index .listul{
  display flex;
  flex-wrap wrap;
}

#index .listul .listli{
   width 25%;
   justify-content center;
}


#index .listul .listli img{
   width 55px;
   height 55px;
   border-radius 20%;
   padding 5px 0;
}

#index .listul .listli p{
   font-size 12px;
   padding-bottom 5px;
}


</style>
