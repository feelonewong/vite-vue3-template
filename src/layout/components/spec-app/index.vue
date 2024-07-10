<template>
  <div class="study-wrapper">
    <div class="study-content">
      <span class="title">特色应用</span>
      <span class="desc">副标题副标题副标题</span>
    </div>
    <div class="main">
      <section>
        <img src="@/assets/images/navbar/laptop.png" class="laptop" width="700" alt="" />
        <img src="@/assets/images/navbar/start-btn.png" class="start-btn" width="120" />
      </section>

      <section class="right-tabs">
        <section class="title">
          <span class="title-text" @click="handleItemClick('1')" :class="activeIndex === '1' ? 'active-item' : ''">可信简历</span>
          <span class="title-text" @click="handleItemClick('2')" :class="activeIndex === '2' ? 'active-item' : ''">积分兑换</span>
        </section>
        <section class="tabs-a" v-show="activeIndex === '1'">
          <span v-for="item in btnList" :key="item.key" class="singal-item">{{ item.name }}</span>
          <section class="sub-btn">立即生成</section>
        </section>
        <section class="tabs-b" v-show="activeIndex === '2'">
          <span v-for="item in btnList" :key="item.key" class="singal-item">{{ item.name }}</span>
          <section class="sub-btn">立即生成2</section>
        </section>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'SpecApp' })
const router = useRouter()
const btnList = ref([
  { name: '编写操作', key: '1' },
  { name: '一键生成', key: '2' },
  { name: '数据可信', key: '3' },
  { name: '均可溯源', key: '4' },
  { name: '个性定制', key: '5' },
  { name: '随心搭配', key: '6' },
  { name: '智能协助', key: '7' },
  { name: '贴心服务', key: '8' },
])
function handleRefresh() {
  router.push(`/redirect/dashboard`)
}
const activeIndex = ref('1')
const handleItemClick = (index: string) => {
  activeIndex.value = index
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
  position: relative;
  width: 100%;
  height: 840px;
  padding-top: 60px;
  background-image: url('@/assets/images/navbar/spec-app.png');
  background-size: contain; /* 背景图完全包含在div中 */
  background-repeat: no-repeat; /* 防止背景图重复 */
  background-position: center; /* 背景图居中 */
}
.study-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    display: block;
    text-align: center;
    color: #fff;
    // margin-top: 60px;
    font-size: 28px;
    font-weight: bold;
  }
  .desc {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0px;
    color: #fff;
    opacity: 0.8;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.main {
  width: 1200px;
  position: absolute;
  bottom: -60px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  .right-tabs {
    width: 420px;
    margin-left: -65px;
    .title {
      width: 100%;
      text-align: center;
      padding-top: 20px;
      display: flex;
      justify-content: center;
      .title-text {
        font-size: 18px;
        font-weight: bold;
        height: 100%;
        color: #fff;
        display: block;
        // padding: 0 15px;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
      }
    }
    .tabs-a,
    .tabs-b {
      border-top-right-radius: 5px;
      background-color: #fff;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 80px;
    }
  }
}
.laptop {
  position: relative;
}
.singal-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 400;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 6px;

  box-shadow: 0px -15px 20px 0px rgba(12, 111, 154, 0.084);
}
.start-btn {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.active-item {
  background: linear-gradient(0deg, #ffffff -15%, rgba(255, 255, 255, 0) 79%);
  opacity: 0.9;
  border-radius: 3px;
  border-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 98%);
  box-shadow: 0px 15px 20px 0px rgba(12, 111, 154, 0.084);
}
.sub-btn {
  height: 35px;
  border-radius: 8px;
  opacity: 1;
  color: #fff;
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(230deg, #c7eeff -31%, #0493d3 35%);
}
</style>
