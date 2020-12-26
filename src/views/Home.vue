<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button v-on:click="test">查询产品</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  methods:{
   async test(e){
      e.preventDefault();
      //alert(this.$store.state.token);
       try{
                const result= await this.$http.get('/api/product/list_all2?page=1&limit=10');
                if(result.data.code==0){
                    console.log(result.data.data);
                }else{
                    console.log(result.data.msg);
                }
            }catch(err){
                console.log(err);
            }

    }
  }
}
</script>
