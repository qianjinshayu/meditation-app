<template>
  <view>
    <custom-navigation></custom-navigation>
    <view
      class="fixed left-0 top-0 w-full flex items-center z-100 h-60px"
      :style="{ top: safeAreaTop + 'px' }"
    >
      <tabs v-model="activeName" :tab-list="tabList" class="w-full h-full"></tabs>
    </view>
    <view class="h-60px"></view>
    <home-recommend
      v-if="activeName === 'recommend'"
      @change-tab="handleTabsChange"
    ></home-recommend>
    <home-meditation v-else-if="activeName === 'meditation'"></home-meditation>
    <home-sound v-else-if="activeName === 'sound'"></home-sound>
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
import { onReachBottom } from '@dcloudio/uni-app'

export type TabName = 'recommend' | 'meditation' | 'sound'
interface Tab {
  label: string
  name: TabName
}

/** 标签列表 */
const tabList = ref<Tab[]>([
  { label: '推荐', name: 'recommend' },
  { label: '冥想', name: 'meditation' }
  // { label: '声音', name: 'sound' }
])

/** 激活tab的name */
const activeName = ref<TabName>('recommend')

/**
 * 切换tab页
 * @param name 选中的Tab栏name
 */
const handleTabsChange = (name: TabName) => {
  activeName.value = name
}

/** 顶部安全距离，小程序和H5兼容处理 */
const safeAreaTop = getTopHeight()

onReachBottom(() => {
  // console.log('触底111111')
})
</script>

<style></style>
