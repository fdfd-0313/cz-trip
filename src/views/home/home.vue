<template>
  <div class="home">
    <navBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <homeSearch />
  </div>
</template>

<script setup>
import navBar from "./cpns/home-nav-bar.vue";
import homeSearch from "./cpns/home-search-box.vue"

</script>
 
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>