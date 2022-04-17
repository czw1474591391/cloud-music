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
            <el-skeleton-item
              variant="image"
              style="width: 227px; height: 227px; margin-bottom: 20px"
            ></el-skeleton-item>
            <el-skeleton-item variant="text" style="width: 100px" />
            <el-skeleton-item variant="text" style="width: 200px" />
          </div>
        </template>
        <template #default>
          <div v-for="item in hotPlayList" :key="item.name" @click="toDetail(item.id)">
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
import { getCurrentInstance, reactive, onBeforeMount, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const { proxy } = getCurrentInstance();
const router = useRouter();
const hotMenu = reactive([]);
// 渲染静态菜单
['流行', '华语', '民谣', '摇滚', '欧美'].forEach(name => {
  hotMenu.push(name === '流行' ? { name, class: 'MenuActive' } : { name });
});
const hotPlayList = ref([]);
const loading = ref(true);
onBeforeMount(() => getHotPlatList());

const getHotPlatList = async cat => {
  const data = await proxy.$http.hotPlayList({ cat });
  hotPlayList.value = data.playlists;
  loading.value = false;
};
// 过滤菜单class属性
const filterClass = e => {
  hotMenu.map(item => {
    item.class = item.name === e.name ? 'MenuActive' : '';
  });
  loading.value = true; // 每次切换热门歌单 将骨架屏loading打开
  getHotPlatList(e.name);
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
  border-radius: 15px;

  .hot-items {
    display: flex;
    justify-content: space-around;
    > div {
      position: relative;
      margin: 0.1rem 0.5rem 0 0;
      .el-image {
        margin: 0;
      }
      p {
        font-size: 16px;
      }
      .tags {
        font-size: 14px;
        margin-right: 10px;
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
      margin: 10px 0;
      .hot-skeleton-warp {
        flex: 1;
      }
    }
  }
}
</style>
