<template>
  <section class="w-full md:w-2/3 flex flex-col items-center px-3">
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        Tag: {{ $route.params.tag }}
      </h2>
    </div>
    <ArticleList :articles="articlesByTag" />
  </section>
</template>

<script>
import ArticleList from '@/components/ArticleList';

export default {
  name: 'TagPage',
  components: {
    ArticleList,
  },
  async asyncData({ $content, app, params }) {
    const source = `${app.i18n.locale}/articles`;
    const articles = await $content(source)
      .only(['title', 'description', 'image', 'slug', 'published', 'tags'])
      .sortBy('published', 'desc')
      .fetch();
    const articlesByTag = articles.filter((article) => {
      const articleTags = article.tags.map((x) => x.toLowerCase());
      return articleTags.includes(params.tag);
    });
    return {
      articlesByTag,
    };
  },
  methods: {
    captialise(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
  head() {
    return {
      title: `Articles Tagged - ${this.captialise(this.$route.params.tag)}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/tags/${this.$route.params.tag}`,
        },
      ],
    };
  },
};
</script>
