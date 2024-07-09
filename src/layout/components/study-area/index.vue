<template>
  <div class="study-wrapper">
    <div class="study-content">
        <span class="title">学习规划</span>
        <span class="desc">根据您存入学分银行的学习成果及部分学习过程，为您推荐如下内容:</span>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'StudyArea' })
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
    height: 780px;
    background: url('/images/study-bg.png') no-repeat;
}
</style>
