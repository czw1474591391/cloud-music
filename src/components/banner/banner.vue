<template>
  <swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :slides-per-view="4"
    :space-between="30"
    :autoplay="{ delay: 1500 }"
    :pagination="{ clickable: true }"
    ref="mySwiper"
    class="banner_wrap"
  >
    <swiper-slide v-for="item in List" :key="item.imageUrl">
      <el-image :src="item.imageUrl" :alt="item.typeTitle" class="banner_img"> </el-image>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { defineProps } from 'vue';
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
</script>

<style lang="scss" scoped>
.banner_wrap {
  padding-bottom: 30px;
}
</style>
