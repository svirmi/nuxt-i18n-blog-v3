<template>
  <div>
    <div class="flex justify-center">
      <h2
        class="text-center text-3xl mb-4 uppercase bg-black text-white inline-block mx-auto px-2"
      >
        All Tags
      </h2>
    </div>
    <ul>
      <li v-for="tag in tags" :key="tag" class="text-center mb-2">
        <nuxt-link
          :to="localePath({ name: 'tags-tag', params: { tag: tag.toLowerCase() } })"
          class="text-4xl hover:underline"
          >{{ tag }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TagListPage',
  async asyncData({ $content }) {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const source = `${app.i18n.locale}/articles`;
    const articles = await $content(source).only(['tags']).fetch();
    const tags = articles.flatMap((article) => article.tags).filter(onlyUnique);
    return {
      tags,
    };
  },
  head() {
    return {
      title: 'Article Tags - Learning Laravel and VueJS',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}${app.i18n.locale}/tags`,
        },
      ],
    };
  },
};
</script>
