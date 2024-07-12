<template>
  <div class="banner-wrapper">
    <div class="swiper-wrapper">
      <el-carousel height="450px" autoplay>
        <el-carousel-item v-for="item in bannerPicList" :key="item">
          <img :src="item.imgUrl" width="100%" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="info">
        <span class="title">国内首家省级学分银行</span>
        <span class="desc">上海市终身教育学分银行</span>

        <section class="btn-group">
          <div class="auth">认证开户</div>
          <div class="login">登录使用</div>
        </section>
      </div>
    </div>
    <section class="number-info">
      <img src="@/assets/images/navbar/left-data.png" class="left-pic" height="400" alt="" />
      <section class="text">
        <section class="item">
          <span class="block title">520<span class="bottom-text">万</span></span>
          <span class="bottom-text">档案数</span>
        </section>

        <section class="item">
          <span class="block title">10576<span class="bottom-text">万</span></span>
          <span class="bottom-text">累计成绩条数</span>
        </section>
        <section class="item">
          <span class="block title">1017<span class="bottom-text">万</span></span>
          <span class="bottom-text">转换成绩分数</span>
        </section>
      </section>
      <section class="data-source">
        <span class="left">*数据更新时间: 2024年5月25日 12:00:00</span>
        <span class="right">*数据来源: 上海终身教育学分银行数字全景驾驶舱</span>
      </section>

      <section class="out-ad">
        <el-popover :width="280" placement="top-start" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
          <template #reference>
            <div class="item">
              <img src="@/assets/images/navbar/suishenban.png" height="60" alt="" />
              <span>随申办</span>
            </div>
          </template>
          <template #default>
            <div>
              <img src="@/assets/images/navbar/ssb.png" width="280" alt="" />
            </div>
          </template>
        </el-popover>

        <div class="item">
          <img src="@/assets/images/navbar/alipay.png" height="60" alt="" />
          <span>支付宝</span>
        </div>
        <div class="item">
          <img src="@/assets/images/navbar/gzh.png" height="60" alt="" />
          <span>微信小程序</span>
        </div>
        <div class="item">
          <img src="@/assets/images/navbar/wechat.png" height="60" alt="" />
          <span>微信公众号</span>
        </div>
      </section>
    </section>
  </div>
</template>
<script setup lang="ts">
const bannerPicList = ref([
  {
    imgUrl: 'https://s2.loli.net/2024/07/12/lY4LywrvXB6pGkZ.png',
  },
  {
    imgUrl: 'https://s2.loli.net/2024/07/12/DilbNSvhj9EKxQ4.png',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1494488180300-4c634d1b2124?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
])
</script>
<style lang="scss" scoped>
.banner-wrapper {
}
.number-info {
  height: 400px;
  position: relative;
  background-color: #f8fbfc;
  .left-pic {
    position: absolute;
  }
  .text {
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 180px;
    // margin-top: 180px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-weight: 700;
        font-size: 52px;
        letter-spacing: 2px;
      }
      .bottom-text {
        font-size: 16px;
      }
    }
  }
}
.data-source {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .left,
  .right {
    color: #999;
  }
}

.out-ad {
  width: 1200px;
  z-index: 200;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  .item {
    width: 280px;
    display: flex;
    cursor: pointer;
    justify-content: space-around;
    background-color: #fff;
    align-items: center;
    padding: 25px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 10px 20px 0px rgba(12, 111, 154, 0.084);
    span {
      font-size: 24px;
      font-weight: 600;
    }
  }
}
.swiper-wrapper {
  position: relative;
  .info {
    position: absolute;
    top: 60px;
    left: 220px;
    .btn-group {
      display: flex;
      margin-top: 20px;
      .auth, .login {
        border-radius: 8px;
        background: linear-gradient(230deg, #c7eeff -31%, #0493d3 35%);
        color: #fff;
        width: 120px;
        padding: 10px;
        display: flex;
        letter-spacing: 2px;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
      }
      
    }
    .title,
    .desc {
      display: block;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      line-height: normal;
      letter-spacing: 0px;
      color: #0493d3;
      text-indent: 10px;
    }
    .desc {
      margin-top: 10px;
      font-size: 48px;
      background: linear-gradient(138deg, #2295d1 20%, #00314a 40%);
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}
</style>
