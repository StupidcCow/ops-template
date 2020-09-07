<!--
 * @Author: your name
 * @Date: 2020-09-07 11:21:59
 * @LastEditTime: 2020-09-07 15:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Study/ops-template/src/App.vue
-->
<template>
  <div id="app">
    <el-container class="app-container">
        <el-header>OPS端常用组件</el-header>
        <el-container>
        <el-aside width="200px">
            <el-menu :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
                <el-menu-item :index="item.id" v-for="(item,index) in meunList" :key="index">{{item.name}}</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import menus from './config/menu'
export default {
  name: 'App',
  data() {
    console.log(menus,'fff')

      return {
          activeIndex:"1",
          meunList:menus
      }
  },
//   computed: {
//       meunList(){
//           return menus
//       }
//   },
    methods: {
        handleSelect(){
            
        },
    },
  created() {
    console.log(this.meunList)
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.app-container{
    position: relative;
    height: 100%;
    
}
</style>
