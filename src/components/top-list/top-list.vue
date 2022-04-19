<template>
  <div class="top-list-container">
    <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" v-for="item in 4" :key="item" class="skeleton-img" />
      </template>
      <template #default>
        <div class="top-list-item">
          <div v-for="item in topList" :key="item.name">
            <h3>{{ item.name }}</h3>
            <div class="update">最近更新：{{ computed_Date(item.updateTime) }}</div>
            <el-row v-for="tracks in item?.tracks" :key="tracks.name">
              <el-col :span="5">
                <el-image :src="tracks?.al?.picUrl" :fit="fit"></el-image>
              </el-col>
              <el-col :span="19"
                ><p>{{ tracks.name }}</p>
                <p>{{ tracks?.ar[0]?.name }}</p></el-col
              >
            </el-row>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup>
import { defineProps, watch, ref, computed } from 'vue';
import moment from 'moment';

const props = defineProps({
  topList: {
    type: Object,
    default: {},
  },
});
// 使用moment处理日期格式
const computed_Date = computed(() => date => moment(date).format('MMMDo'));
const loading = ref(true);
watch(
  () => props.topList,
  () => {
    loading.value = false;
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
      .update {
        margin: 10px 0;
        color: rgb(163, 163, 163);
      }
      .el-row {
        margin: 20px 0;
        .el-col-19 {
          padding-top: 8px;
        }
        .el-image {
          width: 3.5rem;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
