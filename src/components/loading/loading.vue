<template>
  <div
    class="loading"
    v-if="mainStore.isShowLoading"
  >
    <div
      class="loding-bg"
      @click="loadingClick"
    >
      <van-loading
        class="loading-moule"
        type="spinner"
        color="#38B0DE"
        size="32px"
        text-size="16px"
        vertical
      >加载中...</van-loading>
    </div>

  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/modules/main";
const mainStore = useMainStore()

const loadingClick = () => {
  mainStore.isShowLoading = false
}
</script>
 
<style lang="less" scoped>
.loading {
  .loding-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .loading-moule {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    z-index: 99;
  }
}
</style>