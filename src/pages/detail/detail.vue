<template>
  <view class="bg-gray-50">
    <custom-navigation type="goBack"></custom-navigation>
    <view class="rounded-b-15rpx mx-30rpx my-30rpx bg-white">
      <view
        class="flex shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-15rpx px-20rpx py-30rpx"
      >
        <img :src="courseInfo?.cover" class="w-150rpx h-150rpx rounded-15rpx" />
        <view class="ml-20rpx flex flex-col justify-between">
          <view class="text-32rpx">{{ courseInfo?.name }}</view>
          <view class="text-24rpx">{{ courseInfo?.describe }}</view>
          <view class="text-20rpx">
            <text>{{ getLevelText(courseInfo?.level) }}</text>
            <text class="ml-20rpx">{{ formatSecondsToMinutes(courseInfo?.duration) }}</text>
          </view>
        </view>
      </view>
      <view class="flex justify-between py20rpx px20rpx">
        <view>
          <view class="text-slate-400 text-20rpx">已有练习</view>
          <view class="text-24rpx">
            <text>6502772</text>
            <text class="text-slate-400">次</text>
          </view>
        </view>
        <view>
          <img
            v-for="(item, index) in 5"
            :key="index"
            src="https://avatar-static.segmentfault.com/807/189/80718919-5cc81ce81affe_huge256"
            alt=""
            class="rounded-full w-40rpx h-40rpx ml--6rpx"
          />
        </view>
      </view>
    </view>
    <view class="bg-white mx-30rpx px-20rpx py-20rpx rounded-15rpx mb-120rpx">
      <view class="text-36rpx font-bold">练习简介</view>
      <rich-text :nodes="courseInfo?.detailContent"></rich-text>
    </view>
    <view class="fixed bottom-0 left-0 right-0 h-100rpx bg-white">
      <view class="bg-gray-100 h-1px w-full"></view>
      <view class="flex items-center px-20rpx h-full">
        <view class="w-100rpx flex flex-col items-center justify-items-center" @click="goBack">
          <img src="../../static/tabbar/selectedStar.png" class="w-48rpx h-48rpx" />
          <view class="text-24rpx text-color--primary">首页</view>
        </view>
        <view class="button--primary grow text-center ml-30rpx" @click="linkToPlay">开始练习</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import customNavigation from '@/components/customNavigation/index.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getCourseDetail } from '@/api/modules/course'
import type { Course } from '@/api/interface'
import { getLevelText } from '@/enums/levelEnum'
import { formatSecondsToMinutes } from '@/utils'

/** 课程信息 */
let courseInfo = ref<Course.ResCourse | null>(null)
/** 课程id */
let courseId = ref(0)

/** 获取冥想课程详情数据 */
const initData = async () => {
  try {
    const res = await getCourseDetail(courseId.value)
    courseInfo.value = res.data
  } catch (err) {
    console.log(err)
  }
}

onLoad((options: any) => {
  courseId.value = options.id
  courseId.value && initData()
})

/** 跳转到播放页 */
const linkToPlay = () => {
  uni.navigateTo({
    url: '/pages/detail/play'
  })
}

/** 返回首页 */
const goBack = () => {
  uni.navigateBack()
}
</script>

<style></style>
