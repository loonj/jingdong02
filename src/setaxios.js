import axios from 'axios'
import router from './router'
import store from './store'

//http全局拦截
//token要放在我们请求的header上面带回去给后端

export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token;
            }
            return config;
        }
    );

    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                if(response.data.code==-1){
                    //登录过期，需要重新登录，清空vuex的token 和 sessionStorage的token
                    store.commit('setToken','');
                    sessionStorage.removeItem('token');
                    //跳转到login
                    router.replace({path:'/login'});
                }
            }
            console.log("拦截器response");
            return response;
        }
    );
}