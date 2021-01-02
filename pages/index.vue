<template>
  <section class="body-font overflow-hidden">
      <div class="container mx-auto flex flex-wrap py-6">

        <!-- Posts Section -->
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">

            <article v-for="article of articles" :key="article.slug" class="flex flex-col shadow my-4">
              <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ article.title }}</h2>
                    <p href="#" class="text-sm pb-3">{{ article.date }}</p>
                    <p href="#" class="pb-6">{{ article.description }}</p>


              <nuxt-link :to="`${article.slug}`" class="text-indigo-500 inline-flex items-center mt-4">       
              {{ $t('read-more') }}             
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>             
              </nuxt-link>

              </div>
            </article>

        <Pagination />

        </section>

        <Sidebar />

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
