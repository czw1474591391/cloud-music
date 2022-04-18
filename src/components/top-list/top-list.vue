<template>
  <div class="top-list-container">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" v-for="item in 4" :key="item" class="skeleton-img" />
      </template>
      <template #default>
        <div class="top-list-item">
          <div v-for="item in toplist" :key="item.name">
            <h3>{{ item.name }}</h3>
            {{ computed_Date(item.updateTime) }}
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup>
import { defineProps, watch, ref, computed } from 'vue';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment().locale('zh-cn');

const props = defineProps({
  topList: {
    type: Object,
    default: {},
  },
});
console.log(moment.locale());
const computed_Date = computed(() => date => {
  console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a'));
  console.log(date);
  return moment(date).format('MMM Do YY');
});
const toplist = ref({});
const loading = ref(true);
watch(
  () => props.topList,
  () => {
    toplist.value = props.topList;
    loading.value = false;
    console.log(toplist.value);
  }
);
</script>

<style lang="scss" scoped>
.top-list-container {
  margin: 10px 0;
  .top-list-item {
    display: flex;
    > div {
      flex: 1;
      margin: 0 15px 0 0;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 20px 27px #0000000d;
      background: #fff;
    }
  }
}
</style>
