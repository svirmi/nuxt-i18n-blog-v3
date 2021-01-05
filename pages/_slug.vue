<template>
<div class="container mx-auto flex flex-wrap py-6">
  <section class="w-full md:w-2/3 flex flex-col px-3">

    <article class="flex flex-col shadow my-4">
      <div class="bg-white flex flex-col justify-start p-6">
        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
        <h1 class="text-3xl font-bold pb-4">{{ post.title }}</h1>
        <p href="#" class="text-sm pb-8">Published on {{ post.date }}</p>  

        <nuxt-content :document="post"></nuxt-content>
      </div>
    </article>

    <prev-next :prev="prev" :next="next" />
    
  </section>
  <Sidebar />
</div>
</template>

<script>
  export default {
    async asyncData({ $content, app, params }) {
      
      const post = await $content(`${app.i18n.locale}/posts`, params.slug).fetch()

      const [prev, next] = await $content(`${app.i18n.locale}/posts`)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { 
        post,
        prev,
        next 
        }
    },
    
    head () {
    return {
      title: this.post.title
    }
  }
  }
</script>
