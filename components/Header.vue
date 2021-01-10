<template>
<div>
  <!-- Top Bar -->
    <LangSwitcher />

   <!-- Text Header -->
    <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
            <h1 class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            <nuxt-link :to="localePath('index')" class="text-gray-800">
              Minimal Blog
            </nuxt-link>
            </h1>
            <p class="text-lg text-gray-600">{{ $t('blog-description') }}</p>
        </div>
    </header>

    <!-- Topic Nav -->
    <nav class="w-full py-4 border-t border-b bg-gray-100">
        <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
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