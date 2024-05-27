<template>
  <ConfigProvider :locale="zhCN">
    <RouterView />
  </ConfigProvider>
</template>

<script setup lang="ts">
defineOptions({ name: 'App' })
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/locale/zh_CN'
</script>

<style lang="scss" scoped></style>
