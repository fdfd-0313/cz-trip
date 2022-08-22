<template>
  <div></div>
  <router-view />
  <tabBar v-if="!route.meta.hidderTabar" />

</template>

<script setup>
import tabBar from "./components/tab-bar/tab-bar/tab-bar.vue";
import { useRoute } from "vue-router";

const route = useRoute()
</script>
 
<style scoped>
</style>