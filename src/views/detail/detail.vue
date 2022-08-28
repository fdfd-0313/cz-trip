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
      <DeatailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <DetailInfos :top-infos="mainPart.topModule" />
      <DetailFacility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <LandLord :landlord="mainPart.dynamicModule.landlordModule"></LandLord>
      <Comment :comment="mainPart.dynamicModule.commentModule"></Comment>
      <Notice :order-rules="mainPart.dynamicModule.rulesModule.orderRules"></Notice>
      <Map :position="mainPart.dynamicModule.positionModule"></Map>
      <Intro :price-intro="mainPart.introductionModule"></Intro>
    </div>
    <div class="footer">
      <div class="ensure">
        <img src="@/assets/img/detail/icon_ensure.png" />
        <span class="text_01">安心订，放心住</span>
      </div>
      <div class="text">凤城旅游，欢迎您</div>

    </div>

  </div>
</template>

<script setup>
import DeatailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import LandLord from "./cpns/detail_04-landlord.vue";
import Comment from "./cpns/detail_05-comment.vue";
import Notice from "./cpns/detail_06-notice.vue";
import Map from "./cpns/detail_07-map.vue";
import Intro from "./cpns/detail_08-intro.vue"

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
.footer {
  padding: 30px 0;
  text-align: center;

  .ensure {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
      height: 36px;
    }
    .text_01 {
      font-size: 16px;
      font-weight: 500;
      color: #38b0de;
    }
  }
  .text {
    padding: 12px 0 2px;
    font-size: 12px;
    color: #999;
  }
}
</style>