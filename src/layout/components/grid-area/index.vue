<template>
  <div class="grid-wrapper">
    <div class="grid-area">
      <section class="item" v-for="item in areaList" :key="item.key">
        <img src="@/assets/images/navbar/grid.png" width="60" alt="" />
        <span class="title">{{ item.title }}</span>
        <span class="desc">{{ item.desc }}</span>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const areaList = ref([
  { title: '我的档案', desc: '终身学习档案', key: '0' },
  { title: '我的简历', desc: '展示学习成果', key: '1' },
  { title: '我的积分', desc: '兑换学习成果', key: '2' },
  { title: '成就徽章', desc: '探索学习方式', key: '3' },
  { title: '成果证书', desc: '可视学习成果', key: '4' },
  { title: '学习空间', desc: '收纳学习过程', key: '5' },
  { title: '上传成果', desc: '储存学习成果', key: '6' },
  { title: '成绩证明', desc: '证明学习成果', key: '7' },
])
</script>

<style lang="scss" scoped>
.grid-wrapper {
    background-color: #fff;
    padding-bottom: 20px;
}
.grid-area {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  // border: 1px solid red;
  .item {
    width: 285px;
    height: 160px;
    cursor: pointer;
    border: 1px solid #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
      display: block;
    }
    .desc {
      display: block;
      margin-top: 10px;
      font-size: 14px;
      color: #999;
    }
  }
  .item:nth-child(1) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(2) {
    border-top: none;
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(3) {
    border-top: none;
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(4) {
    border-top: none;
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(5) {
    border-left: none;
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(6) {
    // border-left: none;
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(7) {
    border-right: none;
    border-bottom: none;
  }
  .item:nth-child(8) {
    border-bottom: none;
    border-right: none;
  }
}
</style>
