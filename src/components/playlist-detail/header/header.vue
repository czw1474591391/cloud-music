<template>
  <div class="detail-header-container">
    <el-row class="detail-header" :gutter="48">
      <el-col :span="6">
        <el-image class="header-img" fit="cover" :src="props.playlist?.coverImgUrl" />
      </el-col>
      <el-col :span="17">
        <el-card>
          <el-row>
            <h3>{{ props.playlist?.name }}</h3>
          </el-row>
          <el-row class="creator">
            <el-col :span="2"
              ><el-avatar :size="40" :src="props.playlist.creator?.avatarUrl" />
            </el-col>
            <el-col :span="6">{{ props.playlist.creator?.description }}</el-col>
            <el-col :span="4">{{ moment(props.playlist?.createTime).format('L') }}</el-col>
          </el-row>

          <el-row>
            <el-col :span="16">
              <div class="iconBox">
                <custom-svg
                  :icon="item.icon"
                  v-for="item in initIcon"
                  :size="'1rem'"
                  :mrgLeft="'0.5rem'"
                  >{{ computed_num(props.playlist[`${item.content}`]) }}</custom-svg
                >
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <h4>歌单简介:</h4>
              <p class="playlist-introduce">{{ props.playlist?.description }}</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import moment from 'moment';
import { defineProps, watch, ref, computed } from 'vue';
import { CustomSvg } from '@/components';

const props = defineProps({
  playlist: {
    type: Object,
    default: {},
  },
});
const initIcon = ref([]);
const computed_num = computed(() => item => {
  item = item + '';
  return item > 10000 ? item?.substr(0, item.length - 4) + '万次' : item;
});
watch(
  () => props.playlist,
  () => {
    if (props.playlist) {
      // 父组件传入数据 初始化静态数据
      initIcon.value = [
        {
          icon: 'icon-erji',
          content: 'playCount',
        },
        {
          icon: 'icon-shoucang',
          content: 'subscribedCount',
        },
        {
          icon: 'icon-pinglun',
          content: 'commentCount',
        },
      ];
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.detail-header-container {
  .creator {
    display: flex;
    align-items: center;
  }
  .header-img {
    width: 250px;
    border-radius: 15px;
  }
  ::v-deep(.el-col-17) {
    padding: 0 !important;
    margin-left: 0;
    .el-card__body {
      padding-bottom: 0;
    }
  }
  .playlist-introduce {
    color: rgb(126, 126, 126);
    margin-top: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  .iconBox {
    width: 20rem;
    display: flex;
    div {
      margin-right: 0.5rem;
    }
  }
}
</style>
