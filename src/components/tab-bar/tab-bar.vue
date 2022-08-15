<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentIndex = ref(0)

</script>
 
<style lang="less" scoped></style>