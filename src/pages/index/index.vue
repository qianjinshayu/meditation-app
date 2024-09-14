<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="i-carbon:checkmark-filled text-orange-400"></view>
    <view class="w-10 h-10 bg-cyan-300"></view>
    <view class="w-100rpx h-50rpx bg-pink-300 mt-6rpx"></view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}
.text-area {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
