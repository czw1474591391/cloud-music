<template>
  <el-card class="hot-card-container">
    <div class="hot-title">
      <h3>热门推荐</h3>
      <div class="hotMenu-container">
        <ul class="hotMenu">
          <li v-for="(item, index) in hotMenu" :key="index" @click="filterClass(item)">
            <a href="#" :class="item.class">{{ item.name }}</a>
          </li>
        </ul>
      </div>
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
          <div v-for="item in hotPlayList" :key="item.id" @click="toDetail(item.id)">
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
const hotMenu = reactive([
  {
    id: 0,
    name: '流行',
    class: 'hotMenuActive',
  },
  {
    id: 1,
    name: '华语',
    class: '',
  },
  {
    id: 2,
    name: '民谣',
    class: '',
  },
  {
    id: 3,
    name: '摇滚',
    class: '',
  },
  {
    id: 4,
    name: '欧美',
    class: '',
  },
]);
const hotPlayList = ref([]);
const loading = ref(true);
onBeforeMount(() => getHotPlatList());

const getHotPlatList = async (cat = '流行') => {
  const data = await proxy.$http.hotPlayList(6, cat);
  hotPlayList.value = data.playlists;
  loading.value = false;
};
// 过滤菜单class属性
const filterClass = e => {
  hotMenu.map(item => {
    item.class = item.id === e.id ? 'hotMenuActive' : '';
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
  .hot-title {
    display: flex;
    justify-content: start;
    align-items: center;
    h3 {
      margin: 0;
    }
    .hotMenu {
      list-style: none;
      display: flex;
      width: 400px;
      li {
        flex: 1;
      }
    }
    .hotMenuActive {
      border-bottom: 5px solid rgb(129, 112, 112);
    }
  }
  .hot-items {
    display: flex;
    justify-content: space-around;
    > div {
      position: relative;
      margin: 20px 40px 0 0;
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
