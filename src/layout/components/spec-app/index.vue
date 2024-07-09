<template>
    <div class="study-wrapper">
      <div class="study-content">
        <span class="title">特色应用</span>
        <span class="desc">副标题副标题副标题</span>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  defineOptions({ name: 'SpecApp' })
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
  .study-wrapper {
    width: 100%;
    padding-top: 60px;
    box-sizing: border-box;
    background-size: cover;
    padding-bottom: 50px;
  }
  .study-content {
    .title {
      display: block;
      text-align: center;
      // margin-top: 60px;
      font-size: 24px;
      font-weight: bold;
      color: #333333;
    }
    .desc {
      display: block;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0px;
      color: #0493d3;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  
  </style>
  