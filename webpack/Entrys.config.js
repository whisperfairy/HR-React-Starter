/**
 *
 * Entrys.config.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/3/19
 *
 * @内容 作用
 * @内容 作用
 */
const path = require('path');
const {Environment:EnumEnv,config} = require('../config/config');
module.exports.Entrys={
    client:path.resolve(config.appDir,'index.jsx'),
    vendor: ['moment','react','react-router-dom','react-dom','axios']
}
