/**
 *
 * config.js 确定项目结构相对路径
 * @author hurong<353486474@QQ.COM>
 * @date 2017/3/19
 *
 * @内容
 * @内容 作用
 */
var path = require('path');
const Environment={
    DEV:'__DEV__',
    PROD:'__PROD__'
};
var config = {
    "title": "HR-REACT_STARTER",
    //默认生产环境
    "env": "DEV",
    "appName": "HR-REACT_STARTER",
    //项目根路径
    "dirname":path.join(__dirname,".."),
    'appDir':path.join(__dirname,'../src/Client/'),
    'testDir':path.join(__dirname,'../test'),
    //模板所在的目录
    "webpackDir":path.join(__dirname,"../webpack"),
    "viewDir": path.join(__dirname, '..','views'),
    //log所在的目录
    "logDir": path.join(__dirname, '..', 'logs'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..')
};
//当NODE_ENV环境变量值为local时
//本地调试环境
console.log(`123 ${process.env.NODE_ENV}`)
if (process.env.NODE_ENV === '__PROD__' || process.env.NODE_ENV === 'PRODUCTION') {
    config.env=Environment.PROD;
}
module.exports.config = config;
module.exports.Environment=Environment;