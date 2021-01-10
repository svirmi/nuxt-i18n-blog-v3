<template>
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">
      <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
    </section>
</template>

<script>
import getContent from '@/utils/getContent';
import ArticleList from '@/components/ArticleList';

export default {
  name: 'HomePage',
  components: {
    ArticleList,
  },
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, app, params, error);
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
    };
  },
};
</script>
