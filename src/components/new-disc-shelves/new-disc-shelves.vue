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
      <el-skeleton :loading="loading" animated>
        <template #template>
          <div v-for="j in 4" :key="j">
            <div class="skeleton-container" v-for="i in 3" :key="i">
              <el-skeleton-item variant="image" />
              <div class="skeleton-text">
                <el-skeleton-item variant="text" />
                <el-skeleton-item variant="text" />
                <el-skeleton-item variant="text" />
              </div>
            </div>
          </div>
        </template>

        <template #default>
          <div class="newDisc-item-container">
            <div
              class="newDisc-item"
              v-for="item in NewDiscList"
              :key="item.id"
              @click="toAlbumDetail(item.id)"
            >
              <el-image :src="item.picUrl" lazy></el-image>
              <div class="newDisc_text">
                <div class="album-type">{{ item.type }}</div>
                <div class="album-name">
                  {{ item.name }}
                </div>
                <div class="artist-name">{{ item.artist.name }}</div>
              </div>
            </div>
          </div>
        </template>
      </el-skeleton>
    </el-row>
  </el-card>
</template>

<script setup>
import { reactive, defineProps, watch, ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const newDiscMenu = reactive([]);
// 渲染静态菜单
['全部', '华语', '欧美', '韩国', '日本'].forEach(name => {
  newDiscMenu.push(name === '全部' ? { name, class: 'MenuActive' } : { name });
});
const loading = ref(true);
const props = defineProps({
  NewDiscList: {
    type: Array,
    default: [],
  },
});
const emit = defineEmits(['getNewDisc']);
// 监听父组件数据变动  关闭骨架屏加载
watch(
  () => props.NewDiscList,
  () => (loading.value = false)
);
// 过滤class Active类名 并向父组件发出请求
const filterClass = e => {
  newDiscMenu.map(item => {
    item.class = item.name === e.name ? 'MenuActive' : '';
  });
  // 调用父组件方法请求数据
  loading.value = true;
  emit('getNewDisc', e.name);
};

const router = useRouter();
const toAlbumDetail = id => {
  router.push({
    path: '/album',
    query: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped>
.newDisc-item-container {
  display: flex;
  flex-wrap: wrap;
  .newDisc-item {
    display: flex;
    width: 24%;
    margin: 0 1rem 1rem 0;
    .newDisc_text {
      position: relative;
      overflow: hidden;
      .album-type {
        position: absolute;
        height: 1.5rem;
        line-height: 1.5rem;
        right: -20px;
        top: 5px;
        font-size: 0.1rem;
        transform: rotate(45deg);
        text-align: center;
        background: #ff641e;
        color: white;
      }
      .album-name {
        margin: 30px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .artist-name {
        margin: 30px;
      }
    }
    div:nth-child(1) {
      width: 30%;
      img {
        width: 120px;
        height: 120px;
      }
    }
    div:nth-child(2) {
      width: 60%;
    }
  }
  .newDisc-item:nth-child(4) {
    margin-left: 0rem;
  }
}
.el-card {
  margin-top: 15px;
}
.newDisc_text {
  background: #f0f0f0;
  font-size: 0.3rem;
  padding: 0.3rem;
}
// 骨架屏样式
.el-skeleton {
  display: flex;
  justify-content: space-between;

  .skeleton-container {
    display: flex;
    flex: 1;
    margin: 0 15px 15px 0;
    .el-skeleton__image {
      width: 10rem;
      height: 10rem;
    }
    .skeleton-text {
      .el-skeleton__text:nth-child(1) {
        width: 3rem;
      }
      .el-skeleton__text:nth-child(2) {
        margin-top: 20px;
        width: 6rem;
      }
      .el-skeleton__text:nth-child(3) {
        margin-top: 20px;
        width: 10rem;
      }
      width: 5rem;
      // height: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;
    }
  }
}
</style>
