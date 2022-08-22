<template>
  <div class="home">
    <navBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <homeSearch />
    <Categories />
    <div
      class="search-bar"
      v-if="isShowSearchBar"
    >
      <SearchBar />
    </div>
    <Content />
  </div>
</template>

<script setup>
import navBar from "./cpns/home-nav-bar.vue";
import homeSearch from "./cpns/home-search-box.vue"
import Categories from "./cpns/home-categories.vue"
import Content from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue"

import { useHomeStore } from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll.js";
import { computed, watch } from "vue";

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// 底部滚动
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框的展示与否
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>
 
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background: #fff;
  }
}
</style>