<template>
  <div class="styleMain">
    <NavBar />
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/layouts/NavBar.vue";
</script>
<style scoped>
.styleMain {
  @apply bg-white 
}
</style>
