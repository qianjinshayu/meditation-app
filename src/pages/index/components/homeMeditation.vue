<template>
  <view class="h-full overflow-auto flex">
    <view class="w-150rpx bg-gray-100 text-center">
      <view
        v-for="(item, index) in categoryList"
        :key="index"
        class="h-100rpx flex justify-center items-center"
        @click="changeCategory(item.id)"
      >
        <view :class="activeName === item.id ? 'text-32rpx font-bold' : 'text-24rpx text-gray-400'">
          {{ item.title }}
          <view v-if="activeName === item.id" class="h-8rpx bg-blue-300 mt--6rpx rounded"></view>
        </view>
      </view>
    </view>
    <view class="grow overflow-auto px-30rpx">
      <view class="relative">
        <view class="flex text-26rpx text-gray-400 h-80rpx items-center">
          <view class="flex-1 flex justify-center items-center">
            <view
              @click="showSortDropdown = !showSortDropdown"
              :class="{ 'text-blue-500': sortType !== 'sort' }"
            >
              {{ sortType === 'sort' ? '排序' : '上新' }}
            </view>
            <view
              class="text-20rpx"
              :class="showSortDropdown ? 'i-carbon:caret-up' : 'i-carbon:caret-down'"
            ></view>
          </view>
          <view class="flex-1 flex justify-center items-center">
            <view>难度</view>
            <view class="i-carbon:caret-up text-20rpx"></view>
          </view>
        </view>
        <view v-if="showSortDropdown" class="absolute w-full bg-white py40rpx text-28rpx">
          <view
            v-for="(item, index) in sortOptions"
            :key="item.value"
            class="text-center"
            :class="{
              'text-blue-500': sortType === item.value,
              ' mt20rpx': index > 0
            }"
            @click="changeSortType(item.value)"
          >
            {{ item.label }}
          </view>
        </view>
      </view>
      <course-item
        v-for="(item, index) in exerciseList"
        :key="index"
        :course-info="item"
      ></course-item>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import courseItem from './courseItem.vue'

const categoryList = ref([
  {
    title: '全部',
    id: '1'
  },
  {
    title: '基础',
    id: '2'
  },
  {
    title: '睡眠',
    id: '3'
  },
  {
    title: '放松',
    id: '4'
  }
])
let activeName = ref('1')

const changeCategory = (val: string) => {
  activeName.value = val
}

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
  },
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
  },
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

type SortType = 'sort' | 'latest'
interface SortOption {
  label: string
  value: SortType
}
// 显示排序下拉框
let showSortDropdown = ref<boolean>(false)
// 排序类型
let sortType = ref<SortType>('sort')
// 排序下拉框选项
const sortOptions: SortOption[] = [
  { label: '综合排序', value: 'sort' },
  { label: '上新优先', value: 'latest' }
]
// 改变排序类型
const changeSortType = (val: SortType) => {
  sortType.value = val
  showSortDropdown.value = false
}
</script>
<style></style>
