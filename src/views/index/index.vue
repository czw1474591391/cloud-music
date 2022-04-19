<template>
  <Banners :List="bannerList" />

  <Hot-play-list :hotList="hotList" @getHotPlatList="getHotPlatList" />

  <News-Disc-Shelves :NewDiscList="NewDiscList" @getNewDisc="getNewDisc" />
  <Top-List :topList="topList" />
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, ref } from 'vue';
import { newsDisc } from '@/utils/enums.js';
import { Banners, HotPlayList, NewsDiscShelves, TopList } from '@/components';

const { proxy } = getCurrentInstance();
const { banner, newDiscShelves, allTopList, playListDetail, hotPlayList } = proxy.$http; //解构api方法
onBeforeMount(() => {
  getBanners();
  getNewDisc();
  getAllList();
  getHotPlatList();
});
const bannerList = ref([]); // 轮播图数据
const NewDiscList = ref([]); // 新碟上架数据
const topList = ref([]); // 榜单数据
const hotList = ref([]); // 热门推荐数据

// 获取轮播图数据
const getBanners = async () => {
  const data = await banner();
  bannerList.value = data?.banners;
};
// 获取热门推荐
const getHotPlatList = async cat => {
  const data = await hotPlayList({ cat });
  hotList.value = data?.playlists;
};

// 获取新碟上架数据
const getNewDisc = async area => {
  const data = await newDiscShelves({ area: newsDisc[area] });
  NewDiscList.value = data?.monthData.slice(0, 12);
};

// 获取所有榜单
const getAllList = async () => {
  const data = await allTopList();
  const list = [];
  for (const item of data.list.slice(0, 4)) {
    const result = await playListDetail(item.id);
    let { tracks } = result.playlist;
    list.push({ ...result.playlist, tracks: tracks.slice(0, 6) });
    // 单独截断歌曲数组
  } // 获取热门歌单id  然后请求最新的榜单
  topList.value = list;
};
</script>

<style lang="scss" scoped></style>
