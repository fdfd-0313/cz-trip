<template>
  <div class="detail">
    <van-nav-bar
      class="navBar"
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <div
      class="main"
      v-if="mainPart"
    >
      <DeatailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"></DeatailSwipe>
      <DetailInfos></DetailInfos>
    </div>
  </div>
</template>

<script setup>
import DeatailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue";;

import { computed, ref } from "@vue/runtime-core";
import { useRoute, useRouter, } from "vue-router";

import { getDetailInfos } from "@/service";

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  // console.log(res);
  detailInfos.value = res.data
})

// 返回上一层
const onClickLeft = () => {
  router.back()
}
</script>
 
<style lang="less" scoped>
.navBar {
  --van-nav-bar-title-font-size: 18px;
  --van-nav-bar-arrow-size: 20px;
  --van-font-size-md: 18px;
}
</style>