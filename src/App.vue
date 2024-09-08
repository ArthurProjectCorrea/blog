<template>
  <div>
    <NavBar/>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/layouts/NavBar.vue";
</script>
<style scoped></style>
