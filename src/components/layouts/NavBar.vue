<template>
    <nav class="styleMain">
        <div class="styleLogo">
            <h1 class="styleLogoH1">Blog</h1>
            <h2 class="styleLogoH2">do Santa</h2>
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="75" height="" />  -->
        </div>
        <div class="styleMenu">
            <div class="styleMenuNavigation">
                <RouterLink to="/">Início</RouterLink>
                <RouterLink to="/about">Categorias</RouterLink>
                <RouterLink to="/about">Sobre</RouterLink>
                <RouterLink to="/about">Contato</RouterLink>
            </div>
            <div class="styleLogoButton">
                <button>Pesquisar</button>
                <button class="styleButtonSignIn">Entrar</button>
                <button class="styleButtonSignUp">Registrar</button>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.styleMain {
    @apply flex justify-between items-center  bg-gray-50  py-2 px-10
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
.styleMenu{
    @apply flex gap-6
}
.styleMenuNavigation{
    @apply flex gap-2 text-gray-900
}
.styleLogoButton{
    @apply flex gap-2 text-gray-900
}
.styleButtonSignIn{
    @apply border-2 font-bold rounded-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-green-50 py-2 px-4
}
.styleButtonSignUp{
    @apply border-2 font-bold rounded-sm border-green-600 bg-green-600 text-green-50 hover:bg-green-50 hover:text-green-600 py-2 px-4
}
</style>
