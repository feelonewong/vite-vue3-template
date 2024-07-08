<template>
  <div class="app-content">
    <NavBar></NavBar>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/layout/components/Navbar/index.vue'
defineOptions({ name: 'HomePage' })
</script>

<style lang="scss" scoped>
.app-content {
  background: #fff;
}
</style>
