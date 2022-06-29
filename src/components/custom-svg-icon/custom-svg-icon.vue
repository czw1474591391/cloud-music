<template>
  <div>
    <svg class="icon" :width="size" :height="size" aria-hidden="true">
      <use :href="`#${icon}`"></use>
    </svg>
    <span :style="`margin-left: ${mrgLeft}`" class="content"> <slot></slot></span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['icon', 'size', 'mrgLeft']);
</script>

<style lang="scss" scoped>
.content {
  font-size: 0.5rem;
  color: rgb(126, 126, 126);
}
</style>
