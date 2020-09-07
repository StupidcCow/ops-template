/*
 * @Author: your name
 * @Date: 2020-09-07 11:36:43
 * @LastEditTime: 2020-09-07 15:54:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Study/ops-template/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//上传文件
import UploadFiles from '@/components/uploadFiles'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { 
            path: '/upload', 
            name:"UploadFiles",
            component: UploadFiles 
        }
    ]
})
export default router

