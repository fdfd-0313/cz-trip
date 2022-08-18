<template>
  <div class="city">
    <div class="top">
      <!-- 搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <!-- 标签切换 -->
      <van-tabs
        v-model:active="tabAction"
        color="#38B0DE"
        line-height="2"
      >
        <template
          v-for="(value,key,index) in allCities"
          :key="index"
        >
          <van-tab
            :title="value.title"
            :name="key"
          ></van-tab>
        </template>

      </van-tabs>
    </div>
    <div class="content">
      <template
        v-for="(value,key,index) in allCities"
        :key="index"
      >
        <cityGroup
          v-show="tabAction === key"
          :group-data="value"
        />
      </template>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router"
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import cityGroup from "./cpns/city-group.vue"

const router = useRouter()

const searchValue = ref("")
const tabAction = ref()

const cancelClick = () => {
  router.back()
}


// 从 Store 中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中相应标签的数据
const currentGoup = computed(() => allCities.value[tabAction.value])
</script>
 
<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>