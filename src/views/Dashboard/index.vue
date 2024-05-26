<template>
  <div class="app-content">
    <p v-for="item in 999">{{ item }}、Dashboard 滚动效果测试</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Dashboard' })
</script>

<style lang="scss" scoped></style>
