<template>
  <article>

    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <p>Article last updated: {{ post.updatedAt }}</p>

    <nuxt-content :document="post" />
  </article>
</template>


<script>
  export default {
    async asyncData({ $content, app, params }) {
      const post = await $content(`${app.i18n.locale}/posts`, params.slug).fetch()

      return { post }
    },
    
    head () {
    return {
      title: this.post.title
    }
  }
  }
</script>
