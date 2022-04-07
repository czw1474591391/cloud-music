<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="0">
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="item.path"
          :index="`${index}`"
          @click="menuClick(item.path)"
        >
          <div class="menu-container">
            <svg class="icon" aria-hidden="true">
              <use :href="item.icon"></use>
            </svg>
            <span style="margin-left: 10px">{{ item.name }}</span>
          </div>
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
    icon: '#icon-shouye',
  },
  {
    name: '歌单',
    path: '/playlist',
    icon: '#icon-songlist-01',
  },
  {
    name: '歌手',
    path: '/singer',
    icon: '#icon-geshou',
  },
  {
    name: '我的',
    path: '/myMusic',
    icon: '#icon-wowode',
  },
]);

const router = useRouter();
const menuClick = path => {
  router.push({
    path,
  });
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  height: 100px;
  .menu-container {
    display: flex;
    align-items: center;
  }
}
</style>
