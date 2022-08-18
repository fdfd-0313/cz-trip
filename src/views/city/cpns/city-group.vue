<template>
  <div class="city-group">
    <van-index-bar :index-list="groupindex">
      <!-- 热门城市展示 -->
      <van-index-anchor index="热门" />
      <div class="list">
        <template
          v-for="(city,index) in groupData.hotCities"
          :key="index"
        >
          <div
            class="city"
            @click="cityClick(city)"
          >{{city.cityName}}</div>

        </template>
      </div>
      <!-- 所有城市展示 -->
      <template
        v-for="(group,index) in groupData.cities"
        :key="index"
      >
        <van-index-anchor :index="group.group" />
        <template
          v-for="(city,indey) in group.cities"
          :key="indey"
        >
          <van-cell
            :title="city.cityName"
            @click="cityClick(city)"
          />
        </template>
      </template>
    </van-index-bar>

  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"
import { useRouter } from "vue-router"
import { useCityStore } from "@/stores/modules/city";

// 定义 props
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 动态索引
const groupindex = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  list.unshift("#")
  return list
})

// 监听城市点击
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) => {
  // 将获取到的城市数据存入Pinia中
  cityStore.currentCity = city
  // 返回上一级
  router.back()
}

</script>
 
<style lang="less" scoped>
.city-group {
  --van-index-anchor-sticky-text-color: var(--primary-color);
  --van-index-bar-index-active-color: var(--primary-color);
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #ecf5ff;
      margin: 10px 0;
    }
  }
}
</style>