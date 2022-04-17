<template>
  <el-card>
    <div class="title-header">
      <span class="card-title">新碟上架</span>
      <ul class="title-menu">
        <li v-for="item in newDiscMenu" :key="item.name" @click="filterClass(item)">
          <a href="#" :class="item.class">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <el-row>
      <el-skeleton :loading="loading" animated :throttle="1000">
        <template #template>
          <div class="skeleton-container" v-for="i in 4" :key="i">
            <el-skeleton-item variant="image" />
            <div class="skeleton-text">
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
              <el-skeleton-item variant="text" />
            </div>
          </div>
        </template>

        <template #default>
          <el-col :span="5" v-for="item in props.newsDiscObj.NewDiscList" :key="item.id">
            <el-row>
              <el-col :span="11"><el-image :src="item.picUrl" :fit="cover"></el-image></el-col>
              <el-col :span="13" class="newDisc_text">{{ item.name }}</el-col>
            </el-row>
          </el-col>
        </template>
      </el-skeleton>
    </el-row>
  </el-card>
</template>

<script setup>
import { reactive, defineProps, watch, ref } from 'vue';
const newDiscMenu = reactive([]);
// 渲染静态菜单
['全部', '华语', '欧美', '韩国', '日本'].forEach(name => {
  newDiscMenu.push(name === '全部' ? { name, class: 'MenuActive' } : { name });
});
const loading = ref(true);
const props = defineProps({
  newsDiscObj: {
    type: Object,
    default: () => {},
  },
});
watch(
  () => props.newsDiscObj.NewDiscList,
  () => (loading.value = false)
);
// 过滤class Active类名 并向父组件发出请求
const filterClass = e => {
  newDiscMenu.map(item => {
    item.class = item.name === e.name ? 'MenuActive' : '';
  });
  // 调用父组件方法请求数据
  loading.value = true;
  props.newsDiscObj.getNewDisc(e.name);
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 15px;
}
.el-row {
  justify-content: center;
  .el-col-5 {
    margin: 0 1.2rem 0.3rem 0;
  }
}
.newDisc_text {
  background: #f0f0f0;
  font-size: 0.5rem;
  padding: 0.3rem;
}
.el-skeleton {
  display: flex;
  justify-content: space-between;

  .skeleton-container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: 0 15px 15px 0;
    .el-skeleton__image {
      width: 150px;
      height: 150px;
    }
    .skeleton-text {
      .el-skeleton__text:nth-child(1) {
        width: 1rem;
      }
      .el-skeleton__text:nth-child(2) {
        margin-top: 20px;
        width: 120px;
      }
      .el-skeleton__text:nth-child(3) {
        margin-top: 20px;
        width: 180px;
      }
      width: 5rem;
      // height: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
