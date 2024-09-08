<template>
    <nav class="styleMain">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped>
.styleMain {
    @apply border border-red-500
}
</style>
