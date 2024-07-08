<template>
  <nav class="navbar pl-8px">
    <!-- logo部分 -->
    <section class="logo">
      <Logo></Logo>
      <LogoSecond></LogoSecond>
    </section>

    <section>
      <div>首页</div>
      <section>
        <el-dropdown>
          <span class="el-dropdown-link"> Dropdown List </span>
          <template trigger="click">
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </section>
      <section>
        <el-dropdown>
          <span class="el-dropdown-link"> Dropdown List </span>
          <template trigger="click">
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </section>
    </section>
    <!-- 右侧 -->
    <section class="contact">
      <img src="@/assets/images/navbar/contact.png" alt="" />
      <span>联系我们</span>
    </section>
    <section class="login">
      <img src="@/assets/images/navbar/login.png" alt="" />
      <span>登录</span>
    </section>
  </nav>
</template>

<script setup lang="ts">
import Logo from './logoWebsite.vue'
import LogoSecond from './logo2.vue'
defineOptions({ name: 'Navbar' })
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
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: var(--app-navbar-bgc);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.nav-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 8px;
  transition: background-color 0.28s;
  &:hover {
    background-color: rgba(0, 21, 41, 0.08);
  }
}
.contact {
  width: 128px;
  height: 41px;
  box-sizing: border-box;
  border-radius: 8px;
  opacity: 0.8;

  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #cacaca;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  img {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }
  &:hover {
    -webkit-transform: translateY(-3px);
    -ms-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 0 6px #999;
    box-shadow: 0 0 6px #999;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
}
.login {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-left: 19px;
  width: 119.5px;
  height: 41px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  background: linear-gradient(223deg, #c7eeff -4%, #0493d3 63%);
  img {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }

  &:hover {
    -webkit-transform: translateY(-3px);
    -ms-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 0 6px #999;
    box-shadow: 0 0 6px #999;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
}
.logo {
  width: 237px;
  height: 72px;
  margin-left: 220px;
  // background-image: url('../../../assets/images/navbar/logo.png');
}
</style>
