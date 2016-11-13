/**
 * Created by whisper on 2016/11/6.
 */
'use strict'
module.exports={
    contentBase: __dirname,//静态资源目录1、使用数组可以设置多个目录2、设置为string则为单点3、设置为false及没有
    compress: true,//是否压缩
    //port:8080//当使用node时无效
    clientLogLevel: "none",// none, error, warning or info (default)对热替换中产生的过程进行提示，不需要提示选择none默认为info。
    lazy:false,//重点区别，如果lazy为true则无法进行热替换，但能生成输出，当lazy为false是watch监听才能生效但无法输出bundle两者互斥。
    // fliename:'bundle.js',//仅当lazy为true时有意义。
    // headers:{
    //   'contentType':'utf-8'
    // },//转发proxy的请求头设置
    // proxy:{
    //     '/api/soft':{
    //         target:'http://localhost:3000',
    //         pathRewrite:{'/api/soft':'/soft'},//替换
    //         secure:false
    //     }
    // },
    //public:"myapp.test.com:80"//反向代理域名，如果要发布用nginx反向指向这,基本用不到
    publicPath:'/',//bundle输出的伪路径相对于html
    //watchContentBase:'true',//是否监听ContentBase下的文件结构变化，默认为false，只监听现有文件变化，新增不监听，耗内存打慎用
    watchOptions:{
        aggregateTimeout:500
        //poll:1000,//自动刷新耗内存打不建议开
    }
}