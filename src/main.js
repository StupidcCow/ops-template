/*
 * @Author: your name
 * @Date: 2020-09-07 11:21:59
 * @LastEditTime: 2020-09-07 15:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Study/ops-template/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
