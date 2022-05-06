<template>
  <Banners :List="bannerList" />

  <Hot-play-list :hotList="hotList" @getHotPlatList="getHotPlatList" />

  <News-Disc-Shelves :NewDiscList="NewDiscList" @getNewDisc="getNewDisc" />
  <Top-List :topList="topList" />
</template>

<script setup>
import { banner, newDiscShelves, allTopList, playListDetail, hotPlayList } from '@/apis/http';
import { onBeforeMount, ref } from 'vue';
import { newsDisc } from '@/utils/enums.js';
import { Banners, HotPlayList, NewsDiscShelves, TopList } from '@/components';

// const { proxy } = getCurrentInstance();
// const { banner, newDiscShelves, allTopList, playListDetail, hotPlayList } = proxy.$http; //解构api方法
onBeforeMount(() => {
  getBanners();
  getNewDisc();
  getAllList();
  getHotPlatList();
});

// 获取轮播图数据
const bannerList = ref([]);
const getBanners = async () => {
  const data = await banner();
  bannerList.value = data?.banners;
};

// 获取热门推荐
const hotList = ref([]);
const getHotPlatList = async cat => {
  const data = await hotPlayList({ cat });
  hotList.value = data?.playlists;
};

// 获取新碟上架数据
const NewDiscList = ref([]);
const getNewDisc = async area => {
  const { monthData, weekData } = await newDiscShelves({ area: newsDisc[area] });
  NewDiscList.value = monthData.length === 0 ? weekData.slice(0, 12) : monthData.slice(0, 12);
  // 如果不存在月数据那就取周数据
};

// 获取所有榜单
const topList = ref([]);
const getAllList = async () => {
  const data = await allTopList();
  const list = [];
  for (const item of data?.list.slice(0, 4)) {
    const result = await playListDetail(item.id);
    let { tracks } = result?.playlist;
    list.push({ ...result?.playlist, tracks: tracks.slice(0, 6) });
    // 单独截断歌曲数组
  } // 获取热门歌单id  然后请求最新的榜单
  topList.value = list;
};
</script>

<style lang="scss" scoped></style>
