<template>
  <div class="card">
    <section class="left-block">
      <img src="@/assets/images/navbar/card-item.png" width="200" alt="" />
    </section>
    <section class="right-block">
      <span class="title">剪纸拉花剪纸拉花剪纸拉花剪纸拉花剪纸拉花剪纸拉花剪纸拉花剪纸拉花</span>
      <span class="bottom-desc">2024.10.2 | 浙江文化馆</span>
    </section>

    <div class="course">课程</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  min-width: 480px;
  margin-right: 30px;
  height: 163px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(12, 111, 154, 0.084);
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .title,
  bottom-desc {
    display: block;
  }
  .right-block {
    flex: 1;
    margin-left: 16px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .title {
      display: block;
      margin-top: 20px;
      color: #333333;
    }
    .bottom-desc {
      margin-bottom: 20px;
      color: #999999;
    }
  }
}
.course {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    color: #fff;
    background: #0493D3;
    padding: 3px 8px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
