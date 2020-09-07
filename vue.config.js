/*
 * @Author: your name
 * @Date: 2020-09-07 11:39:25
 * @LastEditTime: 2020-09-07 14:01:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Study/ops-template/vue.config.js
 */
const version = '1.0.0';
const BASE_URL = '/';

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    // 部署应用时的基本 URL
    publicPath: BASE_URL,
    assetsDir: 'assets/' + version,
    productionSourceMap: false,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: process.env.NODE_ENV === 'production',
        // 开启 CSS source maps
        sourceMap: false,
    },
    devServer: {
        host: 'localhost',//memery-local.guworks.com
        open: true, // 配置自动启动浏览器
        hot: true,
        disableHostCheck: true
    },  
    chainWebpack: config => {
        config.resolve.alias
        .set("@", resolve("src"))
        .set("assets", resolve("src/assets"))
        .set("components", resolve("src/components"))
        //   .set("base", resolve("baseConfig"))
        //   .set("public", resolve("public"));
    },
};
