<template>
  <header class="bg-black text-white px-4 py-2">
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center">
        <h1 class="uppercase font-bold">
          <nuxt-link :to="localePath('index')" class="hover:no-underline">
              Nuxt Basic Blog
          </nuxt-link>
        </h1>
        <LangSwitcher />
      </div>
    </div>
  </header>
</template>
