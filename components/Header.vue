<template>
<div>
  <!-- Top Bar Nav -->
    <nav class="w-full py-4 bg-blue-800 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
            <nav>
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
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
          </nav>
        </div>
    </nav>

   <!-- Text Header -->
    <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
            <a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                Minimal Blog
            </a>
            <p class="text-lg text-gray-600">
                  {{ $t('blog-description') }}
            </p>
        </div>
    </header>

    <!-- Topic Nav -->
    <nav class="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
        <div class="block sm:hidden">
            <a
                href="#"
                class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                @click="open = !open"
            >
                Topics <i :class="open ? 'fa-chevron-down': 'fa-chevron-up'" class="fas ml-2"></i>
            </a>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
                <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
            </div>
        </div>
    </nav>
</div>

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