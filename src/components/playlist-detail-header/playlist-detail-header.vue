<template>
  <div class="detail-header-container">
    <el-row class="detail-header">
      <el-col :span="4">
        <el-image class="header-img" :src="src" fit="cover" />
      </el-col>
      <el-col :span="19" :offset="1"><el-card>23153</el-card></el-col>
    </el-row>
    <el-card> 123165 </el-card>
  </div>
</template>

<script setup>
import { getCurrentInstance, defineProps } from 'vue';
const { proxy } = getCurrentInstance();
defineProps(() => {});
const src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.detail-header-container {
  .header-img {
    width: 184px;
    border-radius: 15px;
  }
}
</style>
