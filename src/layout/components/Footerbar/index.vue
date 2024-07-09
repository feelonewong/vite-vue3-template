<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <section class="first-area">
        <section class="left">
          <img src="@/assets/images/footer/footer-logo.png" width="160" alt="" />
          <span class="left-text">上海市终身教育学分银行</span>
        </section>
        <div class="line"></div>
        <section class="right">
          <section class="block">
            <span class="title">学习指南</span>
            <span class="item">学习地图</span>
            <span class="item">成果目录</span>
            <span class="item">转换目录</span>
          </section>
          <section class="block">
            <span class="title">学习指南</span>
            <span class="item">可信简历</span>
            <span class="item">积分兑换</span>
          </section>
          <section class="block">
            <span class="title">学习空间</span>
            <span class="item">活动报名</span>
            <span class="item">课程报名</span>
            <span class="item">职业飞升</span>
            <span class="item">云端课堂</span>
          </section>
        </section>
      </section>

      <section class="second-area">
        <div class="left-title">友情链接</div>
        <div class="right-block">
          <span class="item">上海开放大学</span>
          <span class="item">长三角学分银行</span>
        </div>
      </section>

      <section class="third-area">
        <div class="left-title">联系电话</div>
        <div class="right-block">
          <span class="item">021-334453234</span>
        </div>
      </section>
      <section class="last-area">copyright © 2023-2024 上海终身教育学分银行版权所有</section>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'FooterBar' })
const router = useRouter()

function handleRefresh() {
  router.push(`/redirect/dashboard`)
}

/** 组件挂载完成后执行的操作 */
async function handleMounted() {}

/** 组件实例被卸载之前执行的操作 */
async function handleUnmounted() {}

/** 注册一个回调函数，在组件挂载完成后执行 */
onMounted(handleMounted)
/** 注册一个回调函数，在组件实例被卸载之前调用 */
onUnmounted(handleUnmounted)
</script>
<style lang="scss" scoped>
.footer-wrapper {
  background: #0a1e30;
  width: 100%;
  box-sizing: border-box;
  .footer-content {
    width: 1400px;
    margin: 0 auto;
    padding-top: 72px;
  }
}
.first-area {
  display: flex;

  .left {
    margin-left: 60px;
    // border-right: 1px solid #4B4B4B;
    padding-right: 160px;

    .left-text {
      display: inline-block;
      margin-top: 20px;
      margin-left: 20px;
      width: 128px;
      height: 54px;
      opacity: 1;
      font-size: 16px;
      font-weight: normal;
      line-height: normal;
      text-align: center;
      letter-spacing: 1.67px;
      color: #0292e0;
    }
  }
  .line {
    width: 1px;
    height: 210px;
    background: #4b4b4b;
  }
  .right {
    display: flex;
    flex: 1;
    padding-left: 125px;

    .block {
      margin-left: 210px;
      width: 126px;
    }
    .block:first-child {
      margin-left: 0;
    }
    .title {
      display: block;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      line-height: normal;
      letter-spacing: 2.5px;
      color: #ffffff;
      margin-bottom: 40px;
    }
    .item {
      display: block;
      text-align: center;
      opacity: 0.6;
      font-size: 16px;
      font-weight: normal;
      line-height: 18px;
      letter-spacing: 2px;
      margin: 12px 0;
      color: #ffffff;
    }
  }
}
.second-area {
  border-top: 1px solid #4b4b4b;
  border-bottom: 1px solid #4b4b4b;
  padding: 20px 90px;
  display: flex;
  .left-title {
    font-size: 20px;
    font-weight: bold;
    opacity: 0.8;
    line-height: normal;
    letter-spacing: 2.5px;
    color: #ffffff;
  }
  .right-block {
    margin-left: 300px;
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 40px;

    .item {
      color: #fff;
      opacity: 0.6;
      font-size: 15px;
      margin-right: 60px;
    }
  }
}
.third-area {
  padding: 20px 90px;
  display: flex;
  .left-title {
    font-size: 20px;
    font-weight: bold;
    opacity: 0.8;
    line-height: normal;
    letter-spacing: 2.5px;
    color: #ffffff;
  }
  .right-block {
    margin-left: 300px;
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 40px;

    .item {
      color: #fff;
      opacity: 0.6;
      font-size: 15px;
      margin-right: 60px;
    }
  }
}
.last-area {
  color: #fff;
  opacity: 0.6;
  font-size: 20px;
  padding: 20px 90px;
  padding-bottom: 66px;
}
</style>
