<template>
  <div style="width: 100%; box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)">
    <nav class="navbar pl-8px">
      <!-- logo部分 -->
      <section class="logo">
        <Logo></Logo>
        <LogoSecond></LogoSecond>
      </section>

      <section class="drop-down-center">
        <div>首页</div>
        <section>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              学习空间 <el-icon class="el-icon--right" style="margin-left: -1px"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>下拉条件1</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </section>
        <section>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              应用场景 <el-icon class="el-icon--right" style="margin-left: -1px"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>下拉条件2</el-dropdown-item>
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
  </div>
</template>

<script setup lang="ts">
import Logo from './logoWebsite.vue'
import LogoSecond from './logo2.vue'
import { ArrowDown, Check, CircleCheck, CirclePlus, CirclePlusFilled, Plus } from '@element-plus/icons-vue'
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
  width: 1400px;
  margin: 0 auto;
  height: 100px;
  background-color: var(--app-navbar-bgc);
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
}
.drop-down-center {
  margin-left: 150px;
  width: 360px;
  margin-right: 360px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
}

.demonstration {
  display: block;
  color: #909399;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.el-dropdown-link {
  font-weight: bold;
  font-size: 16px;
}
.el-icon--right {
  height: 1em;
  width: 1em;
  font-weight: bold;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 3px;
  font-size: inherit;
}
</style>
