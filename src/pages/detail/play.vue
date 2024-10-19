<template>
  <view>
    <custom-navigation></custom-navigation>
    <view class="flex flex-col items-center mt-100rpx">
      <img :src="courseInfo?.cover" class="rounded-full w-400rpx h-400rpx" />
      <view class="mt-20rpx text-32rpx">{{ courseInfo?.name }}</view>
      <view class="mt-40rpx text-28rpx">{{ courseInfo?.describe }}</view>
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
      <view class="flex justify-between w-400rpx m-t--10rpx">
        <text class="text-gray-800 text-22rpx">{{ currentTimeText }}</text>
        <text class="text-gray-800 text-22rpx">{{ durationText }}</text>
      </view>
      <view class="flex justify-between w-400rpx items-center">
        <view
          class="i-carbon:rewind-30 text-44rpx text-gray-500"
          @click="handleForwardOrRewind('rewind')"
        ></view>
        <view
          :class="isPlaying ? 'i-carbon:pause-outline-filled' : 'i-carbon:play-outline-filled'"
          class="text-100rpx text-color--primary"
          @click="togglePlay"
        ></view>
        <view
          class="i-carbon:forward-30 text-44rpx text-gray-500"
          @click="handleForwardOrRewind('forward')"
        ></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { formatTime } from '@/utils'
import { onLoad } from '@dcloudio/uni-app'
import { getCourseDetail } from '@/api/modules/course'
import type { Course } from '@/api/interface'
import customNavigation from '@/components/customNavigation/index.vue'

onUnmounted(() => {
  // 销毁音频上下文，避免内存泄漏
  innerAudioContext.destroy()
})

onLoad((options: any) => {
  courseId.value = options.id
  courseId.value && initData()
})

/** 课程信息 */
let courseInfo = ref<Course.ResCourse | null>(null)
/** 课程id */
let courseId = ref(0)

/** 获取冥想课程详情数据 */
const initData = async () => {
  try {
    const res = await getCourseDetail(courseId.value)
    courseInfo.value = res.data
    innerAudioContext.src = courseInfo.value.audioUrl
    innerAudioContext.play()
    isPlaying.value = true
  } catch (err) {
    console.log(err)
  }
}

const innerAudioContext = uni.createInnerAudioContext()
// innerAudioContext.src = 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3'

/** 是否正在播放 */
const isPlaying = ref(false)
/** 当前进度 */
const currentProgress = ref(0)
/** 当前已播放时间 */
const currentTime = ref(0)
/** 音频总时长 */
const duration = ref(0)

const currentTimeText = computed(() => formatTime(currentTime.value))
const durationText = computed(() => formatTime(duration.value))

/** 监听音频的播放进度 */
innerAudioContext.onTimeUpdate(() => {
  currentTime.value = innerAudioContext.currentTime
  duration.value = innerAudioContext.duration
  currentProgress.value = (innerAudioContext.currentTime / innerAudioContext.duration) * 100
})

/** 处理播放和暂停 */
const togglePlay = () => {
  if (isPlaying.value) {
    innerAudioContext.pause()
  } else {
    innerAudioContext.play()
  }
  isPlaying.value = !isPlaying.value
}

/** 处理拖动进度条 */
const onSliderChange = (e: any) => {
  const seekPosition = (e.detail.value / 100) * duration.value
  innerAudioContext.seek(seekPosition)
}

/** 处理前进或后退30秒 */
const handleForwardOrRewind = (type: 'forward' | 'rewind') => {
  const seekPosition = innerAudioContext.currentTime + (type === 'forward' ? 30 : -30)
  innerAudioContext.seek(seekPosition)
}

/** 错误监听 */
innerAudioContext.onError(res => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
</script>

<style></style>
