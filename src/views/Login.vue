<template>
    <div>
        <img class="headerimg" src="https://www.zhanx.cn/sfmyimages/banner/banner2.jpg" alt="" >
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                name:'800013',
                pwd:'123456'
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey: 'name',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名'
                        },
                        rules:{
                            required:true,
                            type:'string',
                            min:3,
                            max:15
                        },
                        trigger:'blur',
                        message:{
                            required:'用户名不能为空',
                            min:'用户名不能少于3个字符',
                            max:'用户名不能多于15个字符'
                        }
                    },
                    {
                        type:'input',
                        modelKey: 'pwd',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            required:true
                        },
                        trigger:'blur'
                    },
                    {
                        type:'submit',
                        label:'登录',
                    }
                ]
            }
        }
    },
    methods:{
         async submitHandler(e){
            e.preventDefault();//阻止提交时候刷新
            try{
                console.log("=================");
                console.log(this);  //VueComponent
                console.log("=================")
                let req={};
                req.name=this.model.name;
                req.pwd=this.$md5(this.model.pwd);
                console.log(req);
                const result= await this.$http.post('/public/login',req);
                if(result.data.code==0){
                    sessionStorage.setItem("token",result.data.data.session_id);
                    console.log(result.data.msg);
                    console.log( sessionStorage.getItem("token"));
                    this.$store.commit('setToken',result.data.data.session_id);
                    console.log(this.$store.state.token);
                    //location.hash='/home';
                    //this.$router.replace({path:"/botnav/index"});//这么写是防止返回到登录页
                    
                    //判断路由是否带参，带参就渠道定向参数地址，否则就去首页
                    console.log("router参数",this.$router.history.current.query.redirect);
                    if(this.$router.history.current.query.redirect){
                        this.$router.push({path:this.$router.history.current.query.redirect})
                        .catch(err=>{
                            console.log(err);
                        });
                    }else{
                        this.$router.push({path:"/botnav/index"})
                        .catch(err=>{
                            console.log(err);
                        });
                    }

                }else{
                    console.log(result.data.msg);
                }
            }catch(err){
                console.log(err);
            }

            //以下写法也可以
            // let req={};
            // req.name=this.model.name;
            // req.pwd=this.$md5(this.model.pwd);
            // this.$http.post('/public/login',req).then(res=>{
            //     sessionStorage.setItem("token",res.data.data.session_id);
            //     console.log(res);
            //     console.log( sessionStorage.getItem("token"));
            // }).catch(err=>{
            //     console.log("出错了");
            //     console.log(err);
            // });
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%

</style>