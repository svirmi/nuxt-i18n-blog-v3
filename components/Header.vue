<template>
<header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
  
<div class="mx-auto flex justify-between items-center">
   <div class="right flex justify-start items-center">
        <Logo class="w-8 h-8 mr-3" />
        <h1 class="text-lg font-bold text-gray-700">{{ title }}</h1>
      </div>
    <div class="" v-if="!isContentPage">
        <ul class="flex lang-switch justify-around">          
          <li>
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-600"
              :to="switchLocalePath('ru')"
              >RU</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-600"
              :to="switchLocalePath('en')"
              >EN</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="text-md ml-3 font-semibold text-gray-600"
              :to="switchLocalePath('es')"
              >ES</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>

</header>
</template>

<script>
const data = () => ({
  title: 'Nuxt-i18n Blog',
})

const computed = {
  isContentPage() {
    return this.$route.name.includes('slug')
  },
}

export default {
  name: 'Header',
  data,
  computed,
}
</script>

<style>
  a.nuxt-link-exact-active {
    color: brown;
  }
</style>