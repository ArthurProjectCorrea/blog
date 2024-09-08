<template>
    <nav class="styleMain">
        <div class="styleLogo">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="" /> 
            <h1 class="styleLogoH1">Blog</h1>
            <h2 class="styleLogoH2">do Santa</h2>
        </div>
        <div class="styleNavigation">
            <RouterLink to="/" active-class="active">Início</RouterLink>
            <RouterLink to="/categories" active-class="active">Categorias</RouterLink>
            <RouterLink to="/on" active-class="active">Sobre</RouterLink>
            <RouterLink to="/contact" active-class="active">Contato</RouterLink>
        </div>
        <div class="styleButton">
            <button class="styleButtonSearch"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
            <button class="styleButtonSignIn">Entrar</button>
            <button class="styleButtonSignUp">Registrar</button>
        </div>
    </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.styleMain {
    @apply flex justify-between items-center bg-gray-50 py-2 px-10
}

.styleLogo {
    @apply select-none font-suse font-bold text-xl flex gap-2 justify-center items-center
}

.styleLogoH1 {
    @apply text-green-600
}

.styleLogoH2 {
    @apply text-gray-950
}

.styleMenu {
    @apply flex justify-center items-center gap-6
}

.styleNavigation {
    @apply flex gap-4 text-gray-900 font-bold
}

.active {
    @apply border-b-2 border-gray-900
}
.styleButton {
    @apply flex gap-2 text-gray-900
}

.styleButtonSearch {
    @apply border font-bold rounded-md border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white py-2 px-4
}

.styleButtonSignIn {
    @apply border font-bold rounded-md border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white py-2 px-4
}

.styleButtonSignUp {
    @apply border font-bold rounded-md border-gray-600 bg-gray-600 text-white hover:bg-white hover:text-gray-600 py-2 px-4
}
</style>
