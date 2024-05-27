<template>
  <div class="login-container relative wh-screen flex-center c-white bg-cover">
    <a-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
      <h3 class="login-title">若依后台管理系统</h3>
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
      <a-checkbox v-model:checked="loginForm.rememberMe" class="mb-20px">记住密码</a-checkbox>
      <a-form-item>
        <a-button :loading @click="handleLogin" type="primary" class="w-full h-40px">
          <span>{{ loading ? `登录中...` : `登录` }}</span>
        </a-button>
      </a-form-item>
    </a-form>

    <!--  底部  -->
    <div class="login-footer">
      <span>Copyright © 2018-2024 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Login' })
import defaultCaptcha from '@/assets/images/no-captcha.png'
import type { Rule, FormInstance } from 'ant-design-vue/es/form'
import { getTimeWelcome } from '@/utils/format-time'

/** 登录按钮 Loading */
const loading = ref(false)
/** 左上角的标题文本 */
const title = computed(() => import.meta.env.VITE_APP_TITLE || '红旗漫卷西风')
/** 验证码图片地址 */
const captchaURL = ref<string>()
/** 登录表单实例 */
const loginFormRef = ref<FormInstance>()
/** 登录表单数据 */
const loginForm = ref({ account: 'admin', password: 'admin123456', rememberMe: true, captcha: 'asdf' })
/** 登录表单数据的校验规则 */
const loginFormRules: Record<string, Rule[]> = {
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
}
const route = useRoute()
const router = useRouter()
const userStore = useUser()

/** 处理登录按钮的回调 */
async function handleLogin() {
  try {
    loading.value = true
    await loginFormRef.value?.validate()
    await userStore.login(loginForm.value)
    loading.value = false
    router.push('/')
  } catch (error) {
    loading.value = false
    console.log('error: ', error)
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url('../../assets/images/login-bg.ruoyi.jpg');
}

.login-form {
  width: 400px;
  padding: 25px 25px 5px 25px;
  border-radius: 6px;
  background-color: #ffffff;
  .login-title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
    font-size: 20px;
    font-weight: 500;
  }
  .ant-input-affix-wrapper,
  .ant-input-password {
    height: 38px;
  }
}

.login-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
