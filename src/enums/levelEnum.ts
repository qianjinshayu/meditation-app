export enum Level {
  Zero = 1, // 零基础
  Entry, // 入门
  Intermediate, // 进阶
  Master // 大师
}

/** 获取等级枚举值方法 */
export const getLevelText = (level?: Level): string => {
  switch (level) {
    case Level.Zero:
      return '零基础'
    case Level.Entry:
      return '入门'
    case Level.Intermediate:
      return '进阶'
    case Level.Master:
      return '大师'
    default:
      return '未知等级'
  }
}
