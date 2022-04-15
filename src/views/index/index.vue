<template>
  <Banners :List="bannerList" />
  <hot-play-list />
  <news-Disc-Shelves
    :newsDiscObj="{
      NewDiscList,
      getNewDisc,
    }"
  />
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, ref } from 'vue';
import { newsDisc } from '@/utils/enums.js';
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
const getNewDisc = async area => {
  const data = await proxy.$http.newDiscShelves({ area: newsDisc[area] });
  NewDiscList.value = data.monthData.slice(0, 12);
};
</script>

<style lang="scss" scoped></style>
