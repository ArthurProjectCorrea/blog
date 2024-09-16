<template>
    <nav class="styleNavBar">
        <div class="styleLogo">
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="" />  -->
            <h1 class="styleLogo">Blog</h1>
            <h2 class="styleLogo">do Santa</h2>
        </div>
        <div class="styleNavigation">
            <RouterLink to="/" active-class="active">Início</RouterLink>
            <RouterLink to="/categories" active-class="active">Categorias</RouterLink>
            <RouterLink to="/on" active-class="active">Sobre</RouterLink>
            <RouterLink to="/contact" active-class="active">Contato</RouterLink>
        </div>
        <div class="styleButtons">
            <button class="clearButtonStyle buttonShape"><font-awesome-icon
                    :icon="['fas', 'magnifying-glass']" /></button>
            <button class="clearButtonStyle buttonShape">Entrar</button>
            <button class="darkButtonStyle buttonShape">Registrar</button>
        </div>
    </nav>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.styleNavBar {
    @apply flex justify-between items-center px-10 border-b h-16
}

.styleLogo {
    @apply flex justify-center items-center gap-2 select-none font-suse font-bold text-xl py-2
}

h1.styleLogo {
    @apply text-emerald-600
}

h2.styleLogo {
    @apply text-black
}

.styleNavigation {
    @apply flex justify-between items-center gap-8 text-black text-lg font-semibold h-full capitalize
}

.active {
    @apply border-b-4 border-emerald-600 h-full flex justify-center items-center
}

.styleButtons {
    @apply flex justify-center items-center gap-2
}
</style>
