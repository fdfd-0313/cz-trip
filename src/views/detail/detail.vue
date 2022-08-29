<template>
  <div
    class="detail"
    ref="detailRef"
  >
    <van-nav-bar
      class="navBar"
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <TabControl
      class="tabs"
      v-if="showTabControl"
      :titles=names
      @tabItemClick="tabClick"
      ref="tabControlRef"
    />
    <div
      class="main"
      v-if="mainPart"
      v-memo="[mainPart]"
    >
      <DeatailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <DetailInfos
        name="描述"
        :ref="getSectionRef"
        :top-infos="mainPart.topModule"
      />
      <DetailFacility
        name="设施"
        :ref="getSectionRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <LandLord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      ></LandLord>
      <Comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      ></Comment>
      <Notice
        name="须知"
        :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      ></Notice>
      <Map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      ></Map>
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
import TabControl from "@/components/tab-control/tab-control.vue";
import DeatailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import LandLord from "./cpns/detail_04-landlord.vue";
import Comment from "./cpns/detail_05-comment.vue";
import Notice from "./cpns/detail_06-notice.vue";
import Map from "./cpns/detail_07-map.vue";
import Intro from "./cpns/detail_08-intro.vue"

import { computed, ref, watch } from "vue";
import { useRoute, useRouter, } from "vue-router";

import { getDetailInfos } from "@/service";
import useScroll from "@/hooks/useScroll";

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


// 创建标签对象
const sectionEls = ref({})

const getSectionRef = (value) => {
  if (!value) return
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}
const names = computed(() => {
  return Object.keys(sectionEls.value)
})

// tabCountrol 相关操作
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

let isClick = false
let currentDistance = -1
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let distance = el.offsetTop
  if (index !== 0) {
    distance = distance - 44
  }

  isClick = true
  currentDistance = distance
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}
// 页面滚动，滚动时匹配对应的tabControl的 index
const tabControlRef = ref()
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance) {
    isClick = false
  }
  console.log(isClick);
  if (isClick) return

  // 1. 获取所有区域的offsetTops
  const els = Object.values(sectionEls.value)
  const value = els.map(el => el.offsetTop)

  // 2. 根据newValue 去匹配想要的索引
  let index = value.length - 1
  for (let i = 0; i < value.length; i++) {
    if (value[i] > newValue + 44) {
      index = i - 1
      break
    }
  }

  // console.log(index);
  // console.log(isClick);
  tabControlRef.value?.setCurrentIndex(index)
})

</script>
 
<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;
}
.navBar {
  --van-nav-bar-title-font-size: 18px;
  --van-nav-bar-arrow-size: 20px;
  --van-font-size-md: 18px;
}
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
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