<template>
  <div class="container">
    <h2 class="">pages/index.vue</h2>
    <p class="">{{ $t('blog-description') }}</p>
    <nuxt-content :document="articles" class="w-3/4 mx-auto py-6" />
  </div>
</template>

<script>
export default {
  name: 'Blog',
  filters: {
    formatDate () {
      return new Date()
    }
  },
  async asyncData ({ $content, app, params }) {
    const { slug } = params

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

    console.log(articles)

    return {
      articles
    }
  },
  head () {
    return {
      title: this.$i18n.t('blog.title')
    }
  }
}
</script>


<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
