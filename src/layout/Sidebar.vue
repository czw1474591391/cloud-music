<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="1">
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="item.path"
          :index="`${index}`"
          @click="menuClick(item.path)"
        >
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
const menuList = reactive([
  {
    name: '首页',
    path: '/index',
  },
  {
    name: '歌单',
    path: 'playlist',
  },
]);
const router = useRouter();
const menuClick = path => {
  router.push({
    path,
  });
};

const handleOpen = (key, ketPath) => {
  console.log(key, ketPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style></style>
