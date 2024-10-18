<template>
  <view class="h-full overflow-auto px-30rpx">
    <view class="flex justify-between m-b30rpx">
      <view class="text-36rpx font-bold">推荐练习</view>
      <view class="button--default" @click="changeTab('meditation')">全部冥想</view>
    </view>
    <scroll-view scroll-x>
      <view class="flex bg-[length:100%_100%] py-20rpx" style="background-image: url('')">
        <view
          v-for="(item, index) in recommendList"
          :key="index"
          class="flex w-600rpx shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 mr-20rpx text-white h-180rpx rounded-15rpx"
          :id="'item' + index"
          @click="linkToDetail(item.id)"
        >
          <img :src="item.cover" class="w-150rpx h-180rpx rounded-15rpx mt--20rpx ml-20rpx" />
          <view class="ml-20rpx flex flex-col justify-between py-20rpx">
            <view class="text-32rpx">{{ item.name }}</view>
            <view class="text-24rpx">{{ item.describe }}</view>
            <view class="text-20rpx">
              <text>{{ getLevelText(item.level) }}</text>
              <text class="m-l20rpx">{{ formatSecondsToMinutes(item.duration) }}</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="flex justify-between py-30rpx">
      <view class="text-36rpx font-bold">精选</view>
      <view class="button--default" @click="changeTab('meditation')">更多</view>
    </view>
    <course-item
      v-for="(item, index) in choiceList"
      :key="index"
      :course-info="item"
      :show-button="true"
      @click="linkToDetail(item.id)"
    ></course-item>
    <view v-if="isLoading" class="text-zinc-400 py20rpx text-center text-24rpx">加载中...</view>
    <view v-if="!hasMoreData" class="text-zinc-400 py20rpx text-center text-24rpx">
      没有更多数据了
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import courseItem from './courseItem.vue'
import type { TabName } from '../index.vue'
import { onShow, onReachBottom } from '@dcloudio/uni-app'
import { getCourseList } from '@/api/modules/course'
import type { Course } from '@/api/interface/index'
import { formatSecondsToMinutes } from '@/utils'
import { getLevelText } from '@/enums/levelEnum'

const emit = defineEmits(['changeTab'])

/** 加载中 */
let isLoading = ref(false)
/** 是否有更多数据可加载 */
let hasMoreData = ref(true)
/** 页码 */
let pageNum = ref(1)

/** 推荐练习列表 */
const recommendList = ref<Course.ResCourse[]>([])
/**
 * 获取推荐列表数据
 */
const getRecommendData = async () => {
  try {
    const res = await getCourseList({ isRecommend: 1 })
    const { data } = res.data
    recommendList.value = data
  } catch (err) {
    console.log(err)
  }
}

/** 精选列表 */
const choiceList = ref<Course.ResCourse[]>([])
/**
 * 获取精选列表数据
 */
const getChoiceData = async () => {
  if (isLoading.value) return
  isLoading.value = true

  try {
    const res = await getCourseList({ pageNum: pageNum.value, isChoice: 1 })
    const { data, total } = res.data
    choiceList.value = choiceList.value.concat(data)
    hasMoreData.value = choiceList.value.length < total
    pageNum.value++
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

/**
 * 跳转至课程详情页
 * @param id 课程id
 */
const linkToDetail = (id: number) => {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`
  })
}

/**
 * 切换Tab栏
 * @param val 选中的Tab栏name
 */
const changeTab = (val: TabName) => {
  emit('changeTab', val)
}

onShow(() => {
  getRecommendData()
  getChoiceData()
})

onReachBottom(() => {
  hasMoreData.value && getChoiceData()
})
</script>

<style></style>
