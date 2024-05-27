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
function alert(content: string, title = '系统提示') {
  Modal.info({ title, content })
}

/** 成功提示 */
function alertSuccess(content: string, title = '系统提示') {
  Modal.success({ title, content })
}

/** 警告提示 */
function alertWarning(content: string, title = '系统提示') {
  Modal.warning({ title, content })
}

/** 错误提示 */
function alertError(content: string, title = '系统提示') {
  Modal.error({ title, content })
}

/** 通知提示 */
function notify(content: string, message = '系统通知') {
  notification.info({ message, description: content })
}

/** 成功通知 */
function notifySuccess(content: string, message = '系统通知') {
  notification.success({ message, description: content })
}

/** 警告通知 */
function notifyWarning(content: string, message = '系统通知') {
  notification.warning({ message, description: content })
}

/** 错误通知 */
function notifyError(content: string, message = '系统通知') {
  notification.error({ message, description: content })
}

/** 确认窗体 */
function confirm(content: string, title = '系统提示') {
  return new Promise((resolve, reject) => {
    Modal.confirm({ title, content, onOk: () => resolve(true), onCancel: () => reject('cancel') })
  })
}

export default () => {
  return { msg, msgSuccess, msgWarning, msgError, alert, alertSuccess, alertWarning, alertError, notify, notifySuccess, notifyWarning, notifyError, confirm }
}
