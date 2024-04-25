import request from '@/utils/request'
import noCaptcha from '@/assets/images/no-captcha.png'

function _mockApiResult(result: unknown): ApiResponseData {
  return { code: 200, message: '操作成功', success: true, timestamp: Date.now(), result }
}

/** 避免 hooks 写法下的命名冲突 */
export class LoginService {
  /** 获取验证码 */
  static getCaptcha(): ApiResult<{ img: string; uuid: string }> {
    return new Promise((resolve, _) => resolve(_mockApiResult({ img: noCaptcha, uuid: 'sdfghjkl' })))
  }

  /** 登录 */
  static login(data: LoginModule.LoginParams): ApiResult<string> {
    return new Promise((resolve, _) => resolve(_mockApiResult(data.account + data.password)))
  }

  /** 退出登录 */
  static logout() {
    return new Promise((resolve, _) => resolve(_mockApiResult('退出成功')))
  }
}
