<template>
  <div class="app-content">
    <NavBar></NavBar>
    <FooterBar></FooterBar>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/layout/components/Navbar/index.vue'
import FooterBar from '@/layout/components/Footerbar/index.vue'
defineOptions({ name: 'HomePage' })
</script>

<style lang="scss" scoped>
.app-content {
  background: #fff;
}
</style>
