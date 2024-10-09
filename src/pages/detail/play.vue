<template>
  <view>
    <view class="flex flex-col items-center">
      <img
        src="https://avatar-static.segmentfault.com/807/189/80718919-5cc81ce81affe_huge256"
        class="rounded-full w-400rpx h-400rpx"
      />
      <view class="mt-20rpx text-32rpx">冥想初体验</view>
      <view class="mt-40rpx text-28rpx">练习精讲</view>
      <slider
        :value="currentProgress"
        @change="onSliderChange"
        :min="0"
        :max="100"
        block-size="15"
        block-color="#1aad19"
        active-color="#1aad19"
        back-ground-color="#d3d3d3"
        class="w-400rpx"
      ></slider>
      <text>{{ currentTimeText }} / {{ durationText }}</text>

      <!-- 播放/暂停按钮 -->
      <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 生命周期：挂载时
onMounted(() => {
  innerAudioContext.play()
  isPlaying.value = true
})

onUnmounted(() => {
  innerAudioContext.destroy() // 销毁音频上下文，避免内存泄漏
})

const innerAudioContext = uni.createInnerAudioContext()
innerAudioContext.src = 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3'

const isPlaying = ref(false)
const currentProgress = ref(0) // 当前进度
const currentTime = ref(0) // 当前播放时间
const duration = ref(0) // 音频总时长

// 格式化时间
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const currentTimeText = computed(() => formatTime(currentTime.value))
const durationText = computed(() => formatTime(duration.value))

// 监听音频的播放进度
innerAudioContext.onTimeUpdate(() => {
  currentTime.value = innerAudioContext.currentTime
  duration.value = innerAudioContext.duration
  currentProgress.value = (innerAudioContext.currentTime / innerAudioContext.duration) * 100
})

// 处理播放和暂停
const togglePlay = () => {
  if (isPlaying.value) {
    innerAudioContext.pause()
  } else {
    innerAudioContext.play()
  }
  isPlaying.value = !isPlaying.value
}

// 处理拖动进度条
const onSliderChange = (e: any) => {
  const seekPosition = (e.detail.value / 100) * duration.value
  innerAudioContext.seek(seekPosition)
}

innerAudioContext.onError(res => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
</script>

<style></style>
