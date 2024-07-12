<template>
  <div class="app-content">
    <nav-bar></nav-bar>
    <banner></banner>
    <grid-area></grid-area>
    <news-info></news-info>
    <study-guide></study-guide>
    <spec-app></spec-app>
    <study-space></study-space>
    <study-area></study-area>
    <footer-bar></footer-bar>
  </div>
  <div class="right_sider_bar" v-if="btnFlag">
    <el-popover :width="150" placement="left" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
      <template #reference>
        <img src="@/assets/images/navbar/suishenban.png" width="40" style="margin: 10px auto" alt="" />
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
          <img src="@/assets/images/navbar/qrcode.png" alt="" />
        </div>
      </template>
    </el-popover>

    <el-popover :width="150" placement="left" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
      <template #reference>
        <img src="@/assets/images/navbar/alipay.png" width="40" style="margin: 10px auto" alt="" />
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
          <img src="@/assets/images/navbar/qrcode.png" alt="" />
        </div>
      </template>
    </el-popover>
    <el-popover :width="150" placement="left" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
      <template #reference>
        <img src="@/assets/images/navbar/gzh.png" width="40" style="margin: 10px auto" alt="" />
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
          <img src="@/assets/images/navbar/qrcode.png" alt="" />
        </div>
      </template>
    </el-popover>
    <el-popover :width="150" placement="left" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
      <template #reference>
        <img src="@/assets/images/navbar/wechat.png" width="40" style="margin: 10px auto" alt="" />
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">
          <img src="@/assets/images/navbar/qrcode.png" alt="" />
        </div>
      </template>
    </el-popover>
    <el-popover :width="350" placement="left" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
      <template #reference>
        <img src="@/assets/images/navbar/question.png" width="40" style="margin: 10px auto" alt="" />
      </template>
      <template #default>
        <div class="demo-rich-conent" style="display: flex; gap: 16px; flex-direction: column">常见问题： 嘻嘻嘻哈哈哈</div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/layout/components/Navbar/index.vue'
import Banner from '@/layout/components/banner/index.vue'
import NewsInfo from '@/layout/components/news-info/index.vue'
import GridArea from '@/layout/components/grid-area/index.vue'
import SpecApp from '@/layout/components/spec-app/index.vue'
import StudySpace from '@/layout/components/study-space/index.vue'
import StudyGuide from '@/layout/components/study-guide/index.vue'
import StudyArea from '@/layout/components/study-area/index.vue'
import FooterBar from '@/layout/components/Footerbar/index.vue'
defineOptions({ name: 'HomePage' })

onMounted(() => {
  window.addEventListener('scroll', scrollToTopFn)
})
const btnFlag = ref(false)
const scrollToTopFn = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  console.log(scrollTop)
  if (scrollTop > 680) {
    btnFlag.value = true
  } else {
    btnFlag.value = false
  }
}
</script>

<style lang="scss" scoped>
.app-content {
  background: #fff;
}
.back_wrapper {
}
.right_sider_bar {
  position: fixed;
  bottom: 120px;
  right: 20px;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  z-index: 999;
  width: 60px;
  height: 260px;
  border-radius: 30px;
  border: 1px solid #dcdcdc;
  box-shadow: 0px 2px 10px 0px #bdebff;
  display: block;
  justify-content: center;
  align-items: center;
}
</style>
