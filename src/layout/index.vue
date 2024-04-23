<template>
  <div class="app-container relative wh-full" :class="classes">
    <a-space wrap>
      <a-button type="primary" @click="modal.alert('弹出提示')">
        <SearchOutlined />
        <span>弹出提示</span>
      </a-button>
      <a-button type="primary" danger @click="modal.alertError('错误提示')" loading>错误提示</a-button>
      <a-button type="primary" @click="modal.alertWarning('警告提示')">警告提示</a-button>
      <a-button type="primary" @click="modal.alertSuccess('成功提示')">成功提示</a-button>
      <a-button type="primary" danger @click="modal.notifyError('错误通知')">错误通知</a-button>
      <a-button type="primary" danger @click="modal.notifyWarning('警告通知')">警告通知</a-button>
      <a-button type="primary" danger @click="confirmModal">确认窗体</a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Layout' })
import { Dayjs } from 'dayjs'

/** Layout 布局响应式 */
useResize()

/** 读取 Pinia 仓库 */
const appStore = useApp()

/** 用来添加到根组件的动态类的集合 */
const classes = computed(() => {
  const cls: string[] = [appStore.device]
  return cls
})

const value = ref<Dayjs>()
const onPanelChange = (value: Dayjs, mode: string) => {
  console.log(value, mode)
}

const modal = useModal()

async function confirmModal() {
  try {
    const data = await useModal().confirm('sdesfg')
    console.log('data: ', data)
  } catch (error) {
    console.log('error: ', error)
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 16px;
}
</style>
