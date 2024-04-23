import { message, Modal, notification } from 'ant-design-vue'

/** 消息提示 */
function msg(content: string) {
  message.info(content)
}

/** 成功消息 */
function msgSuccess(content: string) {
  message.success(content)
}

/** 警告消息 */
function msgWarning(content: string) {
  message.warning(content)
}

/** 错误消息 */
function msgError(content: string) {
  message.error(content)
}

/** 弹出提示 */
function alert(content: string) {
  Modal.info({ title: '系统提示', content })
}

/** 成功提示 */
function alertSuccess(content: string) {
  Modal.success({ title: '系统提示', content })
}

/** 警告提示 */
function alertWarning(content: string) {
  Modal.warning({ title: '系统提示', content })
}

/** 错误提示 */
function alertError(content: string) {
  Modal.error({ title: '系统提示', content })
}

/** 通知提示 */
function notify(content: string) {
  notification.info({ message: '系统通知', description: content })
}

/** 成功通知 */
function notifySuccess(content: string) {
  notification.success({ message: '系统通知', description: content })
}

/** 警告通知 */
function notifyWarning(content: string) {
  notification.warning({ message: '系统通知', description: content })
}

/** 错误通知 */
function notifyError(content: string) {
  notification.error({ message: '系统通知', description: content })
}

/** 确认窗体 */
function confirm(content: string) {
  return new Promise((resolve, reject) => {
    Modal.confirm({ title: '系统提示', content, onOk: () => resolve(true), onCancel: () => reject('cancel') })
  })
}

export default () => {
  return { msg, msgSuccess, msgWarning, msgError, alert, alertSuccess, alertWarning, alertError, notify, notifySuccess, notifyWarning, notifyError, confirm }
}
