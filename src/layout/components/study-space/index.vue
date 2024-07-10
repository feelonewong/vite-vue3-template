<template>
  <div class="study-wrapper">
    <div class="study-content">
      <span class="title">学习空间</span>
      <span class="desc">副标题副标题副标题</span>

      <section class="item-center">
        <section class="item" v-for="item in titleList" @click="handleItemClick(item)" :key="item.key" :class="activeIndex === item.key ? 'active-item' : ''">
          <span class="item-title">{{ item.title }}</span>
          <span class="item-desc">{{ item.desc }}</span>
        </section>
      </section>
      <section v-show="activeIndex === 0" class="block-space">
        <transition name="el-fade-in-linear">
          <space-item></space-item>
        </transition>
        <transition name="el-fade-in-linear">
          <space-item></space-item>
        </transition>
        <transition name="el-fade-in-linear">
          <space-item></space-item>
        </transition>
      </section>
      <section v-show="activeIndex === 1" class="block-space">
        <space-item></space-item>
        <space-item></space-item>
      </section>
      <section v-show="activeIndex === 2" class="block-space">
        <space-item></space-item>
      </section>
      <section v-show="activeIndex === 3" class="block-space">
        <space-item></space-item>
        <space-item></space-item>
        <space-item></space-item>
      </section>

      <div class="study-footer">
        <span>查看更多 ＞</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SpaceItem from './components/study-comp.vue'
defineOptions({ name: 'StudSpace' })
const router = useRouter()
const activeIndex = ref(0)
const titleList = ref([
  { title: '活动报名', desc: '业余生活才对味', key: 0 },
  { title: '课程报名', desc: '线下课程马上预定', key: 1 },
  { title: '云端课堂', desc: '一部手机 学通天下', key: 2 },
  { title: '职业飞升', desc: '考个证书 踏平职场', key: 3 },
])
function handleRefresh() {
  router.push(`/redirect/dashboard`)
}
const handleItemClick = (item: any) => {
  activeIndex.value = item.key
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
  padding-top: 160px;
  box-sizing: border-box;
  background-color: #fff;
  background-size: cover;
  padding-bottom: 30px;
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
.item-center {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  
  justify-content: space-between;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 180px;
    padding: 8px 0;
    .item-title {
      font-size: 19px;
      font-weight: bold;
      display: block;
      margin-bottom: 6px;
    }
    .item-desc {
      font-weight: 14px;
      color: #c1c1c1;
    }
  }
}
.active-item {
  color: #fff;
  border-radius: 5px;
  background-color: #0493d3;
  .item-desc {
    font-weight: 14px;
    color: #fff !important;
  }
}
.block-space {
  width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: flex-start;
}
.study-footer {
  text-align: center;
  > span {
    font-weight: 600;
    font-size: 16px;
    color: #0493D3;
    cursor: pointer;
  }
}
</style>
