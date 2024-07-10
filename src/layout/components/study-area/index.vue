<template>
  <div class="study-wrapper">
    <div class="study-content">
      <span class="title">学习规划</span>
      <span class="desc">根据您存入学分银行的学习成果及部分学习过程，为您推荐如下内容:</span>

      <section class="item-collection" style="--t: 10s">
        <div class="item-wrapper">
          <CardItem class="item"></CardItem>
          <CardItem class="item"></CardItem>
          <CardItem class="item"></CardItem>
          <CardItem class="item"></CardItem>
          
        </div>
      </section>
      <section class="item-collection last" style="--t: 16s">
        <div class="item-wrapper">
          <CardItem class="item"></CardItem>
          <CardItem class="item"></CardItem>
          <CardItem class="item"></CardItem>
          <CardItem class="item"></CardItem>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import CardItem from './component/card-item.vue'
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
  padding-top: 60px;
  box-sizing: border-box;
  // height: 480px;
  background: url('@/assets/images/navbar/card-bg.png') no-repeat;
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
.item-collection {
  margin: 40px 0;

  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
  .item {
    // margin: 10px;
    // margin-left: 20px;
    // margin-right: 20px;
    border-radius: 5px;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: background-color 0.5s;
  }
}
.last {
}
.item-collection > .item-wrapper {
  width: 100%;
  display: flex;
  // white-space: nowrap;
  animation: animate var(--t) linear infinite;
  animation-delay: calc(var(--t) * -1);
}
@keyframes animate {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-120%);
  }
}
</style>
