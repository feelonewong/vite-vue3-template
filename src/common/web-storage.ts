interface WebStorageConfig {
  storage: Storage
  expired: number
}

export class WebStorage {
  /** 读取 */
  static getItem<T extends any>(key: string, config: Partial<WebStorageConfig> = {}): T | null {
    const storage = config.storage ?? window.localStorage
    const json = storage.getItem(key)
    if (!json) return null
    const { value, expired } = JSON.parse(json)
    if (expired && Date.now() >= expired) {
      storage.removeItem(key)
      return null
    }
    return value
  }

  /** 存储 */
  static setItem(key: string, value: any, config: Partial<WebStorageConfig> = {}): void {
    const expired = config.expired ?? 0
    if (isNaN(expired) || expired < 0) throw new Error(`expired must be a number`) // 过期时间值合理性判断
    const storage = config.storage ?? window.localStorage
    const data = { value, expired }
    storage.setItem(key, JSON.stringify(data))
  }

  /** 删除 */
  static removeItem(key: string, config: Partial<WebStorageConfig> = {}) {
    const storage = config.storage ?? window.localStorage
    storage.removeItem(key)
  }

  /** 清空 */
  static clear(config: Partial<WebStorageConfig> = {}) {
    const storage = config.storage ?? window.localStorage
    storage.clear()
  }

  /** 读取所有键 */
  static keys(config: Partial<WebStorageConfig> = {}) {
    const storage = config.storage ?? window.localStorage
    return Object.keys(storage)
  }
}
