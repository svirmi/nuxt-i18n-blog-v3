<template>
  <section class="text-gray-600 body-font overflow-hidden">
  
  <p class="">{{ $t('blog-description') }}</p>

  <div class="container px-5 py-24 mx-auto">
    <div v-for="article of articles" :key="article.slug" class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="mt-1 text-gray-500 text-sm">{{ article.date }}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ article.title }}</h2>
          <p class="leading-relaxed">{{ article.description }}</p>

            <nuxt-link :to="`${article.slug}`" class="text-indigo-500 inline-flex items-center mt-4">
            
              {{ $t('read-more') }}
             
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
             
             </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData ({ $content, app, params }) {
    let articles
    try {

      articles = await $content(`${app.i18n.locale}/posts`)
        .sortBy('date', 'asc')
        .fetch()
    } catch (error) {
      try {
        articles = await $content(`${app.i18n.defaultLocale}/posts`)
          .sortBy('date', 'desc')
          .fetch()
      } catch (error) {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }
    return {
      articles
    }
  },
  head () {
    return {
      title: this.$i18n.t('blog-description')
    }
  }
}
</script>
<style>
</style>
