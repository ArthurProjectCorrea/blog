<template>
    <nav class="styleMain">
        <div class="border border-red-500">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="75" height="" /> 
        </div>
        <div>
            <div>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.styleMain {
    @apply flex justify-between items-center border-gray-200  bg-gray-50 border-b-2 p-2
}
</style>
