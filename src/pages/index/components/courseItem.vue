<template>
  <view class="flex py-20rpx">
    <img
      src="https://imgco.xinli001.com/ceping/resources/images/trinyMCE/f2fed86414164946bc3ee4be0da2e9a0.png@80"
      class="w-180rpx h-180rpx rounded-15rpx"
    />
    <view class="grow flex flex-col justify-between py-5rpx ml-30rpx">
      <view class="text-32rpx font-bold">{{ courseInfo.name }}</view>
      <view class="text-26rpx text-gray-400 line-clamp-1">{{ courseInfo.intro }}</view>
      <view class="flex text-24rpx text-gray-400 justify-between">
        <view class="flex items-center">
          <view
            class="border-2rpx border-gray-300 border-solid py-4rpx px-20rpx rounded-12rpx leading-none"
          >
            入门
          </view>
          <view class="ml-20rpx">
            <view class="i-carbon:time"></view>
            12分钟
          </view>
        </view>
        <view v-if="showButton" class="button--primary">vip免费</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // 课程信息 ===> 必传
  courseInfo: {
    cover: string
    name: string
    intro: string
    level: number
    duration: number
  }
  showButton: boolean
}
const props = defineProps<Props>()

const courseInfo = computed(() => {
  return props.courseInfo
})
</script>

<style></style>
