<template>
  <Banners :List="bannerList" />
  <hot-play-list />
  <news-Disc-Shelves :NewDiscList="NewDiscList" />
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, reactive, ref, watch } from 'vue';
import { Banners, HotPlayList, newsDiscShelves } from '@/components';

const { proxy } = getCurrentInstance();
onBeforeMount(() => {
  getBanners();
  getNewDisc();
});
const bannerList = ref([]);
const NewDiscList = ref([]);
// 获取轮播图数据
const getBanners = async () => {
  const data = await proxy.$http.banner();
  bannerList.value = data.banners || [];
};

// 获取新碟上架数据
const getNewDisc = async () => {
  const data = await proxy.$http.newDiscShelves();
  NewDiscList.value = data.monthData.slice(0, 12);
};
</script>

<style lang="scss" scoped></style>
