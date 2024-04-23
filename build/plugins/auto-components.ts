import type { PluginOption } from 'vite'
import AutoComponents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export const registerAutoComponents = (): PluginOption => {
  return AutoComponents({
    resolvers: [AntDesignVueResolver({ importStyle: false })],
    dts: 'types/auto-generate/auto-components.d.ts',
    dirs: ['src/components'], // 配置其它需要导入的文件目录
  })
}
