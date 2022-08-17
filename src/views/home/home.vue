<template>
  <div class="home">
    <navBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
  </div>
</template>

<script setup>
import navBar from "./cpns/home-nav-bar.vue";

</script>
 
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
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
}
</style>