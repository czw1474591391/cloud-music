<template>
  <el-row>
    <el-col :span="16">
      <detail-header />
    </el-col>
    <el-col :span="7" :offset="1">
      <div>51531</div>
    </el-col>
  </el-row>
</template>

<script setup>
import { detailHeader } from '@/components';
import { onBeforeMount, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const { proxy } = getCurrentInstance();

onBeforeMount(() => getplaylistDetail());
const getplaylistDetail = async () => {
  const data = await proxy.$http.playListDetail(route.params.id);
  console.log(data);
};
</script>

<style lang="scss" scoped></style>
