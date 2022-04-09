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
.el-card {
  border-radius: 15px;
}
</style>
