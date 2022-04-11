<template>
  <el-card>
    <div class="newdisc-header">
      <h3>新碟上架</h3>
      <div class="newdisc-container">
        <ul class="newdisc-title-menu">
          <li v-for="item in newDiscMenu" :key="item.name">
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <el-row>
      <el-col :span="6" v-for="item in props.NewDiscList" :key="item.id">
        <el-row>
          <el-col :span="12"
            ><el-image style="width: 120px" :src="item.picUrl" :fit="contain"></el-image
          ></el-col>
          <el-col :span="12" style="background: #f0f0f0">{{ item.name }}</el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { reactive, defineProps, watch } from 'vue';
const newDiscMenu = reactive([]);
// 渲染静态菜单
['全部', '华语', '欧美', '韩国', '日本'].forEach(name => {
  newDiscMenu.push(name === '全部' ? { name, class: 'newDiscMenuActive' } : { name });
});
const props = defineProps({
  NewDiscList: {
    type: Array,
    default: [],
  },
});
watch(
  () => props.NewDiscList,
  () => console.log(props.NewDiscList)
);
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 15px;
}
.newdisc-header {
  display: flex;
  align-items: center;
  .newdisc-title-menu {
    list-style: none;
    display: flex;
    width: 400px;
    li {
      flex: 1;
    }
  }
  .newDiscMenuActive {
    border-bottom: 5px solid rgb(129, 112, 112);
  }
}
</style>
