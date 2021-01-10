<template>
<div>
  <article
      v-for="article of articles"
      :key="article.slug" 
      class="flex flex-col shadow my-4"
  >
    <div class="bg-white flex flex-col justify-start p-6">
    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
    <h2 class="font-bold text-gray-900 text-2xl mb-2">
      <nuxt-link :to="localePath({ name: 'articles-slug', params: { slug: article.slug } })" class="hover:opacity-75">
        {{ article.title }}
      </nuxt-link>
    </h2>
    <p class="text-sm pb-3">Published on {{ article.published }}</p>
    <p class="pb-6">{{ article.description }}</p>
    <p class="uppercase text-gray-800 hover:text-black">
      <nuxt-link :to="localePath({ name: 'articles-slug', params: { slug: article.slug } })" class="hover:opacity-75">
        {{ $t('read-more') }} <i class="fas fa-arrow-right"></i>
      </nuxt-link>              
    </p>
    </div>
  </article>
  <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
     <Pagination v-if="total > 5" :total="total" />
  </div>
</div>
</template>

<script>
import Pagination from '@/components/Pagination';

export default {
  name: 'ArticleList',
  components: {
    Pagination,
  },
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>
