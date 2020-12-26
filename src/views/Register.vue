<template>
    <div>
        <img class="headerimg" src="https://www.zhanx.cn/sfmyimages/banner/banner4.jpg" alt="" >
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
                username:'',
                password:''
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey: 'username',
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
                        modelKey: 'password',
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
                        label:'注册',
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault();//阻止提交时候刷新,以下两种写法都可以

            console.log("************************");
            console.log(this);  //VueComponent
            console.log("************************");
            // this.$http.get('/api/register1',{params:this.model}).then(res=>{
            //     console.log(res.data.success);
            // },res=>{
            //     console.log("出错了");
            //     console.log(res);
            // });

            
            this.$http.get('/api/register',{params:this.model}).then(res=>{
                console.log(res.data.success);
            }).catch(err=>{
                console.log("出错了");
                console.log(err);
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height 150px
        width 100%

</style>