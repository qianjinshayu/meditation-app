import type { ResData } from './interface'

/** uni.request() 参数基础上增加 query 对象 */
export interface CustomRequestOptions extends UniApp.RequestOptions {
  /** 支持以对象的形式传查询参数 */
  query?: Record<string, any>
}

/**
 * 对 uni.request 进行封装
 * @param options uni.request()参数
 * @returns 返回一个 Promise，包含请求结果
 */
export const http = <T>(options: CustomRequestOptions) => {
  return new Promise<ResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as ResData<T>)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as ResData<T>).message
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误'
        })
        reject(err)
      }
    })
  })
}
