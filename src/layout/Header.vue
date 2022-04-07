<template>
  <div>
    <el-row :gutter="10" class="header-container">
      <el-col :span="4" :offset="1"
        ><img src="/public/logo.png" width="50" height="50" alt=""
      /></el-col>
      <el-col :span="4"
        ><el-input v-model="state" class="w-50 m-2" placeholder="搜你想搜的" :prefix-icon="Search"
      /></el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const state = ref('');
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
  .el-col {
    line-height: 54px;
  }
}
</style>
