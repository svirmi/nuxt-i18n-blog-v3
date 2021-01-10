<template>
        <div class="flex">

            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-500"
              :to="switchLocalePath('ru')"
              >RU</nuxt-link>

            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-500"
              :to="switchLocalePath('en')"
              >EN</nuxt-link>
  
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-500"
              :to="switchLocalePath('es')"
              >ES</nuxt-link>
        </div>    

</template>
<style scoped>
a.nuxt-link-exact-active {
    color: whitesmoke;
    text-decoration: underline;
}
</style>