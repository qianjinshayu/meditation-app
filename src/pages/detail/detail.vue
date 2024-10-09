<template>
  <view class="px-30rpx">
    <custom-navigation type="goBack"></custom-navigation>
    <view class="rounded-b-15rpx shadow-md">
      <view
        class="flex shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-15rpx px-20rpx py-30rpx mt-30rpx"
      >
        <img
          src="https://imgco.xinli001.com/ceping/resources/images/trinyMCE/f2fed86414164946bc3ee4be0da2e9a0.png@80"
          class="w-150rpx h-150rpx rounded-15rpx"
        />
        <view class="ml-20rpx flex flex-col justify-between">
          <view class="text-32rpx">{{ courseInfo.name }}</view>
          <view class="text-24rpx">{{ courseInfo.intro }}</view>
          <view class="text-20rpx">
            <text>{{ courseInfo.level === 1 ? '零基础' : '入门' }}</text>
            <text>10分钟</text>
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
    <view class="sticky z-100 m-t20rpx" :style="{ top: topHeight + 'px' }">
      <tabs v-model="activeName" :tab-list="tabList" size="small" @change-tab="changeTab"></tabs>
    </view>
    <view id="analysis" class="text-26rpx font-bold">共5个步骤</view>
    <view class="overflow-auto">
      <view class="flex py20rpx">
        <view
          v-for="(item, index) in 15"
          :key="index"
          class="rounded-10rpx bg-white w-150rpx h-150rpx shadow-md flex flex-col justify-end items-center shrink-0 relative"
          :class="index > 0 ? 'ml-20rpx' : ''"
        >
          <img
            src="https://avatar-static.segmentfault.com/807/189/80718919-5cc81ce81affe_huge256"
            class="w-60rpx h-60rpx rounded-full"
          />
          <view class="text-20rpx m-b20rpx rounded-tl-20rpx">调整姿势</view>
          <view
            class="absolute top-0 left-0 h-30rpx leading-30rpx w-60rpx bg-blue rounded text-16rpx text-white text-center"
          >
            00'58''
          </view>
        </view>
      </view>
    </view>
    <view id="brief" class="text-26rpx font-bold">练习简介</view>
    <rich-text :nodes="htmlStr"></rich-text>
    <view id="perception" class="text-26rpx font-bold">练习感悟</view>
    <view class="flex fixed bottom-0 left-0 right-0 h-100rpx items-center bg-white px-20rpx">
      <view class="w-100rpx">首页</view>
      <view class="button--primary grow text-center" @click="linkToPlay">开始练习</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import customNavigation from '@/components/customNavigation/index.vue'
import tabs from '@/components/tabs/index.vue'
import { getTopHeight } from '@/utils/index'

const courseInfo = {
  name: '冥想初体验',
  cover: '',
  intro: '适合冥想小白的第一次练习',
  level: 1,
  duration: 10,
  userAvatar: ''
}

const tabList = ref([
  { label: '练习分解', name: 'analysis' },
  { label: '练习简介', name: 'brief' },
  { label: '练习感悟', name: 'perception' }
])

const activeName = ref<string>('brief')

const htmlStr = `
<h1>这是一个标题</h1>
  <p>这是一个段落，包含 <strong>加粗</strong> 和 <em>斜体</em> 的文本。</p>
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png" alt="图片示例" />
  <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
      <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
      <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
    <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
`
const topHeight = getTopHeight()

onMounted(() => {
  // changeTab('brief')
})

const changeTab = (val: string) => {
  console.log('val', val)
  scrollTabContent(val)
}

const scrollTabContent = (id: string) => {
  const instance = getCurrentInstance()
  const query = uni.createSelectorQuery().in(instance?.proxy)
  query
    .select(`#${id}`)
    .boundingClientRect((data: any) => {
      // console.log('得到布局位置信息' + JSON.stringify(data))
      console.log('节点离页面顶部的距离为' + data.top)
      // 切换tab时定位到tab对应内容
      if (data.top > 60) {
        uni.pageScrollTo({
          scrollTop: data.top - 60, // 减去 tabs 高度
          duration: 300
        })
      }
    })
    .exec()
}
const linkToPlay = () => {
  uni.navigateTo({
    url: '/pages/detail/play'
  })
}
</script>

<style></style>
