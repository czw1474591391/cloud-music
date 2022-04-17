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
<style lang="scss">
@import '@/utils/global.scss';
</style>
