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
