<template>
  <article>
    <nuxt-content :document="post" />
  </article>
</template>


<script>
  export default {
    async asyncData({ $content, app, params }) {
      const post = await $content(`${app.i18n.locale}/posts`, params.slug).fetch()

      return { post }
    }
  }
</script>
