<template>
  <view class="flex py-20rpx">
    <img :src="courseInfo.cover" class="w-180rpx h-180rpx rounded-15rpx" />
    <view class="grow flex flex-col justify-between py-5rpx ml-30rpx">
      <view class="text-32rpx font-bold">{{ courseInfo.name }}</view>
      <view class="text-26rpx text-gray-400 line-clamp-1">{{ courseInfo.describe }}</view>
      <view class="flex text-24rpx text-gray-400 justify-between">
        <view class="flex items-center">
          <view
            class="border-2rpx border-gray-300 border-solid py-4rpx px-20rpx rounded-12rpx leading-none"
          >
            {{ getLevelText(courseInfo.level) }}
          </view>
          <view v-if="courseInfo.duration > 0" class="ml-20rpx">
            <view class="i-carbon:time"></view>
            {{ formatSecondsToMinutes(courseInfo.duration) }}
          </view>
        </view>
        <view v-if="showButton" class="button--primary">免费练习</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getLevelText } from '@/enums/levelEnum'
import { formatSecondsToMinutes } from '@/utils'

interface Props {
  /** 冥想课程信息 */
  courseInfo: {
    cover: string
    name: string
    describe: string
    level: number
    duration: number
  }
  /** 显示价格按钮 */
  showButton?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  showButton: false
})

const courseInfo = computed(() => {
  return props.courseInfo
})
</script>

<style></style>
