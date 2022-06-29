<template>
  <el-card>
    <div class="songTitle">
      <div class="left">
        <h3>歌曲列表</h3>
        <span>{{ songlist?.length }}首歌</span>
      </div>
      <div class="right">
        <h3>歌曲列表</h3>
        <span>{{ songlist?.length }}首歌</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { watch } from 'vue';
const props = defineProps(['songlist']);
watch(
  () => props.songlist,
  () => {
    console.log(props.songlist);
  }
);
</script>

<style lang="scss" scoped>
.songTitle {
  display: flex;
  justify-content: space-between;
  .left {
    @extend .songTitle;
  }
}
</style>
