<template>
  <div class="banner_wrap">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" v-for="item in 4" :key="item" class="skeleton-img" />
      </template>
      <template #default>
        <swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="4"
          :space-between="30"
          :autoplay="{ delay: 1500 }"
          :pagination="{ clickable: true }"
          class="swiper"
        >
          <swiper-slide v-for="item in List" :key="item.imageUrl">
            <el-image :src="item.imageUrl" :alt="item.typeTitle" class="banner_img"> </el-image>
          </swiper-slide>
        </swiper>
      </template>
    </el-skeleton>
  </div>
</template>
<script setup>
import { defineProps, ref, watch } from 'vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
  List: {
    type: Array,
    default: [],
  },
});
const loading = ref(true);
// 监听异步数据，返回则关闭骨架屏loading
watch(
  () => props.List,
  () => (loading.value = false)
);
</script>

<style lang="scss" scoped>
.banner_wrap {
  .el-skeleton {
    display: flex;
    justify-content: space-between;
    .skeleton-img {
      flex: 1;
      margin-right: 30px;
      height: 140px;
    }
  }
  .swiper {
    padding-bottom: 30px;
  }
}
</style>
