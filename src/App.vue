<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px"><SideBar /></el-aside>
      <el-main> <router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideBar from '@/layout/Sidebar.vue';
import Header from '@/layout/Header.vue';
</script>
<style>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 16px;
}
</style>
