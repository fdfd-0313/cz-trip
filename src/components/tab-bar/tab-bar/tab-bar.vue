<template>
  <div class="tab-bar">
    <van-tabbar
      v-model="currentIndex"
      active-color="#38B0DE"
    >
      <template
        v-for="(item, index) in tabBarData"
        :key="index"
      >
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img
              v-if="currentIndex !==index"
              :src="getAssetURL(item.image)"
            >
            <img
              v-else
              :src="getAssetURL(item.imageActive)"
            >
          </template>
        </van-tabbar-item>

      </template>

    </van-tabbar>
  </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabBar.js";
import { getAssetURL } from "@/utils/load-assets.js";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";


// 监听路由改变时候，找到对应的索引，设置给currentIndex
const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = tabBarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})


</script>
 
<style lang="less" scoped>
.tab-bar {
  // 找到我们需要修改的类名字，对类中的Css进行重写
  // :deep(.class)找到子组件的类，让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }
  :deep(.van-tabbar-item__text) {
    font-size: 14px;
  }
  img {
    height: 28px;
  }
}
</style>