import { http } from '@/api'

/** 微信小程序登录 */
export function weChatLogin(data: { code: string }) {
  return http<{ token: string }>({
    url: `/user/weChatLogin`,
    method: 'POST',
    data
  })
}
