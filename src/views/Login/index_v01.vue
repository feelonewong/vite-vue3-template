<template>
  <div class="login-container relative wh-screen c-white bg-cover">
    <div class="absolute pos-left-25px pos-top-20px font-bold text-size-25px">{{ title }}</div>
    <div class="login-desc">
      <p>体验数据一触即达</p>
      <p>决策云图一览无余</p>
    </div>

    <a-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
      <h3 class="login-title"><span>WELCOME</span>欢迎登录</h3>
      <a-form-item name="account">
        <a-input placeholder="请输入你的账号" v-model:value="loginForm.account">
          <template #prefix><UserOutlined class="c-[#000]/25" /></template>
        </a-input>
      </a-form-item>
      <a-form-item name="password">
        <a-input-password placeholder="请输入你的密码" v-model:value="loginForm.password">
          <template #prefix><LockOutlined class="c-[#000]/25" /></template>
        </a-input-password>
      </a-form-item>
      <a-form-item name="captcha">
        <div class="flex items-center">
          <a-input placeholder="请输入验证码" v-model:value="loginForm.captcha">
            <template #prefix><SmileOutlined class="c-[#000]/25" /></template>
          </a-input>
          <img :src="captchaURL ?? defaultCaptcha" alt="captcha" class="cursor-pointer ml-10px" />
        </div>
      </a-form-item>
      <a-form-item>
        <a-button :loading @click="handleLogin">
          <span>{{ loading ? `登录中...` : `登录` }}</span>
        </a-button>
      </a-form-item>
    </a-form>

    <div class="mt-48px mb-24px absolute pos-left-none pos-bottom-none w-full text-center">
      <div class="text-size-12px tracking-1px">Copyright &copy; 2022 xx集团有限公司 出品</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Login' })
import defaultCaptcha from '@/assets/images/no-captcha.png'
import type { Rule, FormInstance } from 'ant-design-vue/es/form'

/** 登录按钮 Loading */
const loading = ref(false)
/** 左上角的标题文本 */
const title = computed(() => import.meta.env.VITE_APP_TITLE || '红旗漫卷西风')
/** 验证码图片地址 */
const captchaURL = ref<string>()
/** 登录表单实例 */
const loginFormRef = ref<FormInstance>()
/** 登录表单数据 */
const loginForm = ref({ account: 'admin', password: 'admin123456', captcha: 'asdf' })
/** 登录表单数据的校验规则 */
const loginFormRules: Record<string, Rule[]> = {
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
}

/** 处理登录按钮的回调 */
async function handleLogin() {
  try {
    loading.value = true
    await loginFormRef.value?.validate()
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log('error: ', error)
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url('../../assets/images/login-bg-1.png');
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
  .ant-btn {
    width: 100%;
    height: 42px;
    margin-top: 16px;
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
  outline: none;
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
</style>
