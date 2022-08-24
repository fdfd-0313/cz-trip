<template>
  <div>
    <router-view />
    <tabBar v-if="!route.meta.hidderTabar" />
    <LoadingBar />
  </div>
</template>

<script setup>
import tabBar from "./components/tab-bar/tab-bar/tab-bar.vue";
import LoadingBar from "./components/loading/loading.vue";

import { useRoute } from "vue-router";

const route = useRoute()
</script>
 
<style scoped>
</style>