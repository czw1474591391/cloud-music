<template>
  <el-row>
    <el-col :span="16">
      <detail-header :playlist="playList" />
      <detail-song-list :songlist="playList?.tracks"/>
    </el-col>
    <el-col :span="7" :offset="1">
      <div>51531</div>
    </el-col>
  </el-row>
</template>

<script setup>
import { playListDetail } from '@/apis/http';
import { DetailHeader, DetailSongList } from '@/components';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

onBeforeMount(() => getplaylistDetail());

const route = useRoute();
const playList = ref({});
const getplaylistDetail = async () => {
  const data = await playListDetail(route.query?.id);
  playList.value = data?.playlist;
};
</script>

<style lang="scss" scoped></style>
