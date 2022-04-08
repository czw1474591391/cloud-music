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
      <div v-for="item in hotPlayList" :key="item.id">
        <!-- <img :src="item.coverImgUrl" alt="" /> -->
        <el-image :src="item.coverImgUrl" lazy></el-image>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { getCurrentInstance, reactive, onBeforeMount, ref } from 'vue';
const { proxy } = getCurrentInstance();
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
    name: '古风',
    class: '',
  },
]);
let hotPlayList = ref([]);
onBeforeMount(() => {
  getHotPlatList();
});
const getHotPlatList = async (cat = '流行') => {
  const data = await proxy.$http.hotPlayList(6, cat);
  hotPlayList.value = data.playlists;
};

// 过滤菜单class属性
const filterClass = e => {
  hotMenu.map(item => {
    item.class = item.id === e.id ? 'hotMenuActive' : '';
  });
  getHotPlatList(e.name);
};
</script>

<style lang="scss" scoped>
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
    div {
      margin: 20px 40px 0 0;
      text-align: center;
      .el-image {
        margin: 0;
      }
    }
  }
}
</style>
