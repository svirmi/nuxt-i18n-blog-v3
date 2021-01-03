<template>
        <nav class="w-full py-4 bg-blue-800 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
            <li>
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-500"
              :to="switchLocalePath('ru')"
              >RU</nuxt-link
            >
            </li>
            <li>
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-500"
              :to="switchLocalePath('en')"
              >EN</nuxt-link
            >
            </li>
            <li>
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-500"
              :to="switchLocalePath('es')"
              >ES</nuxt-link
            >
          </li>
          </ul>
        </div>
    </nav>
</template>
<style scoped>
a.nuxt-link-exact-active {
    color: whitesmoke;
    text-decoration: underline;
}
</style>