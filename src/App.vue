<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  // console.log('App Launch')
  // uni.login({
  //   provider: 'weixin', //使用微信登录
  //   success: function (loginRes) {
  //     console.log('---', loginRes)
  //   }
  // })
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
