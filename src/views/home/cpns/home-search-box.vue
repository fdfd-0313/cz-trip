<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div
        class="city"
        @click="cityClick"
      >{{currentCity.cityName}}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <!-- 日期范围 -->
    <div
      class="section date-range"
      @click="showCalendar = true"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{startDateStr}}</span>
        </div>
      </div>
      <div class="stay">共{{stayCount}}晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{endDateStr}}</span>
        </div>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#38B0DE"
      :round="false"
      :show-confirm="true"
      @confirm="onConfirm"
    />
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line ">关键字/位置/民宿</div>
    <!--热门城市展示  -->
    <div class="section  hot-suggests">
      <template
        v-for="(item,index) in hotSuggests"
        :key="index"
      >
        <div
          class="item"
          :style="{color:item.tagText.color,background: item.tagText.background.color}"
        >{{item.tagText.text}}</div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div
        class="btn"
        @click="searchBtnClick"
      >开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from "pinia";

import { formatMonthDay, getDiffDays } from "@/utils/format-time";
import { useHomeStore } from "@/stores/modules/home"
import { useMainStore } from "@/stores/modules/main";

const router = useRouter()

// 城市位置
const cityClick = () => {
  router.push("/city")
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期范围
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

const showCalendar = ref(false)
const onConfirm = (value) => {
  // 1.设置日期
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  // 2.隐藏日历
  showCalendar.value = false
}
// 热门推荐
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// 开始搜索
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>
 
<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    font-size: 16px;
  }

  .position {
    display: flex;
    width: 90px;
    align-items: center;

    .text {
      font-size: 16px;
      position: relative;
      top: 1px;
    }
    img {
      width: 20px;
      height: 20spx;
      margin-left: 5px;
    }
  }
}
.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    align-items: center;
    height: 44px;
  }
  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
}
.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}
.hot-suggests {
  margin: 10px 0;
  height: auto;
  .item {
    padding: 4px, 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 14px;
    // line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 400px;
    height: 38px;
    max-height: 50px;
    font-size: 18px;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>