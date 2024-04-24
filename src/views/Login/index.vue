<template>
  <div class="login-container">
    <div class="login-top">{{ title }}</div>
    <div class="login-desc">
      <p>体验数据一触即达</p>
      <p>决策云图一览无余</p>
    </div>

    <a-form class="login-form">
      <h3 class="login-title"><span>WELCOME</span>欢迎登录</h3>
      <a-form-item>
        <a-input placeholder="请输入账号">
          <template #prefix><UserOutlined :style="{ color: 'rgba(0,0,0,.25)' }" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password placeholder="请输入密码">
          <template #prefix><LockOutlined :style="{ color: 'rgba(0,0,0,.25)' }" /></template>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <div class="captcha-container">
          <a-input placeholder="请输入验证码">
            <template #prefix><SmileOutlined :style="{ color: 'rgba(0,0,0,.25)' }" /></template>
          </a-input>
          <img src="../../assets/images/no-captcha.png" alt="" srcset="" />
        </div>
      </a-form-item>
      <a-form-item>
        <a-button :loading @click="handleLogin">
          <span>{{ loading ? `登录中...` : `登录` }}</span>
        </a-button>
      </a-form-item>
    </a-form>

    <div class="footer">
      <div class="copyright">Copyright &copy; 2022 xx集团有限公司 出品</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Login' })

/** 登录按钮 Loading */
const loading = ref(false)
/** 左上角的标题文本 */
const title = computed(() => import.meta.env.VITE_APP_TITLE || '红旗漫卷西风')

/** 处理登录按钮的回调 */
async function handleLogin() {
  try {
    loading.value = true
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log('error: ', error)
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-image: url('../../assets/images/login-bg-1.png');
  background-size: cover;
}

.login-top {
  position: absolute;
  left: 25px;
  top: 20px;
  font-size: 25px;
  font-weight: bold;
}

.login-desc {
  position: absolute;
  left: 40px;
  bottom: 40px;
  font-size: 24px;
  color: #b8c3d9;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  p ~ p {
    margin-top: 1em;
  }
}

.login-form {
  float: right;
  width: 408px;
  min-width: 260px;
  margin-top: 300px;
  margin-right: 200px;
  padding: 20px 30px;
  background-color: rgba(245, 246, 247, 0.75);
  box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.9), 0px 5px 20px 5px rgba(15, 21, 51, 0.1), inset -1px 1px 1px rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(136px);
  border-radius: 10px;
  .captcha-container {
    display: flex;
    align-items: center;
    img {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .ant-btn {
    width: 100%;
    height: 42px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    color: #2b65d9;
    letter-spacing: 2px;
    background-color: #f5f6f7;
    box-shadow: -2px -2px 4px rgba(255, 255, 255, 0.9), 0px 1px 2px rgba(15, 21, 51, 0.1), inset -1px 1px 1px rgba(255, 255, 255, 0.8);
  }
}

.ant-input-affix-wrapper,
.ant-input-password {
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: inset 0px 1px 3px rgba(15, 21, 51, 0.1);
}

.login-title {
  font-size: 18px;
  color: #000000;
  margin-bottom: 20px;
  span {
    color: #2b65d9;
    margin-right: 10px;
  }
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 48px 0 24px;
  text-align: center;
  .copyright {
    font-size: 12px;
    letter-spacing: 2px;
  }
}
</style>
