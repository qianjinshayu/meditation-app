<template>
  <view>
    <view class="fixed left-0 top-0 w-full">
      <view :style="{ height: statusBarHeight + 'px' }"></view>
      <view :style="{ height: titleBarHeight + 'px' }"></view>
      <view class="flex items-center h-60px">
        <view
          v-for="(item, index) in tabs"
          :key="index"
          class="ml-60rpx leading-none"
          @click="handleTabsChange(item.name)"
        >
          <view :class="activeName === item.name ? 'font-bold text-48rpx' : 'text-24rpx'">
            {{ item.label }}
          </view>
          <view v-if="activeName === item.name" class="h-8rpx bg-blue-300 mt--6rpx rounded"></view>
        </view>
      </view>
    </view>
    <view
      class="absolute w-full"
      :style="{ top: statusBarHeight + titleBarHeight + 60 + 'px', bottom: 0 }"
    >
      <home-recommend
        v-if="activeName === 'recommend'"
        @change-tab="handleTabsChange"
      ></home-recommend>
      <home-meditation v-else-if="activeName === 'meditation'"></home-meditation>
      <home-sound v-else-if="activeName === 'sound'"></home-sound>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import homeRecommend from './components/homeRecommend.vue'
import homeMeditation from './components/homeMeditation.vue'
import homeSound from './components/homeSound.vue'

type TabNameType = 'recommend' | 'meditation' | 'sound'
interface Tab {
  label: string
  name: TabNameType
}

const tabs = ref<Tab[]>([
  { label: '推荐', name: 'recommend' },
  { label: '冥想', name: 'meditation' },
  { label: '声音', name: 'sound' }
])

// 激活tab的name
const activeName = ref<TabNameType>('recommend')
const handleTabsChange = (name: TabNameType) => {
  activeName.value = name
}

// 状态栏高度
const { statusBarHeight = 0 } = uni.getSystemInfoSync()
// 小程序胶囊高度
let titleBarHeight = 0
// #ifndef H5
const { height, top } = uni.getMenuButtonBoundingClientRect()
titleBarHeight = height + (top - statusBarHeight) * 2
// #endif
</script>

<style></style>
