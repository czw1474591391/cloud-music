<template>
  <Banners :List="bannerList"></Banners>
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, reactive, ref, watch } from 'vue';
import { Banners } from '@/components';

const { proxy } = getCurrentInstance();
onBeforeMount(() => {
  getBanners();
});
const bannerList = ref([]);

// 获取轮播图数据
const getBanners = async () => {
  const data = await proxy.$http.banner(2);
  bannerList.value = data.banners || [];
};
</script>

<style lang="scss" scoped></style>
