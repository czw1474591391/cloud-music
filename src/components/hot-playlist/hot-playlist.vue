<template>
  <el-card class="hot-card-container">
    <div class="title-header">
      <span class="card-title">热门推荐</span>
      <ul class="title-menu">
        <li v-for="item in hotMenu" :key="item.name" @click="filterClass(item)">
          <a href="#" :class="item.class">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="hot-items">
      <el-skeleton :loading="loading" animated :throttle="1000">
        <template #template>
          <div v-for="item in 6" :key="item" class="hot-skeleton-warp">
            <el-skeleton-item variant="image" />
            <el-skeleton-item variant="text" />
            <el-skeleton-item variant="text" />
          </div>
        </template>
        <template #default>
          <div v-for="item in hotList" :key="item.name" @click="toDetail(item.id)">
            <el-image :src="item.coverImgUrl" lazy></el-image>
            <p>{{ item.name }}</p>
            <span v-for="item2 in item.tags" :key="item2" class="tags">{{ item2 }}</span>
            <div class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play-num"></use>
              </svg>
              <span>{{ computed_Count(item.playCount) }} / </span>
              <span>{{ item.trackCount }}首</span>
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>
  </el-card>
</template>

<script setup>
import { reactive, ref, computed, defineProps, watch, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const hotMenu = reactive([]);
// 渲染静态菜单
['流行', '华语', '民谣', '摇滚', '欧美'].forEach(name => {
  hotMenu.push(name === '流行' ? { name, class: 'MenuActive' } : { name });
});

const loading = ref(true);

const props = defineProps({
  hotList: {
    type: Array,
    default: [],
  },
});
const emit = defineEmits(['getHotPlatList']);
// 监听父组件传递的数据  有数据改动关闭骨架屏加载
watch(
  () => props.hotList,
  () => {
    loading.value = false;
  }
);

// 过滤菜单class属性
const filterClass = e => {
  hotMenu.map(item => {
    item.class = item.name === e.name ? 'MenuActive' : '';
  });
  loading.value = true; // 每次切换热门歌单 将骨架屏loading打开
  emit('getHotPlatList', e.name);
};

// 计算播放量
const computed_Count = computed(() => num => (num % 1000) + '万');

const toDetail = id => {
  // 传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
  router.push({
    // path: '/playlist/detail',
    name: 'playlist-detail',
    params: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.4em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 5px;
  color: white;
}
.hot-card-container {

  .hot-items {
    display: flex;
    justify-content: space-around;
    > div {
      position: relative;
      margin: 0.1rem 2.5rem 0 0;
      .el-image {
        margin: 0;
        img {
          width: 100%;
          height: 100%;
        }
        margin-bottom: 20px;
      }
      p {
        font-size: 1rem;
      }
      .tags {
        margin: 1rem 1rem 1rem 0;
        font-size: 0.6rem;
        color: rgb(124, 124, 124);
      }
      .tags::before {
        content: '#';
        color: rgba(255, 0, 0, 0.836);
      }
      .playCount {
        position: absolute;
        top: 10px;
        right: 8px;
        color: white;
        font-size: 12px;
      }
    }
    .el-skeleton {
      display: flex;
      justify-content: space-around;
      margin: 10px 0;
      .hot-skeleton-warp {
        .el-skeleton__image {
          width: 15rem;
          height: 15rem;
        }
        .el-skeleton__text:nth-child(2) {
          width: 6rem;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
