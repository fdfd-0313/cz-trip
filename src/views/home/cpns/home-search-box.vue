<template>
  <div class="search-box">
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
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from "pinia";

const router = useRouter()

const cityClick = () => {
  router.push("/city")
}

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

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
</style>