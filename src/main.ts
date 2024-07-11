import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupPlugins } from './plugins'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupDirectives } from './directives'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './styles/index.scss'
import BaiduMap from 'vue-baidu-map-3x'
async function bootstrap() {
  /** 创建 Vue 应用实例 */
  const app = createApp(App)
  
  // 挂在element UI
  app.use(ElementPlus)

  // 挂在百度地图插件
  app.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'bMBDrJNaufA8WskPpo2RCXWj3bwbiEtZ',
    // v:'2.0',  // 默认使用3.0
    // type: 'WebGL' // ||API 默认API  (使用此模式 BMap=BMapGL)
  });
  /** 自定义插件 */
  setupPlugins(app)

  /** 注册自定义指令 */
  setupDirectives(app)

  /** 配置 Store 状态管理 https://pinia.web3doc.top */
  setupStore(app)

  /** 配置 Router https://router.vuejs.org/zh */
  await setupRouter(app)

  /** 挂载应用 */
  app.mount('#app')
}

bootstrap()
