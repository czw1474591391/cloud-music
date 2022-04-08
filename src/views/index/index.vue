<template>
  <Banners :List="bannerList"></Banners>
  <hot-play-list></hot-play-list>
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, reactive, ref, watch } from 'vue';
import { Banners, HotPlayList } from '@/components';

const { proxy } = getCurrentInstance();
onBeforeMount(() => {
  getBanners();
});
const bannerList = ref([]);

// 获取轮播图数据
const getBanners = async () => {
  const data = await proxy.$http.banner();
  bannerList.value = data.banners || [];
};
</script>

<style lang="scss" scoped></style>
