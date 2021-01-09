<template>
  <section class="body-font overflow-hidden">
      <div class="container mx-auto flex flex-wrap py-6">

        <!-- Posts Section -->
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">

            <article v-for="article of paginatedArticles" :key="article.slug" class="flex flex-col shadow my-4">              
              <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{ article.title }}</h2>
                    <p class="text-sm pb-3">{{ article.date }}</p>
                    <p class="pb-6">{{ article.description }}</p>

              <nuxt-link :to="localePath({ name: 'slug', params: { slug: article.slug } })" class="text-indigo-500 inline-flex items-center mt-4">
              {{ $t('read-more') }}             
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
              </nuxt-link>

              </div>
            </article>

            <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
              <Pagination v-if="total > 5" :total="total" />
            </div>

        </section>

        <Sidebar />

  </div>

  </section>
</template>

<script>
import getContent from "@/utils/getContent";

export default {
  name: 'Blog',
  async asyncData ({ $content, app, params }) {

    const content = await getContent($content, app, params);

    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    };

  },
  head () {
    return {
      title: this.$i18n.t('blog-description')
    }
  },

  computed: {
    total: function() {
      return 7;
    }
  },

   props: {
    total: {
      type: Number,
      default: 0,
    },
  },
}
</script>
