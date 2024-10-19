/* eslint-disable no-param-reassign */
import qs from 'qs'
import type { CustomRequestOptions } from '@/api'

// 请求基准地址
const baseUrl = 'http://localhost:3000'

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: CustomRequestOptions) {
    // 将 query 对象转为查询参数
    if (options.query) {
      const queryStr = qs.stringify(options.query)
      if (options.url.includes('?')) {
        options.url += `&${queryStr}`
      } else {
        options.url += `?${queryStr}`
      }
    }
    options.url = baseUrl + options.url
    // 请求超时
    options.timeout = 10000 // 10s
    // 确保 options.header 是一个对象，否则下面赋值 token 会报错
    options.header = options.header || {}
    // 添加 token 请求头标识
    const token = uni.getStorageSync('token')
    console.log('token', token)
    if (token) {
      options.header.Authorization = `Bearer ${token}`
    }
  }
}

export const requestInterceptor = {
  install() {
    uni.addInterceptor('request', httpInterceptor)
  }
}
