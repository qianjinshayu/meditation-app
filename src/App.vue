<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { weChatLogin } from './api/modules/user'

onLaunch(() => {
  console.log('App Launch')
  uni.login({
    provider: 'weixin', //使用微信登录
    success: async function (loginRes) {
      console.log('---', loginRes)
      try {
        const res = await weChatLogin({ code: loginRes.code })
        console.log('res?登录>', res)
        const { token } = res.data
        // 存下 token
        uni.setStorageSync('token', token)
      } catch (err) {
        console.log('err', err)
      }
    }
  })
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
