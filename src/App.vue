<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="100px"><SideBar /></el-aside>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideBar from '@/layout/Sidebar.vue';
</script>
