<template>
  <view>
    <custom-navigation></custom-navigation>
    <view
      class="fixed left-0 top-0 w-full flex items-center h-60px pl-60rpx"
      :style="{ top: topHeight + 'px' }"
    >
      <tabs v-model="activeName" :tab-list="tabList"></tabs>
    </view>
    <view class="absolute w-full" :style="{ top: topHeight + 60 + 'px', bottom: 0 }">
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
import customNavigation from '@/components/customNavigation/index.vue'
import { getTopHeight } from '@/utils/index'
import tabs from '@/components/tabs/index.vue'

export type TabName = 'recommend' | 'meditation' | 'sound'
interface Tab {
  label: string
  name: TabName
}

const tabList = ref<Tab[]>([
  { label: '推荐', name: 'recommend' },
  { label: '冥想', name: 'meditation' },
  { label: '声音', name: 'sound' }
])

// 激活tab的name
const activeName = ref<TabName>('recommend')
const handleTabsChange = (name: TabName) => {
  activeName.value = name
}

const topHeight = getTopHeight()
</script>

<style></style>
