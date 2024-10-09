<template>
  <view class="h-full overflow-auto px-30rpx">
    <view class="flex justify-between m-b30rpx">
      <view class="text-36rpx font-bold">推荐练习</view>
      <view class="button--default" @click="changeTab('meditation')">全部冥想</view>
    </view>
    <scroll-view scroll-x>
      <view class="flex bg-[length:100%_100%] py-20rpx" style="background-image: url('')">
        <view
          v-for="(item, index) in exerciseList"
          :key="index"
          class="flex w-600rpx shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 mr-20rpx text-white h-180rpx rounded-15rpx"
          :id="'item' + index"
          @click="linkToDetail"
        >
          <img
            src="https://imgco.xinli001.com/ceping/resources/images/trinyMCE/f2fed86414164946bc3ee4be0da2e9a0.png@80"
            class="w-150rpx h-180rpx rounded-15rpx mt--20rpx ml-20rpx"
          />
          <view class="ml-20rpx flex flex-col justify-between py-20rpx">
            <view class="text-32rpx">{{ item.name }}</view>
            <view class="text-24rpx">{{ item.intro }}</view>
            <view class="text-20rpx">
              <text>{{ item.level === 1 ? '零基础' : '入门' }}</text>
              <text>10分钟</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="flex justify-between py-30rpx">
      <view class="text-36rpx font-bold">推荐声音</view>
      <view class="button--default" @click="changeTab('sound')">全部声音</view>
    </view>
    <view class="flex flex-wrap justify-around m-t10rpx">
      <view
        v-for="(item, index) in soundList"
        :key="index"
        class="w-1/5 px-10rpx flex flex-col items-center"
      >
        <img :src="item.cover" class="w-120rpx h-120rpx rounded-full" />
        <view class="text-24rpx py-20rpx">{{ item.name }}</view>
      </view>
    </view>
    <view class="flex justify-between py-30rpx">
      <view class="text-36rpx font-bold">精选</view>
      <view class="button--default" @click="changeTab('meditation')">更多</view>
    </view>
    <course-item
      v-for="(item, index) in exerciseList"
      :key="index"
      :course-info="item"
      :show-button="true"
      @click="linkToDetail"
    ></course-item>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import courseItem from './courseItem.vue'
import type { TabName } from '../index.vue'

const exerciseList = ref([
  {
    name: '冥想初体验',
    cover: '',
    intro: '适合冥想小白的第一次练习',
    level: 1,
    duration: 10,
    userAvatar: ''
  },
  {
    name: '身体扫描',
    cover: '',
    intro: '与身体联结',
    level: 2,
    duration: 16,
    userAvatar: ''
  },
  {
    name: '睡前放松(轻度)',
    cover: '',
    intro: '缓解身心紧张,更好入眠',
    level: 2,
    duration: 10,
    userAvatar: ''
  }
])

// 滚动高度
// let scrollTop = ref(0)
// const onScroll = (e: any) => {
//   scrollTop.value = e.detail.scrollTop
// }

const soundList = ref([
  {
    name: '海浪',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '1'
  },
  {
    name: '春雨',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '2'
  },
  {
    name: '远方',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '3'
  },
  {
    name: '静谧',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '4'
  },
  {
    name: '月光',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '5'
  },
  {
    name: '星云',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '6'
  },
  {
    name: '大提琴',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '7'
  },
  {
    name: '森林',
    cover:
      'https://bpic.588ku.com/back_origin_min_pic/19/10/22/f0ff175a8af6dc28a22eda73eb141083.jpg',
    id: '8'
  }
])

const emit = defineEmits(['changeTab'])
const changeTab = (val: TabName) => {
  emit('changeTab', val)
}

const linkToDetail = () => {
  uni.navigateTo({
    url: '/pages/detail/detail'
  })
}
</script>

<style></style>
