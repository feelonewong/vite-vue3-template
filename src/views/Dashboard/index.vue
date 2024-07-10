<template>
  <div class="app-content">
    <nav-bar></nav-bar>
    <grid-area></grid-area>
    <news-info></news-info>
    <spec-app></spec-app>
    <study-space></study-space>
    <study-area></study-area>
    <footer-bar></footer-bar>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/layout/components/Navbar/index.vue'
import NewsInfo from '@/layout/components/news-info/index.vue'
import GridArea from '@/layout/components/grid-area/index.vue'
import SpecApp from '@/layout/components/spec-app/index.vue'
import StudySpace from '@/layout/components/study-space/index.vue'
import StudyArea from '@/layout/components/study-area/index.vue'
import FooterBar from '@/layout/components/Footerbar/index.vue'
defineOptions({ name: 'HomePage' })
</script>

<style lang="scss" scoped>
.app-content {
  background: #fff;
}
</style>
