/** 获取顶部距离，小程序上包含状态栏和小程序胶囊高度，H5上为0 */
export function getTopHeight() {
  const { statusBarHeight = 0 } = uni.getSystemInfoSync() // 状态栏高度
  let titleBarHeight = 0 // 小程序胶囊高度

  // #ifndef H5
  const { height, top } = uni.getMenuButtonBoundingClientRect()
  titleBarHeight = height + (top - statusBarHeight) * 2
  // #endif

  return statusBarHeight + titleBarHeight
}

/**
 * 将秒转换为分钟的工具函数，不足1分钟的秒数视为1分钟，向上取整
 * @param seconds - 要转换的秒数
 * @returns 格式化的分钟
 */
export const formatSecondsToMinutes = (seconds?: number): string => {
  if (typeof seconds === 'number' && seconds > 0) {
    const minutes = Math.ceil(seconds / 60)
    return `${minutes}分钟`
  }
  return ''
}
