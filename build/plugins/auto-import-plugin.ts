import type { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import AutoComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export const registerAutoImport = (): PluginOption => {
  return AutoImport({
    resolvers: [ElementPlusResolver()],
    imports: ['vue', 'pinia', 'vue-router'], // 自动导入 vue、vue-router、Pinia 相关函数
    dts: 'types/auto-generate/auto-import.d.ts',
    dirs: ['src/store/modules', 'src/hooks'], // 配置其它需要导入的文件目录
  })
}

export const registerAutoComponents = (): PluginOption => {
  return AutoComponents({
    resolvers: [ElementPlusResolver()],
    dts: 'types/auto-generate/auto-components.d.ts',
    dirs: ['src/components'], // 配置其它需要导入的文件目录
  })
}
