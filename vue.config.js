module.exports={

    publicPath: "", //如果注释掉这行，打包就是绝对路径
    outputDir: "jingdong02", 

    configureWebpack:{
        devServer:{
            port:8089,//端口号
            open:true,
            proxy: {
              '/public': {
                target: 'https://www.zhanx.cn/pos/public/',
                pathRewrite:{'/public':''},
                changeOrigin: true
              },
              '/api': {
                target: 'https://www.zhanx.cn/pos/api/',
                pathRewrite:{'/api':''},
                changeOrigin: true
              },
              '/sfmyapi': {
                target: 'https://www.zhanx.cn/sfmyapi/',
                pathRewrite:{'/sfmyapi':''},
                changeOrigin: true
              },
              '/ymlapi': {
                target: 'https://www.zhanx.cn/ymlapi/',
                pathRewrite:{'/ymlapi':''},
                changeOrigin: true
              }
            },
            //Mock数据
            //每次做更改这个配置文件的时候，那么必须重启项目才生效
            before(app){

                //用户信息池
                let userpool=[
                  {username:'xiaod',password:'123456'},
                  {username:'tim',password:'123456'},
                  {username:'tom',password:'123456'}
                ];
                //注册接口
                app.get('/api/register',(req,res)=>{
                  //console.log(req.query); //{ username: 'dsfdsf', password: '3232' }
                  const {username,password}=req.query;
                  const userLength=userpool.filter(v=>v.username==username).length;
                  if(userLength>0){
                    res.json({
                      success:false,
                      message:'用户名已存在'
                    });
                  }else{
                    res.json({
                      success:true,
                      message:'注册成功'
                    });
                  }
                });

                //登录接口

         //获取分类页的分类接口
         app.get('/api2/classify',(req,res)=>{
          switch(req.query.type){
              case '0':
              res.json({
                  data:[
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                        {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                        {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                        {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      
                  ]
              });
              break;
              case '1':
              res.json({
                  data: [
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ]
              });
              break;
              case '2':
              res.json({
                  data: [
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      },
                      {
                          image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                          label:'华为'
                      }
                  ]
              });
              break;
              case '3':
              res.json({
                  data: [
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                      {
                          image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                          label:'荣耀'
                      },
                  ]
              });
              break;
              case '4':
              res.json({
                  data: [
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ]
              });
              break;
              case '5':
              res.json({
                  data: [
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                      {
                          image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                          label:'雪梨手机'
                      },
                  ]
              });
              break;
              case '6':
              res.json({
                  data: [
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                      {
                          image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                          label:'小米'
                      },
                  ]
              });
              break;
          }
      });
                
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    },

}
