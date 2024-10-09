<template>
  <view>
    <view :style="{ height: statusBarHeight + titleBarHeight + 'px' }"></view>
    <view
      v-if="statusBarHeight + titleBarHeight > 0"
      class="fixed left-0 top-0 w-full bg-white z-100"
    >
      <view :style="{ height: statusBarHeight + 'px' }"></view>
      <view :style="{ height: titleBarHeight + 'px' }" class="flex items-center">
        <view
          v-if="props.type === 'goBack'"
          class="i-carbon:chevron-left text-36rpx"
          @click="goBack"
        ></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  type?: 'none' | 'goBack' | 'search' // 左侧显示返回、搜索功能、none 不展示
}

const props = withDefaults(defineProps<Props>(), {
  type: 'none'
})

const { statusBarHeight = 0 } = uni.getSystemInfoSync() // 状态栏高度
let titleBarHeight = 0 // 小程序胶囊高度
// #ifndef H5
const { height, top } = uni.getMenuButtonBoundingClientRect()
titleBarHeight = height + (top - statusBarHeight) * 2
// #endif

const goBack = () => {
  uni.navigateBack()
}
</script>
<style></style>
