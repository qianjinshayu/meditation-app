<template>
  <view class="flex items-center py40rpx bg-white">
    <view
      v-for="(item, index) in props.tabList"
      :key="index"
      class="leading-none"
      :class="index > 0 ? 'ml-60rpx' : ''"
      @click="handleTabsChange(item.name)"
    >
      <view :class="activeName === item.name ? ['font-bold', activeStyle] : noActiveStyle">
        {{ item.label }}
      </view>
      <view v-if="activeName === item.name" class="h-8rpx bg-blue-300 mt--6rpx rounded"></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Tab {
  label: string
  name: string
}
interface Props {
  tabList: Tab[] // 标签列表数据
  size?: 'large' | 'small'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large'
})

const emit = defineEmits<{
  changeTab: [id: string] // 标签改变事件
}>()

const activeName = defineModel() // 激活的标签

const handleTabsChange = (val: string) => {
  activeName.value = val
  emit('changeTab', val)
}

const activeStyle = computed(() => {
  return props.size === 'large' ? 'text-56rpx' : 'text-40rpx'
})

const noActiveStyle = computed(() => {
  return props.size === 'large' ? 'text-30rpx' : 'text-26rpx'
})
</script>
<style></style>
