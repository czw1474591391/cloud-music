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
// import '@/utils/global.scss';
</script>
<style lang="scss">
@import url('@/utils/global.scss');
</style>
